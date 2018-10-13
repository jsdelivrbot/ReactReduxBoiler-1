//An example of a component hooked up to redux


import React, { Component } from 'react';
import { connect } from 'react-redux';

//action creator
import { testAction } from '../actions';

class ExampleComponent extends Component {

	onClick = () => {

		//console.log("Clicked");
		this.props.testAction();
	}

	render(){

		return(
			<div className="firstComponent" onClick={this.onClick}>

			</div>
		)
	}
}

//connects component to the action creator
export default connect(null, { testAction: testAction })(ExampleComponent);