import { Link } from "react-router-dom";

export function Navbar() {


  return (



    <nav className=" navbar navbar-expand-md bg-dark navbar-dark">
      <div className="container">
        <Link to={"/students"} className=" text-white navbar-brand">
          {/* <i class="me-2 fa-solid fa-graduation-cap"></i> */}
          <img src="/image/book-logo.png" alt="swasticblog" style={{width:"11rem"}}/>
          </Link>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mynav">
          <span className="navbar-toggler-icon"></span>
        </button>



        <div className="collapse navbar-collapse " id="mynav">
          <ul className="navbar-nav ms-auto ">
          <li className="nav-item active "><Link to={"/"} className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to={"/books"} className="nav-link">Books</Link></li>
            <li className="nav-item  "><Link to={"/addbooks"} className="nav-link">AddBooks</Link></li>
            <li className="nav-item "><Link to={"/books/take"} className="nav-link">Return Books</Link> </li>


            {/* <li class="nav-item active"> <a class="nav-link" href="#">Login</a></li> */}
          </ul>


        </div>

      </div>

    </nav>




  );
}