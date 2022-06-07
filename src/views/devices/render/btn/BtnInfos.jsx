import React, { useState } from 'react';
import axios from 'axios';
import { CButton } from '@coreui/react';

import urlDomain, { configCookies } from 'src/config';
import ModalInfo from '../components/ModalInfo';

const BtnInfos = (props) => {
  const { icon } = props;

  const [show, setShow] = useState(false);
  const [infoCustomer, setInfoCustomer] = useState(null);
  const [infos, setInfos] = useState(null);

  const handleClose = () => setShow(false);

  function openModal() {
    const { idCustomer, infos } = props
    const config = configCookies()

    setInfos(infos);
    setShow(true);
    axios
      .get(`${urlDomain}/customers/${idCustomer}`, config)
      .then((custumer) => setInfoCustomer(custumer.data))
      .catch((r) => {
        console.log('error', r), alert('Login expirado'), window.location.reload()
      })
  }

  return (
    <>
      <CButton size='sm' onClick={openModal} color='white'>
        {icon}
      </CButton>
      {
        !infoCustomer
          ? null
          : <ModalInfo
            infos={infos}
            infoCustomer={infoCustomer}
            show={show}
            handleClose={handleClose}
          />
      }
    </>
  )
}


export default  BtnInfos;
