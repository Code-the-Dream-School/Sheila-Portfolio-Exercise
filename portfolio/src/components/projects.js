import React, { Component } from "react";
import ProjectsCard from "./project";
import { Grid } from "react-mdl";
import { Cell } from "react-mdl";
const apiKey = process.env.REACT_APP_AIRTABLE_API_KEY;
const baseId = process.env.REACT_APP_AIRTABLE_BASE_ID;

class Projects extends Component {
  state = {
    projectsData: [],
  };

  componentDidMount() {
    // fetch(`https://api.airtable.com/v0/${baseId}/projects?api_key=${apiKey}`)
    fetch(
      "https://api.airtable.com/v0/appBUD6pPOAObZysX/projects?api_key=keyW345OeMOMvFUZ3"
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.records);
        this.setState({ projectsData: res.records });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { projectsData } = this.state;
    return (
      <Grid>
        {projectsData.map((project) => (
          <Cell col={4} className="cards-set">
            <ProjectsCard {...project.fields} key={project.fields.id} />
          </Cell>
        ))}
      </Grid>
    );
  }
}
export default Projects;
