import os, json

# .env file
from dotenv import load_dotenv

load_dotenv()

env_backend = {
    'secret_key': os.getenv('SECRET_KEY'),
    'db_name': os.getenv('DB_NAME'),
    'db_url': os.getenv('DATABASE_URL')
}

env_frontend = {
    'api_url': os.getenv('API_URL_GENERAL')
}

# json files
def read_json(path_json):
    data_json = {}

    def validate(path):
        try:
            with open(path, 'r') as content:
                data_json[name] = json.load(content)
        except:
            return False

    files = os.listdir(path_json)
    for file in files:
        name, ext = os.path.splitext(file)
        if ext == '.json':
            validate(f'{path_json}/{name}{ext}')
    return data_json


# routes to app.py

from python_config.routes.general_routes import site

routes = {
    'general_site': site.MK_Rsite
}