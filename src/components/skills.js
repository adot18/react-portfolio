import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div style={{ display: "flex" }}>{this.props.img} </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
