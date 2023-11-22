import React from "react";
import { MailContent } from "../pages/MailContent.js";
import { PocuroMailGenerator } from "./PocuroMailGenerator.js";
import { Context } from '../store/appContext';

export const PocuroMailBuilder = () => {
    const { store } = React.useContext(Context);

    return (
        <>
            <MailContent store={store} />
            <PocuroMailGenerator />
        </>
    );
};
