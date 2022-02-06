const validate = (values) => {
    const errors = {}
    if (!values.firstname) {
      errors.firstname = 'Please enter your first name';
    }
  
    if (!values.lastname) {
      errors.lastname = 'Please enter your last name';
    } 
  
    if (!values.email) {
      errors.email = 'Please enter your email address'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Please enter a password'
      } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters'
      }

      if (!values.confirmPassword) {
        errors.confirmPassword = 'Please re-enter your password'
      } else if (values.confirmPassword.length < 6) {
        errors.confirmPassword = 'Password must be at least 6 characters'
      } else if(values.confirmPassword !== values.password){
        errors.confirmPassword = 'Passwords do not match'
      }

      if (!values.company) {
        errors.company = 'Please enter your company/business name ';
      } 

     if (values.abn && !/^\d+$/i.test(values.abn)){
        errors.abn = 'Please enter a valid ABN'
      }
  
    console.log(errors)
    return errors
  }
  
export default validate