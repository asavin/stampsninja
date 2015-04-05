/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PickerIOS
} = React;

var PickerItemIOS = PickerIOS.Item;

var COUNTRIES = {
  uk: {
    name: 'United Kingdom'
  },
  finland: {
    name: 'Finland'
  },
  russia: {
    name: 'Russia'
  }
}

var StampsNinja = React.createClass({
  getInitialState: function() {
    return {
      countryIndex: 0,
      country: 'uk',
      countryTo: 'finland'
    };
  },

  updateCountry: function(country) {
    this.setState({
      country: country
    });
  },

  updateCountryTo: function(country) {
    this.setState({
      countryTo: country
    });
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Stamps Ninja
        </Text>
        <Text style={styles.instructions}>
          From
        </Text>
        <PickerIOS
          style={styles.countrypicker}
          selectedValue={this.state.country}
          onValueChange={this.updateCountry}>

          {Object.keys(COUNTRIES).map((country) => (
            <PickerItemIOS
              key={country}
              value={country}
              label={country}
            />
            )
          )}

        </PickerIOS>
        <Text style={styles.instructions}>
          Currently selected: {this.state.country}
        </Text>


        <Text style={styles.instructions}>
          To
        </Text>
        <PickerIOS
          style={styles.countrypicker}
          selectedValue={this.state.countryTo}
          onValueChange={this.updateCountryTo}>

          {Object.keys(COUNTRIES).map((country) => (
            <PickerItemIOS
              key={country}
              value={country}
              label={country}
            />
            )
          )}

        </PickerIOS>
        <Text style={styles.instructions}>
          Currently selected: {this.state.countryTo}
        </Text>


      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  countrypicker: {
    margin: 10,
    width: 380,
    height: 200,
    borderWidth: 1,
    borderColor: 'blue'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('StampsNinja', () => StampsNinja);
