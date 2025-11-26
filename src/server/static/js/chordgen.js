import { Keys } from "./scales.js";
import { MAJOR_POP_PROGRESSION, MINOR_POP_PROGRESSION, MAJOR_PROGRESSIONS, MINOR_PROGRESSIONS } from './progressions.js';

const CHORD_DURATION_LENGTH = 2000;
const MAX_PROGRESSION_LENGTH = 6;
const NUM_KEYS = 15;
const AVAILABLE_NOTES = ['C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3', 'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4']
let CURRENTLY_PLAYING = false;
let CURRENT_CLEF = 'treble';
let DEBUG = true;

// Functions used for core generation
function generateRandomKey(keys) {
    const keyScale = keys[Math.floor(Math.random() * (NUM_KEYS))]
    return keyScale;
}

function generateRomanNumeralProgression(popProgression, minorProgression) {
    let selectedProgression;

    if (popProgression && !minorProgression) {
        selectedProgression = MAJOR_POP_PROGRESSION;
    } else if (popProgression && minorProgression) {
        selectedProgression = MINOR_POP_PROGRESSION;
    } else if (minorProgression) {
        selectedProgression = MINOR_PROGRESSIONS[Math.floor(Math.random() * MINOR_PROGRESSIONS.length)]
    } else {
        selectedProgression = MAJOR_PROGRESSIONS[Math.floor(Math.random() * MAJOR_PROGRESSIONS.length)]
    }
    
    return selectedProgression;
}

function assignChordNotes(selectedKey, selectedProgression) {
    let expandedProgressionWithNotes = []
    for (let i = 0; i < selectedProgression.length; i++) {
        let chordNotes = []
        switch(selectedProgression[i]) {
            case 'I':
                chordNotes = [selectedKey.tonic, selectedKey.tonic, selectedKey.mediant, selectedKey.dominant];
                break;
            case 'ii':
                chordNotes = [selectedKey.supertonic, selectedKey.supertonic, selectedKey.subdominant, selectedKey.submediant];
                break;
            case 'iii':
                chordNotes = [selectedKey.mediant, selectedKey.mediant, selectedKey.dominant, selectedKey.leadingtone];
                break;
            case 'IV':
                chordNotes = [selectedKey.subdominant, selectedKey.subdominant, selectedKey.submediant, selectedKey.tonic];
                break;
            case 'V':
                chordNotes = [selectedKey.dominant, selectedKey.dominant, selectedKey.leadingtone, selectedKey.supertonic];
                break;
            case 'vi':
                chordNotes = [selectedKey.submediant, selectedKey.submediant, selectedKey.tonic, selectedKey.mediant];
                break;
            case 'i':
                chordNotes = [selectedKey.tonic, selectedKey.tonic, selectedKey.mediant, selectedKey.dominant];
                break;
            case 'III':
                chordNotes = [selectedKey.mediant, selectedKey.mediant, selectedKey.dominant, selectedKey.leadingtone];
                break;
            case 'VI':
                chordNotes = [selectedKey.submediant, selectedKey.submediant, selectedKey.tonic, selectedKey.mediant];
                break;
            case 'iv':
                chordNotes = [selectedKey.subdominant, selectedKey.subdominant, selectedKey.submediant, selectedKey.tonic];
                break;
        }
        expandedProgressionWithNotes.push(chordNotes);
    }

    return expandedProgressionWithNotes;
}

function assignOctaves(progressionWithNotes) {
    for (let i = 0; i < progressionWithNotes.length; i++) {
        for (let j = 0; j < progressionWithNotes[i].length; j++) {
            if (j === 0) {
                progressionWithNotes[i][j] = translateAnyNoteToSharpEquivalent(progressionWithNotes[i][j], 'bass');
            } else {
                progressionWithNotes[i][j] = translateAnyNoteToSharpEquivalent(progressionWithNotes[i][j], 'treble');
            }
        }
    }

    return progressionWithNotes;
}

// Helper functions to do some specific actions
function checkOverrides() {
    const popSliderElement = document.getElementById('pop-slider');
    const minorSliderElement = document.getElementById('minor-slider');

    return {
        "POP": popSliderElement.checked,
        "MINOR": minorSliderElement.checked
    }
}

function playNote(note, audible = true) {
    let audio_ele;
    let key_ele;
    if (DEBUG) console.log(`Note: ${note}, Audible: ${audible}`)
    audio_ele = document.getElementById(`${note}-audio`);
    key_ele = document.getElementById(`${note}-key`);

    if (audible) audio_ele.play();

    key_ele.classList.add('currentlyPlaying');
    setTimeout(function() {
        key_ele.classList.remove('currentlyPlaying');
    }, CHORD_DURATION_LENGTH)
}

function translateAnyNoteToSharpEquivalent(note, type = 'treble') {
    const octave_suffix = (type === 'bass') ? 3 : 4;
    switch(note) {
        case "C":
        case "B#":
            note = "C";
            break;
        case "C#":
        case "Db":
            note = "C#";
            break;
        case "D":
            note ="D";
            break;
        case "D#":
        case "Eb":
            note = "D#";
            break;
        case "E":
        case "Fb":
            note = "E";
            break;
        case "F":
        case "E#":
            note = "F";
            break;
        case "F#":
        case "Gb":
            note = "F#";
            break;
        case "G":
            note = "G";
            break;
        case "G#":
        case "Ab":
            note = "G#";
            break;
        case "A":
            note = "A";
            break;
        case "A#":
        case "Bb":
            note = "A#";
            break;
        case "B":
        case "Cb":
            note = "B"
            break;
    }

    return note + octave_suffix
}

// Rendering functions
function toggleClefOpacity(currentClef) {
    const trebleElement = document.getElementById('treble');
    const bassElement = document.getElementById('bass');
    if (currentClef === 'treble') {
        trebleElement.classList.remove('clefFadeIn')
        trebleElement.classList.add('clefFadeOut')
        bassElement.classList.remove('clefFadeOut')
        bassElement.classList.add('clefFadeIn')
        currentClef = 'bass';
    } else if (currentClef === 'bass') {
        trebleElement.classList.remove('clefFadeOut')
        trebleElement.classList.add('clefFadeIn')
        bassElement.classList.remove('clefFadeIn')
        bassElement.classList.add('clefFadeOut')
        clefCounter === 'treble';
    }
}

function renderGenerationInformation(selectedKey, selectedProgression) {
    function renderHTMLChordString(progression) {
        let htmlString = ''
        for (let i = 0; i < progression.length; i++) {
            if (i != progression.length - 1) {
                htmlString += (progression[i] + ' ');
            } else {
                htmlString += (progression[i]);
            }
        }
        return htmlString;
    }
    // --- Update key & progression displays ---
    const keyEl = document.getElementById("selectedKey");
    const selectedKeyEl = document.getElementById("selectedKey");
    document.getElementById('progression').innerHTML = renderHTMLChordString(selectedProgression);

    keyEl.textContent = selectedKey.tonic;

    // restart animation cleanly
    selectedKeyEl.classList.remove("fadeInAnimation");
    void selectedKeyEl.offsetWidth; // reflow trick
    selectedKeyEl.classList.add("fadeInAnimation");

    // --- Handle chords ---
    for (let i = 1; i <= MAX_PROGRESSION_LENGTH; i++) {
        const chordEl = document.getElementById(`chord${i}`);

        if (i <= selectedProgression.length) {
            // Populate chord
            chordEl.textContent = selectedProgression[i - 1];

            // Ensure visible
            chordEl.style.opacity = "1";

            // Restart animation
            chordEl.classList.remove("fadeInAnimation", "fadeOutAnimation");
            void chordEl.offsetWidth; // reflow trick
            chordEl.classList.add("fadeInAnimation");

        } else {
            // Fade out unused slots
            chordEl.classList.remove("fadeInAnimation");
            void chordEl.offsetWidth;
            chordEl.classList.add("fadeOutAnimation");
        }
    }
}

function animatePlayingChords(chordsWithNotes) {
    for (let i = 0; i < chordsWithNotes.length; i++) {
        if (i === 0) {
            for (let j = 0; j < chordsWithNotes[i].length; j++) {
                console.log(chordsWithNotes[i][j])
                playNote(chordsWithNotes[i][j], false);
            }
        } else {
            for (let j = 0; j < chordsWithNotes[i].length; j++) {
                setTimeout(function() {
                    console.log(chordsWithNotes[i][j])
                    playNote(chordsWithNotes[i][j], false);
                }, i * CHORD_DURATION_LENGTH)
            }
        }
    }
    setTimeout(function() {
        CURRENTLY_PLAYING = false;
    }, (chordsWithNotes.length * CHORD_DURATION_LENGTH))
}

// Server/API call
async function callGenerationAPI(progression) {
    const siteAddress = 'http://127.0.0.1:5000';
    const generationUrl = siteAddress + '/api/generate-progression';
    try {
        const response = await fetch(generationUrl, {
            method : "POST",
            body: JSON.stringify({
                "PROGRESSION": progression
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log("Error generating chord progression: " + error)
    }

}

// Master orchestrator function
async function generateNewChordProgression() {
    let generatedKey;
    let generatedProgression;
    let chordsWithNotes;
    let overrides;
    if (!CURRENTLY_PLAYING) {
        CURRENTLY_PLAYING = true;
        toggleClefOpacity(CURRENT_CLEF);

        // Generate our key randomly
        generatedKey = generateRandomKey(Keys);
        if (DEBUG) console.log(generatedKey);

        // Generate the roman numeral progression; check overrides first
        overrides = checkOverrides();
        generatedProgression = generateRomanNumeralProgression(overrides.POP, overrides.MINOR);
        if (DEBUG) console.log(generatedProgression);

        // Assign notes and octaves to each chord in the progression
        chordsWithNotes = assignOctaves(assignChordNotes(generatedKey, generatedProgression));
        if (DEBUG) console.log(chordsWithNotes);

        // Render out UI information
        renderGenerationInformation(generatedKey, generatedProgression);

        // Send the progression data to the server for generation
        const response_data = await callGenerationAPI(chordsWithNotes);
        let file_url = `http://127.0.0.1:5000${response_data.FILE_URL}`
        if (DEBUG) console.log(file_url);

        // Load the new generation file and play it
        document.getElementById('generated-progression-source').src = file_url;
        document.getElementById('generated-progression').load();
        document.getElementById('generated-progression').play();

        // Animate the piano keys on screen
        animatePlayingChords(chordsWithNotes);
        
    } else {
        console.log("You must wait until the current chord progression finishes before generating another.")
    }
}

// Attaching event listeners
for (const note of AVAILABLE_NOTES) {
    document.getElementById(`${note}-key`).addEventListener('click', function() {
        playNote(note, true);
    })
}

document.getElementById('generate-button').addEventListener('click', generateNewChordProgression);


document.addEventListener('mousemove', function (e) {
    const playButtonRect = document.getElementById('generate-button').getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const hoveringOnGenerateBtn = (mouseX > playButtonRect.left 
                                    && mouseX < playButtonRect.right 
                                    && mouseY > playButtonRect.top
                                    && mouseY < playButtonRect.bottom)

    if (hoveringOnGenerateBtn) {
        document.getElementById('flat').classList.add('flatAnimation')
        document.getElementById('sharp').classList.add('sharpAnimation')
        document.getElementById('sixteenth').classList.add('sixteenthAnimation')
        document.getElementById('sixteenthRest').classList.add('sixthRestAnimation')
    } else {
        document.getElementById('flat').classList.remove('flatAnimation')
        document.getElementById('sharp').classList.remove('sharpAnimation')
        document.getElementById('sixteenth').classList.remove('sixteenthAnimation')
        document.getElementById('sixteenthRest').classList.remove('sixthRestAnimation')
    }
})