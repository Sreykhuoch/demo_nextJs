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
    </div>
  );
};

export default Page;
