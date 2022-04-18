import React from 'react'

const Header = () => {

        return (
            <header>
               <div className="container">
                  <div className="row">
                     <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                           <a className="navbar-brand me-auto" href="#">Web Framework Site</a>
                           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                           </button>
                           <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                 <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Discover</a>
                                 </li>
                                 <li className="nav-item">
                                    <a className="nav-link" href="#">Guides</a>
                                 </li>
                                 <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       Resources
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                       <li><a className="dropdown-item" href="#">Action</a></li>
                                       <li><a className="dropdown-item" href="#">Another action</a></li>
                                       <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                 </li>
                                 <li className="nav-item">
                                    <a className="nav-link">Campfire</a>
                                 </li>
                                 <li className="nav-item">
                                    <a className="nav-link">Community</a>
                                 </li>
                              </ul>
                              
                              <div className="d-flex ms-auto">
                              {/* <form className="d-flex">
                                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />  
                                  <button className="btn btn-success" type="submit">Search</button> 
                              </form> */}
                               
                                 <a className=" btn btn-success">Get Started</a>
                                  
                              </div>
                           </div>
                        </div>
                        </nav>
                  </div>
               </div>
            </header>
          )
}

export default Header