import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  render() {
    const { user } = this.props;
    const { username, password } = user;

    const userValidation = [
      username === 'marcos',
      password === '1234',
    ];

    const validated = userValidation.every((validation) => validation === true);

    const welcome = <p>Welcome { username }</p>;

    return (
      <div>{validated ? welcome : <Redirect to="/" />}</div>
    );
  }
}

export default StrictAccess;