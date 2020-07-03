import React from 'react'
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
var scrollToElement = require('scroll-to-element')

class NavigationPrivacy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
        this.sections = [
            {
                name: "Home"
            },
        ]
    }

    navScroll(id, v) {
        
        this.setState({show: false})
        const el = document.getElementById(id)
        scrollToElement(el, {
            offset: 0,
            ease: 'in-out-expo',
            duration: 2000
          }).on('end', () => {
            this.props.change(v)
        });
    }


    render() {
        return(
            <div>
                <div className="opener">
                    <FontAwesomeIcon icon={faBars} className="closeNav" onClick={() => this.setState({show: true})} />
                </div>
                <div className={`navigation ${this.state.show ? "active" : ""}`}>
                    <FontAwesomeIcon icon={faTimes} className="closeNav" onClick={() => this.setState({show: false})} />
                    <div className="logo">
                        <img src="img/logo.png" alt="logo"/>
                    </div>
                    <div className="links">
                        <ul>
                            {this.items()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    items() {
        return this.sections.map((value, index) => {
            return (
                <li key={index}>
                    <Link to="/">{value.name}</Link>
                </li>
            )
        })
    }
}
export default NavigationPrivacy