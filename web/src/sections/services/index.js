import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import BaffleText from "components/baffle-text";
import AnimationContainer from "components/animation-container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faPencilRuler,
  faSmileBeam,
  faCoffee,
  faTrophy,
  faCode,
  faTabletAlt,
  faSignLanguage,
  faFireAlt,
  faDragon,
} from "@fortawesome/free-solid-svg-icons";
import Counter from "components/counter";
import ThemeContext from "../../context";
import "./styles.scss";

class Privacy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.show = this.show.bind(this);
  }

  static contextType = ThemeContext;

  show() {
    this.setState({ show: true });
  }

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="services"
        style={{ height: this.context.height }}
      >
        <Row
          className="top"
          style={{
            maxHeight:
              this.context.height !== "auto"
                ? this.context.height * 0.8
                : "inherit",
          }}
        >
          <div className="content">
            <Col md={12}>
              <div className="line-text">
                <h4>Services</h4>
              </div>
              <div className="heading">
                <BaffleText
                  text="What I Do"
                  revealDuration={500}
                  revealDelay={500}
                  parentMethod={this.show}
                  callMethodTime={1100}
                />
              </div>
              <div
                className="services_container"
                style={{
                  minHeight:
                    this.context.height !== "auto"
                      ? this.context.height * 0.6
                      : "inherit",
                }}
              >
                <Container>{this.services()}</Container>
              </div>
            </Col>
          </div>
        </Row>
        <Row className="bottom">{this.counters()}</Row>
      </section>
    );
  }

  services() {
    if (this.state.show || this.context.height === "auto") {
      return (
        <Row>
          <Col md={4} className="service">
            <AnimationContainer delay={200} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faReact} />
              </div>
              <h4>Front-end React</h4>
              <p>
                I like to develop using react due to its modularity,
                scalability, and optimization. I also think it one of the best
                frontend frameworks due to its large number of plugins and
                community it has.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={400} animation="fadeInDown fast">
              <div className="icon">
                <FontAwesomeIcon icon={faTabletAlt} />
              </div>
              <h4>Hybrid Apps</h4>
              <p>
                I think that you don't need to develop the same app for every
                operating system.
                <br />
                You can get faster results by developing hybrid apps.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={600} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faSignLanguage} />
              </div>
              <h4>Accessibility Products</h4>
              <p>
                One of the points that I'm most concerned about when developing
                a new product Is to take an important focus on usability and
                accessibility because I want that every person has a good
                experience using any of my products.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={800} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faPencilRuler} className="solid" />
              </div>
              <h4>UI/UX Design</h4>
              <p>
                A proper UI & UX are a MUST DO in every one of my projects.
                <br />
                If a client isn't satisfied with how the product works or has
                problems using it, I don't feel comfortable publishing it
                because it means that my solution isn't good enough.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={1000} animation="fadeInUp fast">
              <div className="icon">
                <FontAwesomeIcon icon={faFireAlt} className="solid" />
              </div>
              <h4>Hot Stuff</h4>
              <p>
                I try to develop and create personal and unique products.
                <br />
                To achieve that, I am learning new methodologies and frameworks
                every day.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={1200} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faDragon} className="solid" />
              </div>
              <h4>Videogames</h4>
              <p>
                Every product has its own history, as well as me.
                <br />I try to create products that make me experience that I
                can have full interaction with it, as well as videogames do.
              </p>
            </AnimationContainer>
          </Col>
        </Row>
      );
    }
  }

  counters() {
    /* Date Difference Manager - Start */
    function parseDate(str) {
      var mdy = str.split("/");
      return new Date(mdy[2], mdy[0] - 1, mdy[1]);
    }

    function datediff(first, second) {
      return Math.round((second - first) / (1000 * 60 * 60 * 24));
    }
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(new Date().getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = new Date().getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
    /* Date Difference Manager - End */

    if (this.state.show || this.context.height === "auto") {
      return (
        <Container>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faSmileBeam}
                value={15}
                text="Happy Clients"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faCoffee}
                value={datediff(parseDate("09/22/2014"), parseDate(today)) * 7}
                text="Cups of Coffee"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faTrophy}
                value={16}
                text="Projects Completed"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faCode}
                value={datediff(parseDate("09/22/2014"), parseDate(today))}
                text="Days Developing"
                symbol=""
                duration={3}
              />
            </AnimationContainer>
          </Col>
        </Container>
      );
    }
  }
}

export default Privacy;
