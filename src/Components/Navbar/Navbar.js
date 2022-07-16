import React, { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import useUser from '../Hook/useUser'
import './Navbar.css'
import './Responsive.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import auth from '../User/user/firebase.init';
const navUrls = ["home", "about", "inventory", "blogs","contact"]

const Navbar = () => {
    const navigate = useNavigate()
    const [navbar, setNavbar] = useState(false)
    const navHandler = () => {
        if (navbar) {
            setNavbar(false)
        }
        else {
            setNavbar(true)
        }
    }
    const user = useUser()
    const logout = () => {
        
        signOut(auth).then(() => {
            navigate('/')
            window.location.reload()
        }).catch((error) => {
            // An error happened.
        });
    }
  
    return (
        <>

            <nav id="navbar_top" className="navbar">
                <div className="container">
                    <div className="content">
                        <div className="logo">
                            <Link to='/'>
                               <div>
                               <h1 style={{fontSize:"17px"}} className='text-dark'>Stock Smart</h1>
                                <p className='text-dark'>INVENTORY SOLUTION</p>
                                </div> 
                                
                            </Link>
                            <FontAwesomeIcon onClick={navHandler} icon={faBars} />
                        </div>
                        <ul className={navbar ? "show" : "dont-show"}>
                            {
                                navUrls.map(url => <li key={url}> <NavLink to={url} className='nav-link-m'>{url}</NavLink></li>)
                            }
                            <li>
                                {
                                    user.email ?
                                        <button onClick={logout}
                                         className='btn-special1'>Logout</button>
                                        :
                                        <Link className='btn-special1' to='/login'>Login</Link>
                                }
                                {
                                    user.email&& <Link className='btn-special2 ms-2' to='/Profile'>Admin</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;