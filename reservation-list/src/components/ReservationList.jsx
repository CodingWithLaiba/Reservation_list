import React from "react";
import { useState, useEffect } from "react";

const mockData = [
  {
    id: 1,
    title: "Hotel Booking",
    location: "Lahore",
    date: "2026-04-01",
    status: "confirmed",
  },
  {
    id: 2,
    title: "Flight Ticket",
    location: "Karachi",
    date: "2026-04-03",
    status: "pending",
  },
  {
    id: 3,
    title: "Lack View",
    location: "IsLand",
    date: "2026-04-03",
    status: "confirmed",
  }
];

function ReservationList() {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
setTimeout(()=>{
    setReservations(mockData);
    setLoading(false);
},1000);
  },[]
);
if(loading) return <p>Loading....</p>
if (error) return <p className="text-red-500">{error}</p>

  return (
    <>
      <p>Hello</p>
      {reservations.map((item) => (
        <div key={item.id}>
          <p>title: {item.title}</p>
          <p>location : {item.location}</p>
          <p>Date : {item.date}</p>
          <p>Status : {item.status}</p>
        </div>
      ))}
    </>
  );
}
export default ReservationList;
