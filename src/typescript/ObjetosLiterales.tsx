export const ObjetosLiterales = () => {
    //FIC: para indicar como luciran mis objetos
//Las interfaces no son ni sirven para crear instancias de objetos.
//se utilizan para validar
interface Persona {
    nombreCompleto: string,
    edad: number,
    direccion: Direccion
    /*direccion: {
        pais: string,
        estado: string,
        ciudad: string,
        calle: string,
        numero: number
    }*/
}
interface Direccion {
    pais: string,
    estado: string,
    ciudad: string,
    calle: string,
    numero: number
}
    const persona = {
        nombre: 'Martha',
        edad: 30,
        direccion: {
        pais: 'Mexico',
        estado: 'Nayarit',
        ciudad: 'Tepic',
        direccion: 'Conocido No. 533'
        }
}
    return (
        <div>
            <h3>Objetos Literales</h3>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {/*JSON.stringify(persona)*/}
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
    </div>
    )
}