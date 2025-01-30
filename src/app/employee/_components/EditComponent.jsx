"use client";
import { getEmployeeById, updateEmployeeById } from "@/app/services/employee.service";
import React, { useEffect, useState } from "react";

const EditComponent = ({ employeeId, onClose }) => {
  const [employee, setEmployee] = useState({
    company: "",
    cardNumber: "",
    type: "",
    industryType: "",
  });

  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const data = await getEmployeeById(employeeId); // Use employeeId to fetch data
        setEmployee(data);
      } catch (error) {
        setError("Failed to fetch employee data.");
      } finally {
        setLoading(false);
      }
    };

    if (employeeId) {
      fetchEmployee();
    }
  }, [employeeId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedEmployee = {
      company: employee.company,
      cardNumber: employee.cardNumber,
      type: employee.type,
      industryType: employee.industryType,
    };

    try {
      await updateEmployeeById(employeeId, updatedEmployee);
      onClose(); // Close modal after successful update
    } catch (error) {
      setError("Failed to update employee.");
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between p-4 border-b rounded-t">
          <h3 className="text-sm font-semibold text-gray-900">Edit Employee</h3>
          <button
            type="button"
            onClick={onClose} // Close modal on button click
            className="text-gray-400 hover:bg-gray-200 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="company" className="block text-sm p-3 font-normal text-gray-700">Company : </label>
            <input
              type="text"
              id="company"
              value={employee.company}
              onChange={(e) => setEmployee({ ...employee, company: e.target.value })}
              className="w-full p-2.5 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="cardNumber" className="block text-sm p-3 font-sm text-gray-700">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              value={employee.cardNumber}
              onChange={(e) => setEmployee({ ...employee, cardNumber: e.target.value })}
              className="w-full p-2.5 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="type" className="block text-sm p-3 font-sm text-gray-700">Type</label>
            <input
              type="text"
              id="type"
              value={employee.type}
              onChange={(e) => setEmployee({ ...employee, type: e.target.value })}
              className="w-full p-2.5 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="industryType" className="block text-sm p-3 font-sm text-gray-700">Industry Type</label>
            <input
              type="text"
              id="industryType"
              value={employee.industryType}
              onChange={(e) => setEmployee({ ...employee, industryType: e.target.value })}
              className="w-full p-2.5 border rounded-md"
              required
            />
          </div>

          <button type="submit" className="w-full p-2.5 bg-blue-600 text-white rounded-md">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditComponent;
