import React, { Component } from 'react';
import Container from '@icedesign/container';

import StateItem from './StateItem';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

//挂载tick()
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
}

//卸载tick()
componentWillUnmount() {
  clearInterval(this.timerID);
}

tick() {
  this.setState({
    date: new Date()
  });
}

  render() {
    return (
      <div>
        <h1>现在是 {this.state.date.toLocaleTimeString()}.</h1>
      </div>
    );
  }
}

export default class AccountStatus extends Component {
  static displayName = 'AccountStatus';
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          icon: require('./images/star.png'),
          title: '日期',
          desc: new Date().toLocaleDateString(),
        },
      ],
    };
  }

  render() {
    return (
      <Container>
        <div style={styles.header}>
          <h2 style={{ margin: 0, fontSize: 16 }}>蒋涵</h2>
          <span style={{ fontSize: 12, color: '#999', paddingLeft: 20 }}>
          </span>
        </div>
        <div style={styles.body}>
          {this.state.dataSource.map((item, index) => {
            return <StateItem data={item} key={index} />;
          })}
          <Clock />
        </div>
      </Container>
    );
  }
}

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
  },
};
