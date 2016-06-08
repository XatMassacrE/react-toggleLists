import React, {Component, PropTypes} from 'react';
import PubSub from 'pubsub-js';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 'none'
    };
  }
  componentDidMount() {
    this.pubsub_token = PubSub.subscribe('select post', function(topic, post) {
      this.setState({
        selection: post
      });
    }.bind(this));
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.pubsub_token);
  }
  render() {
    return (
      <div className='main-content'>
        <p>You selected position is : {this.state.selection}</p>
      </div>
    );
  }
}
module.exports = MainContent;