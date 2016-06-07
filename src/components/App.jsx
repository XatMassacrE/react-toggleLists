
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
//console.log(listData);
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
      <div>
        <PostTabel postData={listData}/>
      </div>
    );
  }
}
class DepTRow extends Component {
  render() {
    return (
      <tr>
        <th>
          <input type='checkbox' />
        </th>
        <th style={{border: '1px solid'}}>
          {this.props.category}
        </th>
        <th className='xat-badge'>
          120
        </th>
      </tr>
    );
  }
}
class PostRow extends Component {
  render() {
    var name = this.props.postData.name;
    return (
      <tr>
        <th>
          <input type='checkbox' />
        </th>
        <td>{name}</td>
        <td>{this.props.postData.count}</td>
      </tr>
    );
  }
}
class PostTabel extends Component {
  render() {
    var rows = [];
    var lastCategory = null;
    this.props.postData.map((post) => {
      console.log(post.category !== lastCategory);
      if (post.category !== lastCategory) {
        rows.push(<DepTRow category={post.category} key={post.category} />);
      }
      rows.push(<PostRow postData={post} key={post.name} />);
      lastCategory = post.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>招聘职位</th>
            <th>清空</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

module.exports = App;
