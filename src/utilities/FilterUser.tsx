import React, {useState} from 'react';
import '../styles/css/FilterUser.css';
import {useNavigate} from 'react-router-dom';

interface FilterProps {
    handleFilter: (filters : any) => void;
}

const FilterUser = ({handleFilter} : FilterProps) => {
    const navigate = useNavigate()
    const [filters, setFilters] = useState({
        organization: '',
        username: '',
        email: '',
        date: '',
        phonenumber: '',
        status: ''
    });

    const handleSubmit = (e : React.FormEvent < HTMLFormElement >) => {
        e.preventDefault();
        handleFilter(filters);
    };

    const handleReset = () => {
        setFilters({
            organization: '',
            username: '',
            email: '',
            date: '',
            phonenumber: '',
            status: ''
        });
    };

    const handleInputChange = (e : React.ChangeEvent < HTMLInputElement | HTMLSelectElement >) => {
        const {name, value} = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    return (
        <div className="form filter-card">
            <form className="form-control"
                onSubmit={handleSubmit}>
                <div className="form-body">
                    <div className="organization grid">
                        <label htmlFor="organization">Organization</label>
                        <input type="text" name="organization" placeholder="Select"
                            value={
                                filters.organization
                            }
                            onChange={handleInputChange}/>
                    </div>
                    <div className="username grid">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="User"
                            value={
                                filters.username
                            }
                            onChange={handleInputChange}/>
                    </div>
                    <div className="email grid">
                        <label htmlFor="email">Email</label>
                        <input type="Email" name="email" placeholder="Email"
                            value={
                                filters.email
                            }
                            onChange={handleInputChange}/>
                    </div>
                    <div className="date grid">
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date-picker" name="date"
                            value={
                                filters.date
                            }
                            onChange={handleInputChange}/>
                    </div>
                    <div className="phonenumber grid">
                        <label htmlFor="phonenumber">Phone Number</label>
                        <input type="text" name="phonenumber" placeholder="Phone Number"
                            value={
                                filters.phonenumber
                            }
                            onChange={handleInputChange}/>
                    </div>
                </div>
                <div className="filter-status">
                    <select id="status" name="status"
                        value={
                            filters.status
                        }
                        onChange={handleInputChange}>
                        <option value="">Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Blacklisted">Blacklisted</option>
                        <option value="Pending">Pending</option>
                    </select>
                </div>
                <div className="button-control">
                    <button type="button" className="reset filter-btn"
                        onClick={handleReset}>
                        Reset
                    </button>
                    <button type="submit" className="filter filter-btn">
                        Filter
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FilterUser;
