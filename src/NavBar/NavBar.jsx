export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Home
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">
            <span class="sr-only">(current)</span>
          </a>
          <a class="nav-item nav-link" href="#"></a>
          <a class="nav-item nav-link" href="#"></a>
          <a className="nav-item nav-link" href="#"></a>
          <a className="nav-item nav-link disabled" href="#"></a>
        </div>
      </div>
    </nav>
  );
}
