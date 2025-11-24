const ANIMATION_FADEOUT_DURATION = 2050;
const MAX_PROGRESSION_LENGTH = 6;
const NUM_KEYS = 15;
const MINOR_PROGRESSIONS = [
    ['i', 'III', 'VI', 'iv', 'V', 'i'], 
    ['i', 'VI', 'iv', 'V', 'i'], 
    ['i', 'VI', 'iv', 'V', 'i']
]
const MAJOR_PROGRESSIONS = [
    ['I', 'vi', 'IV', 'V', 'I'],
    ['I', 'vi', 'ii', 'V', 'I'],
    ['I', 'iii', 'vi', 'IV', 'V', 'I']
]
const MAJOR_POP_PROGRESSION = ['I', 'V', 'vi', 'IV', 'I']
const MINOR_POP_PROGRESSION = ['vi', 'IV', 'I', 'V', 'vi']

const keyCb = {
    tonic: "Cb",
    supertonic: "Db",
    mediant: "Eb",
    subdominant: "Fb",
    dominant: "Gb",
    submediant: "Ab",
    leadingtone: "Bb",
};

const keyGb = {
    tonic: "Gb",
    supertonic: "Ab",
    mediant: "Bb",
    subdominant: "Cb",
    dominant: "Db",
    submediant: "Eb",
    leadingtone: "F",
};

const keyDb = {
    tonic: "Db",
    supertonic: "Eb",
    mediant: "F",
    subdominant: "Gb",
    dominant: "Ab",
    submediant: "Bb",
    leadingtone: "C",
};

const keyAb = {
    tonic: "Ab",
    supertonic: "Bb",
    mediant: "C",
    subdominant: "Db",
    dominant: "Eb",
    submediant: "F",
    leadingtone: "G",
};

const keyEb = {
    tonic: "Eb",
    supertonic: "F",
    mediant: "G",
    subdominant: "Ab",
    dominant: "Bb",
    submediant: "C",
    leadingtone: "D",
};

const keyBb = {
    tonic: "Bb",
    supertonic: "C",
    mediant: "D",
    subdominant: "Eb",
    dominant: "F",
    submediant: "G",
    leadingtone: "A",
};

const keyF = {
    tonic: "F",
    supertonic: "G",
    mediant: "A",
    subdominant: "Bb",
    dominant: "C",
    submediant: "D",
    leadingtone: "E",
};

const keyC = {
    tonic: "C",
    supertonic: "D",
    mediant: "E",
    subdominant: "F",
    dominant: "G",
    submediant: "A",
    leadingtone: "B",
};

const keyG = {
    tonic: "G",
    supertonic: "A",
    mediant: "B",
    subdominant: "C",
    dominant: "D",
    submediant: "E",
    leadingtone: "F#",
};

const keyD = {
    tonic: "D",
    supertonic: "E",
    mediant: "F#",
    subdominant: "G",
    dominant: "A",
    submediant: "B",
    leadingtone: "C#",
};

const keyA = {
    tonic: "A",
    supertonic: "B",
    mediant: "C#",
    subdominant: "D",
    dominant: "E",
    submediant: "F#",
    leadingtone: "G#",
};

const keyE = {
    tonic: "E",
    supertonic: "F#",
    mediant: "G#",
    subdominant: "A",
    dominant: "B",
    submediant: "C#",
    leadingtone: "D#",
};

const keyB = {
    tonic: "B",
    supertonic: "C#",
    mediant: "D#",
    subdominant: "E",
    dominant: "F#",
    submediant: "G#",
    leadingtone: "A#",
};


const keyFSharp = {
    tonic: "F#",
    supertonic: "G#",
    mediant: "A#",
    subdominant: "B",
    dominant: "C#",
    submediant: "D#",
    leadingtone: "E#",
};

const keyCSharp = {
    tonic: "C#",
    supertonic: "D#",
    mediant: "E#",
    subdominant: "F#",
    dominant: "G#",
    submediant: "A#",
    leadingtone: "B#",
};

function generateRandomKey() {
    const KEY_ARRAY = [keyCb, keyGb, keyDb, keyAb, keyEb, keyBb, keyF, keyC, keyG, keyD, keyA, keyE, keyB, keyFSharp, keyCSharp];
    const keyScale = KEY_ARRAY[Math.floor(Math.random() * (NUM_KEYS))]

    return keyScale;
}

let progDisplayElement = document.getElementById("progression");

function renderHTMLChordString(progression) {
    console.log(progression)
    htmlString = ''
    for (i = 0; i < progression.length; i++) {
        if (i != progression.length - 1) {
            htmlString += (progression[i] + ' ');
        } else {
            htmlString += (progression[i]);
        }
    }
    console.log(htmlString);
    return htmlString;
}

function generateRomanNumeralProgression(progDisplayElement) {
    popSliderElement = document.getElementById('pop-slider');
    minorSliderElement = document.getElementById('minor-slider');

    if (popSliderElement.checked && !minorSliderElement.checked) {
        selectedProgression = MAJOR_POP_PROGRESSION;
    } else if (popSliderElement.checked && minorSliderElement.checked) {
        selectedProgression = MINOR_POP_PROGRESSION;
    } else if (minorSliderElement.checked) {
        selectedProgression = MINOR_PROGRESSIONS[Math.floor(Math.random() * MINOR_PROGRESSIONS.length)]
    } else {
        selectedProgression = MAJOR_PROGRESSIONS[Math.floor(Math.random() * MAJOR_PROGRESSIONS.length)]
    }
    
    progDisplayElement.innerHTML = renderHTMLChordString(selectedProgression);
    return selectedProgression;
}

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

//this function adds some cool animation when you press the play button
document.addEventListener('mousemove', function (e) {
    const playButtonRect = document.getElementById('play').getBoundingClientRect();
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

function renderGenerationInformation(selectedKey, selectedProgression) {
    // --- Update key display ---
    const keyEl = document.getElementById("selectedKey");
    const selectedKeyEl = document.getElementById("selectedKey");

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


function assignChordNotes(selectedKey, selectedProgression) {
    expandedProgressionWithNotes = []
    for (i = 0; i < selectedProgression.length; i++) {
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
        }
        expandedProgressionWithNotes.push(chordNotes);
    }

    return expandedProgressionWithNotes;
}

function assignOctaves(progressionWithNotes) {
    for (i = 0; i < progressionWithNotes.length; i++) {
        for (j = 0; j < progressionWithNotes[i].length; j++) {
            if (j === 0) {
                progressionWithNotes[i][j] = translateNoteToSharpEquivalent(progressionWithNotes[i][j], 'bass');
            } else {
                progressionWithNotes[i][j] = translateNoteToSharpEquivalent(progressionWithNotes[i][j], 'treble');
            }
        }
    }

    return progressionWithNotes;
}

function translateNoteToSharpEquivalent(note, type = 'treble') {
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

async function play() {
    let currentClef = 'treble';
    currentlyPlaying = false;
    if (!currentlyPlaying) {
        toggleClefOpacity(currentClef);
        currentlyPlaying = true;

        let generatedKey = generateRandomKey();
        console.log(generatedKey);

        let progDisplayElement = document.getElementById('progression');
        generatedProgression = generateRomanNumeralProgression(progDisplayElement);
        console.log(generatedProgression);

        let chordsWithNotes = assignChordNotes(generatedKey, generatedProgression);
        chordsWithNotes = assignOctaves(chordsWithNotes);
        console.log(chordsWithNotes);

        renderGenerationInformation(generatedKey, generatedProgression);

        response_data = await callGenerationAPI(chordsWithNotes);
        console.log(response_data)
        file_url = `http://127.0.0.1:5000${response_data.FILE_URL}`
        console.log(file_url);

        document.getElementById('generated-progression-source').src = file_url;
        document.getElementById('generated-progression').load();
        document.getElementById('generated-progression').play();
        
    } else {
        console.log("You must wait until the current chord progression finishes.")
    }
}

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

        data = await response.json();
        return data;
        
    } catch (error) {
        console.log("Error generating chord progression: " + error)
    }

}

function playNote(note, audible = true) {
    audio_ele = document.getElementById(`${note}-audio`);
    key_ele = document.getElementById(`${note}-key`);

    if (audible) audio_ele.play();

    key_ele.classList.add('currentlyPlaying');
    setTimeout(function() {
        key_ele.classList.remove('currentlyPlaying');
    }, ANIMATION_FADEOUT_DURATION)
}

const AVAILABLE_NOTES = ['C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3', 'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4']
for (const note of AVAILABLE_NOTES) {
    document.getElementById(`${note}-key`).addEventListener('click', function() {
        playNote(note, true);
    })
}