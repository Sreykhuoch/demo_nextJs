import React from "react";
import FormComponent from "./_components/FormComponent";
import TableComponent from "./_components/TableComponent";
import { getAllEmployeeService } from "../services/employee.service";

const Page = async () => {

  const employeeData = await getAllEmployeeService();
  return (
    <div className="flex flex-row justify-around h-screen">
       <FormComponent/>
       <TableComponent  employeeData = {employeeData}/>
       <div className="m-5">
       <a
                  href={"/"}
                  title="Quicktoolz On Facebook"
                  className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-purple-500 hover:border-purple-500 hover:bg-purple-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                >
                  <span className="mx-auto">HomePage</span>
                </a>
       </div>
    </div>
  );
};

export default Page;
