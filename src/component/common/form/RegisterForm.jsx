import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleType = (event) => {
    const { value, name } = event.target;
    if (name === "email") {
      setEmail((pre) => (pre = value));
    } else if (name === "password") {
      setPassword((pre) => (pre = value));
    }
  };

  const onSubmit = (event) => {
    event.preventDefault(); // ngăn redirect đến url khác khi submit
    //call api
    axios
      .post("https://api.realworld.io/api/users/login", {
        user: {
          email,
          password,
        },
      })
      .then((res) => {
        console.log("res", res.status);
        if (res.status === 200 || res.status === 201) {
          alert("Bạn đã đăng nhập thành công!");
          //destruc lấy token
          const {
            user: { token },
          } = res.data;
          //Luu token vào local storage
          localStorage.setItem('token', JSON.stringify(token));
          // Khi config api sẽ lấy token từ local storage
        }
      });
  };

  useEffect(() => {
    console.log(password);
    console.log(email);
  }, [password, email]);

  return (
    <div className="container my-5 py-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            defaultValue={email}
            onChange={(event) => handleType(event)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            defaultValue={password}
            onChange={(event) => handleType(event)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
