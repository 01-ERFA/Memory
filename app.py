from flask import Flask, render_template
import python_config
app = Flask(__name__, template_folder="./", static_folder="./src")

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    
    return render_template('template.html', get_path='{}'.format(path))

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=80, debug=True)