const defaultDescription = 'Contor Docs & Blog'

const theme = {
  background: '#20232a',
  navExternalLinkIcon: '#6d6d6d',
}

const colors = {
  lighter: '#373940', // light blue
  dark: '#282c34', // dark blue
  brand: '#61dafb', // electric blue
  brandLight: '#bbeffd',
  text: '#1a1a1a', // very dark grey / black substitute
  subtle: '#6d6d6d', // light grey for text
  subtleOnDark: '#999',
  headerBackground: theme.background,
  headerExternalLinkIcon: theme.navExternalLinkIcon,
  footerBackground: theme.background,
  navSectionTitle: '#999',
  footerExternalLinkIcon:  theme.navExternalLinkIcon,
  footerCopyrightText: '#6d6d6d', // light grey for text
  divider: '#ececec', // very light grey
  note: '#ffe564', // yellow
  error: '#ff6464', // yellow
  white: '#ffffff',
  black: '#000000',
}

const SIZES = {
  xsmall: {min: 0, max: 599},
  small: {min: 600, max: 779},
  medium: {min: 780, max: 979},
  large: {min: 980, max: 1279},
  xlarge: {min: 1280, max: 1339},
  xxlarge: {min: 1340, max: Infinity},

  // Sidebar/nav related tweakpoints
  largerSidebar: {min: 1100, max: 1339},
  sidebarFixed: {min: 2000, max: Infinity},
}

type Size = $Keys<typeof SIZES>;

const media = {
  between(smallKey: Size, largeKey: Size, excludeLarge: boolean = false) {
    if (excludeLarge) {
      return `@media (min-width: ${SIZES[smallKey]
        .min}px) and (max-width: ${SIZES[largeKey].min - 1}px)`
    } else {
      if (SIZES[largeKey].max === Infinity) {
        return `@media (min-width: ${SIZES[smallKey].min}px)`
      } else {
        return `@media (min-width: ${SIZES[smallKey]
          .min}px) and (max-width: ${SIZES[largeKey].max}px)`
      }
    }
  },

  greaterThan(key: Size) {
    return `@media (min-width: ${SIZES[key].min}px)`
  },

  lessThan(key: Size) {
    return `@media (max-width: ${SIZES[key].min - 1}px)`
  },
}

const fonts = {
  header: {
    fontSize: 60,
    lineHeight: '65px',
    fontWeight: 700,

    [media.lessThan('medium')]: {
      fontSize: 40,
      lineHeight: '45px',
    },
  },
  small: {
    fontSize: 14,
  },
}

export {colors, fonts, media, defaultDescription}
