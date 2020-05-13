import React, { Component } from 'react';
import {Container, Header, Form, Input, Label, Item, Button, Text} from 'native-base';
import {View, Alert} from 'react-native';
import Logo from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux'
import {TopUp, UserDetail} from '../redux/action/User';
const mapStateToProps = (state) => ({
  Detail: state.Schedules.data
})

const mapDispatchToProps = {
  TopUp, UserDetail
}

export default connect(mapStateToProps, mapDispatchToProps)(class Topup extends Component {
  componentDidMount() {
    this.props.UserDetail()
    console.log('Data: ', this.props.Detail)
  }
  constructor(props) {
    super(props)
    this.state = {
      nominal: 0,
    }
    this.onChange = (e) => {
      const value = parseInt(e)
      if (value < 0) {
        Alert.alert('Input cant minus')
        this.props.navigation.push
        ('Bottombar',
          { screen: 'Top',
            params: {
              screen: 'Topup',
            }
          }
        )
      } else {
        this.setState({
          nominal: value
        })

      }
    }
    this.topUp = () => {
      const data = {
        balance: this.state.nominal
      }
      this.props.TopUp(data)
      this.props.navigation.push
        ('Bottombar',
          { screen: 'Top',
            params: {
              screen: 'Topup',
            }
          }
        )
    }

  }
  render() {
    console.log('state :',this.state)
    return (
      <>
        <Container>
          <Header style={{backgroundColor:'#633a82', alignItems:'center'}}>
          </Header>
            <View style={{flex:1, justifyContent:'center'}}>
              <View style={{flex:1, backgroundColor:'#bca0dc', alignItems:'center', justifyContent:'center'}}>
                <View style={{backgroundColor:'grey', borderRadius:50, padding:10}}>
                  <Logo name='attach-money' size={60} color='white'/>
              </View>
                <Text style={{color:'white', fontSize:18, fontWeight:'bold', marginTop:5}}>
                  Rp.{this.props.Detail.detail && this.props.Detail.detail.balance}
                </Text>
              </View>
              <View style={{flex:1, alignItems:'center'}}>
                <Form>
                  <Item stackedLabel>
                      <Label >Put your nominal :</Label>
                      <Input 
                        placeholder='Rp. 100.000'
                        keyboardType='numeric' 
                        onChangeText={this.onChange}
                        placeholderTextColor='grey'/>
                  </Item>
                  <Button rounded info style={{marginTop:10, alignItems:'center'}} onPress={this.topUp}>
                  <Text style={{color:'white', fontWeight:'bold', fontSize:18, marginLeft:20}}>Top Up</Text>
                </Button>
                </Form>
                
              </View>
            </View>
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
    )
  }
})
