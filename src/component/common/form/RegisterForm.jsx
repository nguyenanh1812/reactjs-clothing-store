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
          localStorage.setItem("token", JSON.stringify(token));
          // Khi config api sẽ lấy token từ local storage
        }
      });
  };

  useEffect(() => {
    console.log(password);
    console.log(email);
  }, [password, email]);

  return (
    <div className="container my-5 py-5 d-flex align-items-center">
      <div className="w-50">
        <img
          src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=826&t=st=1665155626~exp=1665156226~hmac=3ba3f75cc6a74af2a49fc1254b60c5d3fd5bd541ff466f6f9925a9b7143e9d8f"
          alt=""
          className="img-fluid"
        />
      </div>
      <div className="w-50">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bolder">Tài khoản</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Điền Email"
              defaultValue={email}
              onChange={(event) => handleType(event)}
            />
            <Form.Text className="text-muted">
              Tài khoản của bạn sẽ được bảo mật
            </Form.Text> <br />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fw-bolder">Mật khẩu</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Điền mật khẩu"
              defaultValue={password}
              onChange={(event) => handleType(event)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Lưu mật khẩu" />
          </Form.Group> <br /> 
          <Button
            type="submit"
            onClick={onSubmit}
            className="btn-md w-100 fw-bolder hover-btn-login"
          >
            Đăng nhập
          </Button>
        </Form>
      </div>
    </div>
  );
}
