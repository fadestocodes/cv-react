import { useState } from "react";

function RenderEducation( {inputValue, setInputValue} ){


    const handleChange = (event) => {
        const { name, value } = event.target
        setInputValue( prevData => ({
            ...prevData,
            [name] : value
        }))
    }

    return (
        <div className="education-section" >
            <label htmlFor="schoolName">Name Of School</label>
            <input type="text" id="schoolName" name="schoolName" onChange={handleChange} value={inputValue.schoolName}></input>
            <label htmlFor="degreeName">Degree/Program</label>
            <input type="text" id="degreeName" name="degreeName" onChange={handleChange} value={inputValue.degreeName}></input>
            <label htmlFor="schoolStart">Start Date</label>
            <input type="text" id="schoolStart" name="schoolStart" onChange={handleChange} value={inputValue.schoolStart}></input>
            <label htmlFor="schoolEnd">End Date</label>
            <input type="text" id="schoolEnd" name="schoolEnd" onChange={handleChange} value={inputValue.schoolEnd}></input>
            <label htmlFor="schoolLocation">Location</label>
            <input type="text" id="schoolLocation" name="schoolLocation" onChange={handleChange} value={inputValue.schoolLocation}></input>
        </div>
    )
}

export { RenderEducation };