"use client";
import React, { useState } from "react";
import DeleteComponent from "./DeleteComponent";
import EditComponent from "./EditComponent";

const TableComponent = ({ employeeData }) => {
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = (id) => {
    setSelectedEmployeeId(id);
    setIsModalOpen(true); // Open modal when employee is selected
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
    setSelectedEmployeeId(null); // Reset selected employee
  };

  return (
    <div>
      <div className="flex flex-col m-5">
        <div className=" overflow-x-auto">
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden ">
              <table className=" min-w-full rounded-xl">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl">
                      Company
                    </th>
                    <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">
                      Card Number
                    </th>
                    <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">
                      Type
                    </th>
                    <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">
                      Industry Type
                    </th>
                    <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300 ">
                  {employeeData?.map((data) => (
                    <tr
                      key={data?.id}
                      className="bg-white transition-all duration-500 hover:bg-gray-50"
                    >
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">
                        {data?.company}
                      </td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {data?.cardNumber}
                      </td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {data?.type}
                      </td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {data?.industryType}
                      </td>
                      <td className="p-5">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleEditClick(data?.id)} // Open modal
                            className="text-blue-500 hover:text-blue-700"
                          >
                            Edit
                          </button>
                          <DeleteComponent id={data?.id} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <EditComponent
          employeeId={selectedEmployeeId}
          onClose={closeModal} // Close modal when done
        />
      )}
    </div>
  );
};

export default TableComponent;
