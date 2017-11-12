import json
import os

from bottle import abort, Bottle, run, static_file


BASE_DIR = os.path.dirname(os.path.realpath(__file__))

app = Bottle()


@app.get("/")
def index():
    return static_file("index.html", BASE_DIR)


@app.get("/assets/<fname:path>")
def assets(fname):
    return static_file(fname, os.path.join(BASE_DIR, "assets"))


@app.get("/api/v1/albums/")
def albums():
    fname = "data/albums/index.json"
    if not os.path.exists(fname):
        abort(404)
    with open(fname) as fd:
        return json.load(fd)


@app.get("/api/v1/albums/<album_id:int>/")
def album(album_id):
    fname = "data/albums/{}.json".format(album_id)
    if not os.path.exists(fname):
        abort(404)
    with open(fname) as fd:
        return json.load(fd)


if __name__ == "__main__":
    run(app, host="localhost", port=8080, debug=True)
