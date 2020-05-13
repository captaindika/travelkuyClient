import React, {Component} from 'react';
import {
  Container,
  Header,
  Form,
  Item,
  Label,
  Button,
  CheckBox,
  Body,
  ListItem,
  Text,
  Input
} from 'native-base';
import {View, ScrollView, TouchableOpacity, Alert} from 'react-native';
import Logo from 'react-native-vector-icons/MaterialIcons';
import {setLogin} from '../redux/action/Auth';
import {UserDetail} from '../redux/action/User';
import {connect} from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBox: false,
      showPass: true,
      errorInput: null,
      username: '',
      password: ''
    };
    this.onLogin = (e) => {
      const data = {
        username: this.state.username,
        password: this.state.password
      }
      this.props.setLogin(data).then(async () => {
        if (this.props.data.data.success === true) {
          try {
            await this.props.UserDetail
            this.props.navigation.navigate('Bottombar')
          } catch (err) {
            console.log(err)
          }
        } else {
          this.props.navigation.push('Login')
        }
      })
    }

    this.showPassword = () =>
      this.setState({
        checkBox: !this.state.checkBox,
        showPass: !this.state.showPass,
      });
    
  }
  render() {
    console.log(this.props)
    return (
      <>
        <Container>
          <Header style={{backgroundColor: '#633a82', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
              Login
            </Text>
          </Header>
          <ScrollView style={{backgroundColor: 'white', flex: 1, marginBottom:10}}>
            <Form style={{marginTop: 10}}>
              <Item stackedLabel>
                <Label>Username</Label>
                <Input onChangeText={(text)=> this.setState({username: text})}/>
              </Item>
              <Item stackedLabel last>
                <Label>Password</Label>
                <Input secureTextEntry={this.state.showPass} onChangeText={(text) => this.setState({password: text})}/>
              </Item>
              <ListItem onPress={this.showPassword}>
                <CheckBox
                  checked={this.state.checkBox}
                  onPress={this.showPassword}
                />
                <Body>
                  <Text>show password</Text>
                </Body>
              </ListItem>
            </Form>
            <Button
              block
              info
              onPress={this.onLogin}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>Login</Text>
            </Button>
            <Button block light onPress={() => this.props.navigation.goBack()}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>Cancel</Text>
            </Button>
            <View style={{alignItems: 'center', marginTop: 10}}>
              <Text
                style={{
                  marginTop: 20,
                  fontWeight: 'bold',
                  justifyContent: 'center',
                }}>
                Don't have an account ?
              </Text>
              <Text
                onPress={() => this.props.navigation.navigate('Register')}
                style={{
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                  color: 'blue',
                }}>
                Register Here
              </Text>
              <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('Forget')}
                style={{
                  backgroundColor: 'grey',
                  width: 150,
                  height: 50,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    justifyContent: 'center',
                    color: 'white',
                  }}>
                  Forget Password
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View
            style={{
              backgroundColor: '#633a82',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 0.5,
            }}>
            <Logo name="card-travel" size={80} color="white" />
            <Text style={{color: 'white', fontSize: 20}}>
              Trust your journey to us
            </Text>
          </View>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.isLogin
  }
}

export default connect(mapStateToProps, { setLogin, UserDetail}) (Login)
