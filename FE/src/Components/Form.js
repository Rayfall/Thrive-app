import React, {useState} from 'react';

function Form(props) {
    const [input, setIntput] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      console.log("this is handleSubmit");
      props.handleSubmitFromApp(input);
      setIntput("");
    };
  
    const handleChange = e => {
      console.log("this is handleChange");
      setIntput(e.target.value);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={input}
          type="text"
          placeholder={props.placeholderText}
        />
        <button>Create</button>
      </form>
    );
}
  
export default Form;