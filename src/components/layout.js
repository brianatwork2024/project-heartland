import * as React from "react"
import { Link } from "gatsby"
import * as layoutStyles from './layout.module.css'
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ pageTitle, pageHeading, children }) => {
    return (
        <main className={layoutStyles.container}>
            <title>{pageTitle}</title>            
            <nav>
                <div className={layoutStyles.navLogo}>
                    <Link to="/"><StaticImage src="../images/logo-heartland.png"></StaticImage></Link>
                </div>
                <ul className={layoutStyles.navLinks}>
                    <li className={layoutStyles.navLinkItem}><Link to="/" className={[layoutStyles.navLinkText, layoutStyles.textColorBlack].join(" ")}>Home</Link></li>
                    <li className={layoutStyles.navLinkItem}><Link to="/services" className={[layoutStyles.navLinkText, layoutStyles.textColorBlack].join(" ")}>Services</Link></li>
                    <li className={layoutStyles.navLinkItem}><Link to="/about" className={[layoutStyles.navLinkText, layoutStyles.textColorBlack].join(" ")}>About</Link></li>
                    <li className={layoutStyles.navLinkItem}><Link to="/contact" className={[layoutStyles.navLinkText, layoutStyles.textColorBlack].join(" ")}>Contact</Link></li>
                    <li className={layoutStyles.navLinkItem}><Link to="/" className={[layoutStyles.navLinkButton, layoutStyles.textColorWhite, layoutStyles.backgroundBlue].join(" ")}>(905)507-8785</Link></li>
                    <li className={layoutStyles.navLinkItem}><Link to="/" className={[layoutStyles.navLinkButton, layoutStyles.textColorWhite, layoutStyles.backgroundGreen].join(" ")}>Book a Visit</Link></li>
                </ul>
            </nav>
            <h1 className={layoutStyles.heading}>{pageHeading}</h1>
            {children}
        </main>
    )
}

export default Layout