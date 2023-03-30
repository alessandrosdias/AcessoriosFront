import { Routes, Route } from "react-router-dom";
import Acessorios from "../pages/Usuarios/Acessorios";
import CadastrarAcessorios from "../pages/CadastrarAcessorios/CadastrarAcessorios"
import DeletarAcessorios from "../pages/DeletarAcessorios/DeletarAcessorios";
import AtualizarAcessorios from "../pages/AtualizarAcessorios/AtualizarAcessorios";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/acessorios" element={<Acessorios/>} />
      <Route path="/acessorios/cadastro" element={<CadastrarAcessorios/>} />
      <Route path="/acessorios/deletar" element={<DeletarAcessorios/>} />
      <Route path="/acessorios/atualizar" element={<AtualizarAcessorios/>} />
    </Routes>
  );
};

export default Rotas;
