import Column from "@/components/common/Column";
import { GapColumn, GapRow } from "@/components/common/Gap";
import Row from "@/components/common/Row";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { appStyles } from "@/constants/styles";
import { Image, Text, View } from "react-native";

export default function BalanceCard() {
    return (
        <Column
            style={{
                height: 'auto',
                width: '100%',

            }}
        >
            <Column style={{
                padding: 20,
                alignSelf: 'center',
                height: 'auto',
                width: '100%',
                backgroundColor: 'white',
                borderRadius: 8,
                alignItems: 'center',
                alignContent: 'center',
                position: 'relative',

            }}>
                <Text style={[appStyles.text16, {
                    color: 'black'
                }]}>Naira Account</Text>
                <GapColumn space={15} />
                <Row style={{ alignItems: 'center' }}>
                    <Text style={[appStyles.text24, {
                        color: 'black'
                    }]}>NGN 639,597.39</Text>
                    <GapRow space={10} />
                    <IconSymbol
                        name={"eye"}
                        color={"black"}
                        size={15}
                    />
                </Row>
                <GapColumn space={15} />
               <Row style={{ alignItems: 'center', width: 'auto', gap: 5 }}>
                    <Text style={[appStyles.text12, {
                        color: 'black'
                    }]}>Transaction History</Text>
                    <IconSymbol
                        name={"chevron.right"}
                        color={"black"}
                        size={12}
                        style={{ marginLeft: 'auto' }}
                    />
               </Row>
            </Column>
            <GapColumn space={20} />
            <Column style={{
                padding: 10,
                alignSelf: 'center',
                height: 'auto',
                width: '100%',
                backgroundColor: 'white',
                borderRadius: 8,
                alignItems: 'center',
                alignContent: 'center',
                position: 'relative',

            }}>
                <Row>
                    <Text style={[appStyles.text16, {
                        color: 'black',
                        letterSpacing: -.4
                    }]}>Savings Account - </Text>
                    <Text style={[appStyles.text16, {
                        color: 'black',
                        letterSpacing: -.4
                    }]}>19284129489</Text>
                </Row>
            </Column>
        </Column>
    );
}
