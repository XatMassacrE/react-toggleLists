
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

// import ShowList from './ShowList.jsx';
// import MainContent from './MainContent.jsx';
// import Title from './Title.jsx';
// import RD_Dept from './RD_Dept.jsx';
// import Design_Dept from './Design_Dept.jsx';
// import DeptNav from './DeptNav.jsx';
// import DataContent from './DataContent.jsx';

var listData = require('../listData.json');
console.log(listData);
class App extends Component {
	// renderLists() {
	// 	return this.props.tasks.map((list) => (
	// 		<
	// 	))
	// }
  constructor() {
    super();
    // this.data = listData;
  }
  render() {
    return (
      // <section className = "vertical-nav">
      //   //<DeptNav />
      // </section>
      // <section className = "content-page xat-badge">
      //   hello 你好我也好
      // </section>
      <div className='main'>
        <PostList postData={listData}/>
        <MainContent />
      </div>
    );
  }
}
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
class PostRow extends Component {
  render() {
    var name = this.props.postData.name;
    var id = this.props.id;
    console.log(id);
    return (
      <li>
        <input type='checkbox' id={id} className='xat-checkbox' />
        <label htmlFor={id}></label>
        <span className='post-row'>
          {name}
        </span>
        <span className='post-row-number'>{this.props.postData.count}</span>
      </li>
    );
  }
}
class MainContent extends Component {
  render() {
    return (
      <div className='main-content'>
        this area will show your selections
      </div>
    );
  }
}
class PostList extends Component {
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
        <span className='clear-all'>清空</span>
        <div className='list-area'>
          {rows}
        </div>
      </div>
    );
  }
}

module.exports = App;
