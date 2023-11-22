import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importa Link
import "../../styles/home.css";

export const Home = () => {
    const { store, actions } = useContext(Context);

    const [localEmailData, setLocalEmailData] = useState({
        nombreDelProyecto: store.email.nombreDelProyecto,
        unsubscribeUrl: store.email.unsubscribeUrl,
        header: {
            link1: store.email.header.link1,
            image1: store.email.header.image1,
            alt1: store.email.header.alt1,
            link2: store.email.header.link2,
            image2: store.email.header.image2,
            alt2: store.email.header.alt2,
            link3: store.email.header.link3,
            image3: store.email.header.image3,
            alt3: store.email.header.alt3,
        },
        cta: {
            image: store.email.cta.image,
            link: store.email.cta.link,
        },
        garantias: {
            image: store.email.garantias.image,
            link: store.email.garantias.link,
        },
        comunicate: {
            image: store.email.comunicate.image,
            link: store.email.comunicate.link,
        },
        contactos: {
            whatsapp: {
                image: store.email.contactos.whatsapp.image,
                number: store.email.contactos.whatsapp.link,
            },
            mail: {
                image: store.email.contactos.mail.image,
                adress: store.email.contactos.mail.link,
            },
            reunionVirtual: {
                image: store.email.contactos.reunionVirtual.image,
                link: store.email.contactos.reunionVirtual.link,
            },
        },
        teEsperamos: {
            image: store.email.teEsperamos.image,
            link: store.email.teEsperamos.link,
            alt: store.email.teEsperamos.alt,
        },
        textoLegal: store.email.textoLegal,
        redesSociales: {
            facebook: {
                image: store.email.redesSociales.facebook.image,
                link: store.email.redesSociales.facebook.link,
                alt: store.email.redesSociales.facebook.alt,
            },
            twitter: {
                image: store.email.redesSociales.twitter.image,
                link: store.email.redesSociales.twitter.link,
                alt: store.email.redesSociales.twitter.alt,
            },
            instagram: {
                image: store.email.redesSociales.instagram.image,
                link: store.email.redesSociales.instagram.link,
                alt: store.email.redesSociales.instagram.alt,
            },
        },
        logo: {
            image: store.email.logo.image,
            link: store.email.logo.link,
            alt: store.email.logo.alt,
        },
    });

    const handleInputChange = (e) => {
        setLocalEmailData({ localEmailData, [e.target.name]: e.target.value });
        console.log("localEmailData", localEmailData);
        console.log("Submitting form with data:", localEmailData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        actions.updateEmail(...localEmailData);
        console.log(store);
    };

    return (
        <div className="mt-5">
            <div className="d-flex justify-content-center">
                {/* Formulario de encabezado */}
                <Form className="w-50" onSubmit={handleSubmit}>
                    <h3 className="text-center mb-5">Nombre del proyecto</h3>
                    <Form.Group controlId="formProjectName">
                        <Form.Label>Nombre del proyecto</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre del proyecto"
                            name="projectName"
                            onChange={(e) => actions.updateEmail({ nombreDelProyecto: e.target.value })}
                            required
                        />
                    </Form.Group>

                    <h3 className="text-center mt-5">Header</h3>

                    <h4 className="text-center mb-3">Primera imagen</h4>

                    <Form.Group controlId="formHeaderLink1">
                        <Form.Label>Enlace de la primera imagen del encabezado (WhatsApp)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enlace de la primera imagen del encabezado"
                            name="link1"
                            onChange={(e) => {
                                actions.updateEmail({
                                    header: {
                                        ...store.email.header,
                                        link1: e.target.value
                                    }
                                });
                                console.log(store.email.header.link1); // Verifica el valor aquí
                            }}
                            required
                        />
                    </Form.Group>


                    <Form.Group controlId="formHeaderImage1">
                        <Form.Label className="mt-3">Enlace a la 1ª imagen del encabezado (SRC)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter header image URL 1"
                            name="headerImage1"
                            onChange={(e) => actions.updateEmail({
                                header: {
                                    ...store.email.header,
                                    image1: e.target.value
                                }
                            })}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formHeaderAlt1">
                        <Form.Label className="mt-3">Texto alt de la 1ª imagen del encabezado (<pre style={{ display: 'inline' }}>alt</pre>)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter header alt text 1"
                            name="headerAlt1"
                            onChange={(e) => actions.updateEmail({
                                header: {
                                    ...store.email.header,
                                    alt1: e.target.value
                                }
                            })} required
                        />
                    </Form.Group>

                    {/* Segunda imagen del encabezado */}
                    <h4 className="text-center mt-3">Segunda imagen</h4>

                    <Form.Group controlId="formHeaderLink2">
                        <Form.Label>Enlace de la segunda imagen del encabezado</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enlace de la segunda imagen del encabezado"
                            name="link2"
                            onChange={(e) => actions.updateEmail({
                                header: {
                                    ...store.email.header,
                                    link2: e.target.value
                                }
                            })}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formHeaderImage2">
                        <Form.Label className="mt-3">Enlace a la 2ª imagen del encabezado (SRC)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter header image URL 2"
                            name="headerImage2"
                            onChange={(e) => actions.updateEmail({
                                header: {
                                    ...store.email.header,
                                    image2: e.target.value
                                }
                            })}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formHeaderAlt2">
                        <Form.Label className="mt-3">Texto alt de la 2ª imagen del encabezado (<pre style={{ display: 'inline' }}>alt</pre>)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter header alt text 2"
                            name="headerAlt2"
                            onChange={(e) => actions.updateEmail({
                                header: {
                                    ...store.email.header,
                                    alt2: e.target.value
                                }
                            })}
                            required
                        />
                    </Form.Group>

                    {/* Tercera imagen del encabezado */}
                    <h4 className="text-center mt-3">Tercera imagen</h4>

                    <Form.Group controlId="formHeaderLink3">
                        <Form.Label>Enlace de la tercera imagen del encabezado</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enlace de la tercera imagen del encabezado"
                            name="link3"
                            onChange={(e) => actions.updateEmail({
                                header: {
                                    ...store.email.header,
                                    link3: e.target.value
                                }
                            })}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formHeaderImage3">
                        <Form.Label className="mt-3">Enlace a la 3ª imagen del encabezado (SRC)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter header image URL 3"
                            name="headerImage3"
                            onChange={(e) => actions.updateEmail({
                                header: {
                                    ...store.email.header,
                                    image3: e.target.value
                                }
                            })}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formHeaderAlt3">
                        <Form.Label className="mt-3">Texto alt de la 3ª imagen del encabezado (<pre style={{ display: 'inline' }}>alt</pre>)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter header alt text 3"
                            name="headerAlt3"
                            onChange={(e) => actions.updateEmail({
                                header: {
                                    ...store.email.header,
                                    alt3: e.target.value
                                }
                            })}
                            required
                        />
                    </Form.Group>

                    {/* Botón CTA principal */}
                    <h3 className="text-center mt-5">Botón del CTA principal</h3>

                    <Form.Group controlId="formCTALink">
                        <Form.Label>Enlace del botón del CTA principal</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enlace del botón del CTA principal"
                            name="ctaLink"
                            onChange={(e) => actions.updateEmail({
                                cta: {
                                    ...store.email.cta,
                                    link: e.target.value
                                }
                            })}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formCTAImage">
                        <Form.Label className="mt-3">Enlace de la imagen del CTA (SRC)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter CTA image URL"
                            name="ctaImage"
                            onChange={(e) => actions.updateEmail({
                                cta: {
                                    ...store.email.cta,
                                    image: e.target.value
                                }
                            })}
                            required
                        />
                    </Form.Group>

                    {/* Fin del CTA */}

                    {/* Garantías */}
                    <h3 className="text-center mt-5">Garantías</h3>

                    <Form.Group controlId="formGarantiasLink">
                        <Form.Label>Enlace de las garantías</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enlace de las garantías"
                            name="garantiasLink"
                            onChange={(e) => actions.updateEmail({
                                garantias: {
                                    ...store.email.garantias,
                                    link: e.target.value
                                }
                            })}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formGarantiasImage">
                        <Form.Label className="mt-3">Enlace de la imagen de las garantías (SRC)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter garantias image URL"
                            name="garantiasImage"
                            onChange={(e) => actions.updateEmail({
                                garantias: {
                                    ...store.email.garantias,
                                    image: e.target.value
                                }
                            })}
                            required
                        />
                    </Form.Group>
                    {/* Fin de «Garantías» */}

                    {/* Comunícate */}
                    <h3 className="text-center mt-5">Comunícate</h3>

                    <Form.Group controlId="formComunicateLink">
                        <Form.Label>Enlace de la sección "Comunícate"</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enlace de la sección Comunícate"
                            name="comunicateLink"
                            onChange={(e) => actions.updateEmail({
                                comunicate: {
                                    ...store.email.comunicate,
                                    link: e.target.value
                                }
                            })}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formComunicateImage">
                        <Form.Label className="mt-3">Enlace de la imagen de la sección "Comunícate" (SRC)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Comunicate image URL"
                            name="comunicateImage"
                            onChange={(e) => actions.updateEmail({
                                comunicate: {
                                    ...store.email.comunicate,
                                    image: e.target.value
                                }
                            })}
                            required
                        />
                    </Form.Group>

                    {/* Fin de «Comunícate» */}

                    {/* Contactos - WhatsApp */}

                    <h3 className="text-center mt-5">Contactos</h3>

                    {/* WhatsApp */}

                    <h4 className="text-center">WhatsApp</h4>

                    <Form.Group controlId="formWhatsAppNumber">
                        <Form.Label>Número de WhatsApp</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Número de WhatsApp"
                            name="whatsAppNumber"
                            onChange={(e) => actions.updateEmail({
                                contactos: {
                                    ...store.email.contactos,
                                    whatsapp: {
                                        ...store.email.contactos.whatsapp,
                                        number: e.target.value
                                    }
                                }
                            })}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formWhatsAppImage">
                        <Form.Label className="mt-3">Enlace de la imagen de WhatsApp (SRC)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter WhatsApp image URL"
                            name="whatsAppImage"
                            onChange={(e) => actions.updateEmail({
                                contactos: {
                                    ...store.email.contactos,
                                    whatsapp: {
                                        ...store.email.contactos.whatsapp,
                                        image: e.target.value
                                    }
                                }
                            })}
                            required
                        />
                    </Form.Group>

                    {/* Mail */}

                    <h4 className="text-center">Correo electrónico</h4>

                    <Form.Group controlId="formMailLink">
                        <Form.Label>Dirección de correo electrónico</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Dirección de correo electrónico"
                            name="emailAddress"
                            onChange={(e) => actions.updateEmail({
                                contactos: {
                                    ...store.email.contactos,
                                    mail: {
                                        ...store.email.contactos.mail,
                                        address: e.target.value
                                    }
                                }
                            })}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formMailImage">
                        <Form.Label className="mt-3">Enlace de la imagen de correo electrónico (SRC)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter email image URL"
                            name="mailImage"
                            onChange={(e) => actions.updateEmail({
                                contactos: {
                                    ...store.email.contactos,
                                    mail: {
                                        ...store.email.contactos.mail,
                                        image: e.target.value
                                    }
                                }
                            })}
                            required
                        />
                    </Form.Group>

                    {/* Reunión Virtual */}

                    <h4 className="text-center">Reunión Virtual</h4>

                    <Form.Group controlId="formVirtualMeetingLink">
                        <Form.Label>Enlace para la reunión virtual</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter virtual meeting link"
                            name="virtualMeetingLink"
                            onChange={(e) => actions.updateEmail({
                                contactos: {
                                    ...store.email.contactos,
                                    reunionVirtual: {
                                        ...store.email.contactos.reunionVirtual,
                                        link: e.target.value
                                    }
                                }
                            })}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formVirtualMeetingImage">
                        <Form.Label className="mt-3">Enlace de la imagen para la reunión virtual (SRC)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter virtual meeting image URL"
                            name="virtualMeetingImage"
                            onChange={(e) => actions.updateEmail({
                                contactos: {
                                    ...store.email.contactos,
                                    reunionVirtual: {
                                        ...store.email.contactos.reunionVirtual,
                                        image: e.target.value
                                    }
                                }
                            })}
                            required
                        />
                    </Form.Group>

                    {/* DIRECCIÓN (WAZE) */}
                    <h3 className="text-center mt-5">Dirección (Waze)</h3>

                    <Form.Group controlId="formTeEsperamosLink">
                        <Form.Label>Dirección (Waze)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Dirección (Waze)"
                            name="teEsperamosLink"
                            onChange={(e) => actions.updateEmail({
                                teEsperamos: {
                                    ...store.email.teEsperamos,
                                    link: e.target.value
                                }
                            })}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formTeEsperamosImage">
                        <Form.Label className="mt-3">Enlace de la imagen de 'Te Esperamos' (SRC)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Imagen de Dirección (Waze)"
                            name="teEsperamosImage"
                            onChange={(e) => actions.updateEmail({
                                teEsperamos: {
                                    ...store.email.teEsperamos,
                                    image: e.target.value
                                }
                            })}
                            required
                        />
                    </Form.Group>

                    {/* DISCLAIMER */}
                    <h3 className="text-center mt-5">Aviso legal</h3>

                    <Form.Group controlId="formDisclaimerText1">
                        <Form.Label>Primera mitad del aviso legal</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Primera mitad del aviso legal"
                            name="disclaimerText1"
                            onChange={(e) => actions.updateEmail({
                                textoLegal: {
                                    ...store.email.textoLegal,
                                    text1: e.target.value
                                }
                            })}
                            required
                        />
                    </Form.Group>


                    <Form.Group controlId="formDisclaimerText2">
                        <Form.Label className="mt-5">Segunda mitad del aviso legal</Form.Label>
                        <div className="text-white bg-danger p-1 text-center mb-3">⚠️⚠️⚠️ ¡¡¡Atención!!! ⚠️⚠️⚠️ Único campo no requerido del formulario ⚠️⚠️⚠️</div>
                        <Form.Control
                            type="text"
                            placeholder="Texto 2 del Disclaimer"
                            name="disclaimerText2"
                            onChange={(e) => actions.updateEmail({
                                textoLegal: {
                                    ...store.email.textoLegal,
                                    text2: e.target.value
                                }
                            })}
                        />
                    </Form.Group>


                    <div className="d-flex justify-content-center">
                        <Button type="submit" className="generar-correo">
                            Validar & Generar
                        </Button>
                        <Link to="/pocuromailbuilder" className="generar-correo">
                            <span>Ir a </span>&nbsp;<span style={{ fontStyle: 'italic' }}>output</span>
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    );

};
