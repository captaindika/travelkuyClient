import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  ToastAndroid,
} from 'react-native';
import {Header, Container, Input, Toast, Button} from 'native-base';
import Logout from 'react-native-vector-icons/MaterialCommunityIcons';
import Caret from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {showSchedule} from '../redux/action/Schedule';

const mapStateToProps = (state) => {
  return {
    Schedule: state.Schedules.Schedules,
  };
};

export default connect(mapStateToProps, {showSchedule})(
  class Home extends Component {
    componentDidMount = async () => {
      try {
        await this.props.showSchedule(null, null, null);
        console.log('DidMount: ', this.props.Schedule);
      } catch (err) {
        console.log(err);
      }
    };

    constructor(props) {
      super(props);
      this.state = {
        caretStatus: false,
        idSchedule: 0,
      };
      this.sort = () => {
        this.setState({caretStatus: !this.state.caretStatus});
      };

      this.toastShow = () => {
        ToastAndroid.show('Schedule booked successfully !', ToastAndroid.SHORT);
      };

      this.alertBuy = () => {
        Alert.alert(
          'Purchase',
          'Book schedule ?',
          [
            {
              text: 'Cancel',
              // onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: this.toastShow},
          ],
          {cancelable: false},
        );
      };
    }
    render() {
      console.log(this.state);
      return (
        <>
          <Container>
            <Header
              style={{
                backgroundColor: '#633a82',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 25,
                  marginLeft: 20,
                }}>
                Find your adventure !
              </Text>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  backgroundColor: '#c060a1',
                  borderRadius: 20,
                }}
                onPress={() => this.props.navigation.navigate('Login')}>
                <Logout
                  name="logout-variant"
                  size={30}
                  color="white"
                  style={{margin: 10}}
                />
              </TouchableOpacity>
            </Header>
            <ScrollView>
            {this.props.Schedule.data &&
                this.props.Schedule.data.map((v, i) => {
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
                          Seat Quota: {v.bus_seat}
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
                flex: 0.2,
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                <Input
                  type="text"
                  placeholder="Find your Destination"
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 20,
                    marginLeft: 5,
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
                    Sort By Price
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
  },
);
