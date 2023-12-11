import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./src/redux/store";

import LoginBuyer from "./src/screens/login/LoginBuyer";
import HomeBuyer from "./src/screens/home/HomeBuyer";
import LoginSeller from "./src/screens/login/LoginSeller";
import RegisterBuyer from "./src/screens/register/RegisterBuyer";
import HomeSeller from "./src/screens/home/HomeSeller";
import RegisterSeller from "./src/screens/register/RegisterSeller";

const Stack = createNativeStackNavigator();

const App = () => {
    const forFade = ({ current }) => ({
        cardStyle: {
            opacity: 0,
        },
    });

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        cardStyleInterpolator: forFade,
                    }}
                    initialRouteName="LoginBuyer"
                >
                    <Stack.Screen
                        name="LoginBuyer"
                        component={LoginBuyer}
                        options={{ cardStyleInterpolator: forFade }}
                    />
                    <Stack.Screen name="LoginSeller" component={LoginSeller} />
                    <Stack.Screen
                        name="RegisterBuyer"
                        component={RegisterBuyer}
                    />
                    <Stack.Screen
                        name="RegisterSeller"
                        component={RegisterSeller}
                    />
                    <Stack.Screen name="HomeBuyer" component={HomeBuyer} />
                    <Stack.Screen name="HomeSeller" component={HomeSeller} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
