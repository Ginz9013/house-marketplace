import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg"
import visibilityIcon from "../assets/svg/visibilityIcon.svg"

function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const { name, email, password } = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>
        
        <form>
          <input
            type="text"
            id="name"
            className="nameInput"
            value={name}
            placeholder="Name"
            onChange={onChange}
          />

          <input
            type="email"
            id="email"
            className="emailInput"
            value={email}
            placeholder="Email"
            onChange={onChange}
          />

          <div className="passwordInputDiv">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="passwordInput"
              value={password}
              placeholder="Password"
              onChange={onChange}
            />

            <img
              src={visibilityIcon}
              alt="show password"
              className="showPassword"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>

          <Link
            to='/forgot-password'
            className="forgotPasswordLink"
          >
            Forgot Password
          </Link>

          <div className="signUpBar">
            <p className="signUpText">
              Sign Up
            </p>
            <button className="signUpButton">
              <ArrowRightIcon
                fill="#ffffff"
                width="34px"
                height="34px"
              />
            </button>
          </div>
        </form>

        {/* Google Oauth */}

        <Link to="/sign-in" className="registerLink">
          Sign In Instead
        </Link>
      </div>
    </>
  )
}

export default SignUp
