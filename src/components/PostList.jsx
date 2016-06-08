import DepTRow from './DepTRow';
import React, {Component, PropTypes} from 'react';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }
  clearAllChecked() {
    $('.xat-checkbox').prop('checked', false);
  }
  render() {
    var rows = [];
    var lastCategory = null;
    var checked = this.state.checked;
    this.props.postData.map((category) => {
      var current_category = Object.keys(category);
      var cate = category[current_category][0].category;
      rows.push(<DepTRow initialState={checked} posts={category[current_category]} category={cate} key={current_category} id={current_category}/>);
    });
    return (
      <div className='post-list'>
        <span className='title-list'>招聘职位</span>
        <a href='#' className='clear-all' onClick={this.clearAllChecked.bind(this)}>清空</a>
        <div className='list-area'>
          {rows}
        </div>
      </div>
    );
  }
}
module.exports = PostList;