import React, {Component} from 'react'
import TodoList from'./List'
export default class Form extends Component{
  
  constructor(probs){
    super(probs)
    this.state={
      inputData:"",
      todoitems:['Exersice', 'Create Raect App'],
      }
  }  

  deleteItem=(index)=>{
      let original=[...this.state.todoitems]
      let left=original.filter((value,key)=>{
        return index!= key
      })
      this.setState({
        original:left
      })
      console.log(original)    
      console.log(left)
      alert("delete")
  }   
  changeTodoInput=(event)=>
  {
    this.setState({inputData:event.target.value})
    console.log(this.state.inputData)
  }
  handleSubmit=(event)=>
  {
    //alert(this.state.inputData)
    if (this.state.inputData !=='') {
      let newitem = [...this.state.todoitems,this.state.inputData] 
      this.setState({
        todoitems:newitem,
        inputData:''
      })
       }
    }
 
  render() {
        return (
           <>
             <div className='container my-3' >
               <div className='row justify-content-center' >
                 <div className='col-md-10' style={{border:"2px solid",borderRadius:"50px",padding:"30px", backgroundColor:"#fff", color:"#fff"}}>
                   <form >
                     <div className="mb-3">
                       <h1> To Do App </h1>
                       <input type="text" className="form-control" id="todo" placeholder='Try typing : Exercise, Shopping ' onChange={this.changeTodoInput} value={this.state.inputData}/>
                     </div>
                     <button onClick={this.handleSubmit} type="button" className="btn btn-primary w-100" style={{borderRadius:"50px",padding:"3px"}}>
                         Add
                      </button>
                   </form>
                   <TodoList items={this.state.todoitems} deleteItem={this.deleteItem}/>
                  </div> 
               </div>
             </div>
           </>
        )
    }
}

 


