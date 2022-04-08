import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import male from "../assets/man.svg";
import female from "../assets/woman.svg";
import mail from "../assets/mail.svg";
import map from "../assets/map.svg";
import phone from "../assets/phone.svg";
import padlock from "../assets/padlock.svg";
import growMan from "../assets/growing-up-man.svg";
import growWoman from "../assets/growing-up-woman.svg";
const StyledCard = styled.div`
  background: linear-gradient(gray 150px, white 155px);
  width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  button {
    width: 150px;
    background-color: purple;
    color: white;
    margin: 1rem 2rem;
    padding: 0.5rem 1rem;
  }
  .imgContainer {
    display: flex;
    justify-content: space-around;
  }
`;
const Img = styled.img`
  margin: 1rem;
  border-radius: 50%;
  width: ${(props) => props.big || "50px"};
  height: ${(props) => props.big || "50px"};
  border: 3px solid white;
  box-shadow: 0 0 4px 2px gray;
  object-fit: cover;
`;

const addUser = () => {};

const UserCard = () => {
  const [randomUser, setRandomUser] = useState();
  const [property, setProperty] = useState([]);

  const fetchUser = async () => {
    try {
      const user = await axios.get("https://randomuser.me/api/");
const data = await user.data.results[0];
      setRandomUser(user.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  const handleClick = (e) => {
    console.log(e);
    if (e.target.tagName === "IMG") {
      console.log(e.target.alt);
      setProperty(["e.target.alt", randomUser["email"]]);
      console.log(property);
    }
  };
 /*  useEffect(() => {
const {
      email,
      phone,
      picture: { medium },
      name: { first, last },
      dob: { age },
      gender,
      login: { password },
      location: { street },
    } = randomUser;
    console.log(street);
  }, [randomUser]) */
  
  if (randomUser) {
    
  }
  console.log(randomUser);

  return (
    <div>
      <StyledCard>
        <Img src={randomUser.picture?.medium} alt="" big="150px" />
        <p>
          My <span></span> is
        </p>
        <h3> {randomUser.email} </h3>
        <div className="imgContainer" onClick={(e) => handleClick(e)}>
          <Img src={randomUser.gender === "male" ? male : female} alt="name" />
          <Img src={mail} alt="mail" />
          <Img
            src={randomUser.gender === "male" ? growMan : growWoman}
            alt="age"
          />
          <Img src={map} alt="map" />
          <Img src={phone} alt="phone" />
          <Img src={padlock} alt="password" />
        </div>
        <button onClick={fetchUser}>New User</button>
        <button onClick={addUser}>Add User</button>
      </StyledCard>
    </div>
  );
};

export default UserCard;
