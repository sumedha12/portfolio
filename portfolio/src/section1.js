import './style/style.css';
import img1 from './img1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
function Section1() {
    return (
      <div className="section1">
        <div class='subsection1'>
        <img src={img1} alt="Girl in a jacket" width="200" height="200"/>

        </div>
        <div class='subsection2'>
        <div class='subsection3'>
          Hello, I am Sumedha  </div>
          <div class='subsection4'>
          I'm a front end developer, currently based in Toronto. I work with code. I'm passionate about Javascript, diversity, and books.
          </div>

        </div>
        </div>
    );
  }
  export default Section1