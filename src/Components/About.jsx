import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  render() {
    console.log("Parent render");

    return (
      <div>
        <h1>About Us</h1>
        <h3>This is my Food Delivery App About Page !!</h3>
        <UserClass name={"Sofia"} location={"VZA"} />
      </div>
    );
  }

  componentDidMount() {
    console.log("Parent componenentDidMount");
  }
}

export default About;
