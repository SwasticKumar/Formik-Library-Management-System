import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Takebooks({ takebooks }) {
  const navigate = useNavigate();

  const [bookdata, setbookdata] = useState([]);

  const getbook = () => {
    // const api ="https://63e0923b65b57fe60644f2ba.mockapi.io/books"

    fetch("https://63e0923b65b57fe60644f2ba.mockapi.io/books", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => setbookdata(data));
  };

  useEffect(() => getbook(), []);

  const updatafun = async (data) => {
    let editdata2 = {
      status: "available",
    };

    await fetch(`https://63e0923b65b57fe60644f2ba.mockapi.io/books/${data}`, {
      method: "PUT",
      body: JSON.stringify(editdata2),
      headers: {
        "Content-Type": "application/json",
      },
    });

    getbook();
  };

  console.log("from takenbooks after ", takebooks);

  return (
    <div className="container">
      <div className="row ">
        <div className="heading text-white p-1 mt-3 mb-3  ">
          <h1 className="text-center mt-3 ">Return Books library</h1>
        </div>

        {bookdata.length > 0 ? (
          bookdata?.map((bmd, index) => {
            if (bmd.status == "unavailable") {
              return (
                <div
                  className=" col-lg-3 mb-2 col-md-4 col-sm-6  d-flex justify-content-center data-con"
                  key={index}
                >
                  <div className="card  col-12 ">
                    <div
                      className="card-body border-0"
                      style={{ backgroundColor: "#dabfa1" }}
                    >
                      <h3 className="card-title"> Title : {bmd.name}</h3>
                      <h5 className="card-text"> Author : {bmd.author}</h5>
                      <h6 className="text-muted">
                        {" "}
                        publisher : {bmd.publisher}
                      </h6>
                      <h6 className="text-muted">
                        {" "}
                        Published : {bmd.published}
                      </h6>

                      <div className="card-footer">
                        <div className="d-grid">
                          <button
                            className="btn btn-success"
                            onClick={() => {
                              updatafun(bmd.id);
                              console.log(bmd.id);
                            }}
                          >
                            Return to library
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })
        ) : (
          <div>
            <h1 className="text-white">Loading...</h1>
          </div>
        )}
      </div>
    </div>
  );
}

<button className="btn" style={{ backgroundColor: "#ce9d7d" }}>
  Return to library
</button>;
