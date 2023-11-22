import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1">Generador de emails de POCURO</span>
                </Link>
                <div className="ml-auto">
                    <a href="https://pocuro.cl" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-primary">Visita la web de POCURO</button>
                    </a>
                </div>
            </div>
        </nav>
    );
};
