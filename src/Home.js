import logo from './logo.png'

function Home() {
    return (
        <div>
          <section class="section">
            <div class="box-main">
                <div class="firstHalf">
                  <img src={logo}/>
                </div> 
            </div>
          <div class="justNav">
            <input type="text" name="search" id="search" />
            <button class="btn btn-sm">Search</button>
          </div> 
          </section> 
        </div>

    )
}

export default Home