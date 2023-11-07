import { useFormik} from "formik";

import { useNavigate } from "react-router-dom";
import * as yup from "yup"


const fromvalidationscheme = yup.object({
name:yup.string().required("Please fill the form").min(8,"minimum 8 character required"),
author:yup.string().required("Please fill the form").min(8,"minimum 8 character required"),
published:yup.string().required("Please fill the form").min(8,"minimum 8 character required"),
publisher:yup.string().required("Please fill the form").min(8,"minimum 8 character required"),
description:yup.string().required("Please fill the form").min(8,"minimum  character required")

})

export function AddBooks() {

const navigate = useNavigate()

   const {handleChange,handleSubmit,values,errors,touched,handleBlur} = useFormik({



initialValues:{

  name:'',
  author:'',
  published:'',
  publisher:'',
  description:'',
  pages:'',
  website:'',
status : "available",


},
onSubmit: (adddata) =>{


postfun(adddata)

console.log(adddata);

} ,

validationSchema:fromvalidationscheme



   })




const postfun = async (adddata)=>{


  // const api ="https://63e0923b65b57fe60644f2ba.mockapi.io/books"

 await fetch("https://63e0923b65b57fe60644f2ba.mockapi.io/books",{
    method: "POST",
  body: JSON.stringify(adddata)  ,
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



<h3 className="card-header mb-2 bg-dark text-center">Addbooks</h3>   
<div className="card-body">



<form onSubmit={handleSubmit} >

<div className="mb-1">

<label className="form-label">Title Books *</label>
<input onBlur={handleBlur} className="form-control" value={values.name} name="name" onChange={handleChange} type="text" placeholder="Title" />
{touched.name && errors.name ? errors.name : null}

</div>

<div className="mb-1">

<label className="form-label">Author *</label>
<input onBlur={handleBlur} className="form-control" value={values.author} name="author" onChange={handleChange} type="text" placeholder="author" />
{touched.author && errors.author ? errors.author : null}
</div>
<div className="mb-1">

<label className="form-label" >Published *</label>
<input onBlur={handleBlur} className="form-control" value={values.published} name="published"  onChange={handleChange} type="text" placeholder="published" />
{touched.published && errors.published ? errors.published : null}
</div>

<div className="mb-1">

<label className="form-label" >Publisher *</label>
<input onBlur={handleBlur} className="form-control" value={values.publisher} name="publisher"  onChange={handleChange} type="text" placeholder="publisher" />
{touched.publisher && errors.publisher ? errors.publisher : null}
</div>
<div className="mb-1">

<label className="form-label" >Descriptions *</label>
<input onBlur={handleBlur} className="form-control"  value={values.description} name="description"  onChange={handleChange} type="text" placeholder="description" />
{touched.description && errors.description ? errors.description : null}
</div>


<div className="mb-1">


<label className="form-label" >Pages</label>
<input className="form-control" value={values.pages}  name="pages" onChange={handleChange} type="text" placeholder="Pages" />
</div>


<div className="mb-1">


<label className="form-label" >website</label>
<input className="form-control" value={values.website} name="website"  onChange={handleChange} type="text" placeholder="website" />

</div>

<div className="d-grid mt-3">

<button className="btn btn-success" type="submit" >AddBooks</button>
</div>


</form>
</div>

</div>

</div>








      </div>





    </div>


  );



}