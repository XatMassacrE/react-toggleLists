
import React, {Component, PropTypes} from 'react';
import PostRow from './PostRow';

class DepTRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.initialState,
      childChecked: this.props.initialState
    }
  }
  togglePostRows() {
    console.log(this.state);
    var newState = !this.state.checked;
    var classStr = '.' + this.props.id;
    this.setState({
      checked: newState
    });
    $(classStr).prop('checked', newState);
  }
  render() {
    var category = this.props.category;
    var id = this.props.id;
    var posts = this.props.posts
    var rows = [];
    var count = 0;
    var childChecked = this.state.childState;
    posts.map((post) => {
      rows.push(<PostRow postCheck={childChecked} postData={post} key={post.name} id={'post-' + post._id} categoryClass={id}/>);
      count += post.count;
    });
    var checked = this.state.checked;
    return (
      <div>
        <input type='checkbox' id={id} check={checked} className='xat-checkbox' onChange={this.togglePostRows.bind(this)} />
        <label htmlFor={id}></label>

        <span className='dept-row'>
          {category}
        </span>
        <span className='xat-badge dept-row-number'>
          {count}
        </span>
        <ul>
          {rows}
        </ul>
      </div>
    );
  }
}
module.exports = DepTRow;