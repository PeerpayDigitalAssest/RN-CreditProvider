import PayBills from "@/assets/icons/pay-bills.svg";
import SendMoney from "@/assets/icons/send-money.svg";
import TransactionHistory from "@/assets/icons/transaction-history.svg";
import { appStyles } from "@/constants/styles";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Column from "../common/Column";
import { GapColumn } from "../common/Gap";
import Row from "../common/Row";

export default function ServicesCard() {
    const router = useRouter();
    const services = [
        { id: '1', name: 'Send Money', icon: <SendMoney />, background: 'rgba(132, 59, 201, 0.06)', isSvg: true },
        { id: '2', name: 'Pay Bills', icon: <PayBills />, background: 'rgba(249, 83, 42, 0.06)', isSvg: true },
        { id: '4', name: 'Peer-to-Peer Credit', background: 'rgba(0, 214, 56, 0.06)', icon: '@/assets/images/peerpay-logo.png', isSvg: false },
        { id: '3', name: 'Transaction History', icon: <TransactionHistory />, background: 'rgba(37, 116, 254, 0.06)', isSvg: true },
    ]

    return (
        <View style={[appStyles.container, {
            backgroundColor: 'white', boxShadow: [],
            borderRadius: 8,
            width: '100%',
            alignSelf: 'center',
            paddingBottom: 25
        }]}>
            <Text style={[appStyles.text16, { color: 'black', fontWeight: 500 }]}>Services</Text>
            <GapColumn space={5} />
            <Row style={{
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
            }}>
                {services.map((item) => (
                    <Column key={item.id} style={{
                        height: 100,
                        width: '25%',
                        alignItems: 'center',
                        paddingVertical: 10,
                    }}>
                        <View style={[
                            appStyles.borderContainer, {
                                height: 64,
                                width: 64,
                                padding: 10,
                                borderWidth: 0,
                                backgroundColor: item.background,
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }
                        ]}>
                            {item.isSvg ?
                                (item.icon) : (<TouchableOpacity onPress={() => {
                                    router.push('/peerpay')
                                }}>
                                    <Image source={require("@/assets/images/peerpay-logo.png")} style={{ width: 30, height: 30 }} />
                                </TouchableOpacity>)
                            }
                        </View>
                        <GapColumn space={5} />
                        <Text style={[appStyles.text10, {
                            color: 'black', textAlign: 'center'
                        }]}>{item.name}</Text>
                    </Column>
                ))}
            </Row>
        </View>
    );
}
