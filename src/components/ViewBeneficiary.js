import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const ViewBeneficiary = () => {
  const { id } = useParams();
  const beneficiary = useSelector((state) =>
    state.beneficiaries.find((b) => b.id === parseInt(id))
  );

  return (
    <>
      <h1 className="text-center bg-purple-900 text-white p-4">
        View Beneficiary
      </h1>
      <div className="flex justify-center p-32 ">
        {beneficiary ? (
          <div>
            <p>Full Name: {beneficiary.fullName}</p>
            <p>Address: {beneficiary.address}</p>
            <p>Country: {beneficiary.country}</p>
            <p>Pincode: {beneficiary.pincode}</p>
            <button className="bg-purple-600 hover:bg-purple-800 text-white pl-2 pr-2 pt-1 pb-1 rounded-md mt-2">
              <Link to="/">Back</Link>
            </button>
          </div>
        ) : (
          <p className="text-center">Beneficiary not found</p>
        )}
      </div>
    </>
  );
};

export default ViewBeneficiary;
