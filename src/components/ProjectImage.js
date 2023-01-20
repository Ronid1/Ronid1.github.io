import { useState, useEffect } from "react";

import style from "./styles/ProjectImage.module.css";
import screen from "../static/screen.png";
import playBtn from "../static/play_icon.png";
import DemoModal from "./DemoModal";

function ProjectImage(props) {
  const { demoGif, image } = props;
  const defaultImage = "terminal_icon"

  const [demoIsOpen, setDemoIsOpen] = useState(false);
  const [previewImg, setPerviewImg] = useState(`/assets/${defaultImage}.png`);

  useEffect(() => {
    if (demoGif){
      const path = `/assets/${image}.png`
      setPerviewImg(path);
    }
  }, []);

  return (
    <>
      {demoIsOpen && (
        <DemoModal gifName={demoGif} setOpen={setDemoIsOpen} />
      )}

      <div className={style.img_bundle}>
          <img className={style.inside_img} src={previewImg} />
          <img className={style.lg_img} src={screen} />
          {demoGif && (
            <button onClick={() => setDemoIsOpen(true)}>
              <img src={playBtn} />
            </button>
          )}
        </div>
    </>
  );
}

export default ProjectImage;
