const validate = (values) => {
    const errors = {}

    if (!values.name) {
        errors.name = 'Please enter a project name';
      }
   
    console.log(errors)
    return errors
  }
  
export default validate