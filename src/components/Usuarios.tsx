import { useEffect, useRef, useState } from "react";
import { reqRespApi } from '../api/reqRes';
import { ReqRespUsuarioListado, Usuario } from '../interfaces/reqResp';
import { useUsuarios } from '../components/useUsuarios';

export const Usuarios = () => {

    const [usuario, setUsuarios] = useState<Usuario[]>([]);
    const { usuarios, FnPaginaAnterior, FnPaginaSiguiente} = useUsuarios();

    const RefPage = useRef(0);

    useEffect(() => {
        
        FnCargaUsuarios();
         }, []);

    const FnCargaUsuarios = async()=>{
        const Response= await

        reqRespApi.get<ReqRespUsuarioListado>('/users', {
            params: {
                page: RefPage.current
            }
        }).then(resp=> {
               //  console.log(resp.data.data[0].first_name);
               //  console.log(resp.data.data)
               //  console.log(resp.data.data[0].email)
               //  console.log(resp.data.data)

               if(resp.data.data.length>0){
                setUsuarios(resp.data.data);
                    //RefPage.current;
               }
               else{
                alert('Ya no hay registros')
               }
              
             })
         .catch(err => console.log(err))
    }



   


    const renderItem = (usuario: Usuario) => {
        return (
            <tr key = {usuario.id.toString()}>
                <td>
                    <img src={usuario.avatar} alt = {usuario.first_name}
                    style = {{
                        width: 50,
                        borderRadius: 100
                    }}
                    ></img>
                </td>
                <td>
                    {usuario.first_name} {usuario.last_name}
                </td>
                <td>
                    {usuario.email}
                </td>
            </tr>
            
        )
    }


    return (
        <>
            <h3>Usuarios</h3>
            <table className = "table">
                    <thead>
                          <tr>
                                <th>
                                    Avatar
                                </th>
                                <th>
                                    Nombre
                                </th>
                                 <th>
                                    email
                                </th>
                            </tr>
                    </thead>
                    <tbody>
                        {
                        usuarios.map((ArgUsuario: Usuario) => renderItem(ArgUsuario))
                    }
                </tbody>
            </table>
            <button
                className="btn btn-primary"
                onClick={FnPaginaAnterior}
                >
                Anterior       
            </button>
            &nbsp;           
            <button
                className="btn btn-primary"
                onClick={FnPaginaSiguiente}
                >
                Siguiente       
            </button>
        </>
    )
    
}
