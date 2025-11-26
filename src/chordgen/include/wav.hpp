#ifndef WAV_H
#define WAV_H

#include <vector>
#include <filesystem>

// Simple struct to hold our .wav filedata
struct WavFile {
    uint32_t file_size;
    uint16_t audio_format;
    uint16_t num_channels;
    uint32_t sample_rate;
    uint32_t byte_rate;
    uint16_t block_align;
    uint16_t bits_per_sample;
    uint32_t pcm_data_size;
    std::vector<int16_t> pcm;
    double duration;
};

// function to load the file data of a .wav into above struct from specified file
WavFile load_wav(const std::filesystem::path& path);

// function to write a new wav file to the filesystem
void write_wav(WavFile& wav, std::string output_file = "..\\..\\generated\\wav\\new_wav.wav");

// function to print out some metadata about .wav files in a target directoryt
void read_wav_metadata(std::string target_directory);

#endif