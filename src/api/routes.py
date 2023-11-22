from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200


@api.route('/save_user', methods=['POST'])
def save_user():
    data = request.json  # Asegúrate de enviar datos en formato JSON desde tu frontend
    
    # Verificamos que los datos requeridos estén presentes en la solicitud
    if 'email' not in data or 'password' not in data:
        return jsonify({"error": "Missing required data"}), 400

    # Creamos una nueva instancia de User con los datos proporcionados
    new_user = User(email=data['email'], password=data['password'], is_active=True)

    try:
        # Añadimos el nuevo usuario a la base de datos
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "User created successfully"}), 201
    except Exception as e:
        # Si hay un error al guardar en la base de datos, hacemos un rollback
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        # Cerramos la sesión de la base de datos
        db.session.close()
