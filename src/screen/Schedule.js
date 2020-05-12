import React, {Component} from 'react';
import {Text, ScrollView, View, TouchableOpacity} from 'react-native';
import {Container, Header, Input} from 'native-base';
import Logo from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {showSchedule} from '../redux/action/Schedule';
import Caret from 'react-native-vector-icons/AntDesign';

const mapStateToProps = (state) => {
  return {
    Schedule: state.Schedules.Schedules,
  };
};

export default connect(mapStateToProps, {showSchedule})(
  class Schedule extends Component {
    componentDidMount = async () => {
      try {
        await this.props.showSchedule(null, null, null);
        // console.log('DidMount: ',this.props.Schedule)
      } catch (err) {
        console.log(err);
      }
    };
    constructor(props) {
      super(props);
      this.state = {
        search: '',
        sortKey: 'schedules.id',
        sort: 0,
        sortCondition: true,
        caretStatus: true,
      };

      this.sort = (field) => {
        const sort = this.state.sort
          ? this.state.sort - 1
          : this.state.sort + 1;
        this.props.showSchedule(this.state.search, field, parseInt(sort));
        this.setState({
          caretStatus: !this.state.caretStatus,
          sort: sort,
        });
        console.log(this.props);
        console.log(this.state.search);
      };

      this.handleSearch = text => {
        // this.props.showSchedule(e.target.value, null, this.state.sort)
        this.setState({
          search: text
        })
        this.props.showSchedule(text, null, this.state.sort)
      }
    }
    render() {
      // console.log('Schedule: ', this.props.Schedule.data);
      console.log('ini search', this.state.search)
      return (
        <>
          <Container>
            <Header style={{backgroundColor: '#633a82', alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
                Find your Adventure !
              </Text>
            </Header>
            <ScrollView>
              {this.props.Schedule.data &&
                this.props.Schedule.data.map((v, i) => {
                  return (
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Login')}
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
            <ScrollView style={{flex: 1, backgroundColor: 'transparents'}}>
              <View
                style={{
                  backgroundColor: '#633a82',
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Input
                    type="text"
                    onChangeText={this.handleSearch}
                    value={this.state.search}
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
                    onPress={() => this.sort('schedules.price')}>
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
            </ScrollView>
          </Container>
        </>
      );
    }
  },
);
