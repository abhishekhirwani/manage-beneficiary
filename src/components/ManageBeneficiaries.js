import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { removeBeneficiary } from "./store";

const ManageBeneficiaries = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const beneficiaries = useSelector((state) => state.beneficiaries);

  /* By this function we are Removing data from beneficiary */
  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to remove this beneficiary?")) {
      dispatch(removeBeneficiary({ id }));
    }
  };

  /* By this function we are navigating to Edit beneficiary page*/
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  /* By this function we are navigating to View beneficiary page*/
  const handleView = (id) => {
    navigate(`/view/${id}`);
  };

  return (
    <div>
      <div className="bg-purple-900">
        <h3 className="text-white p-4 ">Manage Beneficiaries</h3>
      </div>
      <div className="p-4 flex justify-end">
        <Link
          className="bg-green-700 pl-4 pt-2 pb-2 pr-4 rounded-3xl text-white"
          to="/add"
        >
          Add New Beneficiary
        </Link>
      </div>
      <table className="table-fixed w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-6 py-3 text-left text-sm font-medium text-black">
              Full Name
            </th>
            <th className="border border-gray-300 px-6 py-3 text-left text-sm font-medium text-black ">
              Address
            </th>
            <th className="border border-gray-300 px-6 py-3 text-left text-sm font-medium text-black ">
              Country
            </th>
            <th className="border border-gray-300 px-6 py-3 text-left text-sm font-medium text-black ">
              PinCode
            </th>
            <th className="border border-gray-300 px-6 py-3 text-left text-sm font-medium text-black "></th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {beneficiaries.map((beneficiary) => (
            <tr className="hover:bg-gray-200" key={beneficiary?.id}>
              <td className="pl-6">{beneficiary?.fullName}</td>
              <td className="pl-6">{beneficiary?.address}</td>
              <td className="pl-6">{beneficiary?.country}</td>
              <td className="pl-6">{beneficiary?.pincode}</td>
              <td className="pl-6 text-center">
                <span className="pl-2">
                  <FontAwesomeIcon
                    style={{ cursor: "pointer" }}
                    icon={faEdit}
                    onClick={() => handleEdit(beneficiary?.id)}
                  />
                </span>
                <span className="p-2">
                  <FontAwesomeIcon
                    style={{ cursor: "pointer" }}
                    icon={faEye}
                    onClick={() => handleView(beneficiary?.id)}
                  />
                </span>
                <span>
                  <FontAwesomeIcon
                    style={{ cursor: "pointer" }}
                    icon={faTrash}
                    onClick={() => handleRemove(beneficiary?.id)}
                  />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBeneficiaries;
