import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 15,
  },
  loginContainer: {
    width: 375,
    height: 90,
    marginTop: 106,
  },
  container: {
    alignItems: 'center',
  },
  h1: {
    color: '#222222',
    fontSize: 34,
   fontFamily: 'Roboto-Bold',
    marginVertical: 10,
    alignItems: 'flex-start',
  },
  inputArea: {
    width: '100%',
    height: 64,
    paddingTop: 20,
  },
  labelContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  },
  labelText: {
    color: '#9B9B9B',
    fontSize: 13,
    paddingTop: 10
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FFFFFF',
    fontSize: 15,
    padding: 10,
    height: 70,
  },
  aditionals: {
    width: '100%',
    marginTop: 20
  },
  aditionalsSign: {
    width: '100%',
    marginTop: 50
  },
  forgotBtnArea: {
    paddingBottom: 30,
    alignSelf: 'flex-end',
  },
  forgotBtnText: {
    fontSize: 14,
    fontFamily: 'Roboto-Bold',
    color: '#222222',
  },
  button: {
    backgroundColor: '#DB3022',
    width: '100%',
    padding: 10,
    borderRadius: 50,
    height: 48,
  },
  buttonText: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontSize: 14,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
   
    alignSelf: 'flex-start',
  },
  errorLogin: {
    color: 'red',
    fontSize: 14,
    paddingBottom: 10,
    alignSelf: 'flex-start',
  },
  inputError: {
    borderColor: 'red', 
    borderWidth: 1,   
  }
});

export default styles;
