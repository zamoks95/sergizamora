import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import LayoutPortfolio from 'components/LayoutPortfolio'
import Spinner from 'components/spinner'
import PortfolioRmkbl from 'sections/portfolioContent/PortfolioRmkbl'
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button"; //Add this line Here
import CookieConsent from "react-cookie-consent";

class RkmblPage extends React.Component {

  render() {
    const { site } = this.props.data
    return (
      <>
        <div>
          <Helmet>
            <title>{site.meta.title} | Remarkable</title>
            <meta name="description" content={site.meta.description} />
          </Helmet>
          <LayoutPortfolio>
            <PortfolioRmkbl id="privacy" />
          </LayoutPortfolio>
          <Spinner duration={250} />
        </div>
        <ScrollUpButton style={{ backgroundColor: "black", borderRadius: "2px" }} />
        <CookieConsent
          location="bottom"
          buttonText="<span>Sure man!!</span>"
          cookieName="SergiZamoraCookieConsent"
          className="CookieConsent"
          expires={150}
          acceptOnScroll={true}
          acceptOnScrollPercentage={10}
          buttonClasses={"buttonCookieConsent"}
          disableButtonStyles={true}
          contentClasses={"contentCookieConsent"}
        >
          This website uses cookies to improve the user experience. If you continue browsing, we assume that you accept our <Link to="privacy">Privacy Policy</Link>
        </CookieConsent>
      </>
    )
  }
}

export default RkmblPage

export const pageQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`
