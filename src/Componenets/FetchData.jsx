import React, { useEffect, useState } from "react";
import axios from "axios";
function FetchData(cat) {
  const [Data, setaData] = useState("");
  const fetchData = async () => {
    await axios
      .get(
        cat ?`https://newsapi.org/v2/top-headlines?country=in&cat=${cat}&apiKey=771e13e10bd645d0bab734edd6c7342f`
        
        :"https://newsapi.org/v2/top-headlines?country=in&apiKey=771e13e10bd645d0bab734edd6c7342f"
      )
      .then((res) => setaData(res.data.articles));
  };

  useEffect(() => {
    fetchData();
  }, );


  return (

    
    <div
      className="container d-flex justify-content-center align-item-center flex-column my-3"
      style={{ minHeight: "100vh" }}
    >
      <h3>
        <u>TOP HEDLINES</u>
      </h3>
      <div className="my-2">
        {Data
          ? Data.map((items, index) => (
              <>
                <div
                  className="container my-3 p-3"
                  style={{
                    width: "600px",
                    boxShadow: "2px 2px 10px silver",
                    borderRadius: "10px",
                  }}
                >
                  <h5 className="my-1">{items.title}</h5>
                  <div className="d-flex justify-content-center aling-item-center">
                    <img
                      src={items.urlToImage}
                      alt="/"
                      className="img-fluid"
                      style={{
                        width: "auto",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <p className="my-1">{items.content}</p>
                  <a href={items.url} target="blanck">
                    View more
                  </a>
                </div>
              </>
            ))
          : "LODING..."}
      </div>
    </div> 
  );
}

export default FetchData;
