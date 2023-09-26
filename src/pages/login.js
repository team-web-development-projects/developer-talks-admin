import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import axios from "axios";
import { ROOT_API } from "../constants/api";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
    const [user, setUser] = useState({ userId: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault(); // Prevent form submission

        try {
            await new Promise((r) => setTimeout(r, 1000));
            const response = await axios.post(
                `${ROOT_API}/sign-in`,
                {
                    userid: user.userId,
                    password: user.password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("로그인 성공:", response);
            alert("로그인되었습니다.")
            localStorage.setItem("admin", response.data.accessToken);
            navigate("/home/main")
        } catch (error) {
            console.error("로그인 에러:", error);
            alert(error.response.data.message);
        }
    };

    return (
        <div>
            <Container className="panel mt-10">
                <Form onSubmit={onSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextUserId">
                        <Col sm>
                            <Form.Control
                                type="text"
                                placeholder="UserID"
                                name="userId"
                                value={user.userId}
                                onChange={handleChange}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col sm>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                            />
                        </Col>
                    </Form.Group>
                    <br />

                    <div className="d-grid gap-1">
                        <Button variant="primary" type="submit" className="text-black font-bold">
                            Sign In
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
}

export default Login;
