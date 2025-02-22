
function InputField({label="Label:", type="text", placeholder="", isRequired = true, onChangeFunction={}}) {
    return (
        <>
            <label htmlFor="" className="label-input">{label}</label>
            {isRequired ? 
                <input type={type} placeholder={placeholder} className="input-field" onChange={onChangeFunction} required/> :
                <input type={type} placeholder={placeholder} className="input-field" />
            }
        </>
    )
}

export default InputField