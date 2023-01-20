import { useState, useEffect } from "react";

import style from "./styles/ProjectContainer.module.css";
import ProjectImage from "./ProjectImage";

function ProjectContainer(props) {
  const { name, tech, description, link, demoGif, imageName } = props;

  return (
    <div class="col-lg-6">
      <div className="container-md container">
        <div className="row align-items-center">
          <div className="col-sm-4">
            <ProjectImage demoGif={demoGif} image={imageName} />
          </div>

          <div className="col-sm-7">
            <h3>{name}</h3>
            <p className={style.tech}>{tech}</p>
            <p>{description}</p>
            <button onClick={() => (window.location.href = link)}>Code</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectContainer;
