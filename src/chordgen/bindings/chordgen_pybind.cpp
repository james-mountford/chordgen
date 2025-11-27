#include <pybind11/pybind11.h>
#include <pybind11/stl.h>
#include <string>
#include "mixer.hpp"
#include "wav.hpp"

namespace py = pybind11;

std::string render_chord_progression(
        const std::vector<std::vector<std::string>>& chords,
        const std::string target_samplepack_path,
        const std::string output_file_name,
        const std::string output_file_path
        ) {

    std::string file_path;
    std::vector<WavFile> generated_chords;

    // For each chord passed in, generate the corresponding .wav
    for (size_t i = 0; i < chords.size(); i++) {
        std::vector<WavFile> chord_notes;
        for (size_t j = 0; j < chords[i].size(); j++) {
            std::string wav_file_path = target_samplepack_path + chords[i][j] + ".wav";
            WavFile note = load_wav(wav_file_path);
            chord_notes.push_back(note);
        }

        generated_chords.push_back(merge_wav(chord_notes));

    }

    // Generate the final file and return the file path
    file_path = output_file_path + output_file_name;
    WavFile final_progression = append_adjacent_wav(generated_chords);
    write_wav(final_progression, file_path);

    return file_path;
}

PYBIND11_MODULE(chordgen, m) {
    m.doc() = "Prototype mixer module";
    m.def(
        "render_chord_progression",
        &render_chord_progression,
        "Generate a WAV chord progression and return output file path."
    );
}