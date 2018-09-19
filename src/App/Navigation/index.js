/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as routes from '../../constants/routes';

import Button from '../../components/Button';
import Input from '../../components/Input';

import './style.css';

const Navigation = ({
  location: { pathname },
  organizationName,
  onOrganizationSearch,
}) => (
  <header className="Navigation">
    <div className="Navigation-link">
      <Link to={routes.PROFILE}>Profile</Link>
    </div>
    <div className="Navigation-link">
      <Link to={routes.ORGANIZATION}>Organization</Link>
    </div>

    {pathname === routes.ORGANIZATION && (
      <OrganizationSearch
        organizationName={organizationName}
        onOrganizationSearch={onOrganizationSearch}
      />
    )}
  </header>
);

class OrganizationSearch extends Component {
  state = {
    organizationName: this.props.organizationName,
  };

  onChange = event => this.setState({ organizationName: event.target.value });

  onSubmit = event => {
    event.preventDefault();

    this.props.onOrganizationSearch(this.state.organizationName);
  };

  render() {
    const { organizationName } = this.state;

    return (
      <div className="Navigation-search">
        <form onSubmit={this.onSubmit}>
          <Input
            color="white"
            type="text"
            value={organizationName}
            onChange={this.onChange}
          />{' '}
          <Button color="white" type="submit">
            Search
          </Button>
        </form>
      </div>
    );
  }
}

export default withRouter(Navigation);
