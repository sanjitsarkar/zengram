import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Loader } from "../../components";
import { login } from "../../services/auth/authService";
import { GUEST_CREDENTIAL, initialLoginCredState } from "../../utils";

const LoginPage = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [loginCred, setLoginCred] = useState(initialLoginCredState);
  return (
    <>
      {auth.status === "loading" && (
        <Loader status={"Please wait until your logged in"} />
      )}
      <div className="w-full grid place-content-center  h-screen bg-primary">
        <div className="block p-6 rounded-lg shadow-2xl bg-white sm:w-96 w-fit m-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(login(loginCred));
              setLoginCred(initialLoginCredState);
            }}
          >
            <div className="form-group mb-4">
              <label
                htmlFor="exampleInputEmail2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Email address
              </label>
              <input
                value={loginCred.email}
                onChange={(e) =>
                  setLoginCred({ ...loginCred, email: e.target.value })
                }
                type="email"
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group mb-4">
              <label
                htmlFor="exampleInputPassword2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Password
              </label>
              <input
                value={loginCred.password}
                onChange={(e) =>
                  setLoginCred({ ...loginCred, password: e.target.value })
                }
                type="password"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                id="exampleInputPassword2"
                placeholder="Password"
                required
                minLength={6}
              />
            </div>
            <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  id="exampleCheck2"
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="exampleCheck2"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#!"
                className="text-primary hover:text-primary focus:text-primary transition duration-200 ease-in-out"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="
      w-full
      px-6
      py-2.5
      bg-primary
      text-white
      font-medium
      text-base
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-primary hover:shadow-lg
      focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-primary active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Sign in
            </button>
            <button
              onClick={() => {
                setLoginCred(GUEST_CREDENTIAL);
                dispatch(login(GUEST_CREDENTIAL));
              }}
              className="
      w-full
      px-6
      py-2.5
      mt-2
      bg-secondary
      text-white
      font-medium
      text-base
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-secondary hover:shadow-lg
      focus:bg-secondary focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-secondary active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Guest Login
            </button>
            <p className="text-gray-800 mt-2 text-center">
              Not a member?{" "}
              <Link
                to="/signup"
                className="text-primary hover:text-primary focus:text-primary transition duration-200 ease-in-out"
              >
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
