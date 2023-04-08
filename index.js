
const footer = document.querySelector('footer');
const header = document.querySelector('header');

header.innerHTML = `
   
<!-- First Navbar content -->
<nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark first-nav" data-bs-theme="dark">
<div class="container-fluid">
<div class="navbar-brand mtitle" href="#">Ecommerce</div>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
<!-- navbar collapse will open up when we go to the mobile view -->
<form class="d-flex ms-md-auto nav-search" role="search">
  <input class="form-control searchbox search-input" type="search" placeholder="Product Name, Category name, etc." aria-label="Search">
  <button class="btn btn-outline-info search-btn ms-3" type="submit">Search</button>
</form>
<ul class="navbar-nav align-items-md-center ms-auto mb-lg-0 cart-n-loginbtn">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="./pages/login/login-page.html"><button class="btn btn-outline-info">Login</button></a>
  </li>
  <li class="nav-item"> <a class="nav-link" href="/pages/cart/cart-page.html"> <i class="cart fa fa-shopping-cart cart"></i> </a> </li>
  
</ul>

</div>
</nav>
  


  <!-- Second Navbar content -->
  <nav class="navbar navbar-expand pt-0 pb-0 bg-body-tertiary second-nav">
    <div class="container-fluid " style="background-color: rgb(190, 243, 255);"><!--It was easy to add css for bg color here itself-->
    
        <div class="collapse  d-flex justify-content-between navbar-collapse" id="navbarNav">
          <ul class="navbar-nav justify-content-around flex-wrap w-100">
            <li class="nav-item">
              <!--To add css to all the links here class name will be seclinks-->
              <a class="nav-link seclinks" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link seclinks" href="./pages/product-categories/all-products.html">All Products</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle seclinks" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Women
              </a>
              <ul class="dropdown-menu menu">
                <li><a class="dropdown-item seclinks" href="./pages/product-categories/women/women.html">All</a></li>
                <li><a class="dropdown-item seclinks" href="./pages/product-categories/women/women-dresses.html">Dresses</a></li>
                <li><a class="dropdown-item seclinks" href="./pages/product-categories/women/women-pants.html">Pants</a></li>
                <li><a class="dropdown-item seclinks" href="./pages/product-categories/women/women-skirts.html">Skirts</a></li>
                
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle seclinks" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Men
              </a>
              <ul class="dropdown-menu menu">
                <li><a class="dropdown-item seclinks " href="/pages/product-categories/men/men.html">All</a></li>
                <li><a class="dropdown-item seclinks" href="pages/product-categories/men/men-hoodies.html">Hoodies</a></li>
                <li><a class="dropdown-item seclinks"  href="pages/product-categories/men/men-shirts.html">Shirts</a></li>
                <li><a class="dropdown-item seclinks" href="pages/product-categories/men/men-pants.html">Pants</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link seclinks" href="./pages/product-categories/kids/kids.html">Kids</a>
            </li>
            <li class="nav-item">
              <a class="nav-link seclinks" href="./pages/contact/contact.html">Contact</a>
            </li>
          </ul>
        </div>
        </div>
  </nav>

`
footer.innerHTML = `
<div class="container-fluid bottom text-bg-dark">

            <div class="container-fluid pt-3 text-center d-sm-flex">
              <div class="col-3">
                <h5>Women</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2 ">
                    <a href="#" class="nav-link footer-link p-0 ">Dresses</a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link footer-link p-0 ">Pants</a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link footer-link p-0 ">Skirts</a>
                  </li>
                </ul>
              </div>
        
              <div class="col-3 ">
                <h5>Men</h5>
                <ul class="nav flex-column ">
                  <li class="nav-item mb-2"><a href="#" class="nav-link
                    footer-link p-0 ">Shirts</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link 
                    footer-link p-0 ">Pants</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link 
                    footer-link p-0">Hoodie</a></li>
                </ul>
              </div>
        
              <div class="col-3 ">
                <h5>Kids</h5>
                
              </div>

              <div class="col-3">
                <h5>Links</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2"><a href="#" class="nav-link footer-link p-0 ">Home</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link footer-link
                    p-0 ">Login</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link footer-link p-0 ">Contact</a></li>
                 
                </ul>
              </div>
              
              
      </div>
      <div class="d-flex  justify-content-center  border-top pt-1">
        <p>Copyright &copy;Ecmmerce 2022-23  </p>
        </div>
    </div>
`
