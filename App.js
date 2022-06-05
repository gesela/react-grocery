class App extends React.Component {
    state = {
      list:list,  
      item: '',
      brand: '',
      units: '',
      quantity: 0,
    //   isPurchased: false
  
    }
    handleFilter = (e) => {
        const filteredQuantity = items.filter(e.target.value)
        this.setState({
            items: filteredQuantity
        })
    }

    handleChange = (event) => {
      this.setState({ [event.target.id]: event.target.value })
    }
    handleSubmit = (event) =>{
      event.preventDefault()
      const newItem = {
        item: this.state.item,
        brand:this.state.brand,
        units: this.state.units,
        quantity: this.state.quantity,
        isPurchased:false
      }
      const list = [...this.state.list, newItem]
      this.setState({
          list: list,
          item: '',
          brand:'',
          units:'',
          quantity:0
      })
    }
    // toggleHiring = () =>{
    //   this.setState({ isPurchased: !this.state.isPurchased })
    //   console.log(this.state.isPurchased)
    // }
    render(){
        return(
            <React.Fragment>
                <h1>Grocery List</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Item :</label>
                    <input type="text" value={this.state.item} onChange={this.handleChange} id="item"></input>
                    <br />
                    <label htmlFor="brand">Brand:</label>
                    <input type="text" value={this.state.brand} onChange={this.handleChange} id="brand"></input>
                    <br />
                    <label htmlFor="units">Units:</label>
                    <input type="text" value={this.state.units} onChange={this.handleChange} id="units"></input>
                    <br />
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="Number" value={this.state.quantity} onChange={this.handleChange} min="0" id="quantity"></input>
                    <br />
                    <input type="submit"></input>
                </form>
                <hr/>
                <div className="item">
                    {this.state.list.map((item) => !item.isPurchased && <Item item={item} />)}
                </div>
                <div className='preview'>
                    <h2>Preview our new item</h2>
                    <h3>{this.state.item}</h3>
                    <h4>{this.state.brand}</h4>
                    <h5>{this.state.quantity}</h5>
                  </div>
            </React.Fragment>
                   
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)