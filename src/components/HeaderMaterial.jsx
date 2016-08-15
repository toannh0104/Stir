import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {Header, Navigation} from 'react-mdl';
import * as actions from '../actions';

class HeaderMaterial extends Component {

  renderLinks() {
    if (this.props.authenticated) {
      //show link to sign out
      return [
        <Link className="mdl-navigation__link" to="/posts/create" key={2}>Create Recipe</Link>,
        <Link className="mdl-navigation__link" to="/posts/view" key={3}>View Recipes</Link>,
        <Link className="mdl-navigation__link" to="/" key={1} onClick={ () => {this.props.signoutUser(this.props.user_id)} }>Signout</Link>

      ];
    } else {
      return [
        <Link className="mdl-navigation__link" to="/signin" key={1}>Signin</Link>,
        <Link className="mdl-navigation__link" to="/signup" key={2}>Signup</Link>,
      ];
    }

  }

  render() {
    return (
      <Header title={<Link to='/'><strong>Stir</strong></Link>}>
          <Navigation>
              {this.renderLinks()}
          </Navigation>
      </Header>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    user_id: state.auth.user_id
  }
}

export default connect(mapStateToProps, actions)(HeaderMaterial);