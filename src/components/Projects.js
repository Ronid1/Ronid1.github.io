import ProjectRow from "./ProjectRow";
import { projects } from "../data/projectsData"

function Projects() {

  const rows = projects.reduce((res, val, index) => {
    if (index + 1 && (index + 1) % 2 !== 0) res.push([projects[index], projects[index+1]])
    return res;
  },[])

  return (
    <div class="section section-secondery">
      <h1>Things I've Done</h1>

      {rows.map((row, i) =>
        <ProjectRow
        key = {i}
        first = {row[0]}
        second = {row[1]}
      />
      )}
    </div>
  );
}

export default Projects;
