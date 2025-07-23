import { Colors } from "@/constants/Colors";
import { appStyles } from "@/constants/styles";
import { TouchableOpacity, View, Text, GestureResponderEvent, ActivityIndicator } from "react-native";

type ButtonType = "primary" | "greyBorder" | "normal";

type MainButtonProps = {
    onPress: (event: GestureResponderEvent) => void;
    title: string;
    type?: ButtonType;
    isLoading?: boolean;
    height?: number;
    color?: string;
    textColor?: string;

};


export default function MainButton({ onPress, title, type="normal", isLoading=false, height=40, color, textColor }: MainButtonProps) {
    return (
        <TouchableOpacity style={{ flex: 1 }} disabled={isLoading} onPress={onPress}>
            <View style={[appStyles.button, type === "greyBorder" ? appStyles.borderContainer : {}, {
                height: height,
                backgroundColor: color ?? (type === "greyBorder" ? Colors.grey : type === "primary" ? 'rgba(48, 54, 91, 1)' : 'white'),
                borderColor: type === "primary" ? Colors.primary : type === "greyBorder" ? Colors.grey : 'white',
            }]}>
                {isLoading ? (<ActivityIndicator />) : (<Text style={[appStyles.text12, { color: textColor ?? (type === "greyBorder" || type === "primary" ? 'white' : 'black'), textAlign: 'center' }]}>{title}</Text>)}
            </View>
        </TouchableOpacity>
    );
}
