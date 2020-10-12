import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    originalList: [],
    stockList: [],
    myList: []
  }

  addStock = (stockObj) => {
    this.setState({myList: [...this.state.myList, stockObj]})
  }

  removeStock = (stockObj) => {
    const newList = this.state.myList.filter(oldStockObj => oldStockObj !== stockObj)
    this.setState({myList: newList})
  }

  orderList = (sort) => {
    if(sort === 'Price'){
      const priceList = this.state.stockList.sort((a,b) => a.price-b.price )
      this.setState({stockList: priceList})
    }else if(sort === 'Alphabetically'){
      const alphaList = this.state.stockList.sort((a, b) => (a.name > b.name) ? 1 : -1)
      this.setState({stockList: alphaList})
    }else{
      const filterList = this.state.originalList.filter(stockObj => stockObj.type === sort)
      this.setState({stockList: filterList})
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(resp => resp.json())
      .then(data => this.setState({stockList: data, originalList: data}))
  }

  render() {
    return (
      <div>
        <SearchBar orderList={this.orderList}/>

          <div className="row">
            <div className="col-8">
              <StockContainer stockList={this.state.stockList} addStock={this.addStock}/>
            </div>
            <div className="col-4">
              <PortfolioContainer myList={this.state.myList} removeStock={this.removeStock}/>
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
