import Column from "@/components/common/Column";
import { GapColumn, GapRow } from "@/components/common/Gap";
import Row from "@/components/common/Row";
import MainButton from "@/components/credit_requests/MainButton";
import TextField from "@/components/ui/TextField";
import { appStyles } from "@/constants/styles";
import { useRouter } from "expo-router";
import { GestureResponderEvent, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type PressProps = {
    onNext: (event: GestureResponderEvent) => void;
}

export default function CreditInformation(props: PressProps) {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    return <Column style={[appStyles.screen, { paddingBottom: insets.bottom }]}
        >
        <GapColumn space={30} />
        <Text style={[appStyles.text16, {
            fontSize: 14, fontWeight: '600', alignSelf: 'center'
        }]}>Credit Information</Text>
        <GapColumn space={30} />

        {/* Credit Terms */}
        <View style={[appStyles.borderContainer, {
            width: '95%',
            height: 'auto',
            padding: 15
        }]}>
            <Text style={[appStyles.text16, {
                fontSize: 14, fontWeight: '600', alignSelf: 'flex-start'
            }]}>Credit Terms</Text>
            <GapColumn space={20} />
            <TextField title={"Credit Amount"}
                placeholder="100,000.00"
                keyboardType="numeric"
                enterKeyHint='done' />
            <GapColumn space={20} />
            <TextField title={"Duration (In Months)"}
                placeholder="6 months"
                keyboardType="numeric"
                enterKeyHint='done' />
            <GapColumn space={20} />
            <TextField title={"Monthly"}
                placeholder="20,000"
                keyboardType="numeric"
                enterKeyHint='done' />
        </View>

        <GapColumn space={20} />

        {/* Credit Provider Information */}
        <View style={[appStyles.borderContainer, {
            width: '95%',
            height: 'auto',
            borderColor: '',
            padding: 15
        }]}>
            <Text style={[appStyles.text16, {
                fontSize: 14, fontWeight: '600', alignSelf: 'flex-start'
            }]}>Credit Provider Information</Text>
            <GapColumn space={20} />
            <TextField title={"Credit Provider’s Account Number"}
                placeholder="100,000.00"
                keyboardType="numeric"
                enterKeyHint='done' />
            <GapColumn space={20} />
            <TextField title={"Credit Provider’s Bank"}
                placeholder="6 months"
                keyboardType="numeric"
                enterKeyHint='done' />
            <GapColumn space={10} />
            <Row style={{ alignItems: 'center' }}>
                <Image source={require("@/assets/images/bank-initial.png")} />
                <GapRow space={10} />
                <Text style={appStyles.text12}>EMMANUEL NWACHUKWU - 19284129489</Text>
            </Row>
        </View>
        <GapColumn space={25} />
        <MainButton title='Next' type='primary' onPress={
            props.onNext
        } />
        <GapColumn space={100} />
    </Column>
}
