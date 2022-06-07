import React from 'react'
import { CCol, CRow } from '@coreui/react'

import carConnected from "../../../assets/images/car-connected.svg"
import fileDocument from "../../../assets/images/file-document.svg"
import '../css/widgestsTracking.css';

function WidgetsTracking(props) {
  const { open1, open2, open3, open4, op1, op2, op3, op4 } = props;

  return (
    <CRow className="cotainer-widgets-trackings">
      <CCol
        sm="auto"
        onClick={open1}
        className={
          op1 === false
            ? "m-3 container-tracking-widget-black"
            : "m-3 container-tracking-widget-black-active"
        }
      >
        <div>
          <label className="container-tracking-widget-content-title">Todos os veículos:</label>
          <br />
          <label className="container-tracking-widget-content"> 88 </label>
        </div>
      </CCol>
      <CCol
        className={
          op2 === false
            ? "m-3 container-tracking-widget-black"
            : "m-3 container-tracking-widget-black-active"
        }
        onClick={open2}
        sm="auto"
      >
        <div>
          <label className="container-tracking-widget-content-title">Dispositivos:</label>
          <br />
          <img className="img-vector" src={carConnected} alt="car-connected" />
        </div>
      </CCol>
      <CCol
        sm="auto"
        onClick={open3}
        className={
          op3 === false
            ? "m-3 container-tracking-widget-black"
            : "m-3 container-tracking-widget-black-active"
        }
      >
        <div>

          <label className="container-tracking-widget-content-title">Relatórios:</label>
          <br />
          <img className="img-vector" src={fileDocument} alt="file-document" />
        </div>
      </CCol>
      <CCol
        sm="auto"
        onClick={open4}
        className={
          op4 === false
            ? "m-3 container-tracking-widget-green"
            : "m-3 container-tracking-widget-green-active"
        }
      >
        <div>
          <label className="container-tracking-widget-content-title">Dispositivos sincronizados:</label>
          <br />
          <label className="container-tracking-widget-content"> 37 </label>
        </div>
      </CCol>
    </CRow>
  )
}

export default  WidgetsTracking;
