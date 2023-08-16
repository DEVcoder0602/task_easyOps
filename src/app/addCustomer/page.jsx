import CustomerForm from "@/components/customerForm/CustomerForm";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <h1 className="text-2xl text-gray-700 font-semibold mb-4">
        Add Customer
      </h1>

      <CustomerForm />
    </div>
  );
};

export default page;
