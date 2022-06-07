import {
  CButton, CFormInput, CInputGroup
} from '@coreui/react';
import axios from "axios";
import React, { useState } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';
import * as XLSX from 'xlsx';
import Cookies from 'js-cookie'

import UrlDomain, { configCookies } from './../../../config'

const UploadRiscBtn = (props) => {
  const handleClose = () => setShow(false);
  const [visible, setVisible] = useState(false)
  const [show, setShow] = useState(false);
  const AbreModal = () => setShow(true)

  const salvarInfos = () => {
    console.log(csv)
    const reader = new FileReader();
    reader.onload = (evt) => {
      // pega valores
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      // converte o array
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      processData(data); // processa dados, dividindo
    };
    reader.readAsBinaryString(csv);

  }

  // Separa campos
  const processData = dataString => {
    const dataStringLines = dataString.split(/\r\n|\n/);
    const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);

    const list = [];
    for (let i = 1; i < dataStringLines.length; i++) {
      const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
      if (headers && row.length == headers.length) {
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          let d = row[j];
          if (d.length > 0) {
            if (d[0] == '"')
              d = d.substring(1, d.length - 1);
            if (d[d.length - 1] == '"')
              d = d.substring(d.length - 2, 1);
          }
          if (headers[j]) {
            obj[headers[j]] = d;
          }
        }

        if (Object.values(obj).filter(x => x).length > 0) {
          list.push(obj);
        }
      }
    }

    const columns = headers.map(c => ({
      name: c,
      selector: c,
    }));

    setData(list);
    setColumns(columns);
    montaJson(list)
  }

  // monta json e envia pro banco 
  function montaJson(e) {
    setFlagSave(true)

    const array = []
    e.forEach(risco => {
      var to = risco[" to"].replace(/[^0-9,]/g, '')
      var until = risco[" until"].replace(/[^0-9,]/g, '');
      array.push({
        to: Number(to.replace(',', '.')),
        until: Number(until.replace(',', '.')),
        kRisk: Number(risco.kRisk.replace(',', '.')), //parseFloat(risco.kRisk.replace(',', '.')),
        exposition: Number(risco.exposition.replace(',', '.')),
      })
    })

    console.log('valores atts', array)
    const config = configCookies()

    axios
      .post(`${UrlDomain}/risks`, array, config)
      .then((response) => {
        console.log('Enviado...', response)
        setCsv()
        setFlagSave(false)
        props.parentCallback(true)
        setShow(false);
      })
      .catch(r => { console.log('erro na api....', r) })
  }

  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [csv, setCsv] = useState()
  const [flagSave, setFlagSave] = useState(false)

  return (
    <>
      <CButton onClick={AbreModal} color="dark" >
        Atualizar valores
      </CButton>

      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        className='container-btn-risc'
      >
        <Modal.Body>
          <h3>Atualizar planilha </h3>
          <br />
          <p>Atualizar valores de risco por meio de uma planilha .CSV.</p>

          <CInputGroup className="mb-3">
            <CFormInput type="file" accept=".csv" required onChange={(e) => { setCsv(e.target.files[0]) }} />
          </CInputGroup>

          {csv == null ?
            (
              <Button variant="secondary" onClick={salvarInfos}>
                Salvar
              </Button>
            )
            : null
          }

          {csv != null && flagSave == false ?
            (
              <Button variant="secondary" onClick={salvarInfos}>
                Salvar
              </Button>
            )
            : null
          }

          {csv != null && flagSave != false ?
            (
              <h4> <Spinner animation="grow" variant="info" />  </h4>
            )
            : null
          }

          {/* <Button variant="secondary" onClick={salvarInfos}>
                      Salvar
                  </Button> */}

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

export default  UploadRiscBtn;
