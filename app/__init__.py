from flask import Flask
from flask_assets import Environment
from app.utils.assets import bundles

assets = Environment()

def create_app():
    app = Flask(__name__)

    assets.init_app(app)

    assets.register(bundles)

    from app.blueprints.main.routes import main

    app.register_blueprint(main)

    return app
