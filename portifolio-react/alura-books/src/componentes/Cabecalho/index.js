import styles from './Cabecalho.module.css'

import React from 'react'
import Menu from '../Menu'

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            
            <Menu />

            {/* <img src={logo} alt="Logo da AluraBooks container__imagem" />
            <h1 className="container__titulo"><strong className="container__titulo-negrito">Alura</strong>Books</h1> */}

            {/* <ul className="opcoes">

                <input type="checkbox" id="opcoes-menu" className="opcoes__botao" />
                <label className="opcoes__rotulo">
                    <li className="opcoes__item">Categorias</li>
                </label>

                <ul className="lista-menu">
                    <li className="lista-menu__item">
                        <a href="#" className="lista-menu__link">Programação</a>
                    </li>
                    <li className="lista-menu__item">
                        <a href="#" className="lista-menu__link">Front-end</a>
                    </li>
                    <li className="lista-menu__item">
                        <a href="#" className="lista-menu__link">Infraestrutura</a>
                    </li>
                    <li className="lista-menu__item">
                        <a href="#" className="lista-menu__link">Business</a>
                    </li>
                    <li className="lista-menu__item">
                        <a href="#" className="lista-menu__link">Design & UX</a>
                    </li>
                </ul>

                <li className="opcoes__item"><a href="#" className="opcoes__link">Favoritos</a></li>
                <li className="opcoes__item"><a href="#" className="opcoes__link">Minha Estante</a></li>
            </ul>

            <div className="container">

                <div className="container">
                    <input type="checkbox" id="favoritos" className="container__botao-favoritos" />
                    <label>
                        <span className="cabecalho_menu-favoritos  favoritos"></span>
                    </label>

                </div>

                <div className="container">
                    <input type="checkbox" id="compras" className="container__botao-compras" />
                    <label className="container__link">
                        <span className="cabecalho_menu-compras  compras"></span>
                    </label>
                    <p className="container__texto">Minha sacola</p>
                </div>

                <div className="container">
                    <input type="checkbox" id="usuario" className="container__botao-usuario" />
                    <label className="container__link">
                        <span className="cabecalho__menu-usuario usuario"></span>
                        <p className="container__texto">Meu perfil</p>
                    </label>
                    <div className="menu-usuario">
                        <h2 className="menu-usuario__titulo">Login</h2>
                        <p className="menu-usuario__texto"></p>
                        <input type="email" placeholder="Login" className="menu-usuario__email" />
                        <input type="password" placeholder="Senha" className="menu-usuario__senha" />
                    </div>


                </div>
            </div> */}

        </header>
    )
}
