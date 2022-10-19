import { StyleSheet, Text, Button, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import DatePicker from 'react-native-datepicker';

function UserScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [rol, setRol] = useState('');
  const [contraseña, setContraseña] = useState('');

  // const validate = () => {
  //   if (usuario == "juanes") {
  //     setUsuario("")
  //     setContraseña("");
  //     // navigation.navigate('Profile', { contraseña: contraseña })
  //   }
  // }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Usuario</Text>
      <TextInput
        style={styles.inputs}
        onChangeText={value => setUsuario(value)}
        value={usuario}
      />
      <Text>Rol</Text>
      <TextInput
        style={styles.inputs}
        onChangeText={value => setRol(value)}
        value={rol}
      />
      <Text>Contraseña</Text>
      <TextInput
        style={styles.inputs}
        onChangeText={value => setContraseña(value)}
        value={contraseña}
      />
      <Text>{'\n'}</Text>
      <Button
        title="Iniciar Sesion"
        //onPress={() => navigation.navigate('Settings')}
        //onPress={validate}
        onPress={() => {
          if (usuario == "juanes" & rol == "admin") {
          setUsuario("")
          setRol("")
          setContraseña("");
          navigation.navigate('Cuenta', { usuario: usuario })
          }
        }}
      />
    </View>
  );
}

var min = 83243334254232;
var max = 12332354432252342;

var x = Math.floor(Math.random() * (max - min + 1) + min);



function ProfileScreen({ route }) {
  const [date, setDate] = useState('09-10-2021');
  return (
    <View style={styles.container}>
      <Text>Perfil: {'\n'}{route.params.usuario}</Text>
      <Text>{'\n'}</Text>
      <Text>Numero de cuenta: {'\n'}{x} </Text>
      <Text>Identificacion: {'\n'}</Text>
      <TextInput
        style={styles.inputs}
        // onChangeText={value => setUsuario(value)}
        // value={usuario}
        type="numeric"
      />
      <Text>Titular de la cuenta: {'\n'}</Text>
      <TextInput
        style={styles.inputs}
      // onChangeText={value => setUsuario(value)}
      // value={usuario}
      />
      <Text>Fecha: {'\n'}</Text>
      <DatePicker
          style={styles.datePickerStyle}
          date={date}
          mode="date"
          placeholder="select date"
          format="DD/MM/YYYY"
          minDate="01-01-1900"
          maxDate="01-01-2000"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: -5,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor : "gray",
              alignItems: "flex-start",
              borderWidth: 0,
              borderBottomWidth: 1,
            },
            placeholderText: {
              fontSize: 17,
              color: "gray"
            },
            dateText: {
              fontSize: 17,
            }
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      <Text>Saldo: {'\n'}</Text>
      <TextInput
        style={styles.inputs}
      // onChangeText={value => setUsuario(value)}
      // value={usuario}
      />
      <Text>{'\n'}</Text>
      <Button
        title="Enviar"
      //onPress={() => navigation.navigate('Settings')}
      //onPress={validate}
      // onPress={() => {
      //   if (usuario == "juanes" & rol == "admin") {
      //   setUsuario("")
      //   setContraseña("");
      //   navigation.navigate('Cuenta', { usuario: usuario })
      //   }
      // }}
      />
    </View>
  );
}

function MovimientoScreen() {
    return (
    <View style={styles.container}>
      <Text>Movimientos</Text>
    </View>
  );
}

// function SettingsScreen() {
// return (
// <View style={styles.container}>
{/* <Text>Configuración</Text> */ }
{/* <Button
        title="Perfil"
        onPress={() => navigation.navigate('Feed')}
      /> */}
// </View>
// );
// }

// function LoginScreen() {
//   return (
//     <View style={styles.container}>
//       <Text>Configuración</Text>
//     </View>
//   );
// }

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      style={styles.texto}
      // la parte de arriba con el texto de la vista
      screenOptions={{
        headerShown: false
      }}
    >
      {/* tabBarStyle: desactiva el menú bottom */}
      <Tab.Screen name="Iniciar Sesion" component={UserScreen} options={{
        tabBarStyle: { display: "none" }
      }}
      />
      <Tab.Screen name="Cuenta" component={ProfileScreen} />
      <Tab.Screen name="Movimiento" component={MovimientoScreen} />

    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} options={{ title: 'Sistema Bancario' }} />
        {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
    marginBottom: 5
  },
  texto: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    width: 200,
    backgroundColor: 'yellow'
  }
});
