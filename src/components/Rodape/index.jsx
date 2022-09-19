import logo  from './img/logo_ifms.png'
export const Rodape = () =>{
    return(
        <div className="rodape">
            <img src= {logo}/>
            <p className='trabframe'>Trabalho de Frameworks</p>
            <div className='rodapenomes'>
            <p >Aluna: Anna Júlia kuttert Azambuja</p>
            <p >Aluna: Eduarda Vargas</p>
            </div>
        </div>
    )
}