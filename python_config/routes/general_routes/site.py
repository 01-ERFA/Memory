from flask import Blueprint, jsonify
from python_config import data

MK_Rsite = Blueprint('MK_Rsite', __name__)

@MK_Rsite.route('/get_site', methods=['GET'])
def get_site():
    return jsonify(data.read_json('python_config/json/get_site'))