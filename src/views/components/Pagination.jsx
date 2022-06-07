import React from 'react'
import { CButton, CPagination } from '@coreui/react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';

function Pagination({ numberOfPages, page, previousPage, setPreviousPage, currentPage, setCurrentPage, nextPage, setNextPage, qtdElements }) {

    function capturePreviousPage(e, nPage) {
        if (currentPage == 1) {
            setPreviousPage("");
            setNextPage(2);
        } else if (e == nPage) {
            setNextPage(2);
            setCurrentPage(1);
            setPreviousPage("");
        } else {
            setNextPage(currentPage);
            setCurrentPage(currentPage - 1);
            setPreviousPage(currentPage - 2);
        }
        const aux = e - 1;
        page(aux);
    }

    // Proxima pagina
    function captureNextPage(e, nPage) {

        if (currentPage == 1 && nPage == 2) {
            setNextPage("");
            setCurrentPage(currentPage + 1);
            setPreviousPage(1);
        } else if (e == nPage) {
            setNextPage("");
            setCurrentPage(e);
            setPreviousPage(numberOfPages - 1);
        } else if (currentPage == 1 && nPage != 2) {
            setNextPage(3);
            setCurrentPage(currentPage + 1);
            setPreviousPage(1);
        } else if (currentPage < nPage - 1) {
            setNextPage(currentPage + 2);
            setCurrentPage(currentPage + 1);
            setPreviousPage(currentPage);
        }
        const aux = e - 1;
        page(aux);
    }

    return (
        <CPagination
            className="container-devices-pagination"
            color="dark"
            aria-label="Page navigation example"
        >
           { qtdElements ? 
            <label className="container-qtd-employeer">
                Há {qtdElements} dispositivos
            </label>: null}
            <div className="container-pagination-align justify-content-end">
                {previousPage != "" ? (
                    <>
                        <CButton
                            className="btn-user-pagination"
                            color="dark"
                            onClick={() => {
                                capturePreviousPage(
                                    previousPage,
                                    numberOfPages
                                );
                            }}
                            variant="outline"
                        >
                            <TiChevronLeftOutline />
                        </CButton>
                        {currentPage > 2 ? (
                            <>
                                <CButton
                                    className="btn-user-pagination"
                                    color="dark"
                                    onClick={() =>
                                        capturePreviousPage(
                                            1,
                                            1
                                        )
                                    }
                                    variant="outline"
                                >
                                    1
                                </CButton>
                                <span>...</span>
                            </>
                        ) : null}
                        <CButton
                            className="btn-user-pagination"
                            color="dark"
                            onClick={() => {
                                capturePreviousPage(
                                    previousPage,
                                    numberOfPages
                                );
                            }}
                            variant="outline"
                        >
                            {previousPage}
                        </CButton>
                    </>
                ) : null}
                {currentPage == 0 ? (
                    <CButton
                        className="btn-user-pagination"
                        defaultChecked
                        color="dark"
                        active={true}
                    >
                        {currentPage + 1}
                    </CButton>
                ) : (
                    <CButton
                        className="btn-user-pagination"
                        defaultChecked
                        color="dark"
                        active={true}
                    >
                        {currentPage}
                    </CButton>
                )}
                {currentPage === numberOfPages - 1 ? (
                    <>
                        <CButton
                            className="btn-user-pagination"
                            color="dark"
                            onClick={() =>
                                captureNextPage(
                                    nextPage,
                                    numberOfPages
                                )
                            }
                            variant="outline"
                        >
                            {nextPage}
                        </CButton>
                        <CButton
                            className="btn-user-pagination"
                            color="dark"
                            onClick={() =>
                                captureNextPage(
                                    nextPage,
                                    numberOfPages
                                )
                            }
                            variant="outline"
                        >
                            <TiChevronRightOutline />
                        </CButton>
                    </>
                ) : null}
                {nextPage < numberOfPages &&
                    nextPage !== "" ? (
                    <>
                        <CButton
                            className="btn-user-pagination"
                            color="dark"
                            onClick={() =>
                                captureNextPage(
                                    nextPage,
                                    numberOfPages
                                )
                            }
                            variant="outline"
                        >
                            {nextPage}
                        </CButton>
                        <span>...</span>
                        <CButton
                            className="btn-user-pagination"
                            color="dark"
                            onClick={() =>
                                captureNextPage(
                                    numberOfPages,
                                    numberOfPages
                                )
                            }
                            variant="outline"
                        >
                            {numberOfPages}
                        </CButton>
                        <CButton
                            className="btn-user-pagination"
                            color="dark"
                            onClick={() =>
                                captureNextPage(
                                    nextPage,
                                    numberOfPages
                                )
                            }
                            variant="outline"
                        >
                            <TiChevronRightOutline />
                        </CButton>
                    </>
                ) : null}
            </div>
        </CPagination>
    )
}

export default  Pagination;
