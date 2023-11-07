import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

export function Books({}) {
  const [bookdata, setbookdata] = useState([]);

  const getmovie = () => {
    // const api ="https://63e0923b65b57fe60644f2ba.mockapi.io/books"

    fetch("https://63e0923b65b57fe60644f2ba.mockapi.io/books", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => setbookdata(data));
  };

  useEffect(() => getmovie(), []);

  const deletfun = async (data) => {
    // const api =`https://63e0923b65b57fe60644f2ba.mockapi.io/books/${dataid}`

    await fetch(`https://63e0923b65b57fe60644f2ba.mockapi.io/books/${data}`, {
      method: "DELETE",
    });

    getmovie();
  };

  const updatafun = async (data) => {
    let editdata2 = {
      status: "unavailable",
    };

    await fetch(
      `https://63e0923b65b57fe60644f2ba.mockapi.io/books/${data.id}`,
      {
        method: "PUT",
        body: JSON.stringify(editdata2),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    getmovie();
  };

  const [tempdata, settempdata] = useState([]);

  const func = (data) => {
    settempdata(data);
  };

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row ">
        <div className="heading text-white p-1 mt-3 mb-3  ">
          <h1 className="text-center mt-3 ">Books library</h1>
        </div>

        {bookdata.length > 0 ? (
          bookdata?.map((bmd, index) => {
            if (bmd.status == "available") {
              return (
                <div
                  className=" col-lg-3 mb-2 col-md-4 col-sm-6  d-flex justify-content-center data-con"
                  key={index}
                >
                  <div className="card col-12 ">
                    <div className="card-body" style={{backgroundColor:"#dabfa1"}}>
                      <h3 className="card-title"> Title : {bmd.name}</h3>
                      <h5 className="card-text"> Author : {bmd.author}</h5>
                      <h6 className="text-muted">
                        {" "}
                        publisher : {bmd.publisher}
                      </h6>
                      <h6 className="text-muted mb-4">
                        {" "}
                        Published : {bmd.published}
                      </h6>

                      <div className="d-grid">
                        {/* <button onClick={(() => console.log() )} class="btn mb-1 btn-primary">Details</button>
                         */}

                        <button
                          onClick={() => {
                            func(bmd);
                          }}
                          class="btn mb-1 btn-secondary"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasExample"
                          aria-controls="offcanvasExample"
                        >
                          Details
                        </button>

                        <div
                          class="offcanvas offcanvas-start text-bg-dark"
                          tabindex="-1"
                          id="offcanvasExample"
                          aria-labelledby="offcanvasExampleLabel"
                        >
                          <div class="offcanvas-header ">
                            <h2
                              class="offcanvas-title"
                              id="offcanvasExampleLabel"
                            >
                              {tempdata.name}
                            </h2>
                            <button
                              type="button"
                              class="btn-close bg-white text-reset"
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="offcanvas-body">
                            <div>
                              <h4>Description</h4>
                              {tempdata.description}
                            </div>
                            <div class="dropdown mt-3">
                              <h2 className="h2">Total Pages </h2>
                              {tempdata.pages !== "" ? (
                                <h2 className="card-text">{tempdata.pages}</h2>
                              ) : (
                                <h2 className="text-muted">100</h2>
                              )}
                            </div>
                          </div>
                        </div>

                        <button
                          className="btn mb-1"
                          style={{ backgroundColor: "#ce9d7d" }}
                          onClick={() => {
                            console.log(bmd.id);

                            navigate(`/books/edit/${bmd.id}`);
                          }}
                        >
                          Edit
                        </button>

                        <button
                          className="btn mb-1"
                          style={{ backgroundColor: "#94824c" }}
                          onClick={() => {
                            updatafun(bmd);

                            console.log(bmd);
                          }}
                        >
                          Takebooks
                        </button>

                        <button
                          className="btn mb-1 btn-danger"
                          onClick={() => {
                            deletfun(bmd.id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })
        ) : (
          <div className="text-white">
            <h1 className="text-white">Loading...</h1>
          </div>
        )}
      </div>
    </div>
  );
}
