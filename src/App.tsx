import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddPost from './containers/AddPost/AddPost.tsx';
import Receive from './containers/Receive/Receive.tsx';


const App = () => {

  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col><AddPost/></Col>
          <Col><Receive/></Col>
        </Row>
      </Container>
    </>
  )
};

export default App
