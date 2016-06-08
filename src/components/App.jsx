
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import PubSub from 'pubsub-js';

import MainContent from './MainContent';
import PostList from './PostList';

var listData = require('../listData.json');

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='main'>
        <PostList postData={listData}/>
        <MainContent />
      </div>
    );
  }
}

module.exports = App;
