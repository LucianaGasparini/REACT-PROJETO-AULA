import Botao from './Botao';
import BotaoClasse from './BotaoClasse';
import 'cliente.css';

const Cliente = ({nome}) =>{
creturn (
    <div className="cliente">
      <h1>Dados do cliente</h1>
      <p>Nome: {nome}</p>

        <Botao>Cadastrar</Botao>
        <Botao>Editar</Botao>
        <BotaoClasse>Deletar</BotaoClasse>


        </div>
    );
};

export default Cliente;