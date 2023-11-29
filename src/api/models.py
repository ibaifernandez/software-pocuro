from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Email(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre_del_proyecto = db.Column(db.String(255), nullable=True)
    header_link1 = db.Column(db.String(255), nullable=True)
    header_image1 = db.Column(db.String(255), nullable=True)
    header_alt1 = db.Column(db.String(255), nullable=True)
    header_link2 = db.Column(db.String(255), nullable=True)
    header_image2 = db.Column(db.String(255), nullable=True)
    header_alt2 = db.Column(db.String(255), nullable=True)
    header_link3 = db.Column(db.String(255), nullable=True)
    header_image3 = db.Column(db.String(255), nullable=True)
    header_alt3 = db.Column(db.String(255), nullable=True)
    cta_image = db.Column(db.String(255), nullable=True)
    cta_link = db.Column(db.String(255), nullable=True)
    garantias_image = db.Column(db.String(255), nullable=True)
    garantias_link = db.Column(db.String(255), nullable=True)
    comunicate_image = db.Column(db.String(255), nullable=True)
    comunicate_link = db.Column(db.String(255), nullable=True)
    whatsapp_image = db.Column(db.String(255), nullable=True)
    whatsapp_number = db.Column(db.String(255), nullable=True)
    whatsapp_alt = db.Column(db.String(255), nullable=True)
    mail_image = db.Column(db.String(255), nullable=True)
    mail_address = db.Column(db.String(255), nullable=True)
    mail_alt = db.Column(db.String(255), nullable=True)
    reunion_virtual_image = db.Column(db.String(255), nullable=True)
    reunion_virtual_link = db.Column(db.String(255), nullable=True)
    te_esperamos_image = db.Column(db.String(255), nullable=True)
    te_esperamos_link = db.Column(db.String(255), nullable=True)
    texto_legal_text = db.Column(db.String(255), nullable=True)
    facebook_image = db.Column(db.String(255), nullable=True)
    twitter_image = db.Column(db.String(255), nullable=True)
    instagram_image = db.Column(db.String(255), nullable=True)
    logo_image = db.Column(db.String(255), nullable=True)
    
    def __repr__(self):
       return f'<Email {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombreDelProyecto": self.nombre_del_proyecto,
            "header": {
                "link1": self.header_link1,
                "image1": self.header_image1,
                "alt1": self.header_alt1,
                "link2": self.header_link2,
                "image2": self.header_image2,
                "alt2": self.header_alt2,
                "link3": self.header_link3,
                "image3": self.header_image3,
                "alt3": self.header_alt3,
            },
            "cta": {
                "image": self.cta_image,
                "link": self.cta_link,
            },
            "garantias": {
                "image": self.garantias_image,
                "link": self.garantias_link,
            },
            "comunicate": {
                "image": self.comunicate_image,
                "link": self.comunicate_link,
            },
            "contactos": {
                "whatsapp": {
                    "image": self.whatsapp_image,
                    "number": self.whatsapp_number,
                    "alt": self.whatsapp_alt,
                },
                "mail": {
                    "image": self.mail_image,
                    "address": self.mail_address,
                    "alt": self.mail_alt,
                },
                "reunionVirtual": {
                    "image": self.reunion_virtual_image,
                    "link": self.reunion_virtual_link,
                },
            },
            "teEsperamos": {
                "image": self.te_esperamos_image,
                "link": self.te_esperamos_link,
            },
            "textoLegal": {
                "text": self.texto_legal_text,
            },
            "redesSociales": {
                "facebook": {
                    "image": self.facebook_image,
                },
                "twitter": {
                    "image": self.twitter_image,
                },
                "instagram": {
                    "image": self.instagram_image,
                },
            },
            "logo": {
                "image": self.logo_image,
            },
        }
