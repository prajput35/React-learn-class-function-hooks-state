import { useState, useEffect } from "react";

function MyApp() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log("render");
    const getTodos = async () => {
      const fetchData = await fetch(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      );
      const response = await fetchData.json();
      console.log(response);
      setItems(response);
    };

    getTodos();

    return () => {
      // this gets called when the component unmounts
      // can be used to remove event listeners, subscription
      //this return runs, to clean up the previous effect or the last effect if cleanup code is written
    };
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

export default MyApp;
