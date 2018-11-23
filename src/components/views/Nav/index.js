import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { mainPath, aboutPath } from '~/src/helpers/routes';

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper teal lighten-2">
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><NavLink exact to={mainPath()}>Главная страница</NavLink></li>
            <li><NavLink to={aboutPath()}>Контакты</NavLink></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
