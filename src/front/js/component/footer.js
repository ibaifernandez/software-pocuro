import React, { Component } from "react";

export const Footer = () => (
    <footer className="footer mt-5 pt-4 pb-3 text-center" style={{ backgroundColor: '#aaa' }}>
        <p>
            Made with <i className="fa fa-heart text-danger" /> by{" "}
            <a style={{ color: 'white', textDecoration: 'none' }} href="http://www.ibaifernandez.com">Ibai Fernández</a>
        </p>
    </footer>
);
