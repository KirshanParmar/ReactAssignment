import React from 'react';
//import Counter from './Counter';

export default class Apps extends React.Component{
    constructor(props){
        console.log('Constructor');
     super();
     this.state={
        mount:true
  
      }
      this.mountCounter=()=>this.setState({mount:true})
      this.unmountCounter=()=>this.setState({mount:false})
      
}

    render(){
        return <div>
        <div className="Apps">

        <button onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
        <button onClick={this.unmountCounter}disabled={!this.state.mount}>UnMount Counter</button>   

        </div>
        </div>
    }
    
}