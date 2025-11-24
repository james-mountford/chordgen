from flask import Flask, render_template, request, jsonify
import os
import sys
import uuid
import shutil

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

@app.route("/api/generate-progression", methods=['POST'])
def create_progression():
    data = request.get_json()
    progression = data.get('PROGRESSION')
    file_name = f"{uuid.uuid4()}.wav"

    generated_rel = mixer.render_chord_progression(progression, file_name)

    project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # /src
    generated_path = os.path.abspath(
        os.path.join(project_root, "src", generated_rel)
    )

    base_dir = os.path.dirname(os.path.abspath(__file__))  # /src/server
    user_gen_dir = os.path.join(base_dir, "static", "user_generated")
    os.makedirs(user_gen_dir, exist_ok=True)

    target_path = os.path.join(user_gen_dir, file_name)
    shutil.move(generated_path, target_path)

    return jsonify({"FILE_URL": f"/static/user_generated/{file_name}"})

@app.route("/api/generate-sample-progression")
def mix_chords():
    file_name = str(uuid.uuid4()) + '.wav'
    sample_progression = [['C3', 'E3', 'G3', 'C4'], ['G3', 'B3', 'D4'], ['C3', 'E3', 'G3', 'C4']]
    file_path = mixer.render_chord_progression(sample_progression, file_name)
    print(file_path)
    return "<p>Placeholder for the actual stout stream...</p>"