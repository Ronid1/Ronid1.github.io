import Social from "./Social";
import memoji from "../static/memoji.png"

function About(props) {
  const about = "I'm a Tel Aviv based Full-Stack Software Engineer. I’m passionate about good design; I believe code should be clean, scalable and easy to read and apps should be intuitive and easy to use. I view software development as the ultimate mesh between my creative and technical skills and I am eager to learn and grow in this field."

    return (
      <div class="section">
        <h1>Who I am</h1>
        <div class="container container-tight text-center">
          <div class="row align-items-center">
            <div class="col-md-8">
              <br />
              <p>{about}</p>
              <Social />
            </div>
            <div class="col-md-4">
              <img src={memoji} class="img-sm"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;