import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import ReactDOMServer from 'react-dom/server';
import * as prettier from "prettier/standalone";
import parserHTML from "prettier/parser-html";
import { MailContent } from "../pages/MailContent.js";

export const PocuroMailGenerator = () => {
    const { store, actions } = useContext(Context);
    const [htmlString, setHtmlString] = useState(null);

    const generateHtml = () => {
        console.log("La función generateHtml se está ejecutando");
        console.log(store);

        // Asegúrate de pasar el store al componente MailContent
        const mailContentComponent = <MailContent store={store} />;
        const generatedHtml = ReactDOMServer.renderToStaticMarkup(mailContentComponent);

        const formattedHtml = prettier.format(generatedHtml, {
            parser: 'html',
            plugins: [parserHTML],
        });

        setHtmlString(formattedHtml);
    };

    const copyToClipboard = (htmlString) => {
        navigator.clipboard.writeText(htmlString)
            .then(() => {
                console.log('Texto copiado al portapapeles');
            })
            .catch(err => {
                console.error('Error al copiar texto: ', err);
            });
    };

    return (
        <div className="text-center mt-5 mb-4">
            <button className="btn btn-primary" onClick={generateHtml}>
                Generar HTML
            </button>
            {htmlString && (
                <div>
                    <h2 className="mt-5">Código HTML para <pre style={{ display: 'inline', backgroundColor: 'blue', color: 'white' }}>{store.email.nombreDelProyecto}</pre></h2>
                    <pre
                        style={{ border: '2px solid black', borderRadius: '25px', padding: '25px', height: '400px', overflow: 'scroll', textAlign: 'left', width: '800px', margin: '25px auto', whiteSpace: 'pre-wrap' }}
                    >
                        {htmlString}
                    </pre>
                    <button className="btn btn-secondary" onClick={() => copyToClipboard(htmlString)}>
                        Copiar al Portapapeles
                    </button>
                </div>
            )}
        </div>
    );
};
