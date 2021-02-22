import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cheers from '../../images/cheers.png'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <span className='user'>
          {this.context.user.name}
        </span>
        <nav>
          <Link
            onClick={this.handleLogoutClick}
            to='/login'>
            Logout
          </Link>
        </nav>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <nav>
          <Link to='/login'>Login</Link>
          <br />
          <Link to='/register'>Sign up</Link>
        </nav>
      </div>
    )
  }

  render() {
    return (
      <header>
        <h1>
          <img src={cheers} alt='' height='50' />
          <Link to='/'>
            Survive Oktoberfest
          </Link>
          <img src={cheers} alt='' height='50' />
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header
