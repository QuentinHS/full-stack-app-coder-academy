 const validate = (values) => {
    const errors = {}

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
  
    console.log(errors)
    return errors
  }
  
export default validate