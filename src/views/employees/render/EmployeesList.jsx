import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import NameCli from './Name'
import EmailCli from './Email';
import DepartCli from './Depart';
import PhoneCli from './Phone';
import Associate from './associate/Associate';
import DelEmployeeLogin from './DelEmpLogin';
import BtnEdit from './BtnEdit'
import BtnEditEmployees from './Btn/BtnEditEmployees';

export default  function EmployeesList({ dados, userType, retiraFiltro, dadosOri }) {
  return (
    <CTable align="middle" className="mb-0 usersTableContainer" hover striped responsive>
    {/* Cabeca head da tabela do clientes */}
      <CTableHead >
        <CTableRow>
          <CTableHeaderCell>
            Departamento
            <BiChevronDown />
          </CTableHeaderCell>
          <CTableHeaderCell>
            Nome
            <BiChevronDown />
          </CTableHeaderCell>
          <CTableHeaderCell>
            E-mail
            <BiChevronDown />
          </CTableHeaderCell>
          <CTableHeaderCell>
            Contato
            <BiChevronDown />
          </CTableHeaderCell>
          {/* {userType == 'ADMIN' ?(
          <CTableHeaderCell className="text-center" >Ações</CTableHeaderCell>
        ) 
        :null
        } */}
        {/* 
        {userType == 'ADMIN' ?(
        <CTableHead className="text-center" >Permissões</CTableHead erCell>
        ) 
        :null
        } */}
        </CTableRow>
      </CTableHead>
      <CTableBody>
      {/* Percorre os usuarios  */}
        { dados.map((item, index) => (
          <CTableRow key={index.toString()}>
            <CTableDataCell >
              <DepartCli departamento={item.department} />
            </CTableDataCell>
            <CTableDataCell >
              <NameCli name={item.firstName} />
            </CTableDataCell>
            <CTableDataCell >
              <EmailCli email={item.email} />
            </CTableDataCell>
            <CTableDataCell >
              <PhoneCli phone={`(0${item.phone.slice(0, 2)}) ${item.phone.slice(2, 7)}-${item.phone.slice(7)}`} />
            </CTableDataCell>

            {userType == 'ADMIN' ?(
            <CTableDataCell >
              <BtnEditEmployees item={item} retiraFiltro={retiraFiltro} dadosOri={dadosOri} />
              {/* <div className='container-employees-actions'>
              <div className='btn-employees-action'>
                <BtnEdit  callBack={retiraFiltro} editar={item} />
              </div>

              <div className='btn-employees-action'>
                <Associate className='btn-employees-action' user={item} data={dadosOri} />
              </div>

              <div className='btn-employees-action'>
                <DelEmployeeLogin className='btn-employees-action' user={item}  />
              </div>

              </div> */}

            </CTableDataCell>
          )
          :null
          } 
          </CTableRow> 
        ))  
        }

      </CTableBody>
    </CTable>
  )
}
