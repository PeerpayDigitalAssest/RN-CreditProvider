import { router } from "expo-router";
import { View, TouchableOpacity } from "react-native";
import { IconSymbol } from "../ui/IconSymbol";

type BackButtonProps = {
    color?: string;
    onPress?: () => void;
}

export default function BackButton({ color, onPress }: BackButtonProps) {
    const handlePress = () => {
        if (onPress) {
            onPress();
        } else {
            router.back();
        }
    };
    return (
        <View style={{ paddingLeft: 15 }}>
            <TouchableOpacity onPress={handlePress}>
                <IconSymbol name="arrow.left" color={color ?? "#fff"} />
            </TouchableOpacity>
        </View>
    );
}
