// src/pages/EditAccount.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "axios";
import AccountForm from "../components/AccountForm";

const EditAccount = () => {
  const { id } = useParams();
  console.log(id);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    fetchAccount();
  }, []);

  const fetchAccount = async () => {
    try {
      const response = await axiosInstance.get(
        `https://facebookadsmangerserver.vercel.app/api/currentAccount/${id}`
      );
      setAccount(response.data);
    } catch (error) {
      console.error("Error fetching account:", error);
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      await axiosInstance.put(
        `https://facebookadsmangerserver.vercel.app/api/currentAccount/${id}`,
        formData
      );
      alert("Account updated successfully!");
    } catch (error) {
      console.error("Error updating account:", error);
    }
  };

  return (
    <div>
      <h2>Edit Account</h2>
      {account ? (
        <AccountForm initialData={account} onSubmit={handleFormSubmit} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditAccount;
