
const validate = (values)=> {
  const errors = {}

    if (!values.oldPassword) {
        errors.oldPassword = 'Please enter a password'
      } else if (values.oldPassword.length < 6) {
        errors.oldPassword= 'Password must be at least 6 characters'
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

      console.log(errors)
      return errors
}

export default validate 