import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import BaffleText from 'components/baffle-text'
import AnimationContainer from 'components/animation-container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faAngular, faAws } from '@fortawesome/free-brands-svg-icons'
import {
  faPencilRuler,
  faServer,
  faRobot,
  faSmileBeam,
  faCoffee,
  faTrophy,
  faCode,
} from '@fortawesome/free-solid-svg-icons'
import Counter from 'components/counter'
import ThemeContext from '../../context'
import './styles.scss'

class Privacy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    this.show = this.show.bind(this)
  }

  static contextType = ThemeContext

  show() {
    this.setState({ show: true })
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
              this.context.height !== 'auto'
                ? this.context.height * 0.8
                : 'inherit',
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
                    this.context.height !== 'auto'
                      ? this.context.height * 0.6
                      : 'inherit',
                }}
              >
                <Container>{this.services()}</Container>
              </div>
            </Col>
          </div>
        </Row>
        <Row className="bottom">{this.counters()}</Row>
      </section>
    )
  }

  services() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <Row>
          <Col md={4} className="service">
            <AnimationContainer delay={200} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faReact} />
              </div>
              <h4>Front-end React</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
                In et sem libero. Integer pretium, tellus eu pellentesque
                tristique, ex libero maximus elit, mollis tristique urna eros
                non tellus
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={400} animation="fadeInDown fast">
              <div className="icon">
                <FontAwesomeIcon icon={faAngular} />
              </div>
              <h4>Angular Web App</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
                In et sem libero. Integer pretium, tellus eu pellentesque
                tristique, ex libero maximus elit, mollis tristique urna eros
                non tellus
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={600} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faAws} />
              </div>
              <h4>AWS Management</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
                In et sem libero. Integer pretium, tellus eu pellentesque
                tristique, ex libero maximus elit, mollis tristique urna eros
                non tellus
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
                In et sem libero. Integer pretium, tellus eu pellentesque
                tristique, ex libero maximus elit, mollis tristique urna eros
                non tellus
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={1000} animation="fadeInUp fast">
              <div className="icon">
                <FontAwesomeIcon icon={faServer} className="solid" />
              </div>
              <h4>Linux Server Management</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
                In et sem libero. Integer pretium, tellus eu pellentesque
                tristique, ex libero maximus elit, mollis tristique urna eros
                non tellus
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={1200} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faRobot} className="solid" />
              </div>
              <h4>Artifical Intelligence</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
                In et sem libero. Integer pretium, tellus eu pellentesque
                tristique, ex libero maximus elit, mollis tristique urna eros
                non tellus
              </p>
            </AnimationContainer>
          </Col>
        </Row>
      )
    }
  }

  counters() {
    /* Date Difference Manager - Start */
    function parseDate(str) {
      var mdy = str.split('/');
      return new Date(mdy[2], mdy[0] - 1, mdy[1]);
    }

    function datediff(first, second) {
      return Math.round((second - first) / (1000 * 60 * 60 * 24));
    }
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(new Date().getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = new Date().getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    /* Date Difference Manager - End */

    if (this.state.show || this.context.height === 'auto') {
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
                text="Projectes Completed"
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
      )
    }
  }
}

export default Privacy
