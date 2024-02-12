"use client";
import React, { useEffect, useState } from "react";
// import useUserServices from "../utils/userStore";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image3d from "../../../../public/woman3d.png";
// import { Timestamp, addDoc, collection } from "firebase/firestore";
// import { db } from "@/firebase";
const Page = () => {
  const Userschema = yup
    .object({
      email: yup.string().email().required().lowercase().trim(),
      password: yup
        .string()
        .required()
        .lowercase()
        .trim()
        .min(6, "Password must exceed 5 characters"),
      firstname: yup.string().required().lowercase().trim(),
      lastname: yup.string().required().lowercase().trim(),
    })
    .required();
  // interface User extends yup.InferType<typeof Userschema> {
  //   email: string;
  //   password: string;
  //   // using interface instead of type generally gives nicer editor feedback
  // }
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  // const { registerUser } = useUserServices();
  // const router = useRouter();
  // const onSubmit = async (data: {
  //   email: string;
  //   password: string;
  //   firstname: string;
  //   lastname: string;
  // }) => {
  //   setSubmitting(true);
  //   try {
  //     console.log("@register");
  //     const { email, password, firstname, lastname } = data;

  //     const res = await registerUser({ email, password, firstname, lastname });
  //     if (!res) return;
  //     const newUserData = {
  //       email,
  //       displayName: res.displayName,
  //       id: res.uid,
  //       verified: res.emailVerified,
  //       firstname,
  //       lastname,
  //       timeAdded: Timestamp.now().toDate(),
  //     };
  //     const doc = await addDoc(collection(db, "users"), newUserData);
  //     alert("Verification link sent to your mail ✔.");
  //     setSubmitting(false);
  //     router.push("/");
  //   } catch (error) {
  //     setSubmitting(false);
  //     console.log(error);
  //   }
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Userschema),
  });

  // useEffect(() => {
  //   handleLoginUser();
  // }, []);
  const textAnim = {
    initial: {
      opacity: 0,
      x: -5,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className="w-full  relative h-screen  bg-lighter-grey flex justify-center items-center">
      <div className=" h-full flex px-5 sm:px-1 flex-1 justify-center items-center ">
        <form
          // onSubmit={handleSubmit(onSubmit)}
          className=" shadow-lg  border w-full sm:min-w-[500px] items-left justify-center items-center  z-[300]  h-fit   py-[25px] px-[30px] flex flex-col rounded-2xl bg-white "
        >
          <h1 className="font-bold text-center text-xl">Join Eduhelp</h1>
          <p className="text-center text-[15px]  font-light my-3 ">
            Enter your details to get to onboard
          </p>
          <input
            // variants={textAnim}
            // initial="initial"
            // animate="animate"
            // transition={{
            //   duration: 1,
            //   type: "linear",
            // }}
            type="email"
            className="w-full placeholder:text-dark outline-dark px-3 rounded-lg border border-lighter-grey bg-lighter-grey/20 shadow py-2"
            placeholder="Enter Email"
            {...register("email")}
          />
          <p className=" capitalize mt-1 text-red-400 ml-1">
            {errors.email?.message}
          </p>

          <div className="relative w-full mt-3 outline-dark  rounded-lg border border-lighter-grey bg-lighter-grey/20 shadow ">
            <input
              // variants={textAnim}
              // initial="initial"
              // animate="animate"
              // transition={{
              //   duration: 1,
              //   type: "linear",
              // }}
              {...register("password")}
              type={showPassword ? "text" : "password"}
              className="w-full py-2 px-3 placeholder:text-dark bg-lighter-grey/20 outline-dark  "
              placeholder="Enter Password"
            />

            <div
              onClick={handleTogglePasswordVisibility}
              className="absolute  w-fit h-[20px] cursor-pointer top-1/2 -translate-y-1/2  right-2 flex items-center focus:outline-none"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </div>
          </div>
          <p className=" capitalize mb-3 mt-1 text-red-400 ml-1">
            {errors.password?.message}
          </p>
          <button
            type="submit"
            disabled={submitting}
            className={` w-full h-[45px] font-medium rounded-lg ${
              submitting
                ? "bg-gray-400 pointer-events-none"
                : "bg-brand/prim-blue pointer-events-auto "
            } transition-all  text-white`}
          >
            Sign Up{" "}
          </button>

          <p className=" font-light my-3">
            {`Have an account?`}{" "}
            <Link className=" text-dark text-[15px] font-medium " href="/login">
              {" "}
              Log in
            </Link>{" "}
          </p>
        </form>
      </div>

      <div className="sm:w-[40%] relative  hidden bg-brand/prim-blue text-white h-full sm:flex justify-center py-10">
        <h1 className=" text-3xl text-center capitalize font-black">Eduhelp</h1>

        <div className="absolute w-fit h-fit -left-[40%] bottom-[10%] object-cover object-center ">
          <Image height={500} width={400} src={Image3d} alt="woman sitting" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Page;
