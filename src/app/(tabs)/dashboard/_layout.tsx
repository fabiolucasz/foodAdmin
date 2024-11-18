import { Tabs } from "expo-router";
import {FontAwesome} from '@expo/vector-icons'
import AntDesign from '@expo/vector-icons/AntDesign';

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
      name="add-product"
      options={{
        title:' Adicionar Produto',
        headerShown: false ,
        tabBarIcon: ({focused, color, size}) => {

          if (focused){
            return <FontAwesome name="plus" color={color} size={size}/> 
          } else {
            return <FontAwesome name="plus" color={color} size={size}/>
          }

        }
      }}

      />

<Tabs.Screen 
      name="reports"
      options={{
        title:' Relatórios',
        headerShown: false ,
        tabBarIcon: ({focused, color, size}) => {

          if (focused){
            return <AntDesign name="barschart" size={24} color="black" /> 
          } else {
            return <AntDesign name="barschart" size={24} color="black" />
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
