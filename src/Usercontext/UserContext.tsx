import Axios, {AxiosResponse} from "axios";
import {createContext} from "react";
import React, {useState, useEffect} from 'react'
import axios from "axios";
import {useParams} from "react-router-dom";


export interface AuthUser {
    phoneNumber: string;
    userName: string;
    id: number;
    name: string;
    email: string;
    orgName: string;
    createdAt: string;
    status: string;
    profile: {
        firstName: string;
        lastName: string;
        avatar?: string;
    };


}

type UserContextProviderType = {
    children: React.ReactNode
}

type UserContextType = {
    userData: AuthUser[] | null;
    setUserData: React.Dispatch < React.SetStateAction < AuthUser[] | null >>;
    user: AuthUser | null;
    setUser: React.Dispatch < React.SetStateAction < AuthUser | null >>;

};

export const UserContext = createContext < UserContextType > ({
    userData: null,
    user: null,
    setUser: () => {
        console.log("setting user")
    },
    setUserData: () => {
        console.log("setting user")
    }
});

export const UserContextProvider = ({children} : UserContextProviderType) => {
    const [userData, setUserData] = useState < AuthUser[] | null > (null);
    const [user, setUser] = useState < AuthUser | null > (null);

    const {id} = useParams()

    useEffect(() => {
        axios.get < AuthUser[] > ("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users").then((response : AxiosResponse < AuthUser[] >) => {
            setUserData(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    // console.log(userData)

    useEffect(() => {
        axios.get < AuthUser > ("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/1").then((response : AxiosResponse < AuthUser >) => {
            setUser(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);



    // console.log(user)
    return <UserContext.Provider value={
        {
            userData,
            setUserData,
            user,
            setUser
        }
    }>
        {children} </UserContext.Provider>


}
