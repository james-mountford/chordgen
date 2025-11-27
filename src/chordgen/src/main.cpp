// #include <string>
// #include <iostream>
// #include <filesystem>
// #include <fstream>
// #include "wav.hpp"
// #include "mixer.hpp"

// int main(int argc, char* argv[]) {
//     std::string default_soundfiles_path = "..\\..\\soundfiles\\wav\\";

//     // parse some cli flags
//     std::string command;
//     std::vector<std::string> chords;
//     for (size_t i = 1; i < argc; ++i) {
//         std::string arg = argv[i];

//         if (arg == "--command") {
//             if (i + 1 >= argc) {
//                 std::cout << "Missing argument to --command flag" << std::endl;
//                 std::exit(EXIT_FAILURE);
//             } else {
//                 command = argv[++i];
//             }
//         } else if (arg == "--chord") {
//             int count = 0;
//             while (i + 1 < argc && argv[i+1][0] != '-' && count < 4) {
//                 chords.push_back(argv[++i]);
//                 count++;
//             }
//         }
//     }

//     if (command.empty()) {
//         std::cout << "Missing required flag: --command" << std::endl;
//         std::exit(EXIT_FAILURE);
//     }
//     if (chords.empty()) {
//         std::cout << "Missing required chord args (notes)" << std::endl;
//         std::exit(EXIT_FAILURE);
//     }

//     // loop over the provided notes for testing chord generation
//     std::vector<WavFile> wav_files;
//     for (size_t i = 0; i < chords.size(); i++) {
//         std::string note_name = chords[i];
//         std::string target_file = default_soundfiles_path + note_name + ".wav";
//         WavFile new_wav = load_wav(target_file);
//         wav_files.push_back(new_wav);
//     }

//     // merge files and write
//     WavFile merged;
//     merged = merge_wav(wav_files);
//     write_wav(merged);

//     std::cout << "Successfully merged the specified wav files." << std::endl;

//     std::exit(EXIT_SUCCESS);

// }