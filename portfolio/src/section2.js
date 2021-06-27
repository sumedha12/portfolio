import './style/style.css';
import img1 from './img1.jpg';
import proj1 from './proj1.png';
import proj2 from './proj2.png';
import proj3 from './proj3.png';
import proj4 from './proj4.png';
import proj6 from './proj6.png';
import proj7 from './proj7.png';

import 'bootstrap/dist/css/bootstrap.min.css';
function Section2() {
    return (
      <div className="section2">
        <div class ='subsection2_1'>
        <button type="button" class="btn  btn-lg one">All</button>
        <button type="button" class="btn  btn-lg two">React JS</button>
        <button type="button" class="btn  btn-lg three">PHP</button>

        </div>
        <div class ='subsection2_2'>
        <div class ='card1'>
        <img src={proj2} class ='image'alt="jj" />
        <div class="details">
      <div class="center">
        <h1>DialMentor</h1>
        <p>DialMentor is a peer to peer paid mentoring site that allows mentors to get paid for sharing their college admission experience.</p>
        <a href="#">VISIT</a>
    </div></div></div>

        <div class ='card2'>
        <img src={proj1} class ='image'alt="jj" />
        <div class="details">
      <div class="center">
        <h1>Landing Page</h1>
        <p>Landing page designed for one of my clients</p>
        <a href="#">Visit</a>
    </div></div>
        </div>
        
        <div class ='card3'>
        <img src={proj7} class ='image'alt="jj" />
        <div class="details">
      <div class="center">
        <h1>100TechJobs</h1>
        <p>100TechJobs is a tech job recruitment site that aggregated jobs from top sites.</p>
        <a href="#">Visit</a>
      </div></div>
        </div>        
        </div>
        <div class ='subsection2_3'>
        <div class ='card4'>
        <img src={proj4} class ='image'alt="jj" />
        <div class="details">
      <div class="center">
        <h1>Login Template</h1>
        <p>Login template designed for a client</p>
        <a href="#">Visit</a>
    </div></div>
        </div>
        <div class ='card5'>
        <img src={proj6} class ='image'alt="jj" />
        <div class="details">
      <div class="center">
        <h1>DialMentor's Mentor Profiles</h1>
        <p>DialMentor's mentor profiles page</p>
        <a href="#">Visit</a>
    </div></div>
        </div>
        <div class ='card6'>        
        <img src={proj3} class ='image'alt="jj" />
        <div class="details">
      <div class="center">
        <h1>100TechJobs Home Page</h1>
        <p>100TechJobs's Home Page</p>
        <a href="#">Visit</a>
    </div></div>
        </div>
        </div>
        </div>
    );
  }
  export default Section2