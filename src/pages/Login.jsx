import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [remember, setRemember] = useState(false)
  const [cookie, setCookie] = useCookies(["remember"]);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const fetchToken = () => {
    if (remember) {
      setCookie('remember', 'true');
    } else {
      setCookie('remember', 'false');
    }

    axios
      .post("https://assignment-api.piton.com.tr/api/v1/user/login", { password: password, email: email })
      .then((response) => {
        if (response.data.token) {
          sessionStorage.setItem("token", response.data.token)
          navigate("/")
        }
      })
      .catch((error) => console.log(error))
  }




  return (
    <section className="">
      <div className="container  py-10 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form onSubmit={fetchToken}>
              {/* Email input */}
              <div className="mb-6">
                <input
                  name="email"
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* Password input */}
              <div className="mb-6">
                <input
                  name="password"
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck3"
                    defaultChecked=""
                    onChange={() => setRemember(!remember)}
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>

              </div>
              {/* Submit button */}

              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">

              </div>
              <button
                type="submit"
                className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                style={{ backgroundColor: "#3b5998" }}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >

                Sign in
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>

  )
};

export default Login;
