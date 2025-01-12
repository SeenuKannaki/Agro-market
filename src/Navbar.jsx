import React, {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from '../AuthContext';
import '.Navbar.css';

const Navbar = () =>{

    const{user, logout} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () =>{
        logout();
        navigate('/login');
    };

    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <Link to="/">Agri-market</Link>
            </div>
            <ul className='navbar-links'>
                {!user ? (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                    </>
                ):(
                    <>
                        {user.role === 'buyer' && (
                            <>
                                <li>
                                    <Link to="/buyer/dashboard">Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="/buyer/products">Browse products</Link>
                                </li>
                            </>
                        )}
                        {user.role === 'seller' && (
                            <>
                                <li>
                                    <Link to="/seller/dashboard">Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="/seller/upload">Uploaad products</Link>
                                </li>
                                <li>
                                    <Link to="/seller/products">Manage products</Link>
                                </li>
                            </>
                        )}
                        <li>
                            <button className='logout-button' onClick={handleLogOut}>
                                Logout
                            </button>
                        </li>
                    </>
                )}
            </ul>
        </nav>

    );
};

export default Navbar;