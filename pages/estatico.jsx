export const getStaticProps = async () => {
    const resp = await fetch('http://localhost:3000/api/random')
    const dados =  await resp.json()
    
    return {
        revalidate: 10, // A cada 10 segundos a página será regerada
        props: {
            valor: dados.valor
        }
    }
}

const Estatico = props => {

    return(
        <div>
            <h1>Conteúdo Estático</h1>
            <h2>Último valor = {props.valor}</h2>
        </div>
    );
}

export default Estatico;