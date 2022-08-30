import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Comment() {
  const [api, setApi] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((result) => {
        const commnets = result.data;
        setApi(commnets);
      });
  }, []);
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <div className="container py-5">
        <div className="h3">Khách hàng Nói gì về chúng tôi?</div>
        {api.map(
          (comment) =>
            comment.id < 10 && (
              <div key={comment.id} className="py-3 alert alert-primary ">
                {comment.email}
                <span style={{ color: "green", paddingLeft: "20px" }}>
                  Tiêu đề: {comment.name}
                </span>
                <p className="pt-2">Nội dung: {comment.body}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
}
