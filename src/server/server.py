from flask import Flask, render_template
import os
import sys
import uuid

# add the root 'python' folder to sys.path
sys.path.append(
    os.path.abspath(
        os.path.join(os.path.dirname(__file__), "..", "..", "python")
    )
)
from mixer import mixer as mixer

app = Flask(__name__)

@app.route("/ping")
def hello_world():
    return "<p>Hello, world!</p>"

@app.route("/")
def index():
    return render_template('chordgen.html')

@app.route("/api/generate-sample-progression")
def mix_chords():
    file_name = str(uuid.uuid4()) + '.wav'
    sample_progression = [['C3', 'E3', 'G3', 'C4'], ['G3', 'B3', 'D4'], ['C3', 'E3', 'G3', 'C4']]
    file_path = mixer.render_chord_progression(sample_progression, file_name)
    print(file_path)
    return "<p>Placeholder for the actual stout stream...</p>"