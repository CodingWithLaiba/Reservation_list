import React from "react";

function ReservationCard({ title, location, date, status }) {
  const statusStyles = {
    confirmed: "bg-green-200 text-green-800",
    pending: "bg-yellow-200 text-yellow-800",
  };
  return (
    <>
      <div className="flex flex-col gap-1 hover:shadow-lg transition duration-300 bg-indigo-50 shadow-md rounded-2xl p-4 border border-indigo-100 ">
        <p className="font-bold text-lg">title: {title}</p>
       <p> <span className="font-semibold">location : </span>{location}</p>
      <p><span className="font-semibold">Date: </span>{date}</p>
        <span className={`w-max font-medium px-2 py-1 rounded text-sm ${statusStyles[status]}`}>
          {status}
        </span>
      </div>
    </>
  );
}
export default ReservationCard;
