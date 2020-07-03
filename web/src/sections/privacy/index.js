import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import BaffleText from 'components/baffle-text'
import AnimationContainer from 'components/animation-container'
import ThemeContext from '../../context'
import './styles.scss'

class Services extends React.Component {
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
              <p>Sergi Zamora informs you about its Privacy Policy regarding the treatment and protection of personal data of users and customers that may be collected by browsing or contracting services through the website <strong>sergizamora.com</strong>.</p>
              <p>In this regard, the Holder guarantees compliance with current regulations regarding the protection of personal data, reflected in <strong>Organic Law 3/2018, of December 5, Protection of Personal Data and Guarantee of Digital Rights (LOPD GDD)</strong>. It also complies with Regulation (EU) 2016/679 of the European Parliament and of the Council of April 27, 2016 on the protection of natural persons (GDPR).</p>
              <p>The use of the website implies the acceptance of this <strong>Privacy Policy</strong> as well as the conditions included in the <strong>Legal Notice</strong>.</p>
              <h2>Principles applied in data processing</h2>
              <p>In the treatment of your personal data, the Holder will apply the following principles that conform to the requirements of the new European data protection regulation:</p>
              <ul>
                <li><strong>Principle of legality, loyalty and transparency:</strong> The Holder will always require the consent for the processing of your personal data that can be for one or several specific purposes on which he will inform you previously with absolute transparency.</li>
                <li><strong>Principle of data minimization:</strong> The Holder will request only the data strictly necessary for the purpose or the purposes that request them.</li>
                <li><strong>Principle of limitation of the storage period:</strong> The data will be kept for the time strictly necessary for the purpose or purposes of the treatment.   The Holder will inform you of the corresponding conservation period according to the purpose. In the case of subscriptions, the Holder will periodically review the lists and delete those inactive records for a considerable time.</li>
                <li><strong>Principle of integrity and confidentiality:</strong> Your data will be treated in such a way that your security, confidentiality and integrity is guaranteed. You should know that the Owner takes the necessary precautions to prevent unauthorized access or improper use of their users’ data by third parties.</li>
              </ul>
              <h2>Obtaining personal data</h2>
              <p>To navigate through <strong>sergizamora.com</strong> you do not need to provide any personal information. The cases in which you do provide your personal data are the following:</p>

              <p>By contacting through the contact forms or sending an email.</p>
              <p>By signing up for a subscription form or a newsletter.</p>
              <h2>Your rights</h2>
              <p>The Holder informs you that about your personal data you have the right to:</p>
              <ul>
                <li>Request access to stored data.</li>
                <li>Request a rectification or cancellation.</li>
                <li>Request the limitation of your treatment.</li>
                <li>Oppose the treatment.</li>
                <li>Request the portability of your data.</li>
              </ul>
              <p>The exercise of these rights is personal and therefore must be exercised directly by the interested party, requesting it directly from the Holder, which means that any client, subscriber or collaborator who has provided their data at any time can contact the Holder and request information on data that you have stored and how you have obtained them, request the rectification of them, request the portability of your personal data, oppose the processing, limit its use or request the cancellation of that data in the Holder’s files.</p>

              <p>To exercise your rights of access, rectification, cancellation, portability and opposition you must send an email to <strong>sergi.zamora.95@gmail.com</strong> along with the valid proof in law as a photocopy of the D.N.I. or the equivalent.</p>

              <p>You have the right to effective judicial protection and to submit a claim to the control authority, in this case, the Spanish Agency for Data Protection, if you consider that the processing of personal data that concerns you violates the Regulation.</p>

              <h2>Purpose of the processing of personal data</h2>
              <p>When you connect to the website to send an email to the Holder, you subscribe to their newsletter or make a contract, you are providing personal information for which the Holder is responsible. This information may include personal data such as your IP address, first and last name, physical address, email address, telephone number, and other information. By providing this information, you give your consent for your information to be collected, used, managed and stored by superadmin.es, only as described in the Legal Notice and in this Privacy Policy.</p>

              <p>The personal data and the purpose of the treatment by the Holder is different according to the information capture system:</p>
              <ul>
                <li><strong>Contact forms:</strong> The Holder requests personal data among which may be: Name and surname, email address, telephone number and address of your website in order to answer your questions.   For example, the Holder uses this information to respond to your messages, doubts, complaints, comments or concerns that you may have regarding the information included in the Website, the services provided through the Website, the treatment of your personal data, issues related to the legal texts included in the website, as well as any other questions you may have and that are not subject to the conditions of the website or the contract.</li>
              </ul>
              <p>There are other purposes for which the Holder processes your personal data:</p>
              <ul>
                <li>To ensure compliance with the conditions set forth in the Legal Notice and in the applicable law. This may include the development of tools and algorithms that help this website to guarantee the confidentiality of the personal data it collects.</li>
                <li>To support and improve the services offered by this website.</li>
                <li>To analyze navigation. The Owner collects other non-identifying data that are obtained through the use of cookies that are downloaded to your computer when you browse the website whose characteristics and purpose are detailed in the Cookies Policy.</li>
                <li>To manage social networks. The Holder has a presence in social networks. If you become a follower in the Holder’s social networks, the processing of personal data will be governed by this section, as well as by those conditions of use, privacy policies and access regulations that belong to the social network that proceed in each case and that You have previously accepted.</li>
              </ul>
              <p>You can check the privacy policies of the main social networks in these links:</p>

              <p>The Holder will treat your personal data in order to correctly manage their presence in the social network, inform you of their activities, products or services, as well as for any other purpose that the regulations of social networks allow.</p>

              <p>In no case will the Holder use the profiles of followers in social networks to send advertising individually.</p>

              <h2>Security of personal data</h2>
              <p>To protect your personal data, the Owner takes all reasonable precautions and follows the best practices of the industry to prevent their loss, misuse, improper access, disclosure, alteration or destruction thereof.</p>

              <h2>Content of other websites</h2>
              <p>The pages of this website may include embedded content (for example, videos, images, articles, etc.). The embedded content of other websites behaves in exactly the same way as if you had visited the other website.</p>

              <p>These websites may collect data about you, use cookies, embed an additional third-party tracking code, and monitor your interaction using this code.</p>

              <h2>Cookies policy</h2>
              <p>For this website to work properly you need to use cookies, which is information that is stored in your web browser.</p>

              <p>On the Cookies Policy page you can consult all the information related to the collection policy, the purpose and the treatment of cookies.</p>

              <h2>Legitimation for data processing</h2>
              <p>The legal basis for the processing of your data is: consent.</p>

              <p>To contact the Holder, subscribe to a newsletter or make comments on this website you must accept this Privacy Policy.</p>

              <h2>Categories of personal data</h2>
              <p>The categories of personal data processed by the Holder are:</p>
              <ul>
                <li>Identification data.</li>
              </ul>
              <h2>Retention of personal data</h2>
              <p>The personal data you provide to the Holder will be kept until you request its deletion.</p>

              <h2>Recipients of personal data</h2>
              <ul>
                <li><strong>Google Analytics</strong> is a web analytics service provided by Google, Inc., a Delaware company whose main office is at 1600 Amphitheater Parkway, Mountain View (California), CA 94043, United States (“Google”). You will find more information at: https://analytics.google.com   Google Analytics uses «cookies», which are text files located on your computer, to help the Holder to analyze the use made by users of the website. The information generated by the cookie about the use of the website (including your IP address) will be directly transmitted and archived by Google on servers in the United States.</li>
              </ul>
              <p>You can also see a list of the types of cookies used by Google and its collaborators and all the information related to their use of advertising cookies.</p>

              <h2>Web navegation</h2>
              <p>When browsing sergizamora.com you can collect non-identifying data, which may include, IP address, geolocation, a record of how they are used the services and sites, browsing habits and other data that cannot be used to identify you.</p>

              <p>The website uses the following third-party analysis services:</p>
              <ul>
                <li>Google Analytics</li>
              </ul>
              <p>The Owner uses the information obtained to obtain statistical data, analyze trends, administer the site, study navigation patterns and to gather demographic information.</p>

              <h2>Accuracy and veracity of personal data</h2>
              <p>You agree that the information provided to the Holder is correct, complete, accurate and current, as well as keeping them duly updated.</p>

              <p>As a User of the Website you are solely responsible for the veracity and correctness of the data you send to the site, exonerating the Owner from any responsibility in this regard.</p>

              <h2>Acceptance and consent</h2>
              <p>As a User of the Website you declare to have been informed of the conditions on protection of personal data, you accept and consent to the treatment of them by the Owner in the manner and for the purposes indicated in this Privacy Policy.</p>

              <h2>Revocability</h2>
              <p>To exercise your rights of access, rectification, cancellation, portability and opposition you must send an email to <strong>sergi.zamora.95@gmail.com</strong> along with the valid proof in law as a photocopy of the D.N.I. or the equivalent.</p>

              <p>The exercise of your rights does not include any data that the Holder is obliged to keep for administrative, legal or security purposes.</p>

              <h2>Changes to the Privacy Policy</h2>
              <p>The Holder reserves the right to modify this Privacy Policy to adapt it to legislative or jurisprudential developments, as well as to industry practices.</p>

              <p>These policies will be in effect until they are modified by others duly published.</p>
            </AnimationContainer>
          </Col>

        </Row >
      )
    }
  }

}

export default Services
