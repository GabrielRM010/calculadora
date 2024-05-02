import React from "react";
import { StyleSheet, View} from 'react-native';
import Button from './src/components/Button';
import Display from "./src/components/Display";

export default function App() {
  state = {
    displayValue: '0'
  }
  function addDigit (n) {
    this.setState = ({ displayValue: n})
  }
  function clearMemory () {
    this.setState = ({ displayValue: '0'})
  }
  setOperation = operation => {

  }

  return (
    <View style={StyleSheet.container}>
      <Display value={this.state.displayValue} />
      <View style={Styles.button}>
        <Button label='AC' triple onClick={ClearMemory} />
        <Button label='/' operation onClick={this.setOperation} />
        <Button label='7' onClick={addDigit} />
        <Button label='8' onClick={addDigit} />
        <Button label='9' onClick={addDigit} />
        <Button label='*' operation onClick={this.setOperation} />
        <Button label='4' onClick={addDigit} />
        <Button label='5' onClick={addDigit} />
        <Button label='6' onClick={addDigit} />
        <Button label='-' operation onClick={this.setOperation} />
        <Button label='1' onClick={addDigit} />
        <Button label='2' onClick={addDigit} />
        <Button label='3' onClick={addDigit} />
        <Button label='+' operation onClick={this.setOperation} />
        <Button label='0' onClick={addDigit} />
        <Button label='.' onClick={addDigit} />
        <Button label='=' operation onClick={this.setOperation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});