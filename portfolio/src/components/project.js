import React from "react";

import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

const ProjectsCard = ({ title, pictures, description, links }) => {
  console.log(pictures);
  return (
    <Card shadow={10} style={{ minWidth: "450", margin: "auto" }}>
      <CardTitle
        style={{
          color: "	#00FFFF",
          height: "176px",

          background: `url(${pictures && pictures[0].url})`,
        }}
      >
        {title}
      </CardTitle>
      <CardText>{description}</CardText>
      <CardActions border>
        <Button colored>{links}</Button>
      </CardActions>
      <CardMenu style={{ color: "#000" }}>
        <IconButton name="share" />
      </CardMenu>
    </Card>
  );
};
export default ProjectsCard;
