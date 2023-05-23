import React, {Component } from 'react'
export default class List extends Component {
    render() {
     return(
            <ul class="list-group my-3">
            {
              this.props.items.map((value,index)=> {
                 return (
                     <React.Fragment key={index}>
                        <li className='list-group-item'> {index} {""}{value} {""}
                        <button className="btn btn-danger w-2 mx-auto my-1" onClick={()=>{this.props.deleteItem(index)}} >X</button>
                        </li>
                     </React.Fragment>
                    )   


          
                } 
              )
            }
            </ul>
        )
     } 
    }



     