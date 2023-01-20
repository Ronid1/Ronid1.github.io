import ProjectContainer from "./ProjectContainer";

function ProjectRow(props) {

    const {first, second} = props

    return (
    <div class="row align-items-center">
    <ProjectContainer
        name={first?.name}
        tech={first?.tech}
        description={first?.description}
        link={first?.link}
        demoGif={first?.demoGif}
        imageName={first?.imageName}
      />
    { second && <ProjectContainer
                name={second?.name}
                tech={second?.tech}
                description={second?.description}
                link={second?.link}
                demoGif={second?.demoGif}
                imageName={second?.imageName}
            />}
    </div>
  );
}

export default ProjectRow;
