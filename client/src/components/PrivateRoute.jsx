export default PrivateRoute = ({ children }) => {
  const isAuthenticated = true

  if (isAuthenticated) {
    return children
  }

  return <Navigate to="/" />
}
