import React from 'react'
import Particles from 'react-particles-js';
import Progress from 'components/progress'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faYoutube, faCodepen } from '@fortawesome/free-brands-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'

class Hero extends React.Component {

    static contextType = ThemeContext

    render() {
        return (
            <section id={`${this.props.id}`} className="about" style={{ height: this.context.height }}>
                {this.particles()}
                <Row>
                    <Col md={6} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>About Me</h4>
                            </div>
                            <h3>I'm a Front End & Hybrid App Developer</h3>
                            <div className="separator" />
                            <p>I consider myself a very perfectionist person who loves to work using the best technologies to achieve that the users are getting the best user experience using any of the products that I have developed.</p>
                            <p>Because of this, I try to develop each product with great usability and good practices so every people, regardless of their physical condition, can get the best experience.</p>
                            <p>Currently, I am also getting certified in Professional Scrum With UX.</p>
                            <div className="social social_icons">
                                <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://github.com/zamoks95')} />
                                <FontAwesomeIcon icon={faCodepen} className="social_icon" onClick={() => window.open('https://codepen.io/ZaMoks95')} />
                                <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com/in/sergizamora/')} />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="skills">
                        <div className="line-text">
                            <h4>My Skills</h4>
                        </div>
                        <div className="skills-container">
                            <Progress name="React" value={80} delay={1100} />
                            <Progress name="Ionic" value={75} delay={1100} />
                            <Progress name="Angular Js" value={85} delay={1100} />
                            <Progress name="Vue Js" value={55} delay={1100} />
                            <Progress name="CSS" value={100} delay={1100} />
                            <Progress name="Docker" value={65} delay={1100} />
                            <Progress name="PHP" value={75} delay={1100} />
                            <Progress name="MySql" value={65} delay={1100} />
                        </div>
                    </Col>
                </Row>
            </section>
        )
    }

    particles() {
        return (
            <Particles
                className="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": false,
                                "value_area": 5000
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": .5
                        },
                        "size": {
                            "value": 1
                        },
                    },
                    "retina_detect": true
                }} />
        )
    }

}

export default Hero