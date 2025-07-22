import { appStyles } from "@/constants/styles";
import { type ViewProps, View } from "react-native";

export default function Row({ children, style }: ViewProps) {
    return <View style={[appStyles.row, style]}>
        {children}
    </View>
}
