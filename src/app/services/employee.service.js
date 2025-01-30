// https://6731c5a97aaf2a9aff11fb1c.mockapi.io/api/v1/products/customer  //fake api

import { revalidateTag } from "next/cache";

export const getAllEmployeeService = async() =>{
    const res = await fetch('https://6731c5a97aaf2a9aff11fb1c.mockapi.io/api/v1/products/customer',{
        cache: "no-store",

    },
    revalidateTag['employee']
);

    const data = await res.json();
    return data;
 
}


export const deleteEmployeeById = async(id) => {
    const res = await fetch(`https://6731c5a97aaf2a9aff11fb1c.mockapi.io/api/v1/products/customer/${id}`,{
        method: 'DELETE',
    });

    const data = await res.json();
    return data;
}

export const updateEmployeeById = async(id, employee) => {
    const res = await fetch(`https://6731c5a97aaf2a9aff11fb1c.mockapi.io/api/v1/products/customer/${id}`,{
        method: 'PUT',

        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
    });

    const data = await res.json();
    return data;
}

export  const getEmployeeById = async(id) => {
    const res = await fetch(`https://6731c5a97aaf2a9aff11fb1c.mockapi.io/api/v1/products/customer/${id}`,{
        method: 'GET',
    });

    const data = await res.json();
    return data;
}

export const createEmployeeService = async(employee) => {
    const res = await fetch('https://6731c5a97aaf2a9aff11fb1c.mockapi.io/api/v1/products/customer',{
        method: 'POST',
    
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
    });
}
