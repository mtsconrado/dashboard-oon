import React, { useState, useEffect } from 'react'



const Depart = (propsDepart) => {
    //[ COMERCIAL, MARKETING, OPERATIONAL, FINANCIAL, HUMAN_RESOURCES, ADMINISTRATION ]
    //[ SUPPORT, ADMIN, MANAGER ]
    const [departValue, setDepart] = useState('')

    useEffect(() => {
        if(propsDepart.departamento == 'COMERCIAL'){
            setDepart('Comercial')
        }else if(propsDepart.departamento == 'MARKETING'){
            setDepart('Marketing')
        }else if (propsDepart.departamento == 'OPERATIONAL'){
            setDepart('Operacional')
        }else if (propsDepart.departamento == 'FINANCIAL'){
            setDepart('Financeiro')
        }else if (propsDepart.departamento == 'HUMAN_RESOURCES'){
            setDepart('Recursos Humanos')
        }else if (propsDepart.departamento == 'ADMINISTRATION'){
            setDepart('Administração')
        }
    }, [])


    return (
        <div> 
            <div>{departValue}</div>
        </div>
    )
}

export default  Depart   
