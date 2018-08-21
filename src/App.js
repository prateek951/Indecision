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
    fetch('https://raw.githubusercontent.com/prateek951/AngularJSONs/master/options.json')
    .then(response => response.json())
    .then(data => this.setState({options: data.options}));
  }
  addOption = option => {
    // Using the concat method one choice as well for immutable addition
    //returns a new array
    this.setState({ options: this.state.options.concat([option]) });
  };
  deleteOption = option => {
    const { options } = this.state;
    options.splice(options.indexOf(option), 1);
    this.setState({ options });
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

export default App;
