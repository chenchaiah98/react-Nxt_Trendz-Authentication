// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', error: ''}

  onUserNameChange = e => {
    const userNameInput = e.target.value
    this.setState({username: userNameInput})
  }

  onPasswordChange = e => {
    const PasswordInput = e.target.value
    this.setState({password: PasswordInput})
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    // const {history} = this.props
    // if (userName !== '' && password !== '') {
    //   console.log(history.location.pathname)
    //   history.replace('/')
    //   console.log(history.location.pathname)
    // }

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      const apiError = data.error_msg
      console.log(apiError)
      this.setState({error: apiError})
    }
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {error} = this.state

    return (
      <div className="login-main-container">
        <div className="login-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
            alt="website login"
          />
        </div>
        <div className="main-login-form-container">
          <div className="login-form-container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="form-logo"
                className="login-logo"
              />
            </div>

            <form>
              <lable htmlFor="username">username</lable>
              <br />
              <input
                type="text"
                name="username"
                placeholder="username"
                onChange={this.onUserNameChange}
              />
              <br />
              <lable htmlFor="password">password</lable>
              <br />
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={this.onPasswordChange}
              />

              <p>{error}</p>

              <button
                type="button"
                className="login-submit-button"
                onClick={this.onLogin}
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
