

function RenderInfoSection( {inputValue, setInputValue}) {


    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValue(prevData => ({
            ...prevData,
            [name] : value
        }));
    }


    return (
        <div className="info-section">
            <label htmlFor='fullName'>Full Name</label>
            <input type="text" id='fullName' name='fullName' value={inputValue.fullName} onChange={ handleChange }></input>
            <label htmlFor='email'>Email</label>
            <input type="text" id='email' name='email' value={inputValue.email} onChange={ handleChange }></input>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input type="text" id='phoneNumber' name='phoneNumber' value={inputValue.phoneNumber} onChange={ handleChange }></input>
            <label htmlFor='address'>Address</label>
            <input type="text" id='address' name='address' value={inputValue.address} onChange={ handleChange }></input>
        </div>
    );

}

export {RenderInfoSection}