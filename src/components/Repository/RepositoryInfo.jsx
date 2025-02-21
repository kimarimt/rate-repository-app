import { View, Image, StyleSheet } from 'react-native'
import Text from '../util/Text'
import theme from '../../theme'

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  infoText: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    marginBottom: 5
  },
  body: {
    marginBottom: 10,
    flexWrap: 'wrap'
  },
  languageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    padding: 5
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10
  }
})

const RepositoryInfo = ({ repository }) => (
  <View style={styles.infoContainer}>
    <View>
      <Image
        source={{ uri: repository.ownerAvatarUrl }}
        style={styles.avatarImage}
      />
    </View>
    <View style={styles.infoText}>
      <Text
        fontSize='heading'
        fontWeight='bold'
        style={styles.title}
      >
        {repository.fullName}
      </Text>
      <Text
        color='textSecondary'
        fontSize='body'
        style={styles.body}
      >
        {repository.description}
      </Text>
      <View style={styles.languageContainer}>
        <Text
          color='onPrimary'
          fontWeight='bold'
        >
          {repository.language}
        </Text>
      </View>
    </View>
  </View>
)

export default RepositoryInfo