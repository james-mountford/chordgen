#include <iostream>
#include <cmath>
#include "mixer_exception.hpp"
#include "mixer.hpp"
#include "wav.hpp"

WavFile merge_two_wav(WavFile wav_1, WavFile wav_2) {
    // Ensure sample rate, bit depth, and num channels are equivalent
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

WavFile merge_wav(const std::vector<WavFile>& tracks) {
    // Validate that wav files can be merged first
    if (!ensure_mixable(tracks)) {
        throw MixerError("Cannot mix WAV files: incompatible sample rates, bit depths, or number of channels.");
    };

    // Find the smallest .wav
    size_t output_length = find_output_length(tracks);

    WavFile new_wav;
    size_t index = 0;
    std::vector<int32_t> pcm_buffer;
    pcm_buffer.reserve(output_length);
    while (index < output_length) {
        int32_t new_sample = 0;
        for (size_t j = 0; j < tracks.size(); j++) {
            new_sample += tracks[j].pcm[index];
        }
        pcm_buffer.push_back(new_sample);
        index++;
    }

    // loop over all pcm samples to find the highest value
    index = 0;
    int32_t max_val = 0;
    float normalization_factor = 1.0f;
    bool normalization_required = false;
    while (index < output_length) {
        if (std::abs(pcm_buffer[index]) > max_val) {
            max_val = std::abs(pcm_buffer[index]);
        };
        index++;
    };

    // check if any peaks above max
    if (max_val > 32767) {
        normalization_required = true;
        normalization_factor = 32767.0f / max_val;
    }

    // if normalization required, apply to all pcm values
    if (normalization_required) {
        index = 0;
        while (index < output_length) {
            pcm_buffer[index] = static_cast<int32_t>(pcm_buffer[index] * normalization_factor);
            index++;
        }
    }

    // move pcm data from our temp buff into the new wav file
    index = 0;
    while (index < output_length) {
        new_wav.pcm.push_back(static_cast<int16_t>(pcm_buffer[index]));
        index++;
    }

    // assign metadata values
    new_wav.sample_rate = tracks[0].sample_rate;
    new_wav.bits_per_sample = tracks[0].bits_per_sample;
    new_wav.num_channels = tracks[0].num_channels;
    new_wav.block_align = tracks[0].block_align;
    new_wav.audio_format = tracks[0].audio_format;

    // calculate the duration, pcm data size, and file size
    new_wav.byte_rate = new_wav.sample_rate * new_wav.num_channels * (new_wav.bits_per_sample / 8);
    new_wav.pcm_data_size = output_length * (new_wav.bits_per_sample / 8) * new_wav.num_channels;
    new_wav.file_size = new_wav.pcm_data_size + 36;
    new_wav.duration = double(output_length) / new_wav.sample_rate;

    return new_wav;
}

size_t find_output_length(const std::vector<WavFile>& wav_files) {
    // If one file, then just return
    if (wav_files.size() == 1) return wav_files[0].pcm.size();
    // Find and return the smallest wav file (determines the output length of the resulting .wav)
    size_t min_size = wav_files[0].pcm.size();

    for (size_t i = 1; i < wav_files.size(); i++) {
        if (min_size > wav_files[i].pcm.size()) {
            min_size = wav_files[i].pcm.size();
        }
    }

    return min_size;
};

bool ensure_mixable(const std::vector<WavFile>& wav_files) {
    // early return if we're attempting to mix a single file
    if (wav_files.size() == 1) return true;

    //otherwise, compare sample rates, bit depths, and number of channels for all provided files
    for (size_t i = 1; i < wav_files.size(); i++) {
        if (wav_files[0].num_channels != wav_files[i].num_channels) {
            return false;
        } else if (wav_files[0].bits_per_sample != wav_files[i].bits_per_sample) {
            return false;
        } else if (wav_files[0].sample_rate != wav_files[i].sample_rate) {
            return false;
        };
    };

    return true;
}