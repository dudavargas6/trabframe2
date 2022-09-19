export const BuscadeODA = ({busca, buscaODA}) =>{
    return(
        <div className="busca">
            <input 
            className="buscainput"
            type="text" 
            name="busca"
            value={busca}
            placeholder="o que deseja buscar?"
            onChange={buscaODA}
            />
        </div>
    )
}