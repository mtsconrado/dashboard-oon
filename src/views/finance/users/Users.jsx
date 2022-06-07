import React, { useEffect, useState } from 'react'
import {
    CTable,
    CTableBody,
    CTableDataCell,
    CTableRow,
    CCard,
    CCardBody,
    CTableHead,
    CTableHeaderCell,
    CForm,
    CFormInput,
    CButton,
    CRow,
    CCol,
} from '@coreui/react'
import MonthAndYear from '../components/MonthAndYear';
import Pagination from '../../components/Pagination';

import '../css/users.css';

const Users = () => {
    const [op1, setOp1] = useState(true);
    const [previousPage, setPreviousPage] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [nextPage, setNextPage] = useState("");
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [defaulters, setDefaulters] = useState([])
    const [nonDefaulters, setNonDefaulters] = useState([])

    function initPages(e) {
        if (e.data.totalPages > 1) {
            setCurrentPage(1);
            setNextPage(2);
            setPreviousPage("");
        }
    }

    const [dados, setDados] = useState([
        { adimplência: 'adimplentes', nContrato: 1, funcionario: 'GUstavo Alcantara', valor: 22.20, pagamento: '10/02/2022', placaVeiculo: 'KKK-345' },
        { adimplência: 'inadimplentes', nContrato: 2, funcionario: 'Pedro da', valor: 12.20, pagamento: '10/02/2022', placaVeiculo: 'HHH-111' },
        { adimplência: 'inadimplentes', nContrato: 3, funcionario: 'Gislene a', valor: 122.20, pagamento: '10/02/2022', placaVeiculo: 'KKK-345' },
        { adimplência: 'inadimplentes', nContrato: 4, funcionario: 'Yuri Almeida', valor: 20.20, pagamento: '10/02/2022', placaVeiculo: 'KKK-123' },
        { adimplência: 'inadimplentes', nContrato: 5, funcionario: 'GUstavo Alcantara', valor: 22.20, pagamento: '10/02/2022', placaVeiculo: 'KKK-345' },
        { adimplência: 'inadimplentes', nContrato: 6, funcionario: 'Pedro d', valor: 12.20, pagamento: '10/02/2022', placaVeiculo: 'HHH-111' },
        { adimplência: 'inadimplentes', nContrato: 7, funcionario: 'Gislene w', valor: 122.20, pagamento: '10/02/2022', placaVeiculo: 'KKK-345' },
        { adimplência: 'adimplentes', nContrato: 8, funcionario: 'Yuri Almeida', valor: 20.20, pagamento: '10/02/2022', placaVeiculo: 'KKK-123' },
        { adimplência: 'adimplentes', nContrato: 9, funcionario: 'GUstavo a', valor: 22.20, pagamento: '10/02/2022', placaVeiculo: 'KKK-345' },
        { adimplência: 'adimplentes', nContrato: 10, funcionario: 'Pedro a', valor: 12.20, pagamento: '10/02/2022', placaVeiculo: 'HHH-111' },

    ])


    useEffect(() => {
        choiceNonDefaulters();
        initPages({ data: { totalPages: 10 } })
        setNumberOfPages(4)
    }, [])

    function page(e) {
        //     setDados([]);
        // const config = configCookies()

        //     axios
        //         .get(
        //             `${UrlDomain}/signatures?pageSize=${qtdPgns}&pageNumber=${e}`,
        //             config
        //         )
        //         .then((response) => {
        //             setDados(response.data.content);
        //             setNumberOfPages(response.data.totalPages);
        //         })
        //         .catch((r) => {
        //             console.log("error", r),
        //                 alert("Login expirado"),
        //                 window.location.reload();
        //         });
    }

    const choiceDefaulters = () => {
        setOp1(false)
        const inadiplentes = dados.filter((dado) => dado.adimplência == 'inadimplentes');
        setDefaulters(inadiplentes)
    };

    const choiceNonDefaulters = () => {
        setOp1(true)
        const adiplentes = dados.filter((dado) => dado.adimplência == 'adimplentes');
        setNonDefaulters(adiplentes)
    };

    return (
        <CCard className="cards-customers">
            <CCardBody>
                <CRow>
                    <CCol>
                        <label className="finc-title">Clientes inadimplentes e adimplentes</label>
                        <br />
                        <label className="finc-sub"> <MonthAndYear /></label>
                    </CCol>

                    <CCol className="d-md-flex justify-content-md-end">
                        <CForm className="row g-3">
                            <CCol xs="auto">
                                <CFormInput size="sm" type="search" placeholder="Pesquisar" />
                            </CCol>
                            <CCol xs="auto">
                                <CButton color='secondary' className='button-css' >
                                    Buscar
                                </CButton>
                            </CCol>
                            <CCol xs="auto">
                                <CButton className='button-css' >
                                    Baixar planilha
                                </CButton>
                            </CCol>
                        </CForm>
                    </CCol>
                </CRow>
                <CRow className="pt-3">
                    <CCol
                        className={
                            op1 === true
                                ? "nav-non-defaulters-active" : "nav-non-defaulters"

                        }
                        onClick={choiceNonDefaulters}
                    >
                        <label>Adimplentes</label>
                    </CCol>
                    <CCol
                        className={
                            op1 === false
                                ?
                                "nav-defaulters-active"
                                : "nav-defaulters"
                        }
                        onClick={choiceDefaulters}
                    >
                        <label>Inadimplentes</label>
                    </CCol>
                    <CCol></CCol>
                    <CCol></CCol>
                    <hr />
                </CRow>

                <CTable striped hover>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">Nome do usuário</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Placa do veículo</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Nº do contrato</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Último pagamento</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Valor</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {
                            op1 === true ?
                                nonDefaulters.map((i, index) => (
                                    <CTableRow key={index.toString()}>
                                        <CTableDataCell>
                                            {i.funcionario}
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            {i.placaVeiculo}
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            {i.nContrato}
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            {i.pagamento}
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            {` R$ ${i.valor.toFixed(2).replace('.', ',')}`}
                                        </CTableDataCell>
                                    </CTableRow>
                                )) : defaulters.map((i, index) => (
                                    <CTableRow key={index.toString()}>
                                        <CTableDataCell>
                                            {i.funcionario}
                                        </CTableDataCell>
                                        <CTableDataCell>
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            {i.nContrato}
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            {i.pagamento}
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            {` R$ ${i.valor.toFixed(2).replace('.', ',')}`}
                                        </CTableDataCell>
                                    </CTableRow>
                                ))}
                    </CTableBody>
                </CTable>
            </CCardBody>
            <Pagination page={page} numberOfPages={numberOfPages} previousPage={previousPage} setPreviousPage={setPreviousPage} currentPage={currentPage} setCurrentPage={setCurrentPage} nextPage={nextPage} setNextPage={setNextPage} />
        </CCard>
    )
}

export default  Users;
