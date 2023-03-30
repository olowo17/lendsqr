import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';
import Users from './pages/Users';
import {UserContextProvider} from './Usercontext/UserContext';

function App() {
        return(
        < div className = "App" > <Router>
            <UserContextProvider>
                <Routes>
                    <Route path="/users"
                        element={
                            < Users />
                        }/>
                    <Route path="/filter"
                        element={
                            < Users />
                        }/>
                    <Route path="users/users/:id"
                        element={<DashBoard/>}/>
                    <Route path="/"
                        element={
                            < Login />
                        }/>
                </Routes>
            </UserContextProvider>
        </Router>
    </div>
    );
}

export default App;
