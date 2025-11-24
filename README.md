# ChordGen

ChordGen is a browser-based chord progression generator backed by a native C++ audio-mixing engine. The project combines modern JavaScript modules, a Python/Flask API layer, and a compiled C++ mixer to generate, render, and play musical progressions with synchronized audio and UI animations.

Originally built in 2022 as a simple JavaScript exercise, the project has since evolved into a multi-layer system that performs key selection, Roman-numeral progression generation, note mapping, audio assembly, and waveform rendering.

## Features
- Key & Progression Generation
- Random major and minor key selection across 15 defined keys
- Pop-style preset progressions (e.g., I–V–vi–IV, vi–IV–I–V)
- Additional randomized major and minor progression templates
- Automatic translation from Roman numerals to scale-degree note sets
- Expansion of each chord into bass + upper voices

## Front-End System
- Fully modular ES-module JavaScript structure
- Two-octave clickable piano interface
- Animated UI elements (clefs, chord slots, note playback)
- Real-time DOM updates with fade-in/fade-out transitions
- Debug utilities for examining generated keys, progressions, and note mappings

## Audio Playback
- All notes (bass and treble registers) are individual WAV files
- Browser playback for immediate chord preview
- Visual highlighting of active piano keys during playback

## Native C++ Mixer

ChordGen includes a standalone audio mixer implemented in C++, providing deterministic and synchronized chord rendering:

### Capabilities
- Loads raw WAV samples from disk
- Mixes multiple note buffers into a single chord buffer
- Outputs unified WAV files to a server-side directory
- Supports polyphonic layers across multiple octaves
- Exposed to Python through a Pybind11 interface

### Integration
- The compiled extension (mixer.pyd) is callable from Python
- A typing stub (mixer.pyi) provides editor hints
- Flask uses the mixer to generate chord audio on request
- Rendered files are served to the browser for playback

## Server Layer
A lightweight Flask server coordinates communication between the browser and the C++ mixer:
- Receives chord-note sequences via JSON
- Calls the C++ mixer to generate the final chord progression file
- Stores output WAV files under src/generated/wav/
- Serves UI, static assets, and sound files
- Exposes an API endpoint for requesting new progressions

## Technologies Used
- C++17 — Native mixer, PCM parsing, WAV writing
- Pybind11 — Python bindings for native code
- Python 3 / Flask — API layer, audio file generation endpoint
- JavaScript (ES Modules) — Key generation, UI rendering, event handling
- HTML/CSS — Layout, animations, interactive piano interface

## Future Enhancements
- Additional chord voicing models and inversion support
- Expanded sample library
- Real-time WebSocket streaming of mixed audio
- Optional React or Canvas-based UI
- On-the-fly synthesis options instead of sample playback