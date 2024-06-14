import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import BeneficiaryForm from "../components/BeneficiaryForm";
import { updateBeneficiary } from "./store";

const EditBeneficiary = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const beneficiary = useSelector((state) =>
    state.beneficiaries.find((b) => b.id === parseInt(id))
  );

  /* In this function we are updating data in the beneficiary state*/
  const onSubmit = (data) => {
    dispatch(updateBeneficiary({ id: parseInt(id), ...data }));
    navigate("/");
  };

  return (
    <>
      <h1 className="text-center bg-purple-900 text-white p-4">
        Edit Beneficiary
      </h1>
      <div className="flex justify-center p-12 m-8">
        <BeneficiaryForm onSubmit={onSubmit} defaultValues={beneficiary} />
      </div>
    </>
  );
};

export default EditBeneficiary;
