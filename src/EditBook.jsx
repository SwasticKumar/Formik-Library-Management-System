import { useFormik } from "formik";
import { useEffect, useState } from "react";



import { useNavigate, useParams } from "react-router-dom";

export function EditBook() {

const [editbooks,seteditbook] =useState(null);

  const {id} = useParams()

useEffect(() =>{

  fetch(`https://63e0923b65b57fe60644f2ba.mockapi.io/books/${id}`,{
    method:"GET"})

  .then((data) => data.json() )
  .then((data) => seteditbook(data))


},[id])

console.log(editbooks);

return (

  editbooks ? <Editbookforms editbooks={editbooks} /> : <h1>Loading....</h1>

)

}


function Editbookforms({editbooks}){



  const navigate = useNavigate();


  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      name: editbooks.name,
      author: editbooks.author,
      published:editbooks.published,
      publisher: editbooks.publisher,
      description: editbooks.description,
      pages:editbooks.pages,
      website:editbooks.website,
    },
    onSubmit: (editdata) => {


      updatafun(editdata);



    }
  });





  const updatafun = async (editdata)=>{

    await fetch(`https://63e0923b65b57fe60644f2ba.mockapi.io/books/${editbooks.id}`,{
      method: "PUT",
    body: JSON.stringify(editdata)  ,
    headers: {
     'Content-Type': 'application/json'
    },
    })


navigate("/books")




  }








  return (


    <div className="container" >


    <div className="row mb-5 mt-5 d-flex text-light justify-content-center   ">


    <div className="col-md-6  col-lg-6 col-12">
    <div className="card bg-secondary ">



    <h3 className="card-header mb-2 bg-dark text-center">Update Books</h3>   
    <div className="card-body">



    <form onSubmit={handleSubmit} >

    <div className="mb-1">

    <label className="form-label">Title Books *</label>
    <input  className="form-control" value={values.name} name="name" onChange={handleChange} type="text" placeholder="Title" />


    </div>

    <div className="mb-1">

    <label className="form-label">Author *</label>
    <input className="form-control" value={values.author} name="author" onChange={handleChange} type="text" placeholder="author" />

    </div>
    <div className="mb-1">

    <label className="form-label" >Published *</label>
    <input  className="form-control" value={values.published} name="published"  onChange={handleChange} type="text" placeholder="published" />

    </div>

    <div className="mb-1">

    <label className="form-label" >Publisher *</label>
    <input className="form-control" value={values.publisher} name="publisher"  onChange={handleChange} type="text" placeholder="publisher" />

    </div>
    <div className="mb-1">

    <label className="form-label" >Descriptions *</label>
    <input className="form-control"  value={values.description} name="description"  onChange={handleChange} type="text" placeholder="description" />

    </div>




{values.website  != "" && values.pages != "" ?   
  <div>
    <div className="mb-1">


    <label className="form-label" >Pages</label>
    <input className="form-control" value={values.pages}  name="pages" onChange={handleChange} type="text" placeholder="Pages" />
    </div>
<div className="mb-1">
    <label className="form-label" >website</label>
    <input className="form-control" value={values.website} name="website"  onChange={handleChange} type="text" placeholder="website" />

    </div>
    </div> : ""






}
    <div className="d-grid mt-3">

    <button className="btn mb-2" style={{ backgroundColor: "#ce9d7d" }} type="submit" >Update Books</button>
    <button className="btn btn-danger" onClick={(() => navigate("/books") )}>Cancel</button>
    </div>


    </form>
    </div>

    </div>

    </div>








          </div>





        </div>



  );




}