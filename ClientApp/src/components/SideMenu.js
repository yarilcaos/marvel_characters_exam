import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './componets_css/Footer.css';

export class SideMenu extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id="side">
                <div id="side_menu">
                    <div><i className="fa-solid fa-book"></i><label> COMICS</label> </div>
                    <div className="active"><i className="fa-solid fa-people-group "></i><label> CHARACTERS</label> </div>
                    <div><i className="fa-solid fa-person"></i><label>C. DETAIL </label></div>
                    <div><i className="fa-solid fa-pencil"></i><label>CREATORS </label></div>
                    <div><i className="fa-solid fa-dragon"></i><label>SERIES</label> </div>
                </div>
            </div>
        );
    }
}
