import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import BaffleText from 'components/baffle-text'
import AnimationContainer from 'components/animation-container'
import ThemeContext from '../../context'
import './styles.scss'

class PortfolioRmkbl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
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
        className="privacy"
      >
        <Row
          className="top"
        >
          <div className="content">
            <Col md={12}>
              <div className="line-text">
                <h4>Privacy</h4>
              </div>
              <div className="heading">
                <h1>
                  <BaffleText
                    text="Terms and policy"
                    revealDuration={500}
                    revealDelay={500}
                    parentMethod={this.show}
                    callMethodTime={1100}
                  />
                </h1>
              </div>
              <div className="services_container">
                <Container>{this.services()}</Container>
              </div>
            </Col>
          </div>
        </Row>
      </section >
    )
  }

  services() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <Row>
          <Col className="service">
            <AnimationContainer delay={200} animation="fadeInLeft fast">
              
              <p>These policies will be in effect until they are modified by others duly published.</p>
            </AnimationContainer>
          </Col>

        </Row >
      )
    }
  }

}

export default PortfolioRmkbl
