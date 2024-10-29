// src/pages/AccountList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "axios";

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await axiosInstance.get(
        "https://facebookadsmangerserver.vercel.app/api/currentAccount"
      );
      setAccounts(response.data);
    } catch (error) {
      console.error("Error fetching accounts:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteAccount = async (id) => {
    try {
      await axiosInstance.delete(`/currentAccount/${id}`);
      setAccounts(accounts.filter((account) => account._id !== id));
    } catch (error) {
      console.error("Error deleting account:", error);
    }
  };

  return (
    <div>
      <h2>Current Accounts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {accounts.map((account) => (
            <li key={account._id}>
              {account.currentAccountname}
              <Link to={`/edit-account/${account._id}`}>Edit</Link>
              <button onClick={() => deleteAccount(account._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <Link to="/add-account">Add New Account</Link>
    </div>
  );
};

export default AccountList;
