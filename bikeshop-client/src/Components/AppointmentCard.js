import React from 'react'

const AppointmentCard = (props) => {
    
    let {client_name,bike, service, price, pick_up} = props.appointmentData

    let handleOnClick=(event)=>{
        props.removeAppointment(props.appointmentData)
    }
    
    return (
        <div> <br/>
        
            Client: {client_name} <button onClick={handleOnClick}> Delete </button><br/>
            Bike: {bike} <br/>
            Service: {service} <br/>
            Price: {price}  <br/>
            Pickup: {pick_up} <br/>
            
            ______________________
            
        </div>

    )
    
}


export default AppointmentCard