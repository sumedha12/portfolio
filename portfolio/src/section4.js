import './style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Section4() {
    return (
      <div className="section4">
          <p>Contact Me!</p>
          <form>
            <div class="form-group">
            <label for="email" class='label email'>Email address</label>
            <input type="email" class="form-control email" id="email" placeholder="Email"/>
            </div>
            <div class="form-group">
            <label for="password" class='label'>Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password"/>
            </div>

            <div class="form-group">
                <label for="Textarea" class='label'>Textarea</label>
                <textarea class="form-control" id="Textarea1" placeholder="Message" rows="3"></textarea>
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-outline-primary">Submit</button>
            </div>
            </form>
            </div> 
    );
  }
  export default Section4