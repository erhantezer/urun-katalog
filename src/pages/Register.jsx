import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cookie, setCookie] = useCookies(["remember"])
  const navigate = useNavigate()

  const registerShema = Yup.object().shape({
    name: Yup.string()
      .required("Adinizi girmeniz zorunlu!"),
    // surname: Yup.string()
    //   .required("Soyadinizi girmeniz zorunlu!"),
    // telephone: Yup.number()
    //   .min(12)
    //   .required("Tel girmeniz zorunlu!"),
    email: Yup.string()
      .email("E-Mail formatinda giriniz!")
      .required("Email girmeniz zorunlu!"),
    password: Yup.string()
      .min(6, 'Sifre en az 6 karakter icermelidir')
      .max(20, 'Sifre en fazla 20 karakter icermelidir.')
      .required('Lutfen password kismini bos birakmayiniz')
      .matches(/\d+/, 'Sifre rakam icermelidir')
      .matches(/[a-z]+/, 'Sifre kucuk harf icermelidir')
      .matches(/[A-Z]+/, 'Sifre buyuk harf icermelidir')
      .matches(/[!,?{}><%&$#£+-.]+/, 'Sifreniz ozel karakter icermelidir'),
    // confirmPassword: Yup.string()
    //   .oneOf([Yup.ref("password"), null], "Şifreniz eşleşmiyor!")
    //   .required("Şifre girmeniz zorunlu!")
    //   .matches(/\d+/, 'Sifre rakam icermelidir')
    //   .matches(/[a-z]+/, 'Sifre kucuk harf icermelidir')
    //   .matches(/[A-Z]+/, 'Sifre buyuk harf icermelidir')
    //   .matches(/[!,?{}><%&$#£+-.]+/, 'Sifreniz ozel karakter icermelidir'),
  });
  const formOptions = { resolver: yupResolver(registerShema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;


  const fetchToken = (e) => {

    const {data} = axios
      .post("https://assignment-api.piton.com.tr/api/v1/user/register", {
        name: name,
        password: password,
        email: email,
      })
        console.log("res", data);
        sessionStorage.setItem("token", data.token);
        setCookie("remember", "false");
        navigate('/');
  }




  return (
    <section className="">
      <div className="container  py-10 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form onSubmit={handleSubmit(fetchToken)}>
              {/* Email input */}
              <div className="mb-6">
                <div className="invalid-feedback">{(errors.name)?.message}</div>
                <input
                  {...register("name")}
                  name="name"
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Full Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <div className="invalid-feedback">{(errors.email)?.message}</div>
                <input
                  {...register("email")}
                  name="email"
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* Password input */}
              <div className="mb-6">
                <div className="invalid-feedback">{(errors.password)?.message}</div>
                <input
                  {...register("password")}
                  name="password"
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-between items-center mb-6">


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

                Sign up
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
