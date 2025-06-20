from flask import Blueprint, jsonify
from .models import db, User
from .utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)
CORS(api)

@api.route('/', methods=['GET'])
def root():
    return jsonify({"message": "API is running"}), 200

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200