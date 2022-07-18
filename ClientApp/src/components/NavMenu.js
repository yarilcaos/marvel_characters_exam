import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './componets_css/NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };
        // Este enlace es necesario para hacer que `this` funcione en el callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        console.log("TOOGLEMENU" + this.state.isToggleOn);
    }

    toogleMenu() {
       // this.openMenu = ! this.openMenu;
       
        const currentState = this.state.active;
        this.setState({ active: !currentState });
        //console.log(this);
        //console.log(state.openMenu);
    }

    render() {
        return (
            <div id="head">
                <div id="logo" className={this.state.isToggleOn ? 'open' : 'closed'}>
                    <a tag={Link} to="/"><img className="nav_logo" src="https://seeklogo.com/images/M/Marvel_Comics-logo-D489AEB9C1-seeklogo.com.png" /></a>
                </div>
                <div id="menulinks" className={this.state.isToggleOn ? 'open' : 'closed'} >
                    <a tag={Link} className="" to="/">Characters</a>
                    <a tag={Link} className="" to="/">Comics</a>
                    <a tag={Link} className="" to="/">Events</a>
                </div>
                <i id="menuburger" className="fa-solid fa-bars" onClick={this.handleClick}></i>
            </div>

        );
    }
}
