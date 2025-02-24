import { Platform } from 'react-native'

const theme = {
  colors: {
    appBarBackground: '#24292e',
    mainBackground: '#E1E5E7',
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    onPrimary: '#fff'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 18
  },
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System'
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700'
  }
}

export default theme