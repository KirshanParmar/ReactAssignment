import React from 'react';

export default class Counter extends React.Component{
    constructor(props){
        console.log('Constructor');
     super();
     this.state={ Counter:0
    }
    this.increment=()=> this.setState({Counter:this.state.Counter+1});
    this.decrement=()=> this.setState({Counter:this.state.Counter-1})
}
componentDidMount(){
    console.log("Component Did Mount");
    console.log("====================");

}
    render(){
        console.log("Starting Point...............!");
        return <div>
        <div className="counter">
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            Counter:{this.state.Counter}

        </div>
        </div>
    }
    componentDidUpdate(){
        console.log("Component Did Update");
        console.log("=====================");

    }
    componentWillUnmount(){
        console.log("Component Will Unmount");
        console.log("======================");
    }
}