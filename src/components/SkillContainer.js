import style from "./styles/SkillContainer.module.css";
import image from "../static/source-code-icone.png";

function SkillContainer(props) {
  const { name, description } = props;

  return (
    <div class="col-md">
      <div class="container-md">
        <img className={style.min} src={image} />
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SkillContainer;
