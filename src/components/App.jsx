
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

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
      <section className = "content-page">
        hello 你好我也好
      </section>
    );
  }
}

module.exports = App;
