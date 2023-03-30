import React, {useState} from 'react';
import Tabledata from './Tabledata';
import {AuthUser} from '../Usercontext/UserContext';
import {IoFilterOutline} from 'react-icons/io5';
import '../styles/css/Table.css';
import FilterUser from './FilterUser';
import {useNavigate} from 'react-router-dom';

interface Item {
    status: 'Active' | 'Pending' | 'Inactive' | 'Blacklisted';
    phoneNumber: string;
    userName: string;
    id: number;
    name: string;
    email: string;
    orgName: string;
    createdAt: string;
    profile: {
        firstName: string;
        lastName: string;
    };
}

type Items = Item[];

const Table = ({visibleItems} : {
    visibleItems: Items

}) => {
    const navigate = useNavigate();
    const [showFilter, setShowFilter] = useState(false)
    const [filters, setFilters] = useState({
        organization: '',
        username: '',
        email: '',
        date: '',
        phonenumber: '',
        status: ''
    });



    // Filter the data based on the filter values
    const filteredItems = visibleItems.filter((item) => {
        const {organization, email, phonenumber, status} = filters;

        return(item.orgName.includes(organization) && item.userName.toLocaleLowerCase().includes(filters.username.toLocaleLowerCase()) && item.email.includes(email) && item.phoneNumber.includes(phonenumber) && item.status.includes(status)) && item.createdAt.toLowerCase().includes(filters.date.toLowerCase());
    });

    const toggleFilter = () => {
        setShowFilter(!showFilter);
        navigate("/filter");
    };


    const handleFilter = (updatedFilters : typeof filters) => {
        setFilters(updatedFilters);
    };

    return (
        <div className="table">
            <table className="table-control">
                <thead onClick={toggleFilter}>
                    <tr>
                        <th>
                            ORGANIZATION < IoFilterOutline size = {15}
                            className = "m-2" />
                        </th>
                        <th>
                            USERNAME < IoFilterOutline size = {15}
                            className = "m-2" />
                        </th>
                        <th className='user-email'>
                            EMAIL < IoFilterOutline size = {15}
                            className = "m-2" />
                        </th>
                        <th className='user-pone'>
                            PHONE NUMBER < IoFilterOutline size = {15}
                            className = "m-2" />
                        </th>
                        <th className='date'>
                            DATE JOINED < IoFilterOutline size = {15}
                            className = "m-2" />
                        </th>
                        <th className='user-stauts'>
                            STATUS < IoFilterOutline size = {15}
                            className = "m-2" />
                        </th>
                    </tr>
                </thead>
                <tbody> {
                    showFilter && <FilterUser handleFilter={handleFilter}/>
                }
                    {
                    filteredItems.map((user : AuthUser) => (
                        <Tabledata key={
                                user.id
                            }
                            createdAt={
                                user.createdAt
                            }
                            phoneNumber={
                                user.phoneNumber
                            }
                            userName={
                                user.userName
                            }
                            id={
                                user.id
                            }
                            orgName={
                                user.orgName
                            }
                            profile={
                                user.profile
                            }
                            status={
                                user.status
                            }
                            name={
                                user.name
                            }
                            email={
                                user.email
                            }/>
                    ))
                } </tbody>
            </table>
        </div>
    )

}
export default Table;
