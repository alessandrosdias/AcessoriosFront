import React from 'react'
import "./CardAcessorios.css"

const CardAcessorios = ({ nome, tipo, descricao, preco, img}) => {
  return (
    <div className='container'>
        <h2>Acessorio</h2>
        <p>Nome: {nome}</p>
        <p>tipo: {tipo}</p>
        <p>descricao: {descricao}</p>
        <p>preco: {preco}</p>
        <img src= {img} />
    </div>
  )
}

export default CardAcessorios