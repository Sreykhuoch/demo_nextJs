"use server"

import { revalidateTag } from "next/cache";
import { deleteEmployeeById, updateEmployeeById, createEmployeeService } from "../services/employee.service";

export async function deleteEmployeeByIdAction(id){
    //calling server 

    await deleteEmployeeById(id);

    //calling the realidate tag, ensures that when customer is deleted, the UI is updated. 

    revalidateTag('employee');
}

export async function updatedEmployeeByIdAction(id, employee){
    //calling service to update the employee
  const data =  await updateEmployeeById(id, employee);
    revalidateTag('employee');
    return data;
}

export async function handleInsertEmployee(input){
   //this will handle for insert the employee

   //define object structure : 

   const newCustomer = {   // get user input from the form
      company : input.get('company'),
      cardNumber : input.get('cardNumber'),
      type : input.get('type'),
      industryType : input.get('industryType'),
   }

   // calling service to insert the employee
   await createEmployeeService(newCustomer);

   //make it to real time

    revalidateTag('employee');
}