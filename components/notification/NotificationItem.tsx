import Column from "@/components/common/Column";
import { GapColumn, GapRow } from "@/components/common/Gap";
import Row from "@/components/common/Row";
import { appStyles } from "@/constants/styles";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import CliMoney from "@/assets/icons/cil_money.svg"
import Circle from "@/components/common/Circle";
import {useNotification} from "@/hooks/notificationTabHook";

export default function NotificationItem() {
    const notification = useNotification();
    return (
        <TouchableOpacity onPress={notification.goToNotificationDetails}>
            <View style={[appStyles.borderContainer, {
                height: 'auto',
                padding: 10,
                borderColor: 'rgba(255, 255, 255, 0.2)'
            }]}>
                <Row>
                    <Circle radius={20} style={[
                        {
                            backgroundColor: 'white',
                            borderColor: 'white'
                        }
                    ]}>
                        <CliMoney />
                    </Circle>
                    <GapRow space={10} />
                    <Column>
                        <Text style={[appStyles.text14, {
                            fontWeight: '500'
                        }]}>Credit Request From Blessing</Text>
                        <GapColumn space={5} />
                        <Text style={[appStyles.text12, {
                        }]}>N100,000 for 6 months at 10% rate</Text>
                        <GapColumn space={5} />
                        <Text style={[appStyles.text10]}>View Details</Text>

                    </Column>
                </Row>
            </View>
        </TouchableOpacity>
    );
}
