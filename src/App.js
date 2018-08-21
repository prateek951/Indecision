import React, { Component } from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Indecision Application",
      subtitle: "Put your life in the hands of a computer",
      action: "What should I do?",
      options: []
    };
  }

  componentDidMount() {
    try {
      console.log("Fetching data[componentDidMount]");
      if (localStorage.options) {
        this.setState({ options: JSON.parse(localStorage.options) });
      }
    } catch (error) {
      console.log('Invalid JSON');
    }
  }
  componentDidCatch(error, info) {
    console.log("[componentDidCatch] App");
  }
  

  addOption = option => {
    // Using the concat method one choice as well for immutable addition
    //returns a new array
    //Set the option to the local state
    console.log("Saving data");
    this.setState({ options: this.state.options.concat([option]) });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      //Set the option to the localstorage
      localStorage.setItem("options", JSON.stringify(this.state.options));
    }
  }
  deleteOption = option => {
    console.log("[deleteOption] App");
    this.setState({ options: this.state.options.filter(op => option !== op) });
  };
  removeAll = () => {
    this.setState({ options: [] });
  };
  optionWasClicked = () => {
    alert("Great decision! Stick to it and follow it religiously!");
  };

  render() {
    const { title, action, options, subtitle } = this.state;
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action action={action} length={options.length} options={options} />
        <Options
          options={options}
          deleteOption={this.deleteOption}
          removeAll={this.removeAll}
          clicked={this.optionWasClicked}
        />
        <AddOption options={options} addOption={this.addOption} />
      </div>
    );
  }
}

App.defaultProps = {
  options: []
};

export default App;
