import React from "react";

import { handleInsertEmployee } from "@/app/actions/employeeActions";

const FormComponent = async () => {
   
  return (
    <div>
      <div className="container mx-auto p4-10">
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl">
          <div className="md:flex">
            <div className="w-full px-6 py-8 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800">Checkout</h2>
              <p className="mt-4 text-gray-600">
                Please fill out the form below to complete your purchase.
              </p>
              <form className="mt-6" action={handleInsertEmployee}>
                <div className="mb-6">
                  <label
                    className="block text-gray-800 font-bold mb-2"
                    htmlFor="name"
                  >
                    Company Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="company"
                    type="text"
                    name="company"   // base on api
                    placeholder="John Doe"
                  />
                </div>

                <div className="mb-6">
                  <label
                    className="block text-gray-800 font-bold mb-2"
                    htmlFor="card_number"
                  >
                    Card Number
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="cardNmber"
                    type="text"
                    name="cardNumber"   // base on api
                    placeholder="*** *** 12"
                  />
                </div>


                <div className="mb-6">
                  <label
                    className="block text-gray-800 font-bold mb-2"
                    htmlFor="expiration_date"
                  >
                     Type
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="type"
                    type="text"
                    name="type"   // base on api
                    placeholder="manufacturing"
                  />
                </div>

                 
                <div className="mb-6">
                  <label
                    className="block text-gray-800 font-bold mb-2"
                    htmlFor="expiration_date"
                  >
                    Industry Type
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="industryType"
                    name="industryType"   // base on api
                    type="text"
                    placeholder="manufacturing"
                  />
                </div>


                <button
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
