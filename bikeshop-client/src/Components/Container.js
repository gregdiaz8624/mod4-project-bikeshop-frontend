import React from 'react'
import AppointmentCard from './AppointmentCard'
import Search from './Search'
import Form from './Form'

class Container extends React.Component{

    state = {
        appointments: [],
        input: ""
    }

    componentDidMount(){
        fetch("http://localhost:3000/appointments")
        .then(r => r.json())
        .then(appointments => {console.log(appointments)
             this.setState({appointments: appointments})
        })
    }

    mapAppointment=()=>{
       
        return this.filterAppointment().map(appointment => (
            <AppointmentCard key={appointment.id} appointmentData={appointment} 
            removeAppointment={this.removeAppointment} />
        ))
    }

    updateInput=(newInput)=>{
        this.setState({
            input: newInput 
        })
    }

    filterAppointment=()=>{
        let {appointments, input} = this.state
        let filteredArray = appointments.filter(appointments=>appointments.service.includes(input))
         return filteredArray
    }

    addAppointment=(appointmentObj)=>{
        let {appointments} = this.state
        let updatedArray = appointments
        fetch('http://localhost:3000/appointments',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(appointmentObj)
        })
        .then(resp=>resp.json())
        .then(newAppointment => {
            updatedArray.push(newAppointment)
            this.setState({
                appointments:updatedArray
                
            })
        })
    }

    removeAppointment=(appointmentObj)=>{
        let {appointments} = this.state
       
        let updatedArray = appointments.filter(appointment => {
            if (appointment.id !== appointmentObj.id){
              return appointment
            }
          })
          fetch(`http://localhost:3000/appointments/${appointmentObj.id}`,{
            method:'DELETE'
          })
          this.setState({
            appointments: updatedArray
          })
    }



    render(){
        return(
            <div>
                <h1>Bike Shop App</h1>
                {<Search  input={this.state.input}
                            updateInput={this.updateInput}
                />}

                {<Form addAppointment={this.addAppointment} />}

               {this.mapAppointment()}

               
            </div>
        )
    }
}

export default Container;