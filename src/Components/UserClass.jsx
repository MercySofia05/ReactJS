
import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log("Child1 Constructor");
        this.state = {
            count: 0
        };
       
    }
    render(){
        const {name, location} = this.props;
        console.log("Child1 render");
       
        return (
           
            <div>
                <h2>User Class</h2>
                <h3>{name}</h3>
                <h3>{location}</h3>
                <h4>Count: {this.state.count}</h4>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Click Me</button>
             
            </div>
        )
    }

    componentDidMount(){
        console.log("child componenentDidMount");
    }
}

export default UserClass;