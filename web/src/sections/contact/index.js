import React from "react";
import "./styles.scss";
import { Row, Col } from "react-bootstrap";
import AnimationContainer from "components/animation-container";
import BaffleText from "components/baffle-text";
import ThemeContext from "../../context";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      error: false,
      show: false,
    };
    this.show = this.show.bind(this);
  }
  static contextType = ThemeContext;

  show() {
    this.setState({ show: true });
  }

  check(val) {
    if (this.state.error && val === "") {
      return false;
    } else {
      return true;
    }
  }

  submit() {
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.message === ""
    ) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }
  }
  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="contact"
        style={{ height: this.context.height }}
      >
        <Row>
          <Col md={2} className="side">
            <h2>
              <BaffleText
                text="Contact"
                revealDuration={500}
                revealDelay={500}
                parentMethod={this.show}
                callMethodTime={1100}
              />
            </h2>
          </Col>
          <Col md={5} className="form">
            {this.form()}
          </Col>
          <Col md={5} className="map">
            {this.map()}
          </Col>
        </Row>
      </section>
    );
  }

  form() {
    if (this.state.show || this.context.height === "auto") {
      return (
        <AnimationContainer delay={0} animation="fadeInUp fast">
          <div className="form-container">
            <div className="line-text">
              <h4>Get In Touch</h4>
              <AnimationContainer delay={50} animation="fadeInUp fast">
                <p style={{color: 'white'}}>You can contact me through my LinkedIn Profile!</p>
              </AnimationContainer>
              <AnimationContainer delay={250} animation="fadeInUp fast">
                <div className="submit">
                  <button
                    className={`hover-button ${
                      this.state.error ? "error" : ""
                    }`}
                    onClick={() => {
                      var win = window.open('https://www.linkedin.com/in/sergizamora/', "_blank");
                      win.focus();
                    }}
                  >
                    <span>LinkedIn</span>
                  </button>
                </div>
              </AnimationContainer>
            </div>
          </div>
        </AnimationContainer>
      );
    }
  }

  map() {
    if (this.state.show || this.context.height === "auto") {
      return (
        <AnimationContainer
          delay={1000}
          animation="fadeIn fast"
          height={this.context.height}
        >
          <iframe
            title="map"
            width="100%"
            height="100%"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d744.2785938388091!2d1.833348129254124!3d41.73962579940488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4f7fdb694c1d1%3A0xadece8ba2c13a941!2sCarrer%20de%20Pau%20Casals%2C%2023%2C%2008243%20Manresa%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1593374089441!5m2!1ses!2ses"
          />
        </AnimationContainer>
      );
    }
  }
}

export default Contact;
