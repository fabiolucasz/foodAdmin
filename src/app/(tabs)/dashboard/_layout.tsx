import { Tabs } from "expo-router";
import {FontAwesome} from '@expo/vector-icons'

export default function Layout() {
  return (
    <Tabs
    screenOptions={{
      headerStyle:{
        backgroundColor: "#121212"
      },
      headerTintColor: "#fff"
    }}>

      <Tabs.Screen 
      name="index"
      options={{
        title:' Produtos',
        headerShown: false ,
        tabBarIcon: ({focused, color, size}) => {

          if (focused){
            return <FontAwesome name="edit" color={color} size={size}/> 
          } else {
            return <FontAwesome name="edit" color={color} size={size}/>
          }

        }
      }}

      />

<Tabs.Screen 
      name="cart"
      options={{
        title:' Carrinho',
        headerShown: false ,
        tabBarIcon: ({focused, color, size}) => {

          if (focused){
            return <FontAwesome name="shopping-cart" color={color} size={size}/> 
          } else {
            return <FontAwesome name="shopping-cart" color={color} size={size}/>
          }

        }
      }}

      />

<Tabs.Screen 
      name="userProfile"
      options={{
        title:' Perfil',
        headerShown: false ,
        tabBarIcon: ({focused, color, size}) => {

          if (focused){
            return <FontAwesome name="user" color={color} size={size}/> 
          } else {
            return <FontAwesome name="user" color={color} size={size}/>
          }

        }
      }}

      />
    
      
    </Tabs>

    
  );
}
