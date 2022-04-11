import React from "react";
import "./App.css";
import MyClass from "./Components/myClass";


// class App extends React.Component
// de base pas de mise à jour des states en functionnal ni de this

class App extends React.Component {
	constructor(props){
		super(props)

	}
	
	render(){
		console.log(this.props);
		return (
			
					<div className="App">
	
						<h1>{this.props.title}</h1>
						<p>{this.props.user}</p>
	
						<MyClass></MyClass>
	
					</div>
	
	
				// <React.Fragment>
				// </React.Fragment>
			);

	}
}

export default App;
