import React, { Component } from 'react';
import Style from '../css/style.css';
import Search from './Search.js';
import List from './List.js';
import Add from './Add';
import Data from './Data.json';
import {remove} from 'lodash';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: Data,
      strSearch: '',
      itemSelected: null,
    };
    
    this.handleSearch = this.handleSearch.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    // this.handleEdit = this.handleEdit.bind(this);
  }
  
  handleSearch(value) {
    this.setState({
        strSearch: value
    });
  }

  handleSubmit(item) {
    // console.log(item.Firstname)
    let itemDatas = this.state.dataUser; 

    itemDatas.push(
      {
            Firstname : item.Firstname,
            Lastname : item.Lastname,
            Email : item.Lastname,
            Address : item.Address,
      });
    // console.log(itemDatas)
    this.setState({
      dataUser : itemDatas
    })

  }

  // handleEdit(value) {
  //   this.setState({
  //     itemSelected: value
  //   })
  // }

  handleDelete(id) {
    // console.log(id)
    let dataUsers =  this.state.dataUser;
    remove(dataUsers, (item) =>
    {
      return item.id === id;
    })
    this.setState({
      dataUser : dataUsers
    });
  }

    render() {  

        let itemDatas = this.state.dataUser; 
        let items = [];
        let itemSelected = this.state.itemSelected;
        const search  = this.state.strSearch;

        // console.log(itemDatas)

        if(search.length > 0) {
            itemDatas.forEach( (item) => 
              {
                  if(item.Firstname.toLowerCase().indexOf(search) !== -1)
                  {
                     items.push(item);
                  } else {
                    //  chua  biet in ra cho can hien thi
                  }
              }); 
        }  else {
           items = itemDatas;
        }

        // items =   _.filter(itemDatas, (item) => {
        //     return item.Firstname > 0;
        // });

        // console.log(items)

        // => objects for ['fred']

        return (
            <div className="container">
              <h4 className="text"> Demo Add | Edit | Delete </h4>
                <div className="input-group mb-3">

                   <Search onClickSearch = {this.handleSearch}  />
                </div>  
              <br/>
                    {/* <List   onClickEdit = {this.handleEdit} onClickDelete = {this.handleDelete}  data = {items}/> em dang viet nhung chua lam duoc */}
                    <List    onClickDelete = {this.handleDelete}  data = {items}/>

                    <Add  itemSelected = {itemSelected} handleSubmit = {this.handleSubmit}/>
             </div>
        );
      }
}

export default Home;