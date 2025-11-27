from flask import Flask, render_template, request, jsonify
import os
import sys
import uuid

ROOT = os.path.dirname(__file__)
PKG = os.path.abspath(os.path.join(ROOT, "..", "chordgen", "python"))
sys.path.append(PKG)
import chordgen

app = Flask(__name__)

@app.route("/ping")
def hello_world():
    return "<p>Hello, world!</p>"

@app.route("/")
def index():
    return render_template('chordgen.html')

@app.route("/api/generate-progression", methods=['POST'])
def create_progression():
    data = request.get_json()
    progression = data.get('PROGRESSION')
    file_name = f"{uuid.uuid4()}.wav"

    chordgen.render_chord_progression(progression, file_name)

    base_dir = os.path.dirname(os.path.abspath(__file__))  # /src/server
    user_gen_dir = os.path.join(base_dir, "static", "user_generated")
    os.makedirs(user_gen_dir, exist_ok=True)

    return jsonify({"FILE_URL": f"/static/user_generated/{file_name}"})

@app.route("/api/generate-sample-progression")
def mix_chords():
    file_name = str(uuid.uuid4()) + '.wav'
    sample_progression = [['C3', 'E3', 'G3', 'C4'], ['G3', 'B3', 'D4'], ['C3', 'E3', 'G3', 'C4']]
    file_path = chordgen.render_chord_progression(sample_progression, file_name)
    print(file_path)
    return "<p>Placeholder for the actual stout stream...</p>"