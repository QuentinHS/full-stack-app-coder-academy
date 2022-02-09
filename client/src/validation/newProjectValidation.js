const validate = (values) => {
    const errors = {}

    if (!values.name) {
        errors.name = 'Please enter a project name';
      }

    if (!values.address) {
        errors.address = 'Please enter the address of the project'
      } else if (values.address.length < 6) {
        errors.address = 'Address must be at least 6 characters'
      }

      if (!values.completionDate) {
        errors.completionDate = 'Please enter the estimated date of completion'
      }else if (Date.parse(values.completionDate) < new Date()){
        errors.completionDate= 'Please enter a date not in the past'    
      }
  
    console.log(errors)
    return errors
  }
  
export default validate