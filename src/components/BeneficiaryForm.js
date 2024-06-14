// src/components/BeneficiaryForm.js
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const countries = ["India", "Usa", "Uk", "China", "Japan"];

const BeneficiaryForm = ({ onSubmit, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 m-4">
      <div className="p-2 text-left">
        <label className="text-left p-2">Full Name</label>
        <input
          className="border-2 border-collapse border-gray-300"
          {...register("fullName", { required: true })}
        />
        {errors.fullName && (
          <span className=" text-red-500">This field is required !</span>
        )}
      </div>
      <div className="p-2 text-left">
        <label className="p-2">Address</label>
        <input
          className="border-2 border-collapse border-gray-300"
          {...register("address", { required: true })}
        />
        {errors.address && (
          <span className=" text-red-500">This field is required !</span>
        )}
      </div>
      <div className="p-2 text-left">
        <label className="text-left p-2">Country</label>
        <select
          className="border-2 border-collapse border-gray-300"
          {...register("country", { required: true })}
        >
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        {errors.country && (
          <span className=" text-red-500">This field is required !</span>
        )}
      </div>
      <div className="p-2 text-left">
        <label className="text-left p-2">Pincode</label>
        <input
          className="border-2 border-collapse border-gray-300"
          {...register("pincode", { required: true })}
        />
        {errors.pincode && (
          <span className=" text-red-500">This field is required !</span>
        )}
      </div>
      <div className="p-2 text-left">
        <button
          className="rounded-lg pl-2 pr-2 pt-1 pb-1 m-2 bg-purple-600 hover:bg-purple-800 text-white"
          type="submit"
        >
          Submit
        </button>
        <button className="bg-purple-600 hover:bg-purple-800 text-white pl-2 pr-2 pt-1 pb-1 rounded-md mt-2">
          <Link to="/">Back</Link>
        </button>
      </div>
    </form>
  );
};

export default BeneficiaryForm;
