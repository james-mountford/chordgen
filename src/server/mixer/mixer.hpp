#ifndef MIXER_H
#define MIXER_H

#include <vector>
#include <filesystem>
#include "wav.hpp"

WavFile merge_two_wav(WavFile wav_1, WavFile wav_2);

#endif