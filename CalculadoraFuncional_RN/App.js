import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Buttons from './components/Buttons';
import { FontAwesome6 } from '@expo/vector-icons';
import { styles } from './styles/styles';
import Screen from './components/Screen';
import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState("");

  const show = (num) => {
    const newVal = value + num;
    setValue(newVal);
  };

  const deleteAll = () => {
    setValue("");
  };

  const deleteByOne = () => {
    const newValue = value.slice(0, -1);
    setValue(newValue);
  };

  const result = () => {
    try {
      const newValue = eval(value);
      if (isNaN(newValue) || !isFinite(newValue)) {
        setValue("Error");
        setTimeout(() => {
          setValue("");
        }, 2000);
      } else {
        setValue(newValue.toString());
      }
    } catch (error) {
      setValue("Error");
      setTimeout(() => {
        setValue("");
      }, 2000);
    }
  };

  const percentage = () => {
    const newValue = parseFloat(value) / 100;
    if (isNaN(newValue)) {
      setValue("Error");
      setTimeout(() => {
        setValue("");
      }, 2000);
    } else {
      setValue(newValue.toString());
    }
  };

  const squareRoot = () => {
    const newValue = Math.sqrt(parseFloat(value));
    if (isNaN(newValue)) {
      setValue("Error");
      setTimeout(() => {
        setValue("");
      }, 2000);
    } else {
      setValue(newValue.toString());
    }
  };

  const square = () => {
    const newValue = Math.pow(parseFloat(value), 2);
    setValue(newValue.toString());
  };

  const cube = () => {
    const newValue = Math.pow(parseFloat(value), 3);
    setValue(newValue.toString());
  };

  const inverse = () => {
    const newValue = 1 / parseFloat(value);
    setValue(newValue.toString());
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Screen value={value} />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonsRow}>
          <Buttons value={"%"} colorText={"white"} color={"#747477"} size={70} fun={() => percentage()} />
          <Buttons value={"1/x"} colorText={"white"} color={"#747477"} size={70} fun={() => inverse()} />
          <Buttons value={"AC"} colorText={"white"} color={"#747477"} size={70} fun={() => deleteAll()} />
          <Buttons value={"<-"} colorText={"white"} color={"#747477"} size={70} fun={() => deleteByOne()} />
        </View>
        <View style={styles.buttonsRow}>
          <Buttons value={"√"} colorText={"white"} color={"#747477"} size={70} fun={() => squareRoot()} />
          <Buttons value={"x²"} colorText={"white"} color={"#747477"} size={70} fun={() => square()} />
          <Buttons value={"x³"} colorText={"white"} color={"#747477"} size={70} fun={() => cube()} />
          <Buttons value={"/"} colorText={"white"} color={"#4B5EFC"} size={70} fun={() => show("/")} />
        </View>
        <View style={styles.buttonsRow}>
          <Buttons value={"7"} color={"white"} size={70} fun={() => show("7")} />
          <Buttons value={"8"} color={"white"} size={70} fun={() => show("8")} />
          <Buttons value={"9"} color={"white"} size={70} fun={() => show("9")} />
          <Buttons value={"x"} colorText={"white"} color={"#4B5EFC"} size={70} fun={() => show("*")} />
        </View>
        <View style={styles.buttonsRow}>
          <Buttons value={"4"} color={"white"} size={70} fun={() => show("4")} />
          <Buttons value={"5"} color={"white"} size={70} fun={() => show("5")} />
          <Buttons value={"6"} color={"white"} size={70} fun={() => show("6")} />
          <Buttons value={"-"} colorText={"white"} color={"#4B5EFC"} size={70} fun={() => show("-")} />
        </View>
        <View style={styles.buttonsRow}>
          <Buttons value={"1"} color={"white"} size={70} fun={() => show("1")} />
          <Buttons value={"2"} color={"white"} size={70} fun={() => show("2")} />
          <Buttons value={"3"} color={"white"} size={70} fun={() => show("3")} />
          <Buttons value={"+"} colorText={"white"} color={"#4B5EFC"} size={70} fun={() => show("+")} />
        </View>
        <View style={styles.buttonsRow}>
          <Buttons value={"."} color={"white"} size={70} fun={() => show(".")} />
          <Buttons value={"0"} color={"white"} size={140} fun={() => show("0")} />
          <Buttons value={"="} colorText={"white"} color={"#4B5EFC"} size={70} fun={() => result()} />
        </View>
      </View>
    </View>
  );
}
