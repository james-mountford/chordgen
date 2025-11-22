#include <iostream>
#include <filesystem>
#include <fstream>
#include "wav.hpp"

WavFile load_wav(const std::filesystem::path& path) {
    WavFile wav;

    // Open wav file as a stream of bytes
    std::ifstream wav_file(path, std::ios::binary);

    if (!wav_file) {
        std::cout << "Failed to open the wav file at " << path << std::endl;
        std::exit(EXIT_FAILURE);
    }
    
    // Validate the RIFF/WAVE header at the beginning of the file
    char riff[4];
    wav_file.read(riff, 4);
    if (riff[0] != 'R' || riff[1] != 'I' || riff[2] != 'F' || riff[3] != 'F') {
        std::cout << "RIFF chunk descriptor missing or invalid. Aborting...";
        std::exit(EXIT_FAILURE);
    }
    wav_file.read(reinterpret_cast<char*>(&wav.file_size), 4);
    char wave[4];
    wav_file.read(wave, 4);
    if (wave[0] != 'W' || wave[1] != 'A' || wave[2] != 'V' || wave[3] != 'E') {
        std::cout << "WAVE format description missing or invalid. Aborting...";
        std::exit(EXIT_FAILURE);
    };

    //loop over all the remaining chunks, looking for 'fmt ' and 'data' chunks; ignore others
    bool found_fmt = false;
    bool found_data = false;
    while (true) {
        // Read the subchunk id and the subchunk size into common arrays for reading
        char subchunk_id[4];
        unsigned char subchunk_size[4];
        wav_file.read(subchunk_id, 4);
        wav_file.read(reinterpret_cast<char*>(subchunk_size), 4);

        // convert little endian subchunk size into a proper unsigned 32bit int
        std::uint32_t subchunk_size_uint = subchunk_size[0]
                                        + (subchunk_size[1] << 8)
                                        + (subchunk_size[2] << 16)
                                        + (subchunk_size[3] << 24);

        // 'fmt ' branch
        if (subchunk_id[0] == 'f' && subchunk_id[1] == 'm' && subchunk_id[2] == 't' && subchunk_id[3] == ' ' && !found_fmt) {
        // std::cout << "'fmt ' subchunk descriptor missing or invalid. Aborting...";
        // std::exit(EXIT_FAILURE);
            wav_file.read(reinterpret_cast<char*>(&wav.audio_format), 2);
            wav_file.read(reinterpret_cast<char*>(&wav.num_channels), 2);
            wav_file.read(reinterpret_cast<char*>(&wav.sample_rate), 4);
            wav_file.read(reinterpret_cast<char*>(&wav.byte_rate), 4);
            wav_file.read(reinterpret_cast<char*>(&wav.block_align), 2);
            wav_file.read(reinterpret_cast<char*>(&wav.bits_per_sample), 2);

            // Check to see if there are extra, non-standard fields that we should skip
            if (subchunk_size_uint > 16) {
                std::uint32_t bytes_to_skip = subchunk_size_uint - 16;
                wav_file.seekg(bytes_to_skip, std::ios::cur);
            };
        // 'data' branch
        } else if (subchunk_id[0] == 'd' && subchunk_id[1] == 'a' && subchunk_id[2] == 't' && subchunk_id[3] == 'a' && !found_data) {
            // std::cout << "'data' subchunk descriptor missing or invalid. Aborting...";
            // std::exit(EXIT_FAILURstd::exit(EXIT_FAILURE);E);
            //  save the pcm data size in case it's needed later
            wav.pcm_data_size = subchunk_size_uint;
            
            // calculate the bytes per sample and the num samples
            std::uint32_t bytes_per_sample = wav.bits_per_sample / 8;
            std::uint32_t num_samples = wav.pcm_data_size / bytes_per_sample;

            // create a byte buffer the size of the pcm data
            std::vector<std::byte> pcm_buffer(wav.pcm_data_size);
            wav_file.read(reinterpret_cast<char*>(pcm_buffer.data()), wav.pcm_data_size);

            // loop over the entire pcm data and cast into 16bit signed samples and push into the pcm data vector
            wav.pcm.reserve(num_samples); // allocate the vector to prevent re-allocation multiple times
            std::uint32_t index = 0;
            while (index < wav.pcm_data_size) {
                std::uint8_t low = static_cast<uint8_t>(pcm_buffer[index]);
                std::uint8_t high = static_cast<uint8_t>(pcm_buffer[(index + 1)]);
                std::uint16_t raw = low + (high << 8);
                std::int16_t sample = static_cast<int16_t>(raw);
                wav.pcm.push_back(sample); // push into the vector
                index += 2; // advance
            }

            // get the duration in seconds
            wav.duration = double(wav.pcm.size()) / wav.sample_rate;

            break;
        // random other branches
        } else {
            //print out the unknown chunk and skip ahead
            std::string subchunk_name(subchunk_id, 4);
            std::cout << "Unknown chunk found: '" << subchunk_name << "'. Skipping..." << std::endl;
            wav_file.seekg(subchunk_size_uint, std::ios::cur);
        }

    }
    
    return wav;
}

int write_wav(WavFile wav) {
    std::string output_file = "..\\..\\soundfiles\\new_wav.wav";
    std::ofstream out(output_file, std::ios::binary);

    if (!out.is_open()) {
        std::cout << "Error opening the target output file." << std::endl;
        std::exit(EXIT_FAILURE);
    }

    // Write out RIFF and WAVE headers
    out.write("RIFF", 4);
    out.write(reinterpret_cast<const char*>(&wav.file_size), 4);
    out.write("WAVE", 4);

    // Write out 'fmt ' subchunk
    out.write("fmt ", 4);
    uint32_t fmt_chunk_size = 16;
    out.write(reinterpret_cast<const char*>(&fmt_chunk_size), 4);
    out.write(reinterpret_cast<const char*>(&wav.audio_format), 2);
    out.write(reinterpret_cast<const char*>(&wav.num_channels), 2);
    out.write(reinterpret_cast<const char*>(&wav.sample_rate), 4);
    out.write(reinterpret_cast<const char*>(&wav.byte_rate), 4);
    out.write(reinterpret_cast<const char*>(&wav.block_align), 2);
    out.write(reinterpret_cast<const char*>(&wav.bits_per_sample), 2);

    // Write out 'data' subchunk
    out.write("data", 4);
    out.write(reinterpret_cast<const char*>(&wav.pcm_data_size), 4);
    
    // write out the entire pcm data
    out.write(
        reinterpret_cast<const char*>(wav.pcm.data()),
        wav.pcm.size() * sizeof(int16_t)
    );

    // cleanup resources
    out.close();
    return 0;
}