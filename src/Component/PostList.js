import React, { Component } from "react";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errorMessage: "",
    };
  }

  render() {
    return <div>Post List</div>;
  }
}

export default PostList;
