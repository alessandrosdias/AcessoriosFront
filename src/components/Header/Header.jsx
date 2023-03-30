import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <ul className="lista">
            <li><Link to ={"/acessorios"}>Acessorios</Link></li>
            <li><Link to ={"/acessorios/cadastro"}>Cadastro</Link></li>
            <li><Link to ={"/acessorios/deletar"}>Deletar</Link></li>
            <li><Link to ={"/acessorios/atualizar"}>Atualizar</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
