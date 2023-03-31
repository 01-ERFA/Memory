import os

# .env file
from dotenv import load_dotenv

load_dotenv()

env = {
    'secret_key': os.getenv('SECRET_KEY'),
    'db_name': os.getenv('DB_NAME'),
    'db_url': os.getenv('DATABASE_URL')
}