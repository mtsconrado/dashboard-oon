import React, {useEffect, useState} from 'react'

import { cilChevronLeft } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
    CCard,
    CCardBody,
    CCardFooter
} from '@coreui/react'

import ButtonOp from './ButtonOpPlan'


const Plano  = (props)=>{
    
    const [coverages, setCoverages] = useState([])

    const upadtePlans = () =>{
        props.attPage()
    }
    
    useEffect(()=>{
        if(props.dados.coverages != null){
            setCoverages(props.dados.coverages)
        }
    }, [])

    return (
    
        <>
            
           <CCard  className="text-center carta" style={{ width: '16rem' }}  >
                <CCardBody >
                    <h2>{props.dados.description}</h2>
                    <h5>R$ {props.dados.baseValue}</h5>     
                    <label > R$ {props.dados.valuePerKm} por km</label>
                    
                    <hr />

                    {

                        coverages.map((item, index) =>(
                            // <Cobertura cobertura={item} />
                            <div key={index.toString()} className='container-itens-plans'>
                                <CIcon className='bodyIcon' size='lg' icon={cilChevronLeft}  /> 
                                <label className='bodyTexto' > {item.description} </label>
                                <br />
                                <label className='bodyTextoPrice' >R${item.valuePerKm} </label>
                                <br />
                            </div>
                            
                        ))
                        
                        
                    } 
                    
                    
                </CCardBody>

                <CCardFooter>
                    {/* PASSAR PROPS DE CADA PLANO PARA EDICAO  */}
                    <div className='container-buttonOp'>
                        <ButtonOp dataPlan={props} attComp={upadtePlans} />
                    </div>
                    
                    <h4> XXXX{props.dados.N_ativos}</h4>
                    <h6>Planos {props.dados.nomePlano}</h6>
                    <label > {props.dados.porcentagem} X% a mais que no último mês </label>
                    <br />
                    <br />

                </CCardFooter>
            </CCard>
        </>
        
    )
}

export default  Plano