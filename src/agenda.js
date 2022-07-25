function App() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <p class="text">
                      UniFind
                    </p>

                    <li><a href="home">Home</a></li>
                    <li><a href="universities">Universities</a></li>
                    <li><a href="agenda">Agenda</a></li>
                    <li><a href='conatctUs'>Contact Us</a></li>
                </ul>
  
                <div class="rightNav">
                    <input type="text" name="search" id="search" />
                    <button class="btn btn-sm">Search</button>
                </div>
            </nav>
        </div>
    )
}
  
export default App