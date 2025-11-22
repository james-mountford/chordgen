#include <string>
#include <iostream>
#include <filesystem>
#include <fstream>
#include "wav.hpp"
namespace fs = std::filesystem;

int main() {
    std::string path = "..\\..\\soundfiles\\wav";
    for (const auto & entry : fs::directory_iterator(path)) {
        if (!entry.is_regular_file()) {
            std::cout << "File at '" << entry << "' is not a regular file" << std::endl;
            continue;
        }

        auto wav = load_wav(entry.path());
        double duration = double(wav.pcm.size()) / wav.sample_rate;

        std::cout << "Loaded file: " << entry.path().filename().string() << '\n';
        std::cout << " - Sample Rate: " << wav.sample_rate << '\n';
        std::cout << " - Channels: " << wav.num_channels << '\n';
        std::cout << " - Bits per Sample: " << wav.bits_per_sample << '\n';
        std::cout << " - PCM Samples: " << wav.pcm.size() << '\n'; 
        std::cout << " - Duration: " << duration << " sec\n";
    }

    // Just for looking at the terminal before it closes (useless)
    std::string random_input;

    std::cout << "Press any key to exit...";
    std::cin >> random_input;
}