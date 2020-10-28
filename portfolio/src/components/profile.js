import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Profile extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="profile-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h1>Sheila Hernandez</h1>
              <h3>Code The Dream Student</h3>

              <hr />

              <h2>About Me</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <h4>HTML/CSS | Bootstrap | JavaScript | React | RnR |</h4>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Profile;
