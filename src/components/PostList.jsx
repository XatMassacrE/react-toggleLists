import DepTRow from './DepTRow';
import React, {Component, PropTypes} from 'react';

class PostList extends Component {
  clearAllChecked() {
    console.log('clear');
  }
  render() {
    var rows = [];
    var lastCategory = null;
    this.props.postData.map((category) => {
      var current_category = Object.keys(category);
      var cate = category[current_category][0].category;
      rows.push(<DepTRow posts={category[current_category]} category={cate} key={current_category} id={current_category}/>);
    });
    return (
      <div className='post-list'>
        <span className='title-list'>招聘职位</span>
        <span className='clear-all' onClick={this.clearAllChecked}>清空</span>
        <div className='list-area'>
          {rows}
        </div>
      </div>
    );
  }
}
module.exports = PostList;