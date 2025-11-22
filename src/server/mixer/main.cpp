#include <string>
#include <iostream>
#include <filesystem>
#include <fstream>
#include "wav.hpp"
#include "mixer.hpp"
namespace fs = std::filesystem;

int main() {
    std::string path = "..\\..\\soundfiles\\wav";
    // Test code for reading over all my .wav files
    // for (const auto & entry : fs::directory_iterator(path)) {
    //     if (!entry.is_regular_file()) {
    //         std::cout << "File at '" << entry << "' is not a regular file" << std::endl;
    //         continue;
    //     }

    //     auto wav = load_wav(entry.path());

    //     std::cout << "Loaded file: " << entry.path().filename().string() << '\n';
    //     std::cout << " - Sample Rate: " << wav.sample_rate << '\n';
    //     std::cout << " - Channels: " << wav.num_channels << '\n';
    //     std::cout << " - Bits per Sample: " << wav.bits_per_sample << '\n';
    //     std::cout << " - PCM Samples: " << wav.pcm.size() << '\n'; 
    //     std::cout << " - Duration: " << wav.duration << " sec\n";
    // }

    // spec wav files to merge then load them
    std::string wav_1_path = "..\\..\\soundfiles\\wav\\C4.wav";
    std::string wav_2_path = "..\\..\\soundfiles\\wav\\G4.wav";
    WavFile wav_1 = load_wav(wav_1_path);
    WavFile wav_2 = load_wav(wav_2_path);

    // merge files and write
    WavFile merged = merge_two_wav(wav_1, wav_2);
    size_t status_code = write_wav(merged);

    std::cout << "Successfully merged the two wav files." << std::endl;

    // Just for looking at the terminal before it closes (useless)
    std::string random_input;

    std::cout << "Press any key to exit...";
    std::cin >> random_input;
}