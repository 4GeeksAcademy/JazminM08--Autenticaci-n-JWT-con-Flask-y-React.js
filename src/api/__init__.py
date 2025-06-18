from flask import Flask
from flask_cors import CORS
from .routes import api

def create_app():
    app = Flask(__name__)

    # Configura CORS para aceptar solo desde el frontend
    CORS(app, origins=["https://symmetrical-space-guide-667jvrwr7p6crqp-3000.app.github.dev"])

    # Registra el blueprint de tus rutas
    app.register_blueprint(api)

    return app