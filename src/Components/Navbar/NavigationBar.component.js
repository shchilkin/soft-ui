import React from "react";
import Navbar from "react-bootstrap/cjs/Navbar";
import logo from '../../Assets/NeumoprhicIcon.svg'

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{'  '}
                Soft UI
            </Navbar.Brand>
        </Navbar>
    )
}

export default NavigationBar;