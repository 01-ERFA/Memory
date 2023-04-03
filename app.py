from flask import Flask, render_template
from python_config import data


app = Flask(__name__, template_folder="./", static_folder="./src")

app.register_blueprint(data.routes['general_site'], url_prefix='/api')


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template('template.html', get_url=data.env_frontend['api_url'])

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=80, debug=True)