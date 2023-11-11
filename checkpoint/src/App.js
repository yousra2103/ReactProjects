import React from "react";
import Descrp from "./Descrp";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav  , Navbar , Container} from 'react-bootstrap';
import Name from "./Name";
import Price from "./Price";
import Image from "./Image";
function App() {
  return (

<Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">GMC Product </Navbar.Brand>
        </Container>
      </Navbar>
      <div>
        <Image/>
        <Name/>
        <Price/>
        <Descrp/>
      </div>
    </Container>

    

  )
}

export default App;
