import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import { Layout, Seo } from '../../components';
import * as classes from './Conduct.module.css';

const ConductPage = () => (
  <Layout>
    <Seo title="Code of Conduct" />

    <Container>
      <Row>
        <Col>
          <h1 id="contributor-covenant-code-of-conduct">Code of Conduct</h1>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col>
          <section className={classes.coc}>
            <h2 id="our-pledge">Our Pledge</h2>

            <p>
              {
                'In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to make participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.'
              }
            </p>

            <h2 id="our-standards">Our Standards</h2>

            <p>
              {
                'Examples of behavior that contributes to creating a positive environment include:'
              }
            </p>

            <ul>
              <li>Using welcoming and inclusive language</li>
              <li>Being respectful of differing viewpoints and experiences</li>
              <li>Gracefully accepting constructive criticism</li>
              <li>Focusing on what is best for the community</li>
              <li>Showing empathy towards other community members</li>
            </ul>

            <p>Examples of unacceptable behavior by participants include:</p>

            <ul>
              <li>
                {
                  'The use of sexualized language or imagery and unwelcome sexual attention or advances'
                }
              </li>
              <li>
                {
                  'Trolling, insulting/derogatory comments, and personal or political attacks '
                }
              </li>
              <li>Public or private harassment</li>
              <li>
                {
                  'Publishing others’ private information, such as a physical or electronic address, without explicit permission '
                }
              </li>
              <li>
                {
                  'Other conduct which could reasonably be considered inappropriate in a professional setting'
                }
              </li>
            </ul>

            <h2 id="our-responsibilities">Our Responsibilities</h2>

            <p>
              {
                'Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.'
              }
            </p>

            <p>
              {
                'Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.'
              }
            </p>

            <h2 id="scope">Scope</h2>

            <p>
              {
                'This Code of Conduct applies within all project spaces, and it also applies when an individual is representing the project or its community in public spaces. Examples of representing a project or community include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.'
              }
            </p>

            <h2 id="enforcement">Enforcement</h2>

            <p>
              {
                'Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at '
              }
              <a href="mailto:phil+coc@apisyouwonthate.com">
                phil+coc@apisyouwonthate.com
              </a>
              {
                '. All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident. Further details of specific enforcement policies may be posted separately.'
              }
            </p>

            <p>
              {
                'Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project’s leadership.'
              }
            </p>

            <h2 id="attribution">Attribution</h2>

            <p>
              This Code of Conduct is adapted from the{' '}
              <a
                href="https://www.contributor-covenant.org"
                target="_blank"
                rel="noreferrer noopener"
              >
                Contributor Covenant
              </a>
              , version 1.4, available at{' '}
              <a
                href="https://www.contributor-covenant.org/version/1/4/code-of-conduct"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://www.contributor-covenant.org/version/1/4/code-of-conduct.html
              </a>
              .
            </p>

            <p>
              {
                'For answers to common questions about this code of conduct, see '
              }
              <a
                href="https://www.contributor-covenant.org/faq"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://www.contributor-covenant.org/faq
              </a>
              .
            </p>
          </section>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default ConductPage;
