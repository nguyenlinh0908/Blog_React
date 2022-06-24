import "./sidebar.css";

function SideBar() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      ;
      <header>
        <nav
          id="sidebarMenu"
          class="collapse d-lg-block sidebar collapse bg-white"
        >
          <div class="position-sticky">
            <div class="list-group list-group-flush mx-3 mt-4">
              <a
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <i class="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>Main dashboard</span>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
              >
                <i class="fas fa-chart-area fa-fw me-3"></i>
                <span>Webiste traffic</span>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
              >
                <i class="fas fa-lock fa-fw me-3"></i>
                <span>Password</span>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
              >
                <i class="fas fa-chart-line fa-fw me-3"></i>
                <span>Analytics</span>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
              >
                <i class="fas fa-chart-pie fa-fw me-3"></i>
                <span>SEO</span>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action py-2 ripple active"
              >
                <i class="fas fa-chart-bar fa-fw me-3"></i>
                <span>Blogs</span>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
              >
                <i class="fas fa-globe fa-fw me-3"></i>
                <span>International</span>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
              >
                <i class="fas fa-building fa-fw me-3"></i>
                <span>Partners</span>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
              >
                <i class="fas fa-calendar fa-fw me-3"></i>
                <span>Calendar</span>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
              >
                <i class="fas fa-users fa-fw me-3"></i>
                <span>Users</span>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
              >
                <i class="fas fa-money-bill fa-fw me-3"></i>
                <span>Sales</span>
              </a>
            </div>
          </div>
        </nav>
        <nav
          id="main-navbar"
          class="navbar navbar-expand-lg navbar-light bg-white fixed-top"
        >
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
            <a class="navbar-brand" href="#">
              <img
                src="/icon.png"
                height="25"
                alt="Logo"
                loading="lazy"
              />
            </a>
            <form class="d-none d-md-flex input-group w-auto my-auto">
              <input
                autocomplete="off"
                type="search"
                class="form-control rounded"
                placeholder='Search (ctrl + "/" to focus)'
                style={{ minWidth: "225px" }}
              />
              <span class="input-group-text border-0">
                <i class="fas fa-search"></i>
              </span>
            </form>
            <ul class="navbar-nav ms-auto d-flex flex-row">
              <li class="nav-item dropdown">
                <a
                  class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fas fa-bell"></i>
                  <span class="badge rounded-pill badge-notification bg-danger">
                    1
                  </span>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Some news
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another news
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
export default SideBar;
