import { useEffect, useRef, useState } from "react";
import { reqRespApi } from "../api/reqRes";
import { ReqRespUsuarioListado, Usuario } from "../interfaces/reqResp";


export const useUsuarios = () => {

const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const RefPage = useRef(1);
    useEffect(() => {
        // llamar función de carga de usuarios.
        FnCargarUsuarios();
    }, []);
    const FnCargarUsuarios = async () => {
        const japsResponse = await
        // llamado de la API
        reqRespApi.get<ReqRespUsuarioListado>('/users', {
            params: {
                page: RefPage.current
            }
        })
        .then(resp=> {
            //console.log(resp);   
            //console.log(resp.data);
            //console.log(resp.data.data);
            //console.log(resp.data.data[0].first_name);
            //console.log(resp.data.data);
            if ( resp.data.data.length > 0 ) {
                setUsuarios(resp.data.data);
                RefPage.current ++;
            }
            else {
                alert('No hay mas registros');
            }
        })
        .catch(err => console.log(err))
    }
         //funciones
            const FnPaginaSiguiente = ()  => {
                RefPage.current++;
                FnCargarUsuarios();
                    
            }
            const FnPaginaAnterior = () => {
                if(RefPage.current > 1){
                    RefPage.current -- ;
                    FnCargarUsuarios();
                }
            }

    return{
        usuarios,
        //FnCargarUsuarios,
        FnPaginaAnterior,
        FnPaginaSiguiente
    }
}
 