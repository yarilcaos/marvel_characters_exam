import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';
import { SideMenu } from './SideMenu';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div id="root_body">
                <NavMenu />
                <Container>
                    {this.props.children}
                </Container>
                <SideMenu />
                <Footer />
            </div>
        );
    }
}
