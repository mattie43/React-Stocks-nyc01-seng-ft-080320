import React from "react";

class SearchBar extends React.Component {

  state = {
    Alphabetically: false,
    Price: false
  }

  orderList = (e) => {
    if(e.target.value === 'Alphabetically' || e.target.value === 'Price'){
      this.setState({[e.target.value]: !this.state[e.target.value]})
    }

    this.props.orderList(e.target.value)
  }

  render() {
    return (
      <div>
        <strong>Sort by:</strong>
        <label>
          <input
            type="radio"
            value="Alphabetically"
            checked={this.state.Alphabetically}
            onClick={this.orderList}
          />
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={this.state.Price} onClick={this.orderList} />
          Price
        </label>
        <br />

        <label>
          <strong>Filter:</strong>
          <select onChange={this.orderList}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
      </div>
    );
  }
}

export default SearchBar;
