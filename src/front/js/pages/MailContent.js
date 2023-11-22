import React, { useContext } from "react";
import { Context } from '../store/appContext';

export const MailContent = ({ store }) => {
    console.log("link1:", typeof store.email.header.link1);
    console.log("image1:", typeof store.email.header.image1);
    console.log("alt1:", typeof store.email.header.alt1);

    console.log(store.email)
    console.log("store.email.header.image1:" + store.email.header.image1);


    return (
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                <meta name="color-scheme" content="light dark" />
                <meta name="supported-color-schemes" content="light dark" />
                <title>{store.email.nombreDelProyecto}</title>
                <style type="text/css">
                    {`
            img {
              border: 0;
              max-width: 100%;
            }
          `}
                </style>
            </head>
            <body>
                <table width="600" border="0" cellSpacing="0" cellPadding="0" align="center" style={{ backgroundColor: '#eaeaea' }}>
                    <tbody>
                        <tr>
                            <td>
                                {/* ENCABEZADO */}
                                <tr>
                                    <td>
                                        <a href={store.email.header.link1} target="_blank">
                                            <img src={store.email.header.image1} alt={store.email.header.alt1} width="600" style={{ display: 'block', border: 0 }} />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href={store.email.header.link2} target="_blank">
                                            <img src={store.email.header.image2} alt={store.email.header.alt2} width="600" style={{ display: 'block', border: 0 }} />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href={store.email.header.link3} target="_blank">
                                            <img src={store.email.header.image3} alt={store.email.header.alt3} width="600" style={{ display: 'block', border: 0 }} />
                                        </a>
                                    </td>
                                </tr>
                                {/* FIN DE ENCABEZADO */}

                                {/* CTA */}
                                <tr>
                                    <td>
                                        <a href={store.email.cta.link} target="_blank">
                                            <img src={store.email.cta.image} alt={store.email.cta.alt} width="600" style={{ display: 'block', border: 0 }} />
                                        </a>
                                    </td>
                                </tr>
                                {/* FIN DE CTA */}

                                {/* GARANTÍAS */}
                                <tr>
                                    <td>
                                        <a href={store.email.garantias.link} target="_blank">
                                            <img src={store.email.garantias.image} alt={store.email.garantias.alt} width="600" style={{ display: 'block', border: 0 }} />
                                        </a>
                                    </td>
                                </tr>
                                {/* FIN DE GARANTÍAS */}


                                {/* COMUNICATE */}
                                <tr>
                                    <td>
                                        <a href={store.email.comunicate.link} target="_blank">
                                            <img src={store.email.comunicate.image} alt={store.email.comunicate.alt} width="600" style={{ display: 'block', border: 0 }} />
                                        </a>
                                    </td>
                                </tr>
                                {/* FIN DE COMUNICATE */}

                                {/* CONTACTO */}
                                <tr>
                                    <td>
                                        <table width="600" border="0" cellPadding="0" cellSpacing="0" align="center" style={{ backgroundColor: '#222' }}>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <a href={`https://wa.me/${store.email.contactos.whatsapp.number}`} target="_blank">
                                                            <img src={store.email.contactos.whatsapp.image} alt={store.email.contactos.whatsapp.alt} width="191" style={{ display: 'block', border: 0 }} />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <a href={`mailto:${store.email.contactos.mail.address}`} target="_blank">
                                                            <img src={store.email.contactos.mail.image} alt={store.email.contactos.mail.alt} width="217" style={{ display: 'block', border: 0 }} />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <a href={store.email.contactos.reunionVirtual.link} target="_blank">
                                                            <img src={store.email.contactos.reunionVirtual.image} alt={store.email.contactos.reunionVirtual.alt} width="192" style={{ display: 'block', border: 0 }} />
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                {/* FIN DE CONTACTO */}

                                {/* TE ESPERAMOS */}
                                <tr>
                                    <td>
                                        <a href={store.email.teEsperamos.link} target="_blank">
                                            <img src={store.email.teEsperamos.image} alt={store.email.teEsperamos.alt} width="600" style={{ display: 'block', border: 0 }} />
                                        </a>
                                    </td>
                                </tr>
                                {/* FIN DE TE ESPERAMOS */}

                                {/* DISCLAIMER */}
                                <tr>
                                    <td style={{ padding: '25px 40px 20px 40px', textAlign: 'justify', backgroundColor: '#222', color: '#fff', fontFamily: 'Arial, sans-serif', fontSize: '9px' }}>
                                        {store.email.textoLegal.text1}&nbsp;<a href="https://pocuro.cl/aviso-legal" style={{ color: '#fff' }} target="_blank">aviso legal</a>&nbsp;{store.email.textoLegal.text2}
                                    </td>
                                </tr>
                                {/* FIN DE DISCLAIMER */}




                                {/* FOOTER */}
                                <tr>
                                    <td>
                                        <table width="600" border="0" cellPadding="0" cellSpacing="0" align="center" style={{ backgroundColor: '#222222', borderTop: '2px solid #ffffff' }}>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <a href={store.email.redesSociales.facebook.link} target="_blank">
                                                            <img src={store.email.redesSociales.facebook.image} alt={store.email.redesSociales.facebook.alt} width="60" style={{ display: 'block', border: 0 }} />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <a href={store.email.redesSociales.twitter.link} target="_blank">
                                                            <img src={store.email.redesSociales.twitter.image} alt={store.email.redesSociales.twitter.alt} width="54" style={{ display: 'block', border: 0 }} />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <a href={store.email.redesSociales.instagram.link} target="_blank">
                                                            <img src={store.email.redesSociales.instagram.image} alt={store.email.redesSociales.instagram.alt} width="56" style={{ display: 'block', border: 0 }} />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <a href={store.email.logo.link} target="_blank">
                                                            <img src={store.email.logo.image} alt={store.email.logo.alt} width="430" style={{ display: 'block', border: 0 }} />
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontSize: '12px', padding: '10px 0', color: '#ffffff', backgroundColor: '#222222' }}>
                                        Si no desea recibir más nuestros correos, haga <a href="{unsubscribe_url}" style={{ color: '#ffffff' }}>click aquí</a>
                                    </td>
                                </tr>
                                {/* FIN DE FOOTER */}

                            </td>
                        </tr>
                    </tbody>
                </table>
                <script src="https://unpkg.com/prettier@latest/standalone.js"></script>
                <script src="https://unpkg.com/prettier/parser-html.js"></script>
            </body >
        </html >
    );
};