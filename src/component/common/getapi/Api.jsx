import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Api() {
  const [api, setApi] = useState([]);
  useEffect(() => {
    const getApi = axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((result) => {
        const commnets = result.data;
        setApi(commnets);
      });
  }, []);
  return (
    <>
      <div>api</div>
      {api.map((comment) => (
        comment.id < 10 &&
        <div key={comment.id}>{comment.email} <span style={{color: 'red'}}>{comment.body}</span></div>
      ))}
    </>
  );
}
