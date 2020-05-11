import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {
  Container,
  Header,
  Form,
  Item,
  Input,
  Label,
  Button,
  ListItem,
  Text,
  Body,
  CheckBox,
} from 'native-base';
import Logo from 'react-native-vector-icons/MaterialIcons';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      checkBox: false,
    };

    this.onCheck = () => {
      this.setState({
        checkBox: !this.state.checkBox,
        showPass: !this.state.showPass,
      });
    }
  }
  render() {
    console.log(this.state)
    return (
      <>
        <Container>
          <Header style={{backgroundColor: '#633a82', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
              Register
            </Text>
          </Header>
          <ScrollView style={{backgroundColor: 'white', flex: 1}}>
            <Form>
              <Item stackedLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item stackedLabel last>
                <Label>Password</Label>
                <Input secureTextEntry={this.state.showPass} />
              </Item>
              <Item stackedLabel last>
                <Label>Confirm password</Label>
                <Input secureTextEntry={this.state.showPass} />
              </Item>
              <ListItem style={{borderBottomWidth: 0}} onPress={this.onCheck}>
                <CheckBox checked={this.state.checkBox} onPress={this.onCheck}/>
                <Body>
                  <Text>show password</Text>
                </Body>
              </ListItem>
              <Item stackedLabel last>
                <Label>Phone number</Label>
                <Input keyboardType={'numeric'} />
              </Item>
              <Item stackedLabel last>
                <Label>Email</Label>
                <Input />
              </Item>
            </Form>
            <Button
              block
              info
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>Register</Text>
            </Button>
            <Button
              block
              light
              onPress={() => this.props.navigation.goBack()}
              style={{backgroundColor: '#e8f044'}}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>Cancel</Text>
            </Button>
          </ScrollView>
          <View
            style={{
              backgroundColor: '#633a82',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 0.45,
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
