import React, { Component } from 'react';
import SortCardList from './components/SortCardList';

export default class DailyRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="daily-records-page">
        {/* 拖拽排序卡片列表 */}
        <SortCardList />
      </div>
    );
  }
}
