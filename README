# ChordGen

ChordGen is a small browser-based project originally built in June 2022 as a personal programming exercise. It started as a way to continue practicing vanilla JavaScript, audio handling, DOM state transitions, and basic UI behavior. The result is a progression generator that selects a key, builds a Roman-numeral progression, displays it, and plays each chord using individual recorded notes.

The interface includes a two-octave clickable piano, on-screen animations tied to user interaction, and a simple debug panel for inspecting the program’s internal state.

## Current Capabilities
- Key and Progression Generation
- Random key selection across 15 major and minor tonalities
- Pop-style preset progressions (I–V–vi–IV, vi–IV–I–V, etc.)
- Additional randomized progressions for major and minor modes
- Automatic chord assignment and note mapping based on the selected key

## Audio System
- Every note (bass and upper voices) is an individual audio file
- Chords are “assembled” by triggering the correct notes simultaneously
- Basic timing loop to play progressions sequentially
- Clickable piano keys trigger their associated samples

## UI and Interaction
- Lightweight HTML/CSS layout with a full piano mockup
- Simple animations for clefs, chord transitions, and button hover states
- Debug menu for stepping through internal functions
- Visual note highlighting for all played notes

## Planned Next Step: C++ Audio Mixer

The next iteration plans to replace the browser’s scattered audio-playback model with a small C++ mixer. The mixer will:

- Load raw audio files (from mic-recorded samples)
- Mix multiple notes into a single chord buffer server-side
- Return clean, synchronized audio for each chord
- Allow more controlled timing, polyphony, and future dynamic synthesis

This moves chord generation from “play several .mp3 tags at once” to an actual blending engine, giving the project far more control and eliminating the browser’s limitations.