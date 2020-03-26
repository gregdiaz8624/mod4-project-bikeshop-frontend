import React from 'react'

const Search = (props) => {
   

    let handleOnChange=(event) => {
        props.updateInput(event.target.value)
    }
    return (
        <div>
           Search Service: <input type="text"
            value={props.input}
            onChange={ handleOnChange }
            ></input>
            
            <br/>
            ______________________

        </div>

    )
    
}



export default Search