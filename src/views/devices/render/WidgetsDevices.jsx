import React from 'react';
import { CCol, CRow } from '@coreui/react';

import '../css/widgetsDevices.css'

const WidgetsDevices = (props) => {
  const { open1, open2, open3, open4, open5, op1, op2, op3, op4, op5, qtdElements } = props;

  return (
    <CRow className="cotainer-widgets-devices">
      <CCol
        sm="auto"
        onClick={open1}
        className={
          op1 === false
            ? "container-device-widget-black"
            : "container-device-widget-black-active"
        }
      >
        <div>
          <label className="container-device-widget-content-title"> Todos os veículos: </label>
          <br />
          <label className="container-device-widget-content"> {qtdElements} </label>
        </div>
      </CCol>
      <CCol
        className={
          op2 === false
            ? "container-device-widget-red"
            : "container-device-widget-red-active"
        }
        onClick={open2}
        sm="auto"
      >
        <div>
          <label className="container-device-widget-content-title"> Para analisar: </label>
          <br />
          <label className="container-device-widget-content"> 18 </label>
        </div>
      </CCol>
      <CCol
        sm="auto"
        onClick={open3}
        className={
          op3 === false
            ? "container-device-widget-orange"
            : "container-device-widget-orange-active"
        }
      >
        <div>
          <label className="container-device-widget-content-title"> Para reanálise: </label>
          <br />
          <label className="container-device-widget-content"> 22 </label>
        </div>
      </CCol>
      <CCol
        sm="auto"
        onClick={open4}
        className={
          op4 === false
            ? "container-device-widget-orange"
            : "container-device-widget-orange-active"
        }
      >
        <div>
          <label className="container-device-widget-content-title"> Em análise: </label>
          <br />
          <label className="container-device-widget-content"> 37 </label>
        </div>
      </CCol>
      <CCol
        sm="auto"
        onClick={open5}
        className={
          op5 === false
            ? "container-device-widget-black"
            : "container-device-widget-black-active"
        }
      >
        <div>
          <label className="container-device-widget-content-title"> Outros filtros: </label>
          <br />
          <label className="container-device-widget-content"> + </label>
        </div>
      </CCol>
    </CRow>
  )
}

export default  WidgetsDevices;
