import React, { Component } from 'react';
import { View, Text, Switch } from 'native-base';
import PropTypes from 'prop-types';

export default class SwitchField extends Component {
  static propTypes = {
    attributes: PropTypes.object,
    theme: PropTypes.object,
    updateValue: PropTypes.func,
  }
  handleChange(value) {
    this.props.updateValue(this.props.attributes.name, value);
  }
  render() {
    const attributes = this.props.attributes;
    const theme = this.props.theme;
    return (
      <View
        style={{
          backgroundColor: theme.pickerBgColor,
          borderBottomColor: theme.inputBorderColor,
          borderBottomWidth: theme.borderWidth,
          marginHorizontal: 10,
          marginVertical: 0,
          paddingVertical: 10,
          marginLeft: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ color: theme.labelActiveColor }}>{attributes.label}</Text>
        <Switch
          onTintColor={'blue'}
          onValueChange={value => this.handleChange(value)}
          value={attributes.value}
        />
      </View>
    );
  }
}
