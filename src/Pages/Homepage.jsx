import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileDataRow from "../Components/ProfileDataRow";
import { getProfileFailure, getProfileRequest, getProfileSuccess } from "../Redux/action";

const Homepage = () => {

  const profileData=useSelector((state)=>state.profileData)
  const dispatch=useDispatch();

  const getProfile=()=>{

    dispatch(getProfileRequest());

    axios.get("http://localhost:8080/profile")

    .then((res)=>dispatch(getProfileSuccess(res.data)))

    .catch(()=>dispatch(getProfileFailure()))
  }

  useEffect(()=>{
    getProfile()
  },[])

  console.log(profileData)
  return (
    <div style={{justifyContent:"center", textAlign:"center", display:"flex"}}>
      <table>
        <thead style={{ fontWeight: "900" }}>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody data-cy="profile-wrapper">
          {profileData.map((item)=>{

            return <ProfileDataRow profile={item}/>
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
