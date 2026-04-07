import React from "react";
import { useState, useEffect } from "react";
import ReservationCard from "./ReservationCard";

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
  },
  {
    id: 4,
    title: "Party",
    location: "Lahore",
    date: "2026-10-03",
    status: "confirmed",
  },
];

function ReservationList() {
  const [reservations, setReservations] = useState([]);
  // const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setReservations(mockData);
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) return <p>Loading....</p>;
  // if (error) return <p className="text-red-500">{error}</p>;
  const filteredReservations =
    filter === "all"
      ? reservations
      : reservations.filter((item) => item.status === filter);
  if (filteredReservations.length === 0) {
    return <p>No {filter} reservations found</p>;
  }

  return (
    <div className="py-5 space-y-4">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={ 
            filter === "all"
              ? "cursor-pointer bg-gray-700 text-white px-3 py-2 rounded"
              : "cursor-pointer bg-gray-400 px-3 py-2 rounded"
          }
        >
          All
        </button>
        <button
          type="button"
          onClick={() => setFilter("confirmed")}
          className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 border border-green-600 rounded"
        >
          Confirmed
        </button>
        <button
          type="button"
          onClick={() => setFilter("pending")}
          className="cursor-pointer bg-amber-300 hover:bg-amber-400 text-white font-bold py-2 px-3 border border-amber-400 rounded"
        >
          Pending
        </button>
      </div>
      {filteredReservations.map((item) => (
        <ReservationCard
          key={item.id}
          title={item.title}
          location={item.location}
          date={item.date}
          status={item.status}
        />
      ))}
    </div>
  );
}
export default ReservationList;
