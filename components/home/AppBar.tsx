import { useRouter } from "expo-router";
import { Image, type ViewProps, Text } from "react-native";
import { IconSymbol } from "../ui/IconSymbol";
import BackButton from "../common/BackButton";
import Row from "../common/Row";
import { appStyles } from "@/constants/styles";

type AppBarProps = ViewProps & {
    showBack?: boolean
}

export default function AppBar({ showBack }: AppBarProps) {
    const router = useRouter();
    return (
        <Row>
            {/* Back Button */}
            {showBack ? <BackButton />
                : null}
            <Row style={[{ paddingLeft: showBack ? 20: 0, paddingHorizontal: 0, justifyContent: 'space-between', flex: 1 }]}>
                <Row style={{ alignItems: 'center', gap: 10 }}>
                    <Image source={require("@/assets/images/dp.png")} />
                    <Text style={appStyles.text12}>Hi, Solomon!</Text>
                </Row>

                    <IconSymbol name="bell" color={"#fff"} style={{ marginRight: 0 }} />
            </Row>
        </Row>
    );
}
