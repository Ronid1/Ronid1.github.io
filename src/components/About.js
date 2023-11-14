import Social from "./Social";
import memoji from "../static/memoji.png";
import { aboutMe } from "../data/aboutData";

function About(props) {
    return (
        <div class="section">
            <h1>Who I am</h1>
            <div class="container container-tight text-center">
                <div class="row align-items-center">
                    <div class="col-md-8">
                        <br />
                        <p>{aboutMe}</p>
                        <Social />
                    </div>
                    <div class="col-md-4">
                        <img src={memoji} class="img-sm" alt="my_emoji" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
