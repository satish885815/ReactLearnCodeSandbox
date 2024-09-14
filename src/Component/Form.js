import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comments: "",
      topic: "",
    };
  }
  handleUserNameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleComentsChange = () => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleChangeTopic = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(
      `The username ${this.state.username} topic ${this.state.topic} and comments ${this.state.comments}`
    );
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUserNameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleComentsChange}
          />
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleChangeTopic}>
            <option value="react">React</option>
            <option value="js">JS</option>
            <option value="angular">Angular</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
