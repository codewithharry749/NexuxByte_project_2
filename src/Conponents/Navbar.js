import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">
                    <img src='./images/logo.png' className='logo' />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to='/' >Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to='/list' >Add List <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to='/profile' >Profile <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to='/signup' >
                                <img src='../images/logo.jpg'
                                style={{
                                    width:'2.5rem',
                                    height:'2.5rem',
                                    borderRadius:'50%',
                                    objectFit:'cover',
                                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                                }}
                                />
                                 <span className="sr-only">(current)</span></NavLink>
                        </li>

        


                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Navbar;