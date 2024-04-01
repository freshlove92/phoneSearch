import React, { useState } from 'react';
import {Form, Button, Col, Row} from "react-bootstrap"
import { useDispatch } from 'react-redux';

const SearchBox = () => {

    let [searchtext, setSearchtext] = useState("");
    let dispatch = useDispatch();

    const search =(event)=> {
        event.preventDefault();
        dispatch({ type: "SEARCH_TEXT", payload: { searchtext } });
    };
    
    return (
        <Form onSubmit={search}>
            <Form.Label>검색</Form.Label>
            <Row>
                <Col lg={10}>
                    <Form.Control type="text" 
                    placeholder="이름을 입력해 주세요"
                    onChange={(event) => setSearchtext(event.target.value)} />
                </Col>

                <Col lg={2}>
                    <Button type='submit'>찾기</Button>

                </Col>
            </Row>
        </Form>

       
    );
};

export default SearchBox;



 