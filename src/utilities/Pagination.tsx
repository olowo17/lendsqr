import {render} from '@testing-library/react'
import React from 'react'
import "../styles/css/Pagitation.css"
import "../styles/css/Pagination.css"
import {Left, Rigt} from '../asset/icons';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    handlePageClick: (pageNumber : number) => void;
}


const Pagination = ({currentPage, totalPages, handlePageClick} : PaginationProps) => {
    const renderPagination = () => {
        const pages = [];
        const pageRange = 2;

        // render left navigation
        if (currentPage > 1) {
            pages.push (<button key="left"
                onClick={
                    () => handlePageClick(currentPage - 1)
                }
                id="pages-nav">
                <Left/>
            </button>);
        }

        // render page numbers
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - pageRange && i <= currentPage + pageRange)) {
                pages.push (<button key={i}
                    onClick={
                        () => handlePageClick(i)
                    }
                    className={
                        currentPage === i ? "active-page" : "other-pages"
                    }
                    id="pages"> {i} </button>);
            }
        }

        // render right navigation
        if (currentPage < totalPages) {
            pages.push (<button key="right"
                onClick={
                    () => handlePageClick(currentPage + 1)
                }
                id="pages-nav">
                <Rigt/>
            </button>);
        }

        return pages;
    };

    return <div> {
        renderPagination()
    }</div>;
}

export default Pagination
