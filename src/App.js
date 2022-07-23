import React from 'react';
import './App.css';
import logo from './logo.svg'
  
function App() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                      <img src="logo.svg"/>
                    </div>
                    <li><a href="#courses">Courses</a></li>
                    <li><a href="#tutorials">Tutorials</a></li>
                    <li><a href="#jobs">Jobs</a></li>
                    <li><a href='#student'>Student</a></li>
                </ul>
  
                <div class="rightNav">
                    <input type="text" name="search" id="search" />
                    <button class="btn btn-sm">Search</button>
                </div>
            </nav>
  
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big"> UniFind
                        </h1>
                        <p class="text-small">
                            Hunting down a relevant job requires 
                            proper techniques for showcasing your 
                            potential to the employer. But with 
                            the advent of COVID-19, it has become 
                            a bit challenging and competitive to 
                            reach out for your dream job. Many 
                            individuals have lost their jobs 
                            during these times, and on the other 
                            hand, freshers are facing difficulties
                            while applying for a new job. But 
                            there is no need for panic, you can 
                            change your ways and streamline things 
                            in a way that you get a proper result.
                        </p>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p className="text-footer">
                    Made by UNIfied
                </p>
            </footer>
        </div>
    )
}
  
export default App