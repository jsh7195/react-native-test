import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TodoStackParamList } from "../screen/todo/TodoWrap";

type _NavigationProp = NativeStackNavigationProp<TodoStackParamList>;


type TodoStackParamKeys = keyof TodoStackParamList;
type TodoStackParamValues = TodoStackParamList[keyof TodoStackParamList];

export function useNavigationWrap() {
    const navigation = useNavigation<_NavigationProp>();
    function navigate(name: any, params?: TodoStackParamValues) {
        console.log('test', typeof name, params);
        if (name) {
            navigation.navigate(name, params);
        } else {
            navigation.navigate(name);
        }
    }

    return {
        ...navigation,
        navigate,
    };
}
