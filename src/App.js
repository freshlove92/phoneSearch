import {Form, Button, Col, Row, Container} from "react-bootstrap"
import './App.css';
import ContactForm from "./component/ContactForm ";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactList from "./component/ContactList";

//1. 왼쪽에는 연락처 등록하는 거 / 오른쪽에는 리스트와 검색 창
//2. 리스트에 유저 이름, 전화번호 추가 할 수 있다
//3. 리스트에 아이템이 몇개 있는지 보인다
//4. 사용자가 유저를 이름으로 검색 할 수 있다

function App() {
  return (

    <div className="App">
    <h1 className="title">연락처</h1>
    <Container>
      <Row>
        <Col>
          <ContactForm />
        </Col>
        
        <Col>
           <ContactList />
        </Col>


      </Row>


    </Container>

    </div>
  );
}

export default App;
