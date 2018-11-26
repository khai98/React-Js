import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
    
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    // em chua viet
    handleEdit(value) {
        this.props.onClickEdit(value);
    }

    handleDelete(id) {
        this.props.onClickDelete(id);
    }

    render() {

        const listItem = this.props.data.map(value  => 
            <tr>
                <th>{value.Firstname}</th>
                <th>{value.Lastname}</th>
                <th>{value.Email}</th>
                <th>{value.Address}</th>
                <th>
                  <div  onClick = {() => this.handleEdit(value)} className="btn btn-warning sua"> <i className= "fa fa-edit"> edit</i></div>
                  <div  onClick = {() => this.handleDelete(value.id)} className="btn btn-warning sua"> <i className= "fa fa-edit"> delete</i></div>
                </th>
            </tr>
            );
        return (
            <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Firstname</th>
                          <th>Lastname</th>
                          <th>Email</th>
                          <th>Address</th>
                          <th> System</th>
                        </tr>
                      </thead>
                        <tbody>
                          {listItem}
                       </tbody>
                 </table> 
        );
    }
}

export default List;