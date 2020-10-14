import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={6}>
            <h2 style={{}}>Alex Ong</h2>
            <h4 style={{ color: "grey" }}>CS Student at SJSU</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Hi there! My name is Alex Ong and I am currently a Sophomore at
              studying SJSU studying Computer Science! If there is one word that
              I would use to describe myself, I would say I am a self-starter. I
              am someone who embraces learning new technologies, impacting
              diverse communities, and utilizing my problem-solving wits and
              persistence in order to accomplish any task or project I have
              started. If I am not creating something, you'll usually find me
              analyzing either English Premier League soccer games or League of
              Legends matches.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Where I'm Located</h5>
            <p>San Mateo County, California</p>
            <h5>Phone</h5>
            <p>(415) 525-9886</p>
            <h5>Email</h5>
            <p>ongalex888@gmail.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={6}>
            <h2>Education</h2>
            <Education
              startYear={2019}
              endYear={2022}
              schoolName={"San Jose State University"}
            />
            <hr style={{ borderTop: "3px solid #833fb2" }} />
            <h2>Experience</h2>
            <Experience
              description={"Machine Learning Research Assistant"}
              startMonth={"June"}
              startYear={2020}
              endMonth={"Present"}
              endYear={" "}
              href={
                "https://www.calfac.org/sites/main/files/imagecache/overview/main-images/SJSU_Seal.svg_.png?1576745746"
              }
              jobName="Second Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <Experience
              description={"Software Engineer Intern"}
              startMonth={"June"}
              endMonth={"October"}
              startYear={2020}
              endYear={2020}
              href={"https://armadaaero.com/images/ArmadaAero_Logo.png"}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <hr style={{ borderTop: "3px solid #833fb2" }} />
            <h2>Skills</h2>
            <div className="devicon">
              <a>
                <i class="devicon-java-plain-wordmark colored"></i>
              </a>

              <a>
                <i class="devicon-python-plain-wordmark"></i>
              </a>
              <a>
                <i class="devicon-html5-plain colored"></i>
              </a>
              <a>
                <i class="devicon-css3-plain-wordmark colored"></i>
              </a>
              <a>
                <i class="devicon-react-original-wordmark"></i>
              </a>
              <a>
                <i class="devicon-git-plain-wordmark"></i>
              </a>
              <a>
                <i class="devicon-nodejs-plain-wordmark"></i>
              </a>
            </div>
            <div className="devicon">
              <a>
                <i class="devicon-javascript-plain"></i>
              </a>
              <a>
                <i class="devicon-linux-plain colored"></i>
              </a>

              <a>
                <i class="devicon-bootstrap-plain colored"></i>
              </a>
              <a>
                <i class="devicon-cplusplus-plain colored"></i>
              </a>
              <a>
                <i class="devicon-amazonwebservices-plain-wordmark"></i>
              </a>
              <a>
                <i class="devicon-visualstudio-plain"></i>
              </a>
              <a>
                <i class="devicon-typescript-plain"></i>
              </a>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
