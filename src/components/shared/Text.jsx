import { Text as NativeText, StyleSheet } from 'react-native'
import theme from '../../theme'

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorOnPrimary: {
    color: theme.colors.onPrimary
  },
  fontSizeBody: {
    fontSize: theme.fontSizes.body
  },
  fontSizeHeading: {
    fontSize: theme.fontSizes.heading
  },
  fontSizeSubHeading: {
    fontSize: theme.fontSizes.subheading
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold
  }
})

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'onPrimary' && styles.colorOnPrimary,
    fontSize === 'subheading' && styles.fontSizeSubHeading,
    fontSize === 'heading' && styles.fontSizeHeading,
    fontSize === 'body' && styles.fontSizeBody,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ]

  return <NativeText style={textStyle} {...props} />
}

export default Text