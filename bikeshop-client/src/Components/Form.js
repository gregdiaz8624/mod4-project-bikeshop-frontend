import React from 'react'

class Form extends React.Component{


  state={
    client_name:"",
    bike:"",
    service:"",
    price:"",
    pick_up:"",
    bikeshop_id: ""
  }

  handleSubmit=(event)=>{
    event.preventDefault()
    this.props.addAppointment(this.state)
  }

  handleInput=(event)=>{
    this.setState({
      [event.target.name]:event.target.value 
    })
  }
   
    render(){
      return (
        <div>
          <h2>Appointment Form</h2>
          <form onSubmit={this.handleSubmit}>
             Name:<input type="text" name="client_name" onChange={this.handleInput} ></input>
             Bike:<input type="text" name="bike" onChange={this.handleInput} ></input>
             Service:<input type="text" name="service" onChange={this.handleInput} ></input>
             Price:<input type="text" name="price" onChange={this.handleInput} ></input>
             Pick Up:<input type="text" name="pick_up" onChange={this.handleInput} ></input>
             Shop ID:<input type="text" name="bikeshop_id" onChange={this.handleInput} ></input>
                <input type="submit" value="New Appointment " ></input>
          </form>
        </div>
      )
   } 
}



export default Form