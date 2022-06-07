import React, { Component, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { CButton } from '@coreui/react'
import { MdPhotoCamera } from 'react-icons/md'
import { Button, Modal, } from 'react-bootstrap';

import CarrocelImg from '../components/CarrocelImg'
import UrlDomain, { configCookies } from '../../../../config'

import '../../css/btnMidia.css'

const BtnMidia = (props) => {
    const { midia } = props;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [data, setData] = useState()

    function verifica() {
        const config = configCookies()

        axios
            .get(`${UrlDomain}/images/vehicle/${midia}`, config)
            .then((response) => {
                setData(response.data)
                setShow(true);
            })
            .catch(r => {
                console.log('error', r), alert('Login expirado'), window.location.reload()
            })

    }

    // function salvarEdicoes() {
    //     setShow(false);
    // }

    return (
        <>
            <div className='container-device-midia-actions'>
                <CButton onClick={() => verifica(midia)} size='sm' className='icon-css-midia' color="black" >
                    <MdPhotoCamera size={24} color="black" />
                </CButton>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Fotos do Veículo </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CarrocelImg midia={data} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Sair
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default  BtnMidia;
