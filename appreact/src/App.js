import logo from './logo.svg';
import './App.css';
import { Button, Form } from 'react-bootstrap';

function App() {
  
  return (
    
  <div className="App">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <br></br>
        <br></br>
      </Form>
      <br></br>

      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Entrer Votre Nom" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Prénom</Form.Label>
          <Form.Control type="text" placeholder="Entrer votre Prénom" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mail</Form.Label>
          <Form.Control type="Email" placeholder="Enter votre E-mail" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Adresse</Form.Label>
          <Form.Control type="text" placeholder="Num,Rue,Cité ..." />
        </Form.Group>
        <Form.Label>Ville</Form.Label>
        <Form.Select>
          <option></option>
          <option value="1">Tunis</option>
          <option value="2">Ariana</option>
          <option value="3">Ben Arous</option>
          <option value="4">Manouba</option>
        </Form.Select> <br></br>
        <Button variant="primary" type="submit">Confirmer</Button>{' '}
        <Button variant="danger" type="reset">Annuler</Button>
        <br></br>
        <br></br>
      </Form>

      <hr></hr>

      <Form>

      </Form>
    </div> 
  );
}

export default App;
