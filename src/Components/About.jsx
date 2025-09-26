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
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">
          About <span className="text-yellow-600">FoodAlix</span>
        </h1>
  
        <p className="text-gray-700 mb-6">
          Hey there, welcome to <strong>FoodAlix</strong> – Sofia’s very own
          food delivery service. We started FoodAlix with a simple idea:
          <em> good food should reach you fast, fresh and with zero fuss.</em>
        </p>
  
        <div className="bg-yellow-50 p-4 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To bring together the best restaurants in town and make sure your
            cravings are sorted, whether it’s biryani at midnight or pancakes on a
            Sunday morning. 
          </p>
        </div>
  
        <h2 className="text-lg font-semibold mb-3">Why FoodAlix?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Lots of cuisines in one place</li>
          <li>Quick delivery by our riders</li>
          <li>Friendly support and easy refunds</li>
        </ul>
  
        <p className="text-gray-700">
          At the end of the day, FoodAlix is all about making life easier (and a
          little tastier). Thanks for being here – and don’t forget to try Sofia’s
          special picks next time you order 😉.
        </p>
      </div>
    );
    // return (
    //   <div>
    //     <h1>About Us</h1>
    //     <h3>This is my Food Delivery App About Page !!</h3>
    //     <UserClass name={"Sofia"} location={"VZA"} />
    //   </div>
    // );
  }

  componentDidMount() {
    console.log("Parent componenentDidMount");
  }
}

export default About;
