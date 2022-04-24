import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Datatable from "../../components/datatable/Datatable";
import { v4 as uuidv4 } from "uuid";

const New = ({ title, inputs, rows, columns }) => {
  const [uploadImage, setUplaodImage] = useState("");
  const [users, setUsers] = useState([...rows]);
  const [formTitle, setFormTitle] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    setFormTitle(title);
  }, [rows, title]);

  const addUserHandler = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuidv4(),
      username: userName,
      email: email,
      age: age,
      img: uploadImage,
      status: "active",
    };
    setUsers([...users, newUser]);
    setUserName("");
    setEmail("");
    setAge("");
    setUplaodImage("");
  };

  return (
    <>
      <div className="new">
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          <div className="top">
            <h1>{formTitle}</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img
                src={
                  uploadImage
                    ? URL.createObjectURL(uploadImage)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt="avatar"
              />
            </div>
            <div className="right">
              <form>
                <div className="formInput">
                  <label htmlFor="file">
                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setUplaodImage(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                  <label htmlFor="username">UserName</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Johnny"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                  />

                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <label htmlFor="phone">Age</label>
                  <input
                    type="number"
                    id="phone"
                    placeholder="28"
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                  />
                </div>
                {/* {inputData.map((input) => (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                ))} */}
                <div className="formInput"></div>
                <button onClick={addUserHandler}>Add</button>
              </form>
            </div>
          </div>
          <Datatable rows={users} columns={columns} title={title} />
        </div>
      </div>
    </>
  );
};

export default New;
