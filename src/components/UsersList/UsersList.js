import "./UsersList.css";
import Table from "react-bootstrap/Table";
import { Button, Container, Tab, Tabs } from "react-bootstrap";
import RegistrationModal from "../RegistrationModal/RegistrationModal";
import { useEffect, useState } from "react";
import axios from "axios";

function UsersList() {
  const [userProfiles, setUserProfile] = useState([]);
  const [search, setSearch] = useState("");

  const URL = "http://localhost:8080/api/v1/user-profile";

  const fetchUsers = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setUserProfile(data);
  };

  const searcher = (event) => {
    setSearch(event.target.value);
    console.log(event);
  };

  const results = !search
    ? userProfiles
    : userProfiles.filter((filter) =>
        filter.name.toLowerCase().includes(search.toLowerCase())
      );

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Container className="user-list">
        <h1>Users List</h1>
        {/* <input value={search} onChange={searcher} type='text' placeholder='buscar' className='form-control' /> */}
      </Container>
      <Container className="user-list">
        <Table
          striped
          bordered
          hover
          variant=""
          responsive="md"
          size="sm"
          className="user-table"
        >
          <thead>
            <tr>
              <th>Username</th>
              <th>Fullname</th>
              <th>E-mail</th>
              <th>Created At</th>
              <th>ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {results.map((userProfile) => (
              <tr key={userProfile.id}>
                <td>
                  <a href="users/info">{userProfile.username}</a>
                </td>
                <td>{userProfile.fullname}</td>
                <td>{userProfile.email}</td>
                <td>{userProfile.createdAt}</td>
                <td>{userProfile.userProfileId}</td>
                <td>
                  <Button style={{ margin: "0 5px 0 0px" }}>Update</Button>
                  <Button style={{ margin: "0 5px 0 0px" }}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <RegistrationModal />
      </Container>
    </>
  );
};

export default UsersList;
