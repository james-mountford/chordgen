from flask import Flask

app = Flask(__name__)

@app.route("/ping")
def hello_world():
    return "<p>Hello, world!</p>"

@app.route("/api/generate-progression-audiofile")
def mix_chords():
    return "<p>Placeholder for the actual stout stream...</p>"