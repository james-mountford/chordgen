/* this is the random number function. */
function keyGen() {
    keyNumber = Math.floor(Math.random() * 15);
    //console.log(keyNumber);
    document.getElementById("RNG").innerHTML = "Your selected number is: " + keyNumber;
}

/* these are blank data structures */
let playCounter = 0;

let counter = 0;

let chordProgression = "0";

let chordProgressionArray = "0";

let chord0 = "0";
let chord1 = "0";
let chord2 = "0";
let chord3 = "0";
let chord4 = "0";
let chord5 = "0";
let chord6 = "0";
let chord7 = "0";
let chord8 = "0";

let chord0Notes = {
    bassNote: "0",
    note1: "0",
    note2: "0",
    note3: "0",
};

let chord1Notes = {
    bassNote: "0",
    note1: "0",
    note2: "0",
    note3: "0",
};

let chord2Notes = {
    bassNote: "0",
    note1: "0",
    note2: "0",
    note3: "0",
};

let chord3Notes = {
    bassNote: "0",
    note1: "0",
    note2: "0",
    note3: "0",
};

let chord4Notes = {
    bassNote: "0",
    note1: "0",
    note2: "0",
    note3: "0",
};

let chord5Notes = {
    bassNote: "0",
    note1: "0",
    note2: "0",
    note3: "0",
};

let chord6Notes = {
    bassNote: "0",
    note1: "0",
    note2: "0",
    note3: "0",
};

let chord7Notes = {
    bassNote: "0",
    note1: "0",
    note2: "0",
    note3: "0",
};

let chord8Notes = {
    bassNote: "0",
    note1: "0",
    note2: "0",
    note3: "0",
};

let progressionNumber = 0;

let keyNumber = 0;

let keyScale = {
    number: 0,
    tonic: "Cb",
    supertonic: "Db",
    mediant: "Eb",
    subdominant: "Fb",
    dominant: "Gb",
    submediant: "Ab",
    leadingtone: "Bb",
};

/* this is the code that defines the chord structures for a pop song */

const majorPop = {
    chord1: "I",
    chord2: "V",
    chord3: "vi",
    chord4: "IV",
    chord5: "I",
};

const minorPop = {
    chord1: "vi",
    chord2: "IV",
    chord3: "I",
    chord4: "V",
    chord5: "vi",
};

/* this is the code that defines the key data structures as javascript objects */

const keyCb = {
    number: 0,
    tonic: "Cb",
    supertonic: "Db",
    mediant: "Eb",
    subdominant: "Fb",
    dominant: "Gb",
    submediant: "Ab",
    leadingtone: "Bb",
};

const keyGb = {
    number: 1,
    tonic: "Gb",
    supertonic: "Ab",
    mediant: "Bb",
    subdominant: "Cb",
    dominant: "Db",
    submediant: "Eb",
    leadingtone: "F",
};

const keyDb = {
    number: 2,
    tonic: "Db",
    supertonic: "Eb",
    mediant: "F",
    subdominant: "Gb",
    dominant: "Ab",
    submediant: "Bb",
    leadingtone: "C",
};

const keyAb = {
    number: 3,
    tonic: "Ab",
    supertonic: "Bb",
    mediant: "C",
    subdominant: "Db",
    dominant: "Eb",
    submediant: "F",
    leadingtone: "G",
};

const keyEb = {
    number: 4,
    tonic: "Eb",
    supertonic: "F",
    mediant: "G",
    subdominant: "Ab",
    dominant: "Bb",
    submediant: "C",
    leadingtone: "D",
};

const keyBb = {
    number: 5,
    tonic: "Bb",
    supertonic: "C",
    mediant: "D",
    subdominant: "Eb",
    dominant: "F",
    submediant: "G",
    leadingtone: "A",
};

const keyF = {
    number: 6,
    tonic: "F",
    supertonic: "G",
    mediant: "A",
    subdominant: "Bb",
    dominant: "C",
    submediant: "D",
    leadingtone: "E",
};

const keyC = {
    number: 7,
    tonic: "C",
    supertonic: "D",
    mediant: "E",
    subdominant: "F",
    dominant: "G",
    submediant: "A",
    leadingtone: "B",
};

const keyG = {
    number: 8,
    tonic: "G",
    supertonic: "A",
    mediant: "B",
    subdominant: "C",
    dominant: "D",
    submediant: "E",
    leadingtone: "F#",
};

const keyD = {
    number: 9,
    tonic: "D",
    supertonic: "E",
    mediant: "F#",
    subdominant: "G",
    dominant: "A",
    submediant: "B",
    leadingtone: "C#",
};

const keyA = {
    number: 10,
    tonic: "A",
    supertonic: "B",
    mediant: "C#",
    subdominant: "D",
    dominant: "E",
    submediant: "F#",
    leadingtone: "G#",
};

const keyE = {
    number: 11,
    tonic: "E",
    supertonic: "F#",
    mediant: "G#",
    subdominant: "A",
    dominant: "B",
    submediant: "C#",
    leadingtone: "D#",
};

const keyB = {
    number: 12,
    tonic: "B",
    supertonic: "C#",
    mediant: "D#",
    subdominant: "E",
    dominant: "F#",
    submediant: "G#",
    leadingtone: "A#",
};


const keyFSharp = {
    number: 13,
    tonic: "F#",
    supertonic: "G#",
    mediant: "A#",
    subdominant: "B",
    dominant: "C#",
    submediant: "D#",
    leadingtone: "E#",
};

const keyCSharp = {
    number: 14,
    tonic: "C#",
    supertonic: "D#",
    mediant: "E#",
    subdominant: "F#",
    dominant: "G#",
    submediant: "A#",
    leadingtone: "B#",
};

function keySelect() {
    switch (keyNumber) {
        case 0:
            keyScale = keyCb;
            break;
        case 1:
            keyScale = keyGb;
            break;
        case 2:
            keyScale = keyDb;
            break;
        case 3:
            keyScale = keyAb;
            break;
        case 4:
            keyScale = keyEb;
            break;
        case 5:
            keyScale = keyBb;
            break;
        case 6:
            keyScale = keyF;
            break;
        case 7:
            keyScale = keyC;
            break;
        case 8:
            keyScale = keyG;
            break;
        case 9:
            keyScale = keyD;
            break;
        case 10:
            keyScale = keyA;
            break;
        case 11:
            keyScale = keyE;
            break;
        case 12:
            keyScale = keyB;
            break;
        case 12:
            keyScale = keyFSharp;
            break;
        default:
            keyScale = keyCSharp;
            break;
    }
    //console.log(keyScale);
    document.getElementById("key").innerHTML = keyScale.tonic;
}

// function keyGen() {
//     keyNumber = Math.floor(Math.random() * 15);
//     //console.log(keyNumber);
//     document.getElementById("RNG").innerHTML = "Your selected number is: " + keyNumber;
// }

let progression = document.getElementById("progression");

function progGen() {
    if (document.getElementById("popSlider").checked === true && document.getElementById("minSlider").checked === false) {
        document.getElementById("progression").innerHTML = majorPop.chord1 + " " + majorPop.chord2 + " " + majorPop.chord3 + " " + majorPop.chord4 + " " + majorPop.chord5;
    } else if (document.getElementById("popSlider").checked === true && document.getElementById("minSlider").checked === true) {
        document.getElementById("progression").innerHTML = minorPop.chord1 + " " + minorPop.chord2 + " " + minorPop.chord3 + " " + minorPop.chord4 + " " + minorPop.chord5;
    } else if (document.getElementById("minSlider").checked === true) {
        progressionNumber = Math.floor(Math.random() * 3);
        if (progressionNumber === 0) {
            progression.innerHTML = "i III VI iv V i";
        } else if (progressionNumber === 1) {
            progression.innerHTML = "i VI iv V i";
        } else if (progressionNumber === 2) {
            progression.innerHTML = "i VI iv V i";
        }
    } else {
        progressionNumber = Math.floor(Math.random() * 3);
        if (progressionNumber === 0) {
            progression.innerHTML = "I vi IV V I";
        } else if (progressionNumber === 1) {
            progression.innerHTML = "I vi ii V I";
        } else if (progressionNumber === 2) {
            progression.innerHTML = "I iii vi IV V I";
        }
    }
}

function getChords() {
    let chordProgression = document.getElementById("progression").textContent;
    //console.log(chordProgression);
    chordProgressionArray = chordProgression.trim().split(/\s+/);
    //console.log(chordProgressionArray);
    //console.log(chordProgressionArray[0]);
}

function assignChords() {
    //console.log(chordProgressionArray[0]);
    if (chordProgressionArray[0]) {
        chord0 = chordProgressionArray[0];
        //console.log(chord0);
    } if (chordProgressionArray[1]) {
        chord1 = chordProgressionArray[1];
        // console.log(chord1);
    } if (chordProgressionArray[2]) {
        chord2 = chordProgressionArray[2];
        // console.log(chord2);
    } if (chordProgressionArray[3]) {
        chord3 = chordProgressionArray[3];
        // console.log(chord3);
    } if (chordProgressionArray[4]) {
        chord4 = chordProgressionArray[4];
        // console.log(chord4);
    } if (chordProgressionArray[5]) {
        chord5 = chordProgressionArray[5];
        // console.log(chord5);
    } if (chordProgressionArray[6]) {
        chord6 = chordProgressionArray[6];
        // console.log(chord6);
    } if (chordProgressionArray[7]) {
        chord7 = chordProgressionArray[7];
        //  console.log(chord7);
    } if (chordProgressionArray[8]) {
        chord8 = chordProgressionArray[8];
        // console.log(chord8);
    }
}

//function below adds the music note effects for the clefs

let clefCounter = 0;

function clefOpacity() {
    if (clefCounter === 0) {
        document.getElementById('treble').classList.remove('clefFadeIn')
        document.getElementById('treble').classList.add('clefFadeOut')
        document.getElementById('bass').classList.remove('clefFadeOut')
        document.getElementById('bass').classList.add('clefFadeIn')
        clefCounter = 1
    } else if (clefCounter === 1) {
        document.getElementById('treble').classList.remove('clefFadeOut')
        document.getElementById('treble').classList.add('clefFadeIn')
        document.getElementById('bass').classList.remove('clefFadeIn')
        document.getElementById('bass').classList.add('clefFadeOut')
        clefCounter = 0
    }
}

//this function adds some cool animation when you press the play button
document.addEventListener('mousemove', function (e) {

    var playButton = document.getElementById('play').getBoundingClientRect();

    function checkViewport (e) {
        if (e.clientX > playButton.left && e.clientX < playButton.right && e.clientY > playButton.top && e.clientY < playButton.bottom) {
            return true;
        } else {
            return false;
        }
    }

    var isInViewport = checkViewport(e);

    if (isInViewport) {
        //console.log('hovering!')
        document.getElementById('flat').classList.add('flatAnimation')
        document.getElementById('sharp').classList.add('sharpAnimation')
        document.getElementById('sixteenth').classList.add('sixteenthAnimation')
        document.getElementById('sixteenthRest').classList.add('sixthRestAnimation')
    } else {
        //console.log('gone...')
        document.getElementById('flat').classList.remove('flatAnimation')
        document.getElementById('sharp').classList.remove('sharpAnimation')
        document.getElementById('sixteenth').classList.remove('sixteenthAnimation')
        document.getElementById('sixteenthRest').classList.remove('sixthRestAnimation')
    }
})


async function writeChords() {
    let x = 0 //this just checks what state the program should run in, dictated by what chord progression we are on
    let chordProgressionLength = chordProgressionArray.length;
    if (chordProgressionLength === 4) {
        document.getElementById('chordFive').style.opacity = "0%"
        document.getElementById('chordFive').classList.remove('fadeInAnimation')
        document.getElementById('chordSix').style.opacity = "0%"
        document.getElementById('chordSix').classList.remove('fadeInAnimation')
        document.getElementById('chordSeven').style.opacity = "0%"
        document.getElementById('chordSeven').classList.remove('fadeInAnimation')
        x = 4
    } else if (chordProgressionLength === 5) {
        document.getElementById('chordSix').style.opacity = "0%"
        document.getElementById('chordSix').classList.remove('fadeInAnimation')
        document.getElementById('chordSeven').style.opacity = "0%"
        document.getElementById('chordSeven').classList.remove('fadeInAnimation')
        x = 5
    } else if (chordProgressionLength === 6) {
        x = 6
    }

    if (counter === 0) {

        document.getElementById('selectedKey').innerHTML = keyScale.tonic;
        document.getElementById('selectedKey').classList.add('fadeInAnimation')

        if (chord0 != 0) {
            document.getElementById('chordOne').innerHTML = chord0;
            document.getElementById('chordOne').classList.add('fadeInAnimation')
        }
        if (chord1 != 0) {
            document.getElementById('chordTwo').innerHTML = chord1;
            document.getElementById('chordTwo').classList.add('fadeInAnimation')
        }
        if (chord2 != 0) {
            document.getElementById('chordThree').innerHTML = chord2;
            document.getElementById('chordThree').classList.add('fadeInAnimation')
        }
        if (chord3 != 0) {
            document.getElementById('chordFour').innerHTML = chord3;
            document.getElementById('chordFour').classList.add('fadeInAnimation')
        }
        if (chord4 != 0) {
            document.getElementById('chordFive').innerHTML = chord4;
            document.getElementById('chordFive').classList.add('fadeInAnimation')
        }
        if (chord5 != 0) {
            document.getElementById('chordSix').innerHTML = chord5;
            document.getElementById('chordSix').classList.add('fadeInAnimation')
        }
        if (chord6 != 0) {
            document.getElementById('chordSeven').innerHTML = chord6;
            document.getElementById('chordSeven').classList.add('fadeInAnimation')
        }
        if (chord7 != 0) {
            document.getElementById('chordEight').innerHTML = chord7;
            document.getElementById('chordEight').classList.add('fadeInAnimation')
        }
        counter = counter + 1;
    } else if (counter === 1) {
        document.getElementById('selectedKey').innerHTML = keyScale.tonic;
        document.getElementById('selectedKey').classList.remove('fadeInAnimation')
        document.getElementById('selectedKey').classList.add('fadeOutAnimation')
        setTimeout(function(){
            document.getElementById('selectedKey').classList.remove('fadeOutAnimation')
            document.getElementById('selectedKey').classList.add('fadeInAnimation')
        }, 200)
        if (chord0 != 0) {
            document.getElementById('chordOne').classList.remove('fadeInAnimation')
            document.getElementById('chordOne').classList.add('fadeOutAnimation')
            setTimeout(function(){
                document.getElementById('chordOne').innerHTML = chord0
                document.getElementById('chordOne').classList.remove('fadeOutAnimation')
                document.getElementById('chordOne').classList.add('fadeInAnimation')
            }, 200)
        }
        if (chord1 != 0) {
            document.getElementById('chordTwo').classList.remove('fadeInAnimation')
            document.getElementById('chordTwo').classList.add('fadeOutAnimation')
            setTimeout(function(){
                document.getElementById('chordTwo').innerHTML = chord1
                document.getElementById('chordTwo').classList.remove('fadeOutAnimation')
                document.getElementById('chordTwo').classList.add('fadeInAnimation')
            }, 200)
        }
        if (chord2 != 0) {
            document.getElementById('chordThree').classList.remove('fadeInAnimation')
            document.getElementById('chordThree').classList.add('fadeOutAnimation')
            setTimeout(function(){
                document.getElementById('chordThree').innerHTML = chord2
                document.getElementById('chordThree').classList.remove('fadeOutAnimation')
                document.getElementById('chordThree').classList.add('fadeInAnimation')
            }, 200)
        }
        if (chord3 != 0) {
            document.getElementById('chordFour').classList.remove('fadeInAnimation')
            document.getElementById('chordFour').classList.add('fadeOutAnimation')
            setTimeout(function(){
                document.getElementById('chordFour').innerHTML = chord3
                document.getElementById('chordFour').classList.remove('fadeOutAnimation')
                document.getElementById('chordFour').classList.add('fadeInAnimation')
            }, 200)
        }
        if (chord4 != 0 && x >= 5) {
            document.getElementById('chordFive').classList.remove('fadeInAnimation')
            document.getElementById('chordFive').classList.add('fadeOutAnimation')
            setTimeout(function(){
                document.getElementById('chordFive').innerHTML = chord4
                document.getElementById('chordFive').classList.remove('fadeOutAnimation')
                document.getElementById('chordFive').classList.add('fadeInAnimation')
            }, 200)
        }
        if (chord5 != 0 && x === 6) {
            document.getElementById('chordSix').classList.remove('fadeInAnimation')
            document.getElementById('chordSix').classList.add('fadeOutAnimation')
            setTimeout(function(){
                document.getElementById('chordSix').innerHTML = chord5
                document.getElementById('chordSix').classList.remove('fadeOutAnimation')
                document.getElementById('chordSix').classList.add('fadeInAnimation')
            }, 200)
        }
        if (chord6 != 0) {
            document.getElementById('chordSeven').classList.remove('fadeInAnimation')
            document.getElementById('chordSeven').classList.add('fadeOutAnimation')
            setTimeout(function(){
                document.getElementById('chordSeven').innerHTML = chord6
                document.getElementById('chordSeven').classList.remove('fadeOutAnimation')
                document.getElementById('chordSeven').classList.add('fadeInAnimation')
            }, 200)
        }
        if (chord7 != 0) {
            document.getElementById('chordEight').classList.remove('fadeInAnimation')
            document.getElementById('chordEight').classList.add('fadeOutAnimation')
            setTimeout(function(){
                document.getElementById('chordEight').innerHTML = chord7
                document.getElementById('chordEight').classList.remove('fadeOutAnimation')
                document.getElementById('chordEight').classList.add('fadeInAnimation')
            }, 200)
        }
    }
};

//functions that are called to assign notes to the chords. these are not camelCase;
//because they need to be case-specific for chords.


function assignNotes() {
    if ((chord0) && chord0 === "I") {
        chord0Notes.bassNote = keyScale.tonic;
        chord0Notes.note1 = keyScale.tonic;
        chord0Notes.note2 = keyScale.mediant;
        chord0Notes.note3 = keyScale.dominant;
    } else if ((chord0) && chord0 === "vi") {
        chord0Notes.bassNote = keyScale.submediant;
        chord0Notes.note1 = keyScale.submediant;
        chord0Notes.note2 = keyScale.tonic;
        chord0Notes.note3 = keyScale.mediant;
    }

    if ((chord1) && chord1 === "vi") {
        chord1Notes.bassNote = keyScale.submediant;
        chord1Notes.note1 = keyScale.submediant;
        chord1Notes.note2 = keyScale.tonic;
        chord1Notes.note3 = keyScale.mediant;
    } else if ((chord1) && chord1 === "iii") {
        chord1Notes.bassNote = keyScale.mediant;
        chord1Notes.note1 = keyScale.mediant;
        chord1Notes.note2 = keyScale.dominant;
        chord1Notes.note3 = keyScale.leadingtone;
    } else if ((chord1) && chord1 === "V") {
        chord1Notes.bassNote = keyScale.dominant;
        chord1Notes.note1 = keyScale.dominant;
        chord1Notes.note2 = keyScale.leadingtone;
        chord1Notes.note3 = keyScale.supertonic;
    }

    if ((chord2) && chord2 === "vi") {
        chord2Notes.bassNote = keyScale.submediant;
        chord2Notes.note1 = keyScale.submediant;
        chord2Notes.note2 = keyScale.tonic;
        chord2Notes.note3 = keyScale.mediant;
    } else if ((chord2) && chord2 === "ii") {
        chord2Notes.bassNote = keyScale.supertonic;
        chord2Notes.note1 = keyScale.supertonic;
        chord2Notes.note2 = keyScale.subdominant;
        chord2Notes.note3 = keyScale.submediant;
    } else if ((chord2) && chord2 === "IV") {
        chord2Notes.bassNote = keyScale.subdominant;
        chord2Notes.note1 = keyScale.subdominant;
        chord2Notes.note2 = keyScale.submediant;
        chord2Notes.note3 = keyScale.tonic;
    }

    if ((chord3) && chord3 === "V") {
        chord3Notes.bassNote = keyScale.dominant;
        chord3Notes.note1 = keyScale.dominant;
        chord3Notes.note2 = keyScale.leadingtone;
        chord3Notes.note3 = keyScale.supertonic;
    } else if ((chord3) && chord3 === "IV") {
        chord3Notes.bassNote = keyScale.subdominant;
        chord3Notes.note1 = keyScale.subdominant;
        chord3Notes.note2 = keyScale.submediant;
        chord3Notes.note3 = keyScale.tonic;
    }

    if ((chord4) && chord4 === "I") {
        chord4Notes.bassNote = keyScale.tonic;
        chord4Notes.note1 = keyScale.tonic;
        chord4Notes.note2 = keyScale.mediant;
        chord4Notes.note3 = keyScale.dominant;
    } else if ((chord4) && chord4 === "V") {
        chord4Notes.bassNote = keyScale.dominant;
        chord4Notes.note1 = keyScale.dominant;
        chord4Notes.note2 = keyScale.leadingtone;
        chord4Notes.note3 = keyScale.supertonic;
    }

    if ((chord5) && chord5 === "I") {
        chord5Notes.bassNote = keyScale.tonic;
        chord5Notes.note1 = keyScale.tonic;
        chord5Notes.note2 = keyScale.mediant;
        chord5Notes.note3 = keyScale.dominant;
    } else if ((chord5) && chord5 === "V") {
        chord5Notes.bassNote = keyScale.dominant;
        chord5Notes.note1 = keyScale.dominant;
        chord5Notes.note2 = keyScale.leadingtone;
        chord5Notes.note3 = keyScale.supertonic;
    }
    // console.log(chord0);
    // console.log(chord0Notes);
    // console.log(chord1);
    // console.log(chord1Notes);
    // console.log(chord2);
    // console.log(chord2Notes);
    // console.log(chord3);
    // console.log(chord3Notes);
    // console.log(chord4);
    // console.log(chord4Notes);
}

// function playNotes() {
//     document.getElementById('bassCSharp').play();
//     document.getElementById('noteCSharp').play();
//     document.getElementById('noteF').play();
//     document.getElementById('noteGSharp').play();
// }

//this is the block of functions that simplifies the calling/playing of the audio files
function bassC() {
    document.getElementById('bassC').play();
    document.getElementById('pianoBassC').classList.add('currentlyPlaying')
}

function bassCSharp() {
    document.getElementById('bassCSharp').play();
    document.getElementById('pianoBassCSharp').classList.add('currentlyPlaying')
}

function bassD() {
    document.getElementById('bassD').play();
    document.getElementById('pianoBassD').classList.add('currentlyPlaying')
}

function bassDSharp() {
    document.getElementById('bassDSharp').play();
    document.getElementById('pianoBassDSharp').classList.add('currentlyPlaying')
}

function bassE() {
    document.getElementById('bassE').play();
    document.getElementById('pianoBassE').classList.add('currentlyPlaying')
}

function bassF() {
    document.getElementById('bassF').play();
    document.getElementById('pianoBassF').classList.add('currentlyPlaying')
}

function bassFSharp() {
    document.getElementById('bassFSharp').play();
    document.getElementById('pianoBassFSharp').classList.add('currentlyPlaying')
}

function bassG() {
    document.getElementById('bassG').play();
    document.getElementById('pianoBassG').classList.add('currentlyPlaying')
}

function bassGSharp() {
    document.getElementById('bassGSharp').play();
    document.getElementById('pianoBassGSharp').classList.add('currentlyPlaying')
}

function bassA() {
    document.getElementById('bassA').play();
    document.getElementById('pianoBassA').classList.add('currentlyPlaying')
}

function bassASharp() {
    document.getElementById('bassASharp').play();
    document.getElementById('pianoBassASharp').classList.add('currentlyPlaying')
}

function bassB() {
    document.getElementById('bassB').play();
    document.getElementById('pianoBassB').classList.add('currentlyPlaying')
}

function noteC() {
    document.getElementById('noteC').play();
    document.getElementById('pianoNoteC').classList.add('currentlyPlaying')
}

function noteCSharp() {
    document.getElementById('noteCSharp').play();
    document.getElementById('pianoNoteCSharp').classList.add('currentlyPlaying')
}

function noteD() {
    document.getElementById('noteD').play();
    document.getElementById('pianoNoteD').classList.add('currentlyPlaying')
}

function noteDSharp() {
    document.getElementById('noteDSharp').play();
    document.getElementById('pianoNoteDSharp').classList.add('currentlyPlaying')
}

function noteE() {
    document.getElementById('noteE').play();
    document.getElementById('pianoNoteE').classList.add('currentlyPlaying')
}

function noteF() {
    document.getElementById('noteF').play();
    document.getElementById('pianoNoteF').classList.add('currentlyPlaying')
}

function noteFSharp() {
    document.getElementById('noteFSharp').play();
    document.getElementById('pianoNoteFSharp').classList.add('currentlyPlaying')
}

function noteG() {
    document.getElementById('noteG').play();
    document.getElementById('pianoNoteG').classList.add('currentlyPlaying')
}

function noteGSharp() {
    document.getElementById('noteGSharp').play();
    document.getElementById('pianoNoteGSharp').classList.add('currentlyPlaying')
}

function noteA() {
    document.getElementById('noteA').play();
    document.getElementById('pianoNoteA').classList.add('currentlyPlaying')
}

function noteASharp() {
    document.getElementById('noteASharp').play();
    document.getElementById('pianoNoteASharp').classList.add('currentlyPlaying')
}

function noteB() {
    document.getElementById('noteB').play();
    document.getElementById('pianoNoteB').classList.add('currentlyPlaying')
}

function noteC1() {
    document.getElementById('noteC1').play();
    document.getElementById('pianoNoteC1').classList.add('currentlyPlaying')
}

async function playChords() {
    var x = 0;
    var y = 0;
    while (x < chordProgressionArray.length) {
        switch (x) {
            case 0:
                y = chord0Notes;
                break;
            case 1:
                y = chord1Notes;
                break;
            case 2:
                y = chord2Notes;
                break;
            case 3:
                y = chord3Notes;
                break;
            case 4:
                y = chord4Notes;
                break;
            case 5:
                y = chord5Notes;
                break;
            case 6:
                y = chord6Notes;
                break;
            case 7:
                y = chord7Notes;
                break;
            case 8:
                y = chord8Notes;
                break;
        }

        //console.log(y);

        if (y.bassNote === "C" || y.bassNote === "B#") {
            bassC();
        } else if (y.bassNote === "C#" || y.bassNote === "Db") {
            bassCSharp();
        } else if (y.bassNote === "D") {
            bassD();
        } else if (y.bassNote === "D#" || y.bassNote === "Eb") {
            bassDSharp();
        } else if (y.bassNote === "E" || y.bassNote === "Fb") {
            bassE();
        } else if (y.bassNote === "F" || y.bassNote === "E#") {
            bassF();
        } else if (y.bassNote === "F#" || y.bassNote === "Gb") {
            bassFSharp();
        } else if (y.bassNote === "G") {
            bassG();
        } else if (y.bassNote === "G#" || y.bassNote === "Ab") {
            bassGSharp();
        } else if (y.bassNote === "A") {
            bassA();
        } else if (y.bassNote === "A#" || y.bassNote === "Bb") {
            bassASharp();
        } else if (y.bassNote === "B" || y.bassNote === "Cb") {
            bassB();
        }

        if (y.note1 === "C" || y.note1 === "B#") {
            noteC();
        } else if (y.note1 === "C#" || y.note1 === "Db") {
            noteCSharp();
        } else if (y.note1 === "D") {
            noteD();
        } else if (y.note1 === "D#" || y.note1 === "Eb") {
            noteDSharp();
        } else if (y.note1 === "E" || y.note1 === "Fb") {
            noteE();
        } else if (y.note1 === "F" || y.note1 === "E#") {
            noteF();
        } else if (y.note1 === "F#" || y.note1 === "Gb") {
            noteFSharp();
        } else if (y.note1 === "G") {
            noteG();
        } else if (y.note1 === "G#" || y.note1 === "Ab") {
            noteGSharp();
        } else if (y.note1 === "A") {
            noteA();
        } else if (y.note1 === "A#" || y.note1 === "Bb") {
            noteASharp();
        } else if (y.note1 === "B" || y.note1 === "Cb") {
            noteB();
        } else if (y.note1 === "C1" || y.note1 === "B#") {
            noteC1();
        }

        if (y.note2 === "C" || y.note2 === "B#") {
            noteC();
        } else if (y.note2 === "C#" || y.note2 === "Db") {
            noteCSharp();
        } else if (y.note2 === "D") {
            noteD();
        } else if (y.note2 === "D#" || y.note2 === "Eb") {
            noteDSharp();
        } else if (y.note2 === "E" || y.note2 === "Fb") {
            noteE();
        } else if (y.note2 === "F" || y.note2 === "E#") {
            noteF();
        } else if (y.note2 === "F#" || y.note2 === "Gb") {
            noteFSharp();
        } else if (y.note2 === "G") {
            noteG();
        } else if (y.note2 === "G#" || y.note2 === "Ab") {
            noteGSharp();
        } else if (y.note2 === "A") {
            noteA();
        } else if (y.note2 === "A#" || y.note2 === "Bb") {
            noteASharp();
        } else if (y.note2 === "B" || y.note2 === "Cb") {
            noteB();
        } else if (y.note2 === "C1" || y.note2 === "B#") {
            noteC1();
        }

        if (chord0Notes.note3 === "C" || y.note3 === "B#") {
            noteC();
        } else if (y.note3 === "C#" || y.note3 === "Db") {
            noteCSharp();
        } else if (y.note3 === "D") {
            noteD();
        } else if (y.note3 === "D#" || y.note3 === "Eb") {
            noteDSharp();
        } else if (y.note3 === "E" || y.note3 === "Fb") {
            noteE();
        } else if (y.note3 === "F" || y.note3 === "E#") {
            noteF();
        } else if (y.note3 === "F#" || y.note3 === "Gb") {
            noteFSharp();
        } else if (y.note3 === "G") {
            noteG();
        } else if (y.note3 === "G#" || y.note3 === "Ab") {
            noteGSharp();
        } else if (y.note3 === "A") {
            noteA();
        } else if (y.note3 === "A#" || y.note3 === "Bb") {
            noteASharp();
        } else if (y.note3 === "B" || y.note3 === "Cb") {
            noteB();
        } else if (y.note3 === "C1" || y.note3 === "B#") {
            noteC1();
        }

        //time-out between chords
        await new Promise(r => setTimeout(r, 2100));

        //reset all colors
        var currentlyPlayingArray = document.querySelectorAll('.currentlyPlaying');

        for (i = 0; i < (currentlyPlayingArray.length); i++) {
            currentlyPlayingArray[i].classList.remove('currentlyPlaying');
        }
        //console.log(currentlyPlayingArray.length);
        //console.log(x);
        x++;
        //console.log(x);

    }
    playCounter = 0;
}



function play() {
    if (playCounter === 0) {
        playCounter = 1;
        clefOpacity();
        keyGen();
        keySelect();
        progGen();
        getChords();
        assignChords();
        assignNotes();
        writeChords();
        playChords();
    } else if (playCounter > 0) {
        //console.log("Error! You must wait until the current chord progression finishes.")
    }
}

let deBug = 0;

function debugMenu() {
    if (deBug === 0) {
        document.getElementById('debugMenu').style.display = "block";
        document.getElementById('debugText').style.display = "block";
        deBug = 1;
    } else if (deBug === 1) {
        document.getElementById('debugMenu').style.display = "none";
        document.getElementById('debugText').style.display = "none";
        deBug = 1;
    }
}

/* event listeners for the piano keys, for click functions */

document.getElementById("pianoBassC").addEventListener("click", function (e) {
    bassC();
    setTimeout(function(){
        e.target.classList.remove('currentlyPlaying');
    }, 2050);
});
document.getElementById("pianoBassCSharp").addEventListener("click", function (e) {
    bassCSharp();
    setTimeout(function(){
        e.target.classList.remove('currentlyPlaying');
    }, 2050);
});
document.getElementById("pianoBassD").addEventListener("click", function (e) {
    bassD();
    setTimeout(function(){
        e.target.classList.remove('currentlyPlaying');
    }, 2050);
});
document.getElementById("pianoBassDSharp").addEventListener("click", function (e) {
    bassDSharp();
    setTimeout(function(){
        e.target.classList.remove('currentlyPlaying');
    }, 2050);
});
document.getElementById("pianoBassE").addEventListener("click", function (e) {
    bassE();
    setTimeout(function(){
        e.target.classList.remove('currentlyPlaying');
    }, 2050);
});
document.getElementById("pianoBassF").addEventListener("click", function (e) {
    bassF();
    setTimeout(function(){
        e.target.classList.remove('currentlyPlaying');
    }, 2050);
});
document.getElementById("pianoBassFSharp").addEventListener("click", function (e) {
    bassFSharp();
    setTimeout(function(){
        e.target.classList.remove('currentlyPlaying');
    }, 2050);
});
document.getElementById("pianoBassG").addEventListener("click", function (e) {
    bassG();
    setTimeout(function(){
        e.target.classList.remove('currentlyPlaying');
    }, 2050);
});
document.getElementById("pianoBassGSharp").addEventListener("click", function (e) {
    bassGSharp();
    setTimeout(function(){
        e.target.classList.remove('currentlyPlaying');
    }, 2050);
});
document.getElementById("pianoBassA").addEventListener("click", function (e) {
    bassA();
    setTimeout(function(){
        e.target.classList.remove('currentlyPlaying');
    }, 2050);
});
document.getElementById("pianoBassASharp").addEventListener("click", function (e) {
    bassASharp();
    setTimeout(function(){
        e.target.classList.remove('currentlyPlaying');
    }, 2050);
});
document.getElementById("pianoBassB").addEventListener("click", function (e) {
    bassB();
    setTimeout(function(){
        e.target.classList.remove('currentlyPlaying');
    }, 2050);
});
document.getElementById("pianoNoteC").addEventListener("click", function (e) {
    noteC();
    setTimeout(function(){
        e.target.classList.remove('currentlyPlaying');
    }, 2050);
});
document.getElementById("pianoNoteCSharp").addEventListener("click", function (e) {
    noteCSharp();
    setTimeout(function(){
        e.target.classList.remove('currentlyPlaying');
    }, 2050);
});
document.getElementById("pianoNoteD").addEventListener("click", function (e) {
    noteD();
    setTimeout(function(){
        e.target.classList.remove('currentlyPlaying');
    }, 2050);
});
document.getElementById("pianoNoteDSharp").addEventListener("click", function (e) {
    noteDSharp();
    setTimeout(function(){
        e.target.classList.remove('currentlyPlaying');
    }, 2050);
});
document.getElementById("pianoNoteE").addEventListener("click", function (e) {
    noteE();
    setTimeout(function(){
        e.target.classList.remove('currentlyPlaying');
    }, 2050);
});
document.getElementById("pianoNoteF").addEventListener("click", function (e) {
    noteF();
    setTimeout(function(){
        e.target.classList.remove('currentlyPlaying');
    }, 2050);
});
document.getElementById("pianoNoteFSharp").addEventListener("click", function (e) {
    noteFSharp();
    setTimeout(function(){
        e.target.classList.remove('currentlyPlaying');
    }, 2050);
});
document.getElementById("pianoNoteG").addEventListener("click", function (e) {
    noteG();
    setTimeout(function(){
        e.target.classList.remove('currentlyPlaying');
    }, 2050);
});
document.getElementById("pianoNoteGSharp").addEventListener("click", function (e) {
    noteGSharp();
    setTimeout(function(){
        e.target.classList.remove('currentlyPlaying');
    }, 2050);
});
document.getElementById("pianoNoteA").addEventListener("click", function (e) {
    noteA();
    setTimeout(function(){
        e.target.classList.remove('currentlyPlaying');
    }, 2050);
});
document.getElementById("pianoNoteASharp").addEventListener("click", function (e) {
    noteASharp();
    setTimeout(function(){
        e.target.classList.remove('currentlyPlaying');
    }, 2050);
});
document.getElementById("pianoNoteB").addEventListener("click",  function (e) {
    noteB();
    setTimeout(function(){
        e.target.classList.remove('currentlyPlaying');
    }, 2050);
});