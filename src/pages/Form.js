import React, {useState} from "react";

const Form = ({initialTodo, handleSubmit, buttonLabel, history}) => {

  /////////////////////////
  // THe Form Data State
  //////////////////////////
  const [formData, setFormData] = useState(initialTodo)

  /////////////////////////
  // Functions
  /////////////////////////
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    handleSubmit(formData)
    history.push("/")
  }

 
  return <form onSubmit={handleSubmission}>
    <input
      type="text"
      onChange={handleChange}
      value={formData.subject}
      name="subject"
      />
    <input
      type="text"
      onChange={handleChange}
      value={formData.details}
      name="details"/>
      <input type="submit" value={buttonLabel}/>
  </form>;
};

export default Form;