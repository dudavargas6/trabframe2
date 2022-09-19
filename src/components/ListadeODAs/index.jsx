export const ListadeODA = ({nome, usuario, descricao, data_inclusao, palavras_chave }) => {
    return(

        <div className="postagens">          
                <h1 className="">Nome: {nome}</h1>
                <p className="">Usuario: {usuario}</p>
                <p className="">Descrição {descricao}</p>
                <p className="">Data: {data_inclusao}</p>
                <p className="">Palavra chave: {palavras_chave}</p>
        </div>
    )}