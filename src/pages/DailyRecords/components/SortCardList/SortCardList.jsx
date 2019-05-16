import React, { Component} from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import { Overlay,Button} from '@alifd/next';
import './config'

const { Row, Col } = Grid;

const stateMap = {
  0: { color: '#F4F7FF', text: '待完成',delete:'删除' },
  2: { color: '#EAFCF6', text: '已达成'},
};

export default class SortCardList extends Component {
  static displayName = 'SortCardList';
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelte = this.handleDelte.bind(this);
    this.state = {
      todos: [
        {
          id: 1,
          state: 0,
          description:
            '这个列表用来建立每日任务作为目标！',
          datetime: new Date().toLocaleTimeString(),
          date:new Date().toLocaleDateString(),
        },
      ],
      dones: [
        {
          id: 2,
          state: 2,
          description:
            '这个列表显示了今日已完成的任务！',
          datetime: new Date().toLocaleTimeString(),
          date:new Date().toLocaleDateString(),
        },
      ],
      visible: false,
    };
  }

  // ICE: React Component 的生命周期

//在实例挂载之前完成持久化数据读取
  componentWillMount() { //

    var todoslocal = localStorage.getItem("todos_list");
    var doneslocal = localStorage.getItem("dones_list");


    if (todoslocal) {
      this.setState({ todos: JSON.parse(todoslocal) });
    }
    if(doneslocal) {
      this.setState({ dones: JSON.parse(doneslocal) });
    }

  }


  componentDidMount() {
    if(localStorage.getItem("todos_list")){
    this.timerID = setInterval(() => this.freshlocal(),1000); // 每秒都刷新一次
  }
}

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
//=================================刷新任务=======================================
//去除console.log()部分  
freshlocal = () => {
  if(localStorage.getItem("todos_list")){
    var todoslocal = JSON.parse(localStorage.getItem("todos_list"));
    if(
      todoslocal[0].date < (new Date().toLocaleDateString())
    ){
    localStorage.clear();
    }
  }
  if(localStorage.getItem("dones_list")){
    var doneslocal = JSON.parse(localStorage.getItem("dones_list"));
    if(doneslocal[0].date < (new Date().toLocaleDateString())){
      localStorage.clear();
    }
  }

  return;
}
//=================================完成任务=======================================

  handleFinish = (e) => {
    var doneArray = this.state.dones;
    var todoArray = this.state.todos;

    var target_id = e.target.getAttribute('id');
    for(var i in todoArray){
      if (todoArray[i].id == target_id){
        todoArray[i].state = 2, // 更新任务状态
        doneArray.push(todoArray[i]);
        todoArray.splice(i,1);
      }
    }
    this.setState({
      dones: doneArray,
      todos: todoArray
    });

    localStorage.setItem('dones_list',JSON.stringify(doneArray));  // 持久化
    localStorage.setItem('todos_list',JSON.stringify(todoArray));
  };

//=================================删除任务=======================================

  handleDelte = (e) => {
    var todoArray = this.state.todos;
    var target_id = e.target.getAttribute('id');
 
    for(var i in todoArray){
      if (todoArray[i].id == target_id)
        todoArray.splice(i,1);
    }
    this.setState({
      todos:todoArray
    });
    localStorage.setItem('todos_list',JSON.stringify(todoArray));

  };

//=================================添加任务======================================


handleAdd = () =>{
    var todoArray = this.state.todos;
    todoArray.push(
  {
    id: global.constants.id_account++,
    state: 0,
    description: this.addedtask.value,
    datetime: new Date().toLocaleTimeString(),
    date:new Date().toLocaleDateString()
  }
);
this.setState({
  todos: todoArray
});
localStorage.setItem('todos_list',JSON.stringify(todoArray));  // 持久化
}

//==============================================================================

  render_todo_Item = (item) => {
    return (
      <div
        style={{
          ...styles.cardItem,
          ...{
            //backgroundColor: '#00ffff',
            backgroundColor: stateMap[item.state].color,
          },
        }}
        key={item.id}
        draggable
      >
        <div style={styles.desc}>{item.description}

        </div>
        <div>
          <span>
            <img
              alt="icon"
              src={require('./images/TB1b8vJjlTH8KJjy0FiXXcRsXXa-22-22.png')}
              style={styles.icon}
            />
            {item.datetime}
          </span>

            <span style={styles.delete} onClick={this.handleDelte} id={item.id}>
            {stateMap[item.state].delete}
            </span>

          <span style={styles.done} onClick={this.handleFinish} id={item.id}>
            {stateMap[item.state].text}
          </span>

        </div>
      </div>
    );
  };

  render_done_Item = (item) => {
    return (
      <div
        style={{
          ...styles.cardItem,
          ...{
            //backgroundColor: '#00ffff',
            backgroundColor: stateMap[item.state].color,
          },
        }}
        key={item.id}
        draggable
      >
        <div style={styles.desc}>{item.description}

        </div>
        <div>
          <span>
            <img
              alt="icon"
              src={require('./images/TB1b8vJjlTH8KJjy0FiXXcRsXXa-22-22.png')}
              style={styles.icon}
            />
            {item.datetime}
          </span>


          <span style={styles.done} onClick={this.handleFinish}>
            {stateMap[item.state].text}
          </span>

        </div>
      </div>
    );
  };

  render() {
    const { todos, dones } = this.state;
    var timestamp = new Date().toLocaleDateString();
    const button = (<Button color="#F4F7FF" type="primary" onClick={this.handleAdd}>添加任务</Button>);
    return (
      <div className="sort-card-list">
        <IceContainer style={styles.cardContainer}>
          <Row wrap gutter={20}>
            <Col fixedSpan="20" xxs="24" s="8" l="8" style={styles.cardList}>
              <div style={styles.title}>今日目标</div>
              <div style={styles.subTitle}>{timestamp}</div>
              {todos.map(this.render_todo_Item)}
              <input type="text" ref={input => this.addedtask = input} defaultValue="Add a task for you!"  style={{width: '100%',height: '40px'}} ></input>
              {button}
            </Col>
            <img
            alt="working"
            src={require('./images/work.png')}
            height="200"
            width="200"
            />
            <Col fixedSpan="20" xxs="24" s="8" l="8" style={styles.cardList}>
              <div style={styles.title}>成功完成</div>
              <div style={styles.subTitle}>{timestamp}</div>
              {dones.map(this.render_done_Item)}
            </Col>
          </Row>
        </IceContainer>
      </div>
    );
  }
}
