import { StyleSheet, Text, Button, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { useForm, Controller } from "react-hook-form"
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function UserScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [rol, setRol] = useState('');
  const [contraseña, setContraseña] = useState('');


  const { control, handleSubmit, formState: { errors } } = useForm({
    usuario: '',
    rol: '',
    contraseña: '',
  });

  const onSub = () => {
    if (usuario == "juanes" & rol == "admin") {
    setUsuario("")
    setRol("")
    setContraseña("");
    navigation.navigate('Cuenta', { usuario: usuario })
    }
  }

  // const validate = () => {
  //   if (usuario == "juanes") {
  //     setUsuario("")
  //     setContraseña("");
  //     // navigation.navigate('Profile', { contraseña: contraseña })
  //   }
  // }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: "https://img.freepik.com/vector-premium/edificio-banco-retro-dibujos-animados-o-palacio-justicia-columnas-ilustracion-aislado-blanco_166005-61.jpg?w=2000" }}
        />
      <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>


      <Text>Usuario: {'\n'}</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
        }}
        render={({ field: { onChange, onBlur, usuario } }) => (
          <TextInput
            style={styles.inputs}
            onChange={onChange}
            onBlur={onBlur}
            usuario={usuario}
            onChangeText={usuario => setUsuario(usuario)}
          />
        )}
        name="usuario"
      />
      {errors.usuario?.type == "required" && <Text style={{ color: 'red' }}>Usuario requerido</Text>}
      {errors.usuario?.type == "pattern" && <Text style={{ color: 'red' }}>campos invalidos, solo letras sin espacios</Text>}
      <Text>{'\n'}</Text>

      <Text>Rol</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: 'admin'
        }}
        render={({ field: { onChange, onBlur, rol } }) => (
          <TextInput
            style={styles.inputs}
            onChange={onChange}
            onBlur={onBlur}
            rol={rol}
            onChangeText={rol => setRol(rol)}
          />
        )}
        name="rol"
      />
      {errors.rol?.type == "required" && <Text style={{ color: 'red' }}>Rol requerido</Text>}
      {errors.rol?.type == "pattern" && <Text style={{ color: 'red' }}>El usuario no es admin</Text>}
      <Text>{'\n'}</Text>

      <Text>Contraseña</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputs}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            onChangeText={value => setContraseña(value)}
            secureTextEntry={true}
          />
        )}
        name="contraseña"
      />
      {errors.contraseña?.type == "required" && <Text style={{ color: 'red' }}>contraseña requerido</Text>}
      {errors.contraseña?.type == "pattern" && <Text style={{ color: 'red' }}>la contraseña no es permitida</Text>}
      <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>

      <TouchableOpacity
        style={{ backgroundColor: '#68D600', padding: 10, width: 120, textAlign: 'center' }}
        onPress={handleSubmit(onSub)}
      >
        <Text>Iniciar Sesion</Text>
      </TouchableOpacity>

      {/* <Button
        title="Iniciar Sesion"
        //onPress={() => navigation.navigate('Settings')}
        //onPress={validate}
        onPress={() => {
          // if (usuario == "juanes" & rol == "admin") {
          setUsuario("")
          setRol("")
          setContraseña("");
          navigation.navigate('Cuenta', { usuario: usuario })
          // }
        }}
      /> */}
    </View>
  );
}

var min = 83243334254232;
var max = 12332354432252342;

var x = Math.floor(Math.random() * (max - min + 1) + min);

function ProfileScreen({ route }) {
  const [Datos, setDatos] = useState([]);
  const { control, handleSubmit, formState: { errors } } = useForm({
    identificacion: 0,
    fecha: '',
    titular: '',
    saldo: 0
  });

  const onSubmit = data => {
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <Text>Perfil: {'\n'}{route.params.usuario}</Text>
      <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>

      <Text>Numero de cuenta: {'\n'}{x} </Text>
      <Text>{'\n'}</Text>

      <Text>Identificacion: {'\n'}</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^([0-9])*$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputs}
            onChange={onChange}
            onBlur={onBlur}
            vlaue={value}
          />
        )}
        name="identificacion"
      />
      {errors.identificacion?.type == "required" && <Text style={{ color: 'red' }}>Identificacion requerida</Text>}
      {errors.identificacion?.type == "pattern" && <Text style={{ color: 'red' }}>campos invalidos, solo numeros</Text>}
      <Text>{'\n'}</Text>


      <Text>Titular de la cuenta: {'\n'}</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputs}
            onChange={onChange}
            onBlur={onBlur}
            vlaue={value}
          />
        )}
        name="titular"
      />
      {errors.titular?.type == "required" && <Text style={{ color: 'red' }}>Titular requerido</Text>}
      {errors.titular?.type == "pattern" && <Text style={{ color: 'red' }}>campos invalidos</Text>}
      <Text>{'\n'}</Text>

      <Text>Fecha: {'\n'}</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputs}
            onChange={onChange}
            onBlur={onBlur}
            vlaue={value}
          />
        )}
        name="fecha"
      />
      {errors.fecha?.type == "required" && <Text style={{ color: 'red' }}>Fecha requirida</Text>}
      {errors.fecha?.type == "pattern" && <Text style={{ color: 'red' }}>campos invalidos, el formato es: dd/mm/yyyy </Text>}
      <Text>{'\n'}</Text>

      <Text>Saldo: {'\n'}</Text>

      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[0-9]+$/,
          max: 100000000,
          min: 1000000
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputs}
            onChange={onChange}
            onBlur={onBlur}
            vlaue={value}
          />
        )}
        name="saldo"
      />
      {errors.saldo?.type == "required" && <Text style={{ color: 'red' }}>Saldo requerido</Text>}
      {errors.saldo?.type == "pattern" && <Text style={{ color: 'red' }}>campos invalidos</Text>}
      {errors.saldo?.type == "pattern" && <Text style={{ color: 'red' }}>solo numeros</Text>}
      {errors.saldo?.type == "max" && <Text style={{ color: 'red' }}>El limite del salario son 10000000</Text>}
      {errors.saldo?.type == "min" && <Text style={{ color: 'red' }}>El salario no puede ser menor a 1000000</Text>}
      <Text>{'\n'}</Text>

      <TouchableOpacity
        style={{ backgroundColor: '#68D600', padding: 10, width: 120, textAlign: 'center' }}
        onPress={handleSubmit(onSubmit)}
      >
        <Text>Enviar</Text>
      </TouchableOpacity>

    </View>
  );
}

function MovimientoScreen() {
  return (
    <View style={styles.container}>
      <Text>Movimiento</Text>
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
      {/* <Tab.Screen name="Iniciar Sesion" component={UserScreen} options={{
        tabBarStyle: { display: "none" }
      }}
      /> */}
      <Tab.Screen
        name="Inicio"
        component={UserScreen}
        options={{
          title: 'Inicio', tabBarStyle: { display: "none" }, tabBarIcon: ({ color, size }) =>
            <AntDesign name="user" size={30} color="black" />
        }}
      />
      {/* <Tab.Screen name="Cuenta" component={ProfileScreen} /> */}
      <Tab.Screen
        name="Cuenta"
        component={ProfileScreen}
        options={{
          title: 'Perfil', tabBarIcon: ({ color, size }) =>
            <AntDesign name="profile" size={28} color="black" />
        }}
      />
      {/* <Tab.Screen name="Movimiento" component={MovimientoScreen} /> */}
      <Tab.Screen
        name="Movimiento"
        component={MovimientoScreen}
        options={{
          title: 'Movimientos', tabBarIcon: ({ color, size }) =>
            <MaterialCommunityIcons name="bank-transfer" size={35} color="black" />
        }}
      />


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
