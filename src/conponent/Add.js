import React, { Component } from 'react';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Firstname: '',
            Lastname: '',
            Email: '',
            Address: '',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        console.log(this.props.itemSelected)
      }
    
      handleChange(event) {
        this.setState({
            
            Firstname: event.target.value,
            Lastname: event.target.value,
            Email: event.target.value,
            Address: event.target.value,
        });
      }
      
    
      handleSubmit(event) {
          let item = {
            Firstname: this.state.Firstname,
            Lastname: this.state.Lastname,
            Email: this.state.Email,
            Address: this.state.Address,
          }
           this.props.handleSubmit(item);
           event.preventDefault();
      }

    render() {
        return (

            <form onSubmit={this.handleSubmit} >

                <label> Firstname:  
                <input type="text" name="Data_Firstname"  value={this.state.Firstname} onChange = {this.handleChange}/>
                </label>  
                <label> Lastname: 
                <input type="text" name="Data_Lastname"   value={this.state.Lastname} onChange = {this.handleChange}/>
                </label>
                <label> Email:   
                <input type="text" name="Data_Email"      value={this.state.Email} onChange = {this.handleChange}/>
                </label>
                <label> Address:   
                <input type="text" name=" Data_Address"   value={this.state.Address} onChange = {this.handleChange} />
                </label>

            <input type="submit" value="Submit"  />

          </form>
           
        );
    }
}

export default Add;