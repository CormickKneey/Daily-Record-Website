import React, { Component } from 'react';
import CardList from './components/CardList';

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="upload-page">
        {/* 适用于多卡片信息的展示 */}
        <CardList />
      </div>
    );
  }
}
