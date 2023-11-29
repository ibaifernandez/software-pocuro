from flask import request, jsonify, Blueprint
from api.models import db, Email
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

@api.route('/api/get_project_names', methods=['GET'])
def get_email_data_and_projects():
    try:
        # Obtén el nombre del proyecto desde la solicitud
        project_name = request.args.get('project_name')

        # Verifica que se haya proporcionado un nombre de proyecto
        if not project_name:
            return jsonify({"error": "Missing project_name parameter"}), 400

        # Consulta la base de datos para obtener los datos relacionados con el nombre del proyecto
        email_data = Email.query.filter_by(nombre_del_proyecto=project_name).first()

        # Si no se encuentra ningún registro para el proyecto dado, devuelve un mensaje de error
        if not email_data:
            return jsonify({"error": "No data found for the specified project"}), 404

        # Serializa los datos del correo electrónico
        serialized_email_data = email_data.serialize()

        # Obtén la lista de nombres de proyectos
        project_names = [project.nombre_del_proyecto for project in Email.query.all()]

        # Devuelve ambos conjuntos de datos como JSON
        return jsonify({"email_data": serialized_email_data, "project_names": project_names})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@api.route('/save_email', methods=['POST'])
def save_email():
    data = request.json  # Asegúrate de enviar datos en formato JSON desde tu frontend
    
    # Verificamos que los datos requeridos estén presentes en la solicitud
    if 'nombreDelProyecto' not in data or 'header' not in data:
        return jsonify({"error": "Missing required data"}), 400

    # Creamos una nueva instancia de Email con los datos proporcionados
    new_email = Email(
        nombreDelProyecto=data['nombreDelProyecto'],
        header_link1=data['header']['link1'],
        header_image1=data['header']['image1'],
        header_alt1=data['header']['alt1'],
        header_link2=data['header']['link2'],
        header_image2=data['header']['image2'],
        header_alt2=data['header']['alt2'],
        header_link3=data['header']['link3'],
        header_image3=data['header']['image3'],
        header_alt3=data['header']['alt3'],
        cta_image=data['cta']['image'],
        cta_link=data['cta']['link'],
        cta_alt=data['cta']['alt'],
        garantias_image=data['garantias']['image'],
        garantias_link=data['garantias']['link'],
        garantias_alt=data['garantias']['alt'],
        comunicate_image=data['comunicate']['image'],
        comunicate_link=data['comunicate']['link'],
        comunicate_alt=data['comunicate']['alt'],
        contactos_whatsapp_image=data['contactos']['whatsapp']['image'],
        contactos_whatsapp_number=data['contactos']['whatsapp']['number'],
        contactos_whatsapp_alt=data['contactos']['whatsapp']['alt'],
        contactos_mail_image=data['contactos']['mail']['image'],
        contactos_mail_address=data['contactos']['mail']['address'],
        contactos_mail_alt=data['contactos']['mail']['alt'],
        contactos_reunionVirtual_image=data['contactos']['reunionVirtual']['image'],
        contactos_reunionVirtual_link=data['contactos']['reunionVirtual']['link'],
        contactos_reunionVirtual_alt=data['contactos']['reunionVirtual']['alt'],
        teEsperamos_image=data['teEsperamos']['image'],
        teEsperamos_link=data['teEsperamos']['link'],
        teEsperamos_alt=data['teEsperamos']['alt'],
        textoLegal_link=data['textoLegal']['link'],
        textoLegal_text=data['textoLegal']['text'],
        redesSociales_facebook_link=data['redesSociales']['facebook']['link'],
        redesSociales_facebook_alt=data['redesSociales']['facebook']['alt'],
        redesSociales_linkedin_link=data['redesSociales']['linkedin']['link'],
        redesSociales_linkedin_alt=data['redesSociales']['linkedin']['alt'],
        redesSociales_instagram_link=data['redesSociales']['instagram']['link'],
        redesSociales_instagram_alt=data['redesSociales']['instagram']['alt'],
        )

    try:
        # Añadimos el nuevo correo a la base de datos
        db.session.add(new_email)
        db.session.commit()
        return jsonify({"message": "Email created successfully"}), 201
    except Exception as e:
        # Si hay un error al guardar en la base de datos, hacemos un rollback
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        # Cerramos la sesión de la base de datos
        db.session.close()
