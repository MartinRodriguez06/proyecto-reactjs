import './navbar.css'
export const Navbar = () =>{
    return(
        <header class="container">
        <div class="row">

            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">LibreriaOnline</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link" href="pages/libros.html">Libros</a>
                      </li>
                      
                      <li class="nav-item">
                        <a class="nav-link" href="pages/mibiblioteca.html">Mi biblioteca</a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link" href="pages/contacto.html">Contacto</a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link" href="pages/ayuda.html">Ayuda</a>
                      </li>
                      <nav>
                        <nav><img src="../img/carrito.png" alt="" /></nav>
                      </nav>

                    </ul>
                  </div>
                </div>
              </nav>

        </div>
    </header>

    )
}