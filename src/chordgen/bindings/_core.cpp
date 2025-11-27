#include <pybind11/pybind11.h>
#include <pybind11/stl.h>
#include <string>
#include "mixer.hpp"
#include "wav.hpp"

PYBIND11_MODULE(_core, m) {
    m.doc() = "Core compiled-C++ package methods of the chordgen project.";

    pybind11::class_<WavFile>(m, "WavFile")
        .def(pybind11::init<>())
        .def("__repr___", [](const WavFile &wav){
            return "<WavFile "
                    "sr=" + std::to_string(wav.sample_rate) +
                    " ch=" + std::to_string(wav.num_channels) +
                    " bits=" + std::to_string(wav.bits_per_sample) +
                    " duration=" + std::to_string(wav.duration) +
                    ">";
        })
        .def_readonly("file_size", &WavFile::file_size)
        .def_readonly("audio_format", &WavFile::audio_format)
        .def_readonly("num_channels", &WavFile::num_channels)
        .def_readonly("sample_rate", &WavFile::sample_rate)
        .def_readonly("byte_rate", &WavFile::byte_rate)
        .def_readonly("block_align", &WavFile::block_align)
        .def_readonly("bits_per_sample", &WavFile::bits_per_sample)
        .def_readonly("pcm_data_size", &WavFile::pcm_data_size)
        .def_property_readonly("pcm", [](const WavFile& wav) {
            return pybind11::bytes((char*)wav.pcm.data(), wav.pcm.size());
        })
        .def_readonly("duration", &WavFile::duration);
    
    // Exposing wav manipulation methods
    m.def("load_wav", &load_wav, "Function to load and return the contents of a .wav file");
    m.def("write_wav", &write_wav, "Function to write a valid .wav file to disk");
    m.def("read_wave_metadata", &read_wav_metadata, "Function to print some .wav metadata");
    
    // Exposing mixer methods
    m.def("merge_wav", &merge_wav, "Function to merge specified .wav files into one .wav file");
}