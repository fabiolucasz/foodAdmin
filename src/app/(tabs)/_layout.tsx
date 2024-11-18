import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      
      <Stack.Screen name="dashboard" options={{headerShown: false}}/>
      <Stack.Screen name="(tabs)/edit" options={{headerShown: false}}/>
      {/* <Stack.Screen name="edit" options={{headerShown: false}}/> */}

    </Stack>
  );
}
