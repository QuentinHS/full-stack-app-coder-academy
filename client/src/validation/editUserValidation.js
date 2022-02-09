const validate = (values) => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = 'Please enter your first name';
    }
  
    if (!values.lastName) {
      errors.lastName = 'Please enter your last name';
    } 
  
    if (!values.email) {
      errors.email = 'Please enter your email address'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }

      if (!values.businessName) {
        errors.businessName = 'Please enter your company/business name ';
      } 

     if (values.abn && !/^\d+$/i.test(values.abn)){
        errors.abn = 'Please enter a valid ABN'
      }
  
    console.log(errors)
    return errors
  }
  
export default validate