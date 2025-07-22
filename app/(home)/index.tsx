import Column from "@/components/common/Column";
import { GapColumn } from "@/components/common/Gap";
import ServicesCard from "@/components/home/ServicesCard";
import AppBar from "@/components/home/AppBar";
import BalanceCard from "@/components/home/BalanceCard";
import TransactionHistoryList from "@/components/home/TransactionHistory";
import { ScrollView, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { appStyles } from "@/constants/styles";
import Row from "@/components/common/Row";


export default function HomeScreen() {
    const insets = useSafeAreaInsets();

    return (
        <Column style={{ paddingTop: insets.top, flex: 1, paddingHorizontal: 20, alignContent: 'center', backgroundColor: 'black' }}>
            <GapColumn space={20} />
            <AppBar />
            <ScrollView showsVerticalScrollIndicator={false}>
                <GapColumn space={50} />
                <BalanceCard />
                <GapColumn space={20} />
                <ServicesCard />
                <GapColumn space={25} />
                <Row style={{justifyContent: 'space-between'}}>
                    <Text style={[appStyles.text16, { fontWeight: 500 }]}>Transactions</Text>
                    <Text style={[appStyles.text16, { fontWeight: 500, color: 'rgba(118, 118, 118, 1)' }]}>See All</Text>
                </Row>
                <GapColumn space={10} />
                <TransactionHistoryList />
                <GapColumn space={100} />
            </ScrollView>
        </Column>
    );
}
