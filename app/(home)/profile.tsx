import { appStyles } from "@/constants/styles";
import { View, Text } from "react-native";

export default function ProfileScreen() {
    return (
        <View style={{ flex: 1, alignContent: 'center', backgroundColor: 'black' }}>
           <View style={[appStyles.screenCenter, { flex: 1 }]}>
                <Text style={[appStyles.text14, {
                    alignSelf: 'center',
                }]}>Profile Screen</Text>
           </View>
        </View>
    );
}
