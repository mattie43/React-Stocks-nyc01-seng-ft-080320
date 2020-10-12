import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStockList = () => {
    return this.props.stockList.map(stockObj => <Stock key={stockObj.id} stock={stockObj} addStock={this.props.addStock}/>)
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStockList()}
      </div>
    );
  }

}

export default StockContainer;
