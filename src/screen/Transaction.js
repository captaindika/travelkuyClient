import React, {Component} from 'react';
import {ScrollView, View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Header, Container, Input} from 'native-base';
import Caret from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {getTransaction} from '../redux/action/User'


const mapStateToProps = (state) => ({
  Transaction: state.Schedules.transactionUser
})

const mapDispatchToProps = {
  getTransaction
}

export default connect(mapStateToProps, mapDispatchToProps) (class Transaction extends Component {
  componentDidMount() {
    this.props.getTransaction(0)
    console.log('DidMount :', this.props.Transaction)
  }
  constructor(props) {
    super(props);
    this.state = {
      caretStatus: false,
      text: 'teks',
    };
    this.sort = () => {
      this.setState({caretStatus: !this.state.caretStatus});
    };
  }
  render() {
    console.log(this.state)
    return (
      <>
        <Container>
          <ScrollView style={{flex: 1, marginBottom: 10}}>
          {this.props.Transaction.info &&
                this.props.Transaction.info.map((v, i) => {
                  return (
                    <TouchableOpacity
                      onPress={this.alertBuy}
                      style={{
                        marginTop: 10,
                        backgroundColor: '#f0e3ff',
                        height: 100,
                        borderRadius: 20,
                        display: 'flex',
                        flexDirection: 'row',
                      }}>
                      <View
                        style={{
                          margin: 15,
                          display: 'flex',
                          flexDirection: 'column',
                          flex: 1,
                        }}>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>
                          {v.start} - {v.end}
                        </Text>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>
                          Departure time: {v.departure_time.slice(0, 5)}
                        </Text>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>
                          Bus Name: {v.car_name}
                        </Text>
                      </View>
                      <View
                        style={{
                          margin: 15,
                          display: 'flex',
                          flexDirection: 'column',
                          flex: 1,
                        }}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontSize: 15,
                            color: 'blue',
                          }}>
                          {/* Rp. {const Intl = require('react-native-intl');new Intl.NumberFormat(['ban', 'id']).format(v.price)} */}
                          Rp. {v.price}
                        </Text>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>
                          Arrive time: {v.arrive_time.slice(0, 5)}
                        </Text>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>
                          {v.departure_date.slice(0, 10)}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
          </ScrollView>
          <View
            style={{
              backgroundColor: '#633a82',
              flex: 0.15,
            }}>
            <View style={{flexDirection: 'row', alignItems:'center', flex:1}}>
              <Input
                type="text"
                placeholder="Find your Destination"
                style={{
                  backgroundColor: 'white',
                  borderRadius: 20,
                  marginLeft:5,
                  marginTop: 10,
                  height: 40,
                  marginBottom: 10,
                  alignItems: 'center',
                  flex: 1,
                }}
              />
              <TouchableOpacity
                style={{marginLeft: 10, flex: 0.3}}
                onPress={this.sort}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  Sort By Date
                </Text>
                <Caret
                  name={this.state.caretStatus ? 'caretdown' : 'caretup'}
                  size={20}
                  color="white"
                  style={{marginLeft: 30}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Container>
      </>
    );
  }
}
)
