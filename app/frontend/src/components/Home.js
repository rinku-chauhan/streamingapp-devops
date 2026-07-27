import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [message, setMessage] = useState("");
  const [profile, setProfile] = useState([]);

  // Environment variables
  const helloServiceUrl = process.env.REACT_APP_HELLO_SERVICE_URL;
  const profileServiceUrl = process.env.REACT_APP_PROFILE_SERVICE_URL;

  useEffect(() => {
    axios
      .get(`${helloServiceUrl}/`)
      .then((response) => {
        setMessage(response.data.msg);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [helloServiceUrl]);

  useEffect(() => {
    axios
      .get(`${profileServiceUrl}/fetchUser`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [profileServiceUrl]);

  return (
    <div className="App">
      <h1>{message}</h1>

      <div>
        <h2>Profile</h2>

        {profile.map((user) => (
          <div key={user._id}>
            <h3>Name: {user.name}</h3>
            <h3>Age: {user.age}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;