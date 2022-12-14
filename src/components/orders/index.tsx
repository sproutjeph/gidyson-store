import OrderImage2 from "../../assets/images/fuel-tank.jpg";
import OrderImage1 from "../../assets/images/honda-1.png";
import OrderImage3 from "../../assets/images/seat.jpg";
import Image from "next/image";
import React from "react";

const Orders = () => {
  return (
    <>
      <div className="bg-white shadow-lg  rounded-lg  mt-8 border border-gray-200 p-4 max-w-4xl">
        <h4 className="text-center text-green-700 text-xl uppercase tracking-wider">
          Orders
        </h4>

        <table className="">
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>
              <Image
                src={OrderImage1}
                width={400}
                height={400}
                alt="Customer Profile Photo"
                className="rounded-full w-16 h-16 object-contain"
              />
              <h4 className="text-xs">Honda CB125</h4>
            </td>
            <td>600,000</td>
            <td>Complected</td>
          </tr>
          <tr>
            <td>
              <Image
                src={OrderImage2}
                width={400}
                height={400}
                alt="Customer Profile Photo"
                className="rounded-full w-16 h-16 object-contain"
              />
              <h4 className="text-xs">Tank</h4>
            </td>
            <td>10,000</td>
            <td>Complected</td>
          </tr>
          <tr>
            <td>
              <Image
                src={OrderImage3}
                width={400}
                height={400}
                alt="Customer Profile Photo"
                className="rounded-full w-16 h-16 object-contain"
              />
              <h4 className="text-xs">Seat</h4>
            </td>
            <td>6,000</td>
            <td>Pending</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Orders;
