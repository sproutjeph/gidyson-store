import React from "react";

const Payments = () => {
  return (
    <>
      <div className="bg-white shadow-lg  rounded-lg  mt-8 border border-gray-200 p-4">
        <h4 className="text-center text-green-700 text-xl uppercase tracking-wider">
          Payments
        </h4>
        <table className="">
          <tr>
            <th>Client</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>
              <h4 className="">Jephthah Mbah</h4>
            </td>
            <td>600,000</td>
            <td>22/11/2022</td>
            <td>Paid</td>
          </tr>
          <tr>
            <td>
              <h4 className="">Jephthah Mbah</h4>
            </td>
            <td>600,000</td>
            <td>22/11/2022</td>
            <td>Paid</td>
          </tr>
          <tr>
            <td>
              <h4 className="">Jephthah Mbah</h4>
            </td>
            <td>600,000</td>
            <td>22/11/2022</td>
            <td>Paid</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Payments;
