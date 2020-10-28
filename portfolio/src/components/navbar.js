import React from "react";
import { Link } from "react-router-dom";
import { Layout, Header, Content, Navigation, Drawer } from "react-mdl";

const NavBar = () => {
  return (
    <div style={{ height: "300px", position: "relative" }}>
      <Layout
        style={{
          background:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeJ1udJEBmD8oqY4Ixn3QK2_Zkjp1-jCgZyg&usqp=CAU) center / cover",
        }}
      >
        <Header transparent title="Sheila Hernandez">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Sheila Hernandez">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content />
      </Layout>
    </div>
  );
};

export default NavBar;
