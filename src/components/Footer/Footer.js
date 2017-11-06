import React from 'react'

import { colors, media } from '../config'
import NavSectionTitle from '../NavSectionTitle'
import FooterExternalLink from './FooterExternalLink'
import FooterLink from './FooterLink'
import FooterSection from './FooterSection'

// import ossLogoPng from 'images/oss_logo.png'

const Footer = () => (
  <footer
    css={{
      backgroundColor: colors.footerBackground,
      color: colors.white,
      paddingTop: 10,
      paddingBottom: 50,
      zIndex: 1,
    }}>
    <FooterSection>
      <NavSectionTitle>About</NavSectionTitle>
      <FooterLink to="/blog/">Blog</FooterLink>
    </FooterSection>
    <FooterSection>
      <NavSectionTitle>Social</NavSectionTitle>
      <FooterExternalLink
        href="https://twitter.com/LorbusChris"
        target="_blank"
        rel="noopener">
        Twitter
      </FooterExternalLink>
      <FooterExternalLink
        href="https://github.com/contor-cloud/"
        target="_blank"
        rel="noopener">
        GitHub
      </FooterExternalLink>
    </FooterSection>
    <section
      css={{
        padding: 20,
        paddingTop: 40,
        textAlign: 'center',

        [media.greaterThan('medium')]: {
          order: -1,
        },
      }}>
      {/*<a
        href="https://code.facebook.com/projects/"
        target="_blank"
        rel="noopener">
        <img
          alt="Facebook Open Source"
          css={{
            maxWidth: 160,
            height: 'auto',
          }}
          src={ossLogoPng}
        />
      </a>*/}
      <p
        css={{
          color: colors.footerCopyrightText,
          paddingTop: 15,
        }}>
        <span css={{lineHeight: 1.5, paddingBottom: 15}}>
          made with ❤️ for the 🎮<br/>
          by<br/>
          Christian&nbsp;Glombek<br/>
          © 2017
        </span>
      </p>
    </section>
  </footer>
)

export default Footer
