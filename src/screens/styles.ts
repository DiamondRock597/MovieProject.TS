import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  activeIndicator: {
    justifyContent: 'center',
  },
  imageBlock: {
    alignItems: 'center',
    paddingVertical: 5,
  },
  imageCart: {
    borderRadius: 25,
    paddingVertical: 15,
  },
  headerHome: {
    paddingVertical: 20,
    fontSize: 20,
    color: 'black',
    opacity: 0.8,
  },
  container: {
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRatingBlock: {
    flexDirection: 'column',
    marginTop: 20,
    marginLeft: 15,
  },
  textRating: {
    fontSize: 20,
    marginVertical: 15,
    fontWeight: '600',
    fontFamily: 'tahoma',
  },

  name: {
    marginHorizontal: 30,
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 3,
    paddingVertical: 8,
  },
  overview: {
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 30,
    borderBottomWidth: 0.8,
    paddingVertical: 10,
    borderTopWidth: 0.8,
    borderColor: 'gray',
  },
  headerTitle: {
    fontWeight: '700',
  },
  center: {
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: '#898996',
    opacity: 0.9,
    height: '100%',
  },
  image: {
    borderRadius: 20,
  },
});
