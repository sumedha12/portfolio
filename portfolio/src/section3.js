import 'bootstrap/dist/css/bootstrap.min.css';
import './style/skillbar.css';
import sumedha from './sumedha.jpg';
function Section3() {
  return (
       <div class ='section3'> 
       <div class = 'subsection3_1'>
           My Skills
       </div>
      <div class='subsection3_2'> 
      <div class ='boxes'> 
        <div class="box">
        <img src={sumedha}/>        
        </div>
        <div class = 'box2'>
        I'm a Front-End Developer for ChowNow in Los Angeles, CA.
I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
        </div>
        </div>
        <div class="wrapper">
            <div class="skills-bar">
                <div class="bar">
                    <div class="info">
                        <span>HTML/CSS</span>
                    </div>
                    <div class="progress-line html"><span></span></div>
                    </div>
                <div class="bar">
                    <div class="info">
                    <span>JAVASCRIPT</span>
                </div>
                <div class="progress-line javascript"><span></span></div>
                </div>
                <div class="bar">
                    <div class="info">
                    <span>PHP</span>
                </div>
                <div class="progress-line php"><span></span></div>
                </div>
                <div class="bar">
                    <div class="info">
                    <span>PYTHON</span>
                </div>
                <div class="progress-line python"><span></span></div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>MYSQL</span>
                </div>
                <div class="progress-line mysql"><span></span></div>
                </div>
            </div>
            </div>  
        </div>    
    </div>        
      );
}
export default Section3