import React, { Component } from "react";
import PropTypes from "prop-types";

class Quotes extends Component {
  static propTypes = {
    quotes: PropTypes.array.isRequired
  };

  static defaultProps = {
    quotes: [{ quote: "one", by: "one" }, { quote: "two", by: "two" }]
  };

  constructor(props) {
    super(props);
    this.state = {
      currentQuoteIndex: 0
    };

    setInterval(() => {
      let newIndex =
        this.state.currentQuoteIndex + 1 === this.props.quotes.length
          ? 0
          : this.state.currentQuoteIndex + 1;
      this.setState({ currentQuoteIndex: newIndex });
    }, 1000);
  }
  render() {
    let { currentQuoteIndex } = this.state;
    let { quotes } = this.props;
    return (
      <div>
        <h1
          style={
            currentQuoteIndex % 2 === 0
              ? { color: "black" }
              : { color: "purple" }
          }
        >
          {currentQuoteIndex} - {quotes[currentQuoteIndex].quote.toUpperCase()}
        </h1>
      </div>
    );
  }
}

export default Quotes;
