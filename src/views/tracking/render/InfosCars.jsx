import React, {useState} from 'react'

import DateCreated from 'src/views/devices/render/components/DateCreated';
import {
    CButton,
    CTable,
    CNavbar,
    CCollapse,
    CNavbarNav,
    CNavbarToggler,
    CTableHead,
    CTableHeaderCell,
    CTableDataCell,
    CTableRow,
    CTableBody  
} from '@coreui/react';
import { MdOutlineAlignHorizontalLeft } from 'react-icons/md';

const InfoCars = () =>{
    const [visible, setVisible] = useState(false)  

   // obter informaçoes via end-point assinaturas
   const devices = [
       {placa:"xxx-1234", ultimoSincronismo: < DateCreated date={new Date()} />, distancia:39, consumoKm: 10 },
       {placa:"xyz-4321", ultimoSincronismo: < DateCreated date={new Date()} />, distancia:19, consumoKm: 20 },
       {placa:"yyy-2222", ultimoSincronismo: < DateCreated date={new Date()} />, distancia:9, consumoKm: 5},
       {placa:"ppp-1234", ultimoSincronismo: < DateCreated date={new Date()} />, distancia:109, consumoKm: 50 },
   ]

    return (
        <div > 
            <div>
                <CNavbar expand="lg">
                    <CNavbarToggler
                      aria-label="Toggle navigation"
                      aria-expanded={visible}
                    />
                    <CCollapse className="navbar-collapse" visible={visible}>
                      {/* <CIcon icon={cilUser } size="xl"/>
                      <CNavbarBrand> 
                        {/* <CFormSelect 
                          aria-label="Default select example"
                          options={options}
                          onChange={menuUsers}
                        
                        />
                      </CNavbarBrand> */}
                      <CNavbarNav className="me-auto mb-2 mb-lg-0">
                      </CNavbarNav>
                      {/* <CForm className="d-flex"> */}
                        {/* <CFormInput type="text" onChange={Pegandobusca} value={busca2} size ='md' className="me-2" placeholder="Pesquise" /> */}
                        {/* <CFormInput type="text"  size ='sm' className="me-2" placeholder="Pesquise uma placa" />
                        <CButton   variant='ghost'  color="secondary" >
                          <BsSearch className='user-icons' />
                        </CButton> */}
                        {/* <CButton onClick={retiraFiltro}   variant='ghost'  color="secondary" >
                          <BsArrowClockwise className='user-icons' />
                        </CButton> */}
                      {/* </CForm> */}
                    </CCollapse>
                </CNavbar>
            </div>
            <div>
                <CTable align="middle" responsive striped>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col" className="w-20">Placa veículo</CTableHeaderCell>
                            <CTableHeaderCell scope="col" className="w-20">Último sincronismo</CTableHeaderCell>
                            <CTableHeaderCell scope="col" className="w-20">Quilomentragem</CTableHeaderCell>
                            <CTableHeaderCell scope="col" className="w-20">Consumo/km</CTableHeaderCell>
                            <CTableHeaderCell scope="col" className="w-20">Gráfico</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {devices.map((device, index) => {
                            return (
                                <CTableRow key={index.toString()} >
                                  <CTableDataCell>{device.placa}</CTableDataCell>
                                  <CTableDataCell>{device.ultimoSincronismo}</CTableDataCell>
                                  <CTableDataCell>{device.distancia} km</CTableDataCell>
                                  <CTableDataCell>{device. consumoKm}km / L</CTableDataCell>
                                  <CTableDataCell>
                                    <CButton variant="ghost"
                                    color="dark">
                                      <MdOutlineAlignHorizontalLeft />
                                    </CButton>
                                  </CTableDataCell>
                                </CTableRow>
                            )
                        })}
                    </CTableBody>
                </CTable>
            </div>
        </div>
    )
}

export default  InfoCars