import './App.css'; 

function App() {
  return (
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <link class="navbar-brand" href="#">Navbar </link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <link class="nav-link active"  href="#">Home</link>
        </li>
        <li class="nav-item">
          <link class="nav-link" href="#">Link</link>
        </li>
        <li class="nav-item dropdown">
          <link class="nav-link dropdown-toggle" href="#"  data-bs-toggle="dropdown" >
            Dropdown
          </link>
          <ul class="dropdown-menu">
            <li><link class="dropdown-item" href="#">Action</link></li>
            <li><link class="dropdown-item" href="#">Another action</link></li>
            
            <li><link class="dropdown-item" href="#">Something else here</link></li>
          </ul>
        </li>
        <li class="nav-item">
          <link class="nav-link disabled">Disabled</link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  );
}

export default App;
