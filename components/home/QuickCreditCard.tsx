import { appStyles } from "@/constants/styles";
import { View, Image, Text } from "react-native";
import Column from "../common/Column";

export default function AccessToQuickCredit() {
    return <View style={{
        position: 'relative',
    }}>
        <Image style={{ width: '100%', borderRadius: 8, position: 'relative', }} source={require("@/assets/images/quick-credit.png")} />
        <Column style={{
            position: 'absolute',
            bottom: 0,
            padding: 20,
            alignItems: 'flex-start'
        }}>
            <Text style={[appStyles.text14, {
                fontWeight: '700'
            }]}>Access To Quick Credit</Text>
            <Text style={[appStyles.text10,
            ]}>Join the peerpay network</Text>
        </Column>
    </View>
}
