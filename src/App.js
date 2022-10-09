import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Address from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";
import { Photo } from "./Component/Profile/ProfilePhoto";
import { Button, Card } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Photo />
          <Card.Title>
            <FullName />
          </Card.Title>
          <Card.Text>
            <Address />
          </Card.Text>
          <Button variant="primary">Visit My Profile</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
