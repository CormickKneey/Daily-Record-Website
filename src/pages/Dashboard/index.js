import React, { Component } from 'react';
import AccountStatus from './components/AccountStatus';

export default class Dashboard extends Component{
  render(){
    return (
      <div className="dashboard-page">
        {/* AccountStatus */}
        <AccountStatus />
      </div>
    );
  }
};
