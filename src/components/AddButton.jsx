import React from 'react';
import { View, StyleSheet } from 'react-native';
import { string, shape } from 'prop-types';
import { Feather } from '@expo/vector-icons';

export default function AddButton(props) {
  const { style, name } = props;
  return (
    <View style={[styles.addList, style]}>
      <Feather name={name} size={32} color="white" />
    </View>
  );
}

AddButton.propTypes = {
  style: shape(),
  name: string.isRequired,
};

AddButton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  addList: {
    backgroundColor: '#467FD3',
    height: 64,
    width: 64,
    // fontSize: 20,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  addListText: {
    color: 'white',
    fontSize: 50,
    lineHeight: 50,
  },
});
