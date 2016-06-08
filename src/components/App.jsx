
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
    var category = this.props.category;
    var id = this.props.id;
    return (
      <tr>
        <th>
          <input type='checkbox' id={id} className='xat-checkbox' />
          <label htmlFor={id}></label>
        </th>
        <th className='dept-row'>
          {category}
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
    var id = this.props.id;
    console.log(id);
    return (
      <tr>
        <th>
        </th>
        <td>
          <input type='checkbox' id={id} className='xat-checkbox' />
          <label htmlFor={id}></label>
          <span className='post-row'>
            {name}
          </span>
        </td>
        <td className='post-row'>{this.props.postData.count}</td>
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
        rows.push(<DepTRow category={post.category} key={post.category} id={'dept-' + post._id} />);
      }
      rows.push(<PostRow postData={post} key={post.name} id={'post-' + post._id} />);
      lastCategory = post.category;
    });
    return (
      <table className='list-table'>
        <thead>
          <tr>
            <th className='title-table'>招聘职位</th>
            <th></th>
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
