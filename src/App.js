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
      options: [
        "Playing cricket",
        "Coding",
        "Understanding Life",
        "Beauty of Nature",
        "Exercise",
        "Yoga"
      ]
    };
  }
  addOption = option => {
    const options = [...this.state.options];
    options.unshift(option);
    this.setState({ options });
  };
  deleteOption = option => {
    const { options } = this.state;
    options.splice(options.indexOf(option), 1);
    this.setState({ options });
  };
  removeAll = () => {
    this.setState({ options: [] });
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
        />
        <AddOption addOption={this.addOption} />
      </div>
    );
  }
}

export default App;

