import React, { useState, useContext, useEffect } from "react";
import EventsCard from "../components/EventsCard";
import { AuthContext } from "../context/auth.context";
import userService from "../service/user.services";
import Filter from "../components/Filter";
function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);

  const myPromise = async () => {
    const response = await userService.currentUser(user.username);

    setBookings(response.data[0].attending);
  };
  useEffect(() => {
    myPromise();
  }, []);

  return (
    <div>
      {bookings.map((booking) => {
        return <EventsCard {...booking} />;
      })}
      <Filter />
    </div>
  );
}

export default BookingsPage;
