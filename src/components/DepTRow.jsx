
import React, {Component, PropTypes} from 'react';
import PostRow from './PostRow';

class DepTRow extends Component {
  render() {
    var category = this.props.category;
    var id = this.props.id;
    var posts = this.props.posts
    var rows = [];
    var count = 0;
    posts.map((post) => {
      rows.push(<PostRow postData={post} key={post.name} id={'post-' + post._id} />);
      count += post.count;
    })
    return (
      <div>
        <input type='checkbox' id={id} className='xat-checkbox' />
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