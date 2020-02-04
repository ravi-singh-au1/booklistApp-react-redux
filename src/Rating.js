import React, { Component } from "react";

import StarRating from "react-star-rating";
import { connect } from "react-redux";
import { increment, decrement } from "./actions/action";
class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }
  incrementItem = () => {
    if (this.state.clicks < 10) {
      this.setState({ clicks: this.state.clicks + 1 });
    } else {
      alert("Can not give grater than 10");
    }
  };
  decreaseItem = () => {
    if (this.state.clicks > 0) {
      this.setState({ clicks: this.state.clicks - 1 });
    } else {
      alert("can not give less than 1");
    }
  };

  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    const { increment, decrement } = this.props;
    return (
      <div>
        <button onClick={this.incrementItem} className="btn btn-success btn">
          rating +{""}
        </button>
        <span>
          <button onClick={this.decreaseItem} className="btn btn-primary btn">
            rating -{" "}
          </button>
        </span>
        <button onClick={this.ToggleClick} className="btn btn-secondary btn">
          {this.state.show ? "Hide rating" : "Show rating"}
        </button>

        {this.state.show ? <h2>{this.state.clicks}</h2> : ""}
      </div>
    );
  }
}

export default Rating;
