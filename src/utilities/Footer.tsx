import React from 'react';
import Pagination from './Pagination';
import {AuthUser} from '../Usercontext/UserContext';
import "../styles/css/Footer.css";

interface IFooter {
    currentPage: number;
    totalPages: number;
    handlePageClick: (pageNumber : number) => void;
    SelectPageOption: number;
    setSelectPageOption: (value : number) => void;
    modifiedUserData: AuthUser[];
}

const Footer = ({
    currentPage,
    totalPages,
    handlePageClick,
    SelectPageOption,
    setSelectPageOption,
    modifiedUserData
} : IFooter) => {

    const handleSelectChange = (event : React.ChangeEvent < HTMLSelectElement >) => {
        setSelectPageOption(Number(event.target.value));
    };

    const pageSizes = [
        10,
        20,
        25,
        50,
        100
    ];

    return (
        <div className="pagination">
            <div className='left'>
                <span>
                    showing
                    <select value={SelectPageOption}
                        onChange={handleSelectChange}
                        className="size">
                        {
                        pageSizes.map((size) => (
                            <option key={size}
                                value={size}>
                                {size} </option>
                        ))
                    } </select>
                </span>
                <span>out of {
                    modifiedUserData.length
                }</span>
            </div>
            <div className="right">
                <Pagination currentPage={currentPage}
                    totalPages={totalPages}
                    handlePageClick={handlePageClick}/>
            </div>
        </div>
    )
};

export default Footer;
