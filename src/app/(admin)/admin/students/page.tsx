"use client"
import AdminCard from "@/components/AdminCard";
import React, { useState } from "react";
import { sampleStudents } from "../../../../lib/testDatas/testdata";
import { Delete, DeleteIcon, Edit, PlusIcon, Recycle, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import axios from 'axios'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { InferType } from 'yup';
import {studentSchema} from  '../../../lib/validationSchemas/schema'
import { StudentFormData } from "@/app/types/types";
import { Student } from "@/app/lib/models/schoolModel";
import { addNewStudent } from "@/app/actions/actions";
const StudentCard = ({ student }: any) => {
  const {
    firstName,
    studentID,
    lastName,
    gender,
    dateOfBirth,
    image,
    enrollmentDetails,
  } = student;
  return (
    <li>
      <Link className=" flex justify-between" href={`/student/${studentID}`}>
        <div className="flex gap-5 items-center">
          <div className=" bg-brand/ORANGE/60 rounded-full h-[40px] w-[40px] ter">
            <Image
              src={image}
              height={40}
              alt="student-Image"
              width={40}
              className="rounded-full object-cover object-center"
            />
          </div>
          <div className=" flex  flex-col gap-1 ">
            <p className=" font-bold text-lg ">{lastName}</p>
            <p>{firstName}</p>
          </div>
          <span className="font-bold uppercase">{gender}</span>
          <small className=" font-bold text-neutral-950 text-sm italic uppercase">
            {dateOfBirth}
          </small>
          <span className="font-bold uppercase">
            {enrollmentDetails.gradeLevel}
          </span>
          <small className=" font-bold text-neutral-950 text-sm italic uppercase">
            {studentID}
          </small>
        </div>
        <div className="flex items-center gap-5">
          <div className=" w-fit cursor-pointer bg-brand/prim-blue rounded-md h-fit p-2">
            <Edit color="white" />
          </div>
          <div className=" w-fit cursor-pointer bg-red-500 rounded-md h-fit p-2">
            <Trash2 color="white" />
          </div>
        </div>
      </Link>
    </li>
  );
};

const Students = () => {
const [displayForm,setDisplayForm] = useState(false)
// const {
//   register,
//   handleSubmit,
//   formState: { errors },
// } = useForm({
//   resolver: yupResolver(studentSchema ),
// })
// const onSubmit = (data:StudentFormData) => {
//   axios.post('api/')
// }
 return (
    <div className="  relative min-h-screen w-full flex-1">
      {
        displayForm && (
          <div className="w-full h-screen fixed  flex-col top-0 left-0 z-[10000] ter">
          <div className="flex w-full h-screen  absolute top-0 left-0 bg-gray-300 opacity-80 blur-md "></div>
          <h1 className='text-2xl z-[10000] relative  text-black text-left font-bold'>Add a student</h1>
          <form action={addNewStudent} className='bg-white gap-2 flex flex-col  z-[10000] relative w-4/5 md:w-2/4 p-3 rounded-xl text-black' >
          
      <input type="text" name="name" className='w-full h-10 p-2 rounded-md border-2 border-gray-400'  />
   {/* //  <p>{errors.name?.message}</p>  */}

      <input type="number" name="age" className='w-full h-10 p-2 rounded-md border-2 border-gray-400' />
   {/* //  <p>{errors.age?.message}</p>  */}

      <input type="text" name="address" className='w-full h-10 p-2 rounded-md border-2 border-gray-400' />
   {/* //  <p>{errors.grade?.message}</p>  */}

      <input type="text" name="contact" className='w-full h-10 p-2 rounded-md border-2 border-gray-400'    />
     {/* //  <p>{errors.address?.message}</p>  */}

      <input type="text" name="guardian" className='w-full h-10 p-2 rounded-md border-2 border-gray-400'    />
     {/* //  <p>{errors.contact?.message}</p>  */}

      <input type="file" name="image" className='w-full h-10 p-2 rounded-md border-2 border-gray-400'     />
     {/* //  <p>{errors.guardian?.message}</p>  */}

      <input  name="dateOfBirth" className='w-full h-10 p-2 rounded-md border-2 border-gray-400'    type="date" />
     {/* //  <p>{errors.dateOfBirth?.message}</p>  */}

   
      <button type="submit"  className='' >Add Student</button>
    </form>
          </div>
        )
      }
      <AdminCard
        title="Students"
        image1="/svg2.png"
        bgColor=" bg-brand/prim-blue"
        image2="/svg1.png"
      />
      <div className="z-50 absolute top-[50vh] w-3/4 left-1/2 -translate-x-1/2 ter  flex flex-col gap-5 ">
        {/* <Dropdown/> */}

        <ol className="w-full p-5 flex flex-col gap-3 border bg-neutral-200 shadow shadow-neutral-200">
          <div className=" flex justify-between">
            <div className="flex gap-5 items-center">
              <h1>Profile Image</h1>

              <div className=" flex  flex-col gap-1 ">
                <p className=" font-bold text-lg ">
                  <h1>Names</h1>
                </p>
              </div>
              <span className="font-bold uppercase">
                <h1>Gender</h1>
              </span>
              <small className=" font-bold text-neutral-950 text-sm italic uppercase">
                <h1>DateOfBirth</h1>
              </small>
              <span className="font-bold uppercase">
                <h1>Grade</h1>
              </span>
              <small className=" font-bold text-neutral-950 text-sm italic uppercase">
                <h1>studentID</h1>
              </small>
            </div>
          </div>
          <ul className=" w-full">
            {sampleStudents.map((student) => (
              <li className="bg-white p-2" key={student.studentID}>
                <StudentCard student={student} />
              </li>
            ))}
          </ul>
        </ol>
      </div>
      <div onClick={() => setDisplayForm(true)} className='flex absolute border-2 bottom-3 bg-dray-200 p-3 right-3 size-10 cursor-pointer ter hover:bg-gray-300 transition-all rounded-md border-gray-600 '>
   
        <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>      <PlusIcon  size={30}/></TooltipTrigger>
                    <TooltipContent className="">Add Student</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
      </div>
    </div>
  );
};

export default Students;
