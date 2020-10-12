import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  renderMyList = () => {
    return this.props.myList.map((stockObj) => <Stock key={stockObj.id} stock={stockObj} addStock={this.props.removeStock}/>);
  };

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.renderMyList()}
      </div>
    );
  }
}

export default PortfolioContainer;
