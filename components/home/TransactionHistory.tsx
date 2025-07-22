import { Colors } from "@/constants/Colors";
import { appStyles } from "@/constants/styles";
import { Image, Text, View } from "react-native";
import Column from "../common/Column";
import { GapRow } from "../common/Gap";
import Row from "../common/Row";

export default function TransactionHistoryList() {
    const transList = [
        { id: 1, isCredit: true, name: 'Marrieth Akporowho', date: 'Jan 10th, 2025 - 10:25am', amount: '25,000.00' },
        { id: 2, isCredit: false, name: 'Marrieth Akporowho', date: 'Jan 10th, 2025 - 4:25pm', amount: '6,000.00' },
        { id: 3, isCredit: false, name: 'Marrieth Akporowho', date: 'Jan 12th, 2025 - 4:25pm', amount: '15,000.00' },
        { id: 4, isCredit: true, name: 'Janes Idaho', date: 'Jan 12th, 2025 - 4:25pm', amount: '15,000.00' },
    ]
    let item = transList[0];
    return (
        <View style={{
            position: 'relative',
            height: 100,
        }}>
            <View style={[appStyles.container, {
                backgroundColor: 'white', boxShadow: [{
                    color: '#AB969603',
                    offsetX: -10,
                    offsetY: 215,
                    blurRadius: 86,
                    spreadDistance: 0
                },
                {
                    color: '#AB969600',
                    offsetX: -16,
                    offsetY: 336,
                    blurRadius: 94,
                    spreadDistance: 0
                }
                ],
                borderRadius: 8,
                marginBottom: 10,
                position: 'absolute',
                height: 70,
                top: 20,
                width: '100%',
                alignSelf: 'center'
            }]} />
            <View style={[appStyles.container, {
                backgroundColor: 'white', boxShadow: [
                    {

                        color: 'rgba(0, 0, 0, 0.1)',
                        offsetX: -3,
                        offsetY: 54,
                        blurRadius: 54,
                        spreadDistance: 0
                    }
                ],
                borderRadius: 8,
                marginBottom: 10,
                position: 'absolute',
                height: 70,
                top: 10,
                width: '100%',
                alignSelf: 'center'
            }]} />
            <View key={item.id} style={[appStyles.container, {
                backgroundColor: 'white', boxShadow: [
                    {

                        color: 'rgba(0, 0, 0, 0.1)',
                        offsetX: -1,
                        offsetY: 13,
                        blurRadius: 30,
                        spreadDistance: 0
                    }

                ],
                borderRadius: 8,
                marginBottom: 10,
                height: 70,
                position: 'relative',
                width: '100%',
                alignSelf: 'center'
            }]}>
                <Row>
                    <Image style={{ height: 24, width: 24, marginRight: 10 }} source={
                        item.isCredit ?
                            require("@/assets/icons/inflow.png") :
                            require("@/assets/icons/outflow.png")} />
                    <GapRow space={5} />
                    <Column style={{ flex: 1 }}>
                        <Text style={[
                            appStyles.text12, {
                                color: 'black',
                                fontWeight: '500'
                            }
                        ]}>
                            {item.isCredit ? 'Credit' : 'Debit'} From {item.name}
                        </Text>
                        <Text style={[
                            appStyles.text10,
                            { color: Colors.grey }
                        ]}>
                            TRANSACTION-REFR-01291281481129...
                        </Text>
                    </Column>
                    <Column style={{
                        alignItems: 'flex-end'
                    }}>
                        <Text style={[
                            appStyles.text14, {
                                color: item.isCredit ? 'rgba(49, 255, 193, 1)' : 'rgba(255, 45, 38, 1)',
                                fontWeight: '500'
                            }
                        ]}>{item.isCredit ? '+' : '-'}{item.amount}
                        </Text>
                        <Text style={[
                            appStyles.text8,
                            { color: Colors.grey }
                        ]}>
                            {item.date}
                        </Text>
                    </Column>
                </Row>
            </View>

        </View>
    )
}
