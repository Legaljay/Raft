import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {BsEye} from 'react-icons/bs'
import {BsEyeSlash} from 'react-icons/bs'
import OnboardingButton from "./OnboardingButton";
import OnboardingWelcome from "./OnboardingWelcome";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    const { email, password } = data;
  }

  function onError(errors) {
    console.log(errors);
  }

  function handleClick(e) {
    e.preventDefault();
    reset();
    navigate('/signup');
  }

  function togglePasswordVisibility(){
    setShowPassword(prev => !prev)
  }
  return (
    <>
      <div>
        <div className="grid gap-6 min-[391px]:w-4/5 max-[398px]:w-[358px] mx-auto relative">
          <div className="grid items-end">
            <OnboardingWelcome
              title={"Welcome Back!"}
              text={"Join the Raft community now..."}
            />
            <form
              className="grid gap-3"
              onSubmit={handleSubmit(onSubmit, onError)}
            >
              <div className="grid gap-2">
                <label className="label text flex gap-2 text-[#fff] text-[16px] md:text-[24px] font-normal leading-normal">
                  Email Address <span className="text-[#CB0000]">*</span>
                </label>
                <input
                  className="p-[10px] md:p-[15px] text-[#fff] text-[16px] md:text-[24px] w-full focus:outline-none appearance-none bg-black placeholder-black border-b border-[#989898]"
                  type="email"
                  id="email"
                  autoComplete="false"
                  placeholder="sarahjohn@gmail.com"
                  {...register("email", {
                    required: "Required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                />
              </div>
              <span className="text-red-500 text-[12px]">
                {errors?.email && errors?.email?.message}
              </span>
              <div className="grid gap-2">
                <label className="label text-[#fff] text-[16px] md:text-[24px] font-normal leading-normal flex gap-2">
                  Password <span className="text-[#CB0000]">*</span>
                </label>
                <div className="relative">
                  <input
                    className="p-[10px] md:p-[15px] text-[#fff] text-[16px] md:text-[24px] w-full focus:outline-none appearance-none bg-black placeholder-black border-b border-[#989898]"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="off"
                    {...register("password", {
                      required: "Required",
                      pattern: {
                        value:
                          /^(?=.*[A-Za-z\d])(?=.*[!@#$%^&*.,><*])[A-Za-z\d!@#$%^&*,.><*]{8,}$/,
                        message:
                          "Password must be at least 8 characters and must include at least one letter, one digit, and one special character.",
                      },
                    })}
                  />
                  {showPassword ? (
                    <BsEye
                    className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] text-[#DCDCDC] absolute right-0 top-3"
                    onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <BsEyeSlash
                      className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] text-[#DCDCDC] absolute right-0 top-3"
                      onClick={togglePasswordVisibility}
                    />
                  )}
                </div>
              </div>

              <span className="text-red-500 text-[12px]">
                {errors?.password && errors?.password?.message}
              </span>
              <span className="flex text-[#145062] text-[12px] justify-end">
                  <Link to="/forgot password">Forgot Password ?</Link>
              </span>
              <OnboardingButton text={"Login"} />
              <span
                className={`underline text-[#989898] text-[16px] md:text-[24px] leading-normal font-medium mx-auto w-[342px] md:w-full flex justify-between`}
              >
                Don't have an Account?
                <span onClick={handleClick}>Sign up</span>
              </span>
            </form>
          </div>
        </div>
        {/* {isLoading && <Loader />} */}
      </div>
    </>
  )
}

export default Login