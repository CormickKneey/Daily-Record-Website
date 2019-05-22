import React, { Component } from 'react';
import { Icon, Grid ,Upload} from '@alifd/next';
import Filter from './Filter';
const { Row, Col } = Grid;


function onPreview(info) {
    console.log('onPreview callback : ', info);
}

function onChange(info) {
    console.log('onChange callback : ', info);
}

function onSuccess(res, file) {
    console.log('onSuccess callback : ', res, file);
}

function onError(file) {
    console.log('onError callback : ', file);
}

export default class CardList extends Component {

  static displayName = 'CardList';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div style={styles.container}>
        <Filter />
        <Row  gutter="20">
          <Col span="8" l="6" xs="12" xxs="24">
            <div style={{ ...styles.card, ...styles.createScheme }}>
              <Icon
                type="add"
                size="large"
                style={styles.addIcon}
                />
              <span>上传文件</span>
            </div>
          </Col>
          <img
          alt="storage"
          src={require('./images/storage.png')}
          height="100"
          width="100"
          />
        <Col  span="8" gutter="20">
            <div>
              <Upload.Card
                  listType="card"
                  action="http://192.168.0.1:9999/file"
                  accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
                  method="post"
                  onPreview={onPreview}
                  onChange={onChange}
                  onSuccess={onSuccess}
                  onError={onError}
              />
            </div>
          </Col>
        </Row>
      </div>

    );
  }
}



const styles = {
  container: {
    background: '#fafafa',
  },
  createScheme: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px',
    cursor: 'pointer',
  },
  card: {
    displayName: 'flex',
    marginBottom: '20px',
    background: '#fff',
    borderRadius: '6px',
  },
  head: {
    position: 'relative',
    padding: '16px 16px 8px',
    borderBottom: '1px solid #e9e9e9',
  },
  title: {
    margin: '0 0 5px',
    width: '90%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: '16px',
    fontWeight: '500',
    color: 'rgba(0,0,0,.85)',
  },
  desc: {
    margin: '0',
    fontSize: '14px',
    color: '#666',
  },
  body: {
    position: 'relative',
    padding: '16px',
  },
  info: {
    margin: '0 0 8px',
    fontSize: '13px',
    color: '#666',
  },
  time: {
    position: 'relative',
  },
  addIcon: {
    marginRight: '10px',
  },
  editIcon: {
    position: 'absolute',
    right: '0',
    bottom: '0',
    cursor: 'pointer',
  },
};
