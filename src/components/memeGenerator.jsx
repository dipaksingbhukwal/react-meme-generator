import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "https://i.imgflip.com/9ehk.jpg",
      allMemeImgs: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleGenerate = this.handleGenerate.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        console.log(memes[0]);

        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(e) {
    // console.log(e.target.name);

    const { name, value } = e.target;
    this.setState({ [name]: value });
    // console.log(name, value);
  }

  handleGenerate(e) {
    e.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randomImage = this.state.allMemeImgs[randNum].url;
    this.setState({ randomImage });
  }

  render() {
    return (
      <div className="container">
        {/* <form>
          <label htmlFor="topText" />
          <input type="text" id="topText" />
          <label htmlFor="bottomText" />
          <input type="text" id="bottomText" />
          <button>Generate</button>
        </form> */}

        <form className="meme" onSubmit={this.handleGenerate}>
          <div className="form-group">
            <label htmlFor="topText">Top Text</label>
            <input
              type="text"
              className="form-control"
              name="topText"
              id="topText"
              placeholder="Enter Top Text"
              value={this.state.topText}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bottomText">Bottom Text</label>
            <input
              type="text"
              className="form-control"
              name="bottomText"
              id="bottomText"
              placeholder="Enter Bottom Text"
              value={this.state.bottomText}
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-primary">Generate</button>
        </form>

        <div className="meme">
          <img src={this.state.randomImage} alt="" />
          <h2 className="top-left"> {this.state.topText}</h2>
          <h2 className="bottom-left"> {this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
