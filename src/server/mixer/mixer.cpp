#include <iostream>
#include "wav.hpp"

WavFile merge_two_wav(WavFile wav_1, WavFile wav_2) {
    // Ensure sample rate, bnit depth, and num channels are equivalent
    if (wav_1.sample_rate != wav_2.sample_rate) {
        std::cout << "Mismatch in sample rates." << std::endl;
        std::exit(EXIT_FAILURE);
    } else if (wav_1.bits_per_sample != wav_2.bits_per_sample) {
        std::cout << "Mismatch in bit depth." << std::endl;
        std::exit(EXIT_FAILURE);
    } else if (wav_1.num_channels != wav_2.num_channels) {
        std::cout << "Mismatch in number of channels." << std::endl;
        std::exit(EXIT_FAILURE);
    }
    
    // determine the output length (for looping); min of either file
    std::size_t output_length;
    if (wav_1.pcm.size() < wav_2.pcm.size()) {
        output_length = wav_1.pcm.size();
    } else {
        output_length = wav_2.pcm.size();
    }
    
    // instantiate the new wav file
    WavFile new_wav;
    // merge the two input wav files
    std::uint32_t index = 0;
    while (index < output_length) {
        int16_t new_amplitude = (wav_1.pcm[index] + wav_2.pcm[index]) / 2;
        new_wav.pcm.push_back(new_amplitude);
        index += 1;
    }

    // we can assume values for the following fields are the same as the min file for now
    new_wav.sample_rate = wav_1.sample_rate;
    new_wav.bits_per_sample = wav_1.bits_per_sample;
    new_wav.num_channels = wav_1.num_channels;
    new_wav.block_align = wav_1.block_align;
    new_wav.audio_format = wav_1.audio_format;
    
    // calculate the duration, pcm data size, and file size
    new_wav.byte_rate = new_wav.sample_rate * new_wav.num_channels * (new_wav.bits_per_sample / 8);
    new_wav.pcm_data_size = output_length * (new_wav.bits_per_sample / 8) * new_wav.num_channels;
    new_wav.file_size = new_wav.pcm_data_size + 36;
    new_wav.duration = double(output_length) / new_wav.sample_rate;

    return new_wav;
}
