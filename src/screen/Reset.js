import React, {Component} from 'react';
import {
  Container,
  Text,
  Header,
  Form,
  Item,
  Input,
  Label,
  Button,
  CheckBox,
  Body,
  ListItem

} from 'native-base';
import {View, ScrollView} from 'react-native';
import Logo from 'react-native-vector-icons/MaterialIcons';

export default class Reset extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPass: true,
      checkBox: false
    }
    this.seePass = () => this.setState({showPass: !this.state.showPass, checkBox: !this.state.checkBox})
  }
  render() {
    return (
      <>
        <Container>
          <Header style={{backgroundColor: '#633a82', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
              Reset your password
            </Text>
          </Header>
          <ScrollView style={{flex: 1}}>
            <Form>
              <Item stackedLabel>
                <Label>Password</Label>
                <Input secureTextEntry={this.state.showPass}/>
              </Item>
              <Item stackedLabel>
                <Label>Confirm password</Label>
                <Input secureTextEntry={this.state.showPass} />
              </Item>
              <ListItem onPress={this.seePass}>
                <CheckBox
                  checked={this.state.checkBox}
                  onPress={this.seePass}
                />
                <Body>
                  <Text>show password</Text>
                </Body>
              </ListItem>
            </Form>
            <Button
              block
              info
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>Reset</Text>
            </Button>
            <Button block light onPress={() => this.props.navigation.goBack()}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>Cancel</Text>
            </Button>
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
