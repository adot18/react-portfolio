import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h1>Alex's Portfolio</h1>

              <hr />

              <p>B.S. Computer Science | San Jose State University</p>

              <div className="social-links">
                {/* LinkedIn */}
                <ul class="social-icons">
                  <a
                    href="https://www.linkedin.com/in/alex-ong/"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="linkedin"
                  >
                    <i class="fa fa-linkedin"></i>
                  </a>

                  <a
                    href="https://github.com/adot18"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="github"
                  >
                    <i class="fa fa-github-square"></i>
                  </a>

                  <a
                    href="https://drive.google.com/file/d/1BDUMHHlkXsTgU4VvR8nfVzl3_AL-C0hp/view?usp=sharing"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="pdf"
                  >
                    <i class="fa fa-file-pdf-o"></i>
                  </a>

                  <a
                    href="mailto:ongalex888@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="email"
                  >
                    <i class="fa fa-envelope-square"></i>
                  </a>
                </ul>
              </div>
            </div>
            <br></br>
            <p class="text-center leading-relaxed md:m-auto"></p>
          </Cell>
        </Grid>
        <footer class="footer">
          <div class="container-fluid">
            <nav>
              <li id="copyRight">Copyright @ Alex</li>
            </nav>
          </div>
        </footer>
      </div>
    );
  }
}

export default Landing;
