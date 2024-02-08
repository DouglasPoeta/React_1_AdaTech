 function Saudacao(){
    const nome = 'Douglas';
    const curso = 'React';

    const horas = new Date().getHours()
    let saudacao = 'Boa noite';

    if(horas > 12){
        saudacao = 'Boa noite';
    }else{
        saudacao = 'Bom dia';
    }
    
    return(
        <>
        <h3> {saudacao},{nome} </h3> 
        <h3>Voce esta no curso de {curso} </h3>
        </>
         
    )
}

export default Saudacao;