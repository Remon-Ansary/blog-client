import React from "react";
import axios from "axios";

import './App.css'
class App extends React.Component {
  state = {
    title: "",
    body: "",
    posts: []
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submit = (event) => {
    event.preventDefault();
    const payload = {
      title: this.state.title,
      body: this.state.body,
    };

    axios({
      url: "/api/save",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("data sent to server");
        this.resetUserInputs();
        this.getBlogPost();
      })
      .catch(() => {
        console.log("error");
      });
  };

  componentDidMount =()=>{
    this.getBlogPost();

  };

  getBlogPost = () => {
    axios.get('/api')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log("data received");
      })
      .catch(() => {
        alert("Data not receiving");
      });
  };

  resetUserInputs = () => {
    this.setState({
      title: "",
      body: "",
    });
  };


  displayBlogPost = (posts) => {

    if(!posts.length) return null;
   return posts.map((post, index)=>(
      <div key={index}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      </div>
    ))
  }

  render() {
console.log('state: ',this.state)
    return (
      <div>
        <h2>Welcome</h2>
        <div className="app">
          <h2>Welcome to the best app ever</h2>
          <form onSubmit={this.submit}>
            <div className="form-input">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input">
              <textarea
                placeholder="body"
                name="body"
                cols="30"
                rows="10"
                value={this.state.body}
                onChange={this.handleChange}
              ></textarea>
            </div>

            <button>Submit</button>
          </form>
          <div className="blog-post">
            {this.displayBlogPost(this.state.posts)}
          </div>


        </div>
      </div>
    );
  }
}

export default App;
