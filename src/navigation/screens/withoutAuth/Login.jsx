import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import Discord from "../../../assets/svg/discord.svg"
import { Formik } from "formik";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { useDispatch } from "react-redux";
import {login} from "../../../redux/slice"
const Login = ({navigation}) =>{

  const {colors} = useTheme()
  const dispatch = useDispatch()

  const initialValues = {
    email: "",
    password: ""
  }

  const onSubmit = (values) =>{
    const {email, password} = values
   // if(email.includes("@") && password.length >= 8){
    if(email && password){
      console.log("login olundu")
      dispatch(login({email, password}))
    } else{
      console.log("hata var")
    }
  }


  const inputStyles = {
    ...styles.input,
    borderColor: colors.border,
    color: colors.text,
    paddingHorizontal: 10
  }

  return (
    <>
      <View style={styles.header}>
        <Discord fill={colors.text} width={75} height={75} />
      </View>
      <View style={styles.forms}>
        <Formik initialValues={initialValues} onSubmit={onSubmit} >
          {({handleSubmit, handleChange, handleBlur, values}) =>(
            <>
              <Input
                style={inputStyles}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder={"E-mail"}
                placeholderTextColor={colors.text}
              />
              <Input
                style={inputStyles}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholder={"Password"}
                placeholderTextColor={colors.text}
                secureTextEntry={true}
              />
              <Button onPress={handleSubmit}>Login</Button>
            </>
          )}
        </Formik>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 75,
    marginBottom: 20,
    alignItems: "center"
  },
  forms: {
    flex: 1,
    alignItems: "center"
  },
  input: {
    width: "80%",
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10
  }
})

export default Login
