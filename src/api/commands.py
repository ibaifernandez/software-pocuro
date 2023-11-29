import click
from api.models import db, Email 

def setup_commands(app):
    
    @app.cli.command("insert-test-emails")
    @click.argument("count")
    def insert_test_emails(count):
        print("Creating test emails")
        common_info = {
        "textoLegal_link": "https://pocuro.cl/aviso-legal",
        "redesSociales": {
            "facebook": {
                "link": "https://www.facebook.com/Pocuro.cl",
                "alt": "Pocuro en Facebook",
            },
            "linkedin": {
                "link": "https://www.linkedin.com/company/pocuro-cl/",
                "alt": "Pocuro en LinkedIn",
            },
            "instagram": {
                "link": "https://www.instagram.com/pocuro.cl/",
                "alt": "Pocuro en Instagram",
            },
        },
        "logo": {
            "link": "https://pocuro.cl/",
            "alt": "Web Pocuro",
        },
    }
        for x in range(1, int(count) + 1):
            email = Email()
            email.nombreDelProyecto = f"Test Project {x}"
            email.header_link1 = f"Test Link 1 for Project {x}"
            email.header_image1 = f"Test Image 1 for Project {x}"
            email.header_alt1 = f"Test Alt 1 for Project {x}"
            email.header_link2 = f"Test Link 2 for Project {x}"
            email.header_image2 = f"Test Image 2 for Project {x}"
            email.header_alt2 = f"Test Alt 2 for Project {x}"
            email.header_link3 = f"Test Link 3 for Project {x}"
            email.header_image3 = f"Test Image 3 for Project {x}"
            email.header_alt3 = f"Test Alt 3 for Project {x}"
            email.cta_image = f"Test CTA Image for Project {x}"
            email.cta_link = f"Test CTA Link for Project {x}"
            email.cta_alt = f"Test CTA Alt for Project {x}"
            email.garantias_image = f"Test Garantias Image for Project {x}"
            email.garantias_link = f"Test Garantias Link for Project {x}"
            email.garantias_alt = f"Test Garantias Alt for Project {x}"
            email.comunicate_image = f"Test Comunicate Image for Project {x}"
            email.comunicate_link = f"Test Comunicate Link for Project {x}"
            email.comunicate_alt = f"Test Comunicate Alt for Project {x}"
            email.contactos_whatsapp_image = f"Test Contactos Whatsapp Image for Project {x}"
            email.contactos_whatsapp_number = f"Test Contactos Whatsapp Number for Project {x}"
            email.contactos_whatsapp_alt = f"Test Contactos Whatsapp Alt for Project {x}"
            email.contactos_mail_image = f"Test Contactos Mail Image for Project {x}"
            email.contactos_mail_address = f"Test Contactos Mail Address for Project {x}"
            email.contactos_mail_alt = f"Test Contactos Mail Alt for Project {x}"
            email.contactos_reunionVirtual_image = f"Test Contactos Reunion Virtual Image for Project {x}"
            email.contactos_reunionVirtual_link = f"Test Contactos Reunion Virtual Link for Project {x}"
            email.contactos_reunionVirtual_alt = f"Test Contactos Reunion Virtual Alt for Project {x}"
            email.teEsperamos_image = f"Test Te Esperamos Image for Project {x}"
            email.teEsperamos_link = f"Test Te Esperamos Link for Project {x}"
            email.teEsperamos_alt = f"Test Te Esperamos Alt for Project {x}"
            email.textoLegal_text = f"Test Texto Legal Text for Project {x}"
            email.textoLegal_link = common_info["textoLegal_link"]
            email.redesSociales_facebook_link = common_info["redesSociales"]["facebook"]["link"]
            email.redesSociales_facebook_alt = common_info["redesSociales"]["facebook"]["alt"]
            email.redesSociales_linkedin_link = common_info["redesSociales"]["linkedin"]["link"]
            email.redesSociales_linkedin_alt = common_info["redesSociales"]["linkedin"]["alt"]
            email.redesSociales_instagram_link = common_info["redesSociales"]["instagram"]["link"]
            email.redesSociales_instagram_alt = common_info["redesSociales"]["instagram"]["alt"]
            email.logo_link = common_info["logo"]["link"]
            email.logo_alt = common_info["logo"]["alt"]
            db.session.add(email)
            db.session.commit()
            print("Email: ", email.nombreDelProyecto, " created.")

        print("All test emails created")

    @app.cli.command("insert-test-data")
    def insert_test_data():
        pass
