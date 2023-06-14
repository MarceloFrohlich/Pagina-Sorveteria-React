import React from 'react';
import './style.css'
import Logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';

const Topo = () => (
    <header>
        <div className="limitar-secao topo">
            <div>
                <img src={Logo} alt="logo"></img>
            </div>
            <nav>
                <Link className="link-topo" to="/">Home</Link>
                <Link className="link-topo" to="/sabores">Sabores</Link>
                <Link className="link-topo" to="/sobre">Sobre</Link>
            </nav>
        </div>
    </header>
);

export default Topo;