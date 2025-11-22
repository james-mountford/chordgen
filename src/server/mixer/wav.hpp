#ifndef WAV_H
#define WAV_H

#include <vector>
#include <filesystem>

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
};

WavFile load_wav(const std::filesystem::path& path);

#endif