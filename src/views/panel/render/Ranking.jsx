import React,{useState} from 'react'

import {
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardTitle,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CAvatar,
    CTableRow,
    
  } from '@coreui/react'

  import ButtonRelatory from '../btns/ButtonCall'
  import avatar from './../../../assets/images/avatars/1.jpg'
  const Ranking = () => {

    // Forçar o BFF lancar um top 5, nao mandar mais de 5 usuarios, mandar os usuarios me ordem , já
    const [userTop, setUserTop] = useState([
        {img:1, nome:'Ricardo Alves', pontuacao:325},
        {img:2, nome:'Carla Dias', pontuacao:305},
        {img:3, nome:'Lucia Carmo', pontuacao:280},
        {img:4, nome:'Daniel Bragantino', pontuacao:250},
        {img:5, nome:'Gustavo Antonio', pontuacao:200},
    ])
    return(
        <> 
            <CCard className='cardDirRanking'>
                <CCardBody>
                    <CCardTitle> Ranking desafio  </CCardTitle>
                    <label > Dezembro 2021</label>
                    
                    {/* Ver como vai fazer com esse button de relatory */}
                    <ButtonRelatory   />
                   <br />
                   <br />
                   <CTable align="middle" className="mb-0  ranking-render" borderless hover responsive>
                        
                        <CTableBody>
                            {/* Percorre os usuarios  */}
                            {userTop.map((item, index) => (
                                <CTableRow key={index.toString()}>
                                    <CTableDataCell  >
                                        <CAvatar src={avatar} size="md" />
                                    </CTableDataCell>
                                    <CTableDataCell >
                                        <p>{item.nome}</p>
                                    </CTableDataCell>
                                    <CTableDataCell >
                                        <p>{item.pontuacao}</p>
                                    </CTableDataCell>
                                </CTableRow>
                            ))}

                        </CTableBody>
                    </CTable>
                    
                </CCardBody>
            </CCard>
            
        </>
    )
  }

  export default  Ranking