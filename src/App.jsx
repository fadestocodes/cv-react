import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RenderInfoSection} from "./components/info-section.jsx"
import {RenderEducation} from "./components/education.jsx"

function App() {
  const [inputValue, setInputValue] = useState({
    fullName : '',
    email : '',
    phoneNumber : '',
    address : '',
    schoolName : '',
    degreeName : '',
    schoolStart : '',
    schoolEnd : '',
    schoolLocation : '',
    employer : '',
    jobTitle : '',
    jobStart : '',
    jobEnd : '',
    editMode : true 
  });


  const handleSubmit = (event) => {
    event.preventDefault();
      setInputValue(
        prevData => ({    //USING SPREAD OPERATOR WE HAVE TO WRAP IN PARANTHESIS
          ...prevData,
          editMode : !prevData.editMode  //THIS TOGGLES TRUE OR FALSE, WHATEVER IS OPPOSITE
        })
      )
    
  }

  return (
    <>
      {
        inputValue.editMode ?
        (
          <form onSubmit={handleSubmit}  className="edit-form" >
            <RenderInfoSection inputValue={inputValue} setInputValue = {setInputValue}/>
            <RenderEducation inputValue = {inputValue} setInputValue = {setInputValue}/>
            <button type='submit'>Submit</button>
          </form>

        ) : 
        (
          <div className="preview-section">
            <div className="preview-info">
              <h1>{inputValue.fullName}</h1>
              <div className="info-description">
                <p>{inputValue.email}</p>
                <p>{inputValue.phoneNumber}</p>
                <p>{inputValue.address}</p>
              </div>
            </div>
            <div className="preview-education">
              <h2>{inputValue.shcoolName}</h2>
              <div className="education-info">
                <p>{ inputValue.schoolStart && inputValue.schoolEnd ? `${inputValue.schoolStart} - ${inputValue.schoolEnd}` : inputValue.schoolStart || inputValue.schoolEnd }<br></br>{inputValue.schoolLocation}</p>
                <p><b>{inputValue.schoolName}</b><br></br>{inputValue.degreeName}</p>
              </div>
            </div>
            <button type='submit' onClick={handleSubmit}>Edit</button>
          </div>
        )
      }
      
    </>
   )
}


export default App
