import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            <b>{this.props.description}</b>
          </p>

          <p>
            {this.props.startMonth} {this.props.startYear} -{" "}
            {this.props.endMonth} {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>
            <img src={this.props.href} width="200" height="200"></img>
          </h4>
        </Cell>
      </Grid>
    );
  }
}

export default Education;
