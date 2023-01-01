
function Navbarg() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <link class="navbar-brand" href="#">Navbar</link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <link class="nav-link active" aria-current="page" href="#">Home</link>
        </li>
        <li class="nav-item">
          <link class="nav-link" href="#">Features</link>
        </li>
        <li class="nav-item">
          <link class="nav-link" href="#">Pricing</link>
        </li>
        <li class="nav-item">
          <link class="nav-link disabled">Disabled</link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbarg;