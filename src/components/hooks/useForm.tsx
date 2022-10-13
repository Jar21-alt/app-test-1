import { useState } from "react";


export const useForm = <T extends object> (formulario: T) => {
 
    
    //const onChange = (value:string, campo:string) => {
        const onChange = (value:string, campo: keyof T) => {
        setState({
            ...state,
            [campo]: value
        });
    }

    const [state, setState] = useState(
        //{
        //email: 'test@test.com',
        //password: '123456'
        formulario
    //}
    )

    return {
        ...state,
        formulario: state,
        onChange
    }
}
