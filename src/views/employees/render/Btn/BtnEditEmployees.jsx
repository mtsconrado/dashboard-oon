import axios from 'axios';
import React, { useState } from 'react'
import urlDomain, { configCookies } from 'src/config';
import Cookies from 'js-cookie'
import { CButton, CRow, CCol, CModalHeader, CModalTitle } from '@coreui/react';
import { Modal } from 'react-bootstrap';
import BtnEdit from '../BtnEdit'
import Associate from '../associate/Associate';
import DelEmployeeLogin from '../DelEmpLogin';

import '../../css/btnEdit.css'

export default  function BtnEditEmployees({ item, retiraFiltro, dadosOri }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    // const token = Cookies.get('TokenID')
    // let config = {
    //     headers: {
    //         'Authorization': `Bearer ${token}`,
    //         'Content-Type': 'application/json;charset=UTF-8',
    //         "Access-Control-Allow-Origin": "*",
    //     }
    // };

    const [op1, setOp1] = useState(true)
    const [op2, setOp2] = useState(false)
    const [op3, setOp3] = useState(false)
    const choiceUser = () => { setOp1(true), setOp2(false), setOp3(false) }
    const choiceAddress = () => { setOp1(false), setOp2(true), setOp3(false) }
    const choiceVehicle = () => { setOp1(false), setOp2(false), setOp3(true) }

    function openModal(data) {
        const handleShow = setShow(true);
        const config = configCookies()

        axios
            .get(`${urlDomain}/employees/${item.id}`, config)
            .then((response) => {
                console.log(response);
            })
            .catch(r => {
                console.log('error', r), alert('Login expirado'), window.location.reload()
            })
    }
  return (
    <div>   
        <CButton size='sm' onClick={() => openModal(item)} color="secondary" className='icon-css' >
            Editar
        </CButton>

        <Modal
            show={show}
            onHide={handleClose}
            size="xl"
            >

            <CModalHeader closeButton={false}>
                <CModalTitle className="modal-title">Editar</CModalTitle>
            </CModalHeader>
            {item !== '' ?
            (<Modal.Body >
                <CRow>
                    <CCol className={op1 === true ? "nav-employees-active" : "nav-employees"} onClick={choiceUser}>
                        <label>Dados do funcionário</label>
                    </CCol>
                    <CCol className={op2 === true ? "nav-employees-active" : "nav-employees"} onClick={choiceAddress}>
                        <label>Associação</label>
                    </CCol>
                    <CCol className={op3 === true ? "nav-employees-active" : "nav-employees"} onClick={choiceVehicle}>
                        <label>Deletar funcionário</label>
                    </CCol>
                </CRow>
                <br />
                <CRow>
                    {op1 === true ?
                        <BtnEdit callBack={retiraFiltro} editar={item} handleClose={handleClose} />:null
                    }
                    { op2 === true ?
                        <Associate user={item} data={dadosOri} handleClose={handleClose} />:null
                    }
                    { op3 === true ?
                        <DelEmployeeLogin user={item}  handleClose={handleClose} />:null
                    }
                </CRow>
            </Modal.Body> 
            ): (
                <>
                    <br />
                    <br />
                    <Spinner animation="grow" variant="info" />
                    <br />
                    <br />
                </>)}


        </Modal>
    </div>
  )
}
