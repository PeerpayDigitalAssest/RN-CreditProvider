import { appStyles } from "@/constants/styles";
import Column from "../common/Column";
import Row from "../common/Row";
import { Text, View } from 'react-native';

type RecordTileProps = {
    bankName: string,
    accountName: string,
    accountNumber: string,
    amount: string,
    dateTime: string
}

export default function RecordTile(props: RecordTileProps) {
    return (
        <View style={[appStyles.borderContainer, {
            height: 'auto',
            padding: 10
        }]}>
            <Row>
                <Column style={{ flex: 1 }}>
                    <Text style={[appStyles.text12, { fontWeight: '500', paddingBottom: 5 }]}>{props.bankName}</Text>
                    <Text style={[appStyles.text10]}>{props.accountName}-{props.accountNumber}</Text>
                </Column>
                <Column style={{ alignItems: 'flex-end' }}>
                    <Row>
                        <Text style={[appStyles.text12, { fontWeight: '500', paddingBottom: 5 }]}>NGN </Text>
                        <Text style={[appStyles.text12, { fontWeight: '500', paddingBottom: 5, color: 'rgba(49, 255, 193, 1)' }]}>{props.amount}</Text>
                    </Row>
                    <Text style={[appStyles.text10]}>{props.dateTime}</Text>
                </Column>
            </Row>
        </View>
    );
}
