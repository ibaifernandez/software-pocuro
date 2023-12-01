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
            fetchData: async () => {
                try {
                    // Obtener datos del correo electrónico
                    const emailResponse = await fetch(`${process.env.BACKEND_URL}/api/get_project_names`);
                    if (!emailResponse.ok) {
                        throw new Error(`Error: ${emailResponse.status} - ${emailResponse.statusText}`);
                    }
                    const emailData = await emailResponse.json();
                    console.log('Email Data:', emailData);  // Agregado para depuración
                    console.log('Email Data (email_data):', emailData.project_names);  // Agregado para depuración

                    // Actualiza el estado global con los datos obtenidos
                    getActions().updateEmailData(emailData.project_names);
                    console.log("prevStore", getStore().prevStore);
                    getActions().updateProjectNames(emailData.project_names);
                    console.log("prevStore II", getStore().prevStore);
                    setStore({
                        ...getStore(),
                        email: {
                            ...getStore().email,
                            ...emailData.project_names,
                        }
                    });

                } catch (error) {
                    console.error('Error:', error);
                }
            },

            updateEmailData: (emailData) => {
                console.log("emailData", emailData)
                let prevStore = getStore();
                console.log("115", prevStore)
                setStore((prevStore) => ({
                    ...prevStore,
                    email: {
                        ...prevStore.nombreDelProyecto,
                        // Actualiza con los nuevos datos
                        nombreDelProyecto: emailData.project_names
                    }
                }));
                console.log("124", prevStore)
            },

            updateProjectNames: (projectNames) => {
                console.log("projectNames 127", projectNames)
                console.log("prevStore 128", getStore().prevStore)
                setStore((prevStore) => ({
                    ...prevStore,
                    email: {
                        ...prevStore.email,
                        // Actualiza con los nuevos nombres de proyectos
                        nombreDelProyecto: projectNames
                    }
                }));
            },

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
