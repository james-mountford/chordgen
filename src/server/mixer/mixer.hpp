#ifndef MIXER_H
#define MIXER_H

#include <vector>
#include <filesystem>
#include "wav.hpp"

// useful file to test merging two .wav
WavFile merge_two_wav(WavFile wav_1, WavFile wav_2);

// function to merge arbitrary n .wav
WavFile merge_wav(const std::vector<WavFile>& tracks);

// function to ensure a vector of .wav can be mixed
bool ensure_mixable(const std::vector<WavFile>& wav_files);

// function to find the smallest .wav in a vector of .wav
size_t find_output_length(const std::vector<WavFile>& wav_files);

#endif