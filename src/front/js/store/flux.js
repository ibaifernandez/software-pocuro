const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            email: {
                nombreDelProyecto: '',
                header: {
                    link1: '',
                    image1: '',
                    alt1: '',
                    link2: '',
                    image2: '',
                    alt2: '',
                    link3: '',
                    image3: '',
                    alt3: '',
                },
                cta: {
                    image: '',
                    link: '',
                    alt: 'Cotiza aquí',
                },
                garantias: {
                    image: '',
                    link: '',
                    alt: 'Garantías POCURO',
                },
                comunicate: {
                    image: '',
                    link: '',
                    alt: '¡Comunícate con nosotros!',
                },
                contactos: {
                    whatsapp: {
                        image: '',
                        number: '',
                        alt: '',
                    },
                    mail: {
                        image: '',
                        adress: '',
                        alt: '',
                    },
                    reunionVirtual: {
                        image: '',
                        link: '',
                        alt: 'Reunión virtual',
                    },
                },
                teEsperamos: {
                    image: '',
                    link: '',
                    alt: '¡Te esperamos!',
                },
                textoLegal: {
                    link: 'https://pocuro.cl/aviso-legal',
                    text: '',
                },
                redesSociales: {
                    facebook: {
                        image: '',
                        link: 'https://www.facebook.com/Pocuro.cl',
                        alt: 'Pocuro en Facebook',
                    },
                    linkedin: {
                        image: '',
                        link: 'https://www.linkedin.com/company/pocuro-cl/',
                        alt: 'Pocuro en LinkedIn',
                    },
                    instagram: {
                        image: '',
                        link: 'https://www.instagram.com/pocuro.cl/',
                        alt: 'Pocuro en Instagram',
                    },
                },
                logo: {
                    image: '',
                    link: 'https://pocuro.cl/',
                    alt: 'Web Pocuro',
                },
            }
        },
        actions: {
            updateEmail: (newData) => {
                setStore({
                    ...getStore(),
                    email: {
                        ...getStore().email,
                        ...newData,
                    }
                });
            },
            sendFormData: async (formData) => {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/save_user`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formData),
                    });

                    if (!response.ok) {
                        throw new Error('Error al enviar datos al servidor');
                    }

                    const data = await response.json();
                    console.log('Datos almacenados en el servidor:', data);
                } catch (error) {
                    console.error('Error:', error);
                }
            },

        }
    };
};

export default getState;
