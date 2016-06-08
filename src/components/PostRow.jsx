import React, {Component, PropTypes} from 'react';
import PubSub from 'pubsub-js';

class PostRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.initialState
    }
  }
  onCheckChange() {
    var newState = !this.state.checked;
    this.setState({
      checked: newState
    });
    PubSub.publish('select post', this.props.postData.name);
    console.log(newState);
  }
  render() {
    var name = this.props.postData.name;
    var id = this.props.id;
    var checked = this.state.checked;
    return (
      <li>
        <input type='checkbox' id={id} check={checked} onChange={this.onCheckChange.bind(this)} className='xat-checkbox' />
        <label htmlFor={id}></label>
        <span className='post-row'>
          {name}
        </span>
        <span className='post-row-number'>{this.props.postData.count}</span>
      </li>
    );
  }
}
module.exports = PostRow;