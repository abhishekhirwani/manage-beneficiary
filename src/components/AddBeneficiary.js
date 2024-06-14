import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BeneficiaryForm from "../components/BeneficiaryForm";
import { addBeneficiary } from "./store";

const AddBeneficiary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* In this function we are adding data in the beneficiary state*/
  const onSubmit = (data) => {
    if (window.confirm("Are you sure you want to Add this to beneficiary?")) {
      dispatch(addBeneficiary({ id: Date.now(), ...data }));
      navigate("/");
    }
  };

  return (
    <>
      <h1 className="text-center bg-purple-900 text-white p-4">
        Add Beneficiary
      </h1>
      <div className="flex justify-center p-12 m-8">
        <BeneficiaryForm onSubmit={onSubmit} />
      </div>
    </>
  );
};

export default AddBeneficiary;
