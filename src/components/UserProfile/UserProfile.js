import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { Card, Container, Figure } from "react-bootstrap";
import { useDropzone } from "react-dropzone";


const UserProfiles = () => {
  const [userProfiles, setUserProfile] = useState([]);

  const fetchUserProfiles = () => {
    axios.get("http://localhost:8080/api/v1/user-profile").then((res) => {
      console.log(res);
      setUserProfile(res.data);
    });
  };

  useEffect(() => {
    fetchUserProfiles();
  }, []);

  return userProfiles.map((userProfile, index) => {
    return (
      <>
        <Container className="panel">
          <Card
            style={{ width: "38rem", margin: "50px", position: "relative" }}
            className="text-center"
          >
            <Card.Header><a href="users/info">{userProfile.username}</a></Card.Header>
            <div key={index}>
              {userProfile.userProfileId ? (
                // eslint-disable-next-line jsx-a11y/alt-text
                <img style={{margin: "15px"}}
                  src={`http://localhost:8080/api/v1/user-profile/${userProfile.userProfileId}/image/download`}
                />
              ) : null}
              <br />
              <Card.Body>
                <Card.Text>{userProfile.fullname}</Card.Text>
                {/* <Card.Text>{userProfile.userProfileImageLink}</Card.Text> */}
              </Card.Body>
              <br />
              <Dropzone {...userProfile} />
            </div>
          </Card>
        </Container>
      </>
    );
  });
};

function Dropzone({ userProfileId }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      console.log(file);

      const formData = new FormData();
      formData.append("file", file);

      axios
        .post(
          `http://localhost:8080/api/v1/user-profile/${userProfileId}/image/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(() => {
          console.log("File uploaded successfully");
        })
        .catch((e) => {
          console.error(e + " :Error uploading file");
        });
    },
    [userProfileId]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop profile Image here</p>
      ) : (
        <p>Drag profile Image here or click to select files</p>
      )}
    </div>
  );
}

export default UserProfiles;
