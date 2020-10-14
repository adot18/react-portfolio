import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            August {this.props.startYear} - {this.props.endMonth} December{" "}
            {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>
            <img src="https://www.calfac.org/sites/main/files/imagecache/overview/main-images/SJSU_Seal.svg_.png?1576745746"></img>
          </h4>
        </Cell>
      </Grid>
    );
  }
}

export default Education;
