import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
         strSearch: '',
        }
        this.handlesearch = this.handlesearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClear = this.handleChange.bind(this);
      }

      handlesearch() {
        this.props.onClickSearch(this.state.strSearch)
      }

      handleChange(event) {
        this.setState({strSearch: event.target.value});
      }

      handleClear() {
        console.log('â')

        // this.setState({strSearch: ''});
        // this.props.onClickSearch(this.state.strSearch)
      }
    
      mappingData = () => this.state.dataUser.map(value  =>  
        <td>value</td>
      )

    render() {
        return (

            <div className= "col-12">
                      <input value = {this.state.stringSeach} onChange = {this.handleChange} type="text" className="form-control" placeholder="Search"  aria-label=" Recipient's username " aria-describedby="basic-addon2" />
                      <div className="input-group-append"><button className="btn btn-outline-secondary" type="button"   onClick = {this.handlesearch} >  Go !</button> </div>
                      <div className="input-group-append"><button className="btn btn-outline-secondary" type="button"   onClick = {this.handleClear} > Clear !</button> </div>
            </div>
        );
    }
}

export default Search;