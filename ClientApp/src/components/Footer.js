import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './componets_css/Footer.css';

export class Footer extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id="foot">
                <div>Cesar Yaril  - 2022 </div>
            </div>
        );
    }
}
