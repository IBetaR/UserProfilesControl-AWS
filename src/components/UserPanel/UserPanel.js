import { Button, Card, Container, Tab, Table, Tabs } from "react-bootstrap";

import PanelBar from "../PanelBar/PanelBar";
import RegistrationModal from "../RegistrationModal/RegistrationModal";
import "./UserPanel.css";



export const UserPanel = () => {
  return (
    <>
    <Container>
       <h1> User Profile</h1>
    </Container>
    <Container>
      {/* <PanelBar /> */}
      <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Resume">
        <h1>Resume</h1>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <h1>Profile</h1>
      </Tab>
      <Tab eventKey="longer-tab" title="Home" >
          {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
         
      </Tab>
    </Tabs>

    </Container>
    <Container className='user-list'>

    <Table striped bordered hover variant="" responsive="md" size="sm" className='user-table'>
      <thead>
        <tr>
          <th>Username</th>
          <th>Fullname</th>
          <th>E-mail</th>
          <th>Created At</th>
          <th>Is Astive</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Username</td>
          <td>Fullname</td>
          <td>@Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>
            <Button style={{margin:"0 5px 0 0px"}}>Update</Button>
            <Button style={{margin:"0 5px 0 0px"}}>Delete</Button>
          </td>
        </tr>
        
      </tbody>
    </Table>
    <RegistrationModal />
    </Container>
    </>
  );
};
