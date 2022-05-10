import React from "react";
import { useSelector } from "react-redux";
import CartsUser from "../CartsUser/CartsUser";

const Profile = () => {
  const userDetails = useSelector((state) => state.logUser);
  console.log(userDetails);
  return (
    <div>
      <div>
        <ul>
          information
          <li>
            Name: {userDetails.name.firstname} {userDetails.name.lastname}
          </li>
          <li>Phone: {userDetails.phone}</li>
          <li>Mail: {userDetails.email}</li>
          <li>
            address:{" "}
            <ul>
              <li>City: {userDetails.address.city}</li>
              <li>
                GeoLocation:
                <ul>
                  <li>Lat: {userDetails.address.geolocation.lat}</li>{" "}
                  <li>Long {userDetails.address.geolocation.long}</li>
                </ul>{" "}
              </li>
              <li>Number: {userDetails.address.number}</li>
              <li>street: {userDetails.address.street}</li>
              <li>zip Code: {userDetails.address.zipcode}</li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <CartsUser />
      </div>
    </div>
  );
};

export default Profile;
