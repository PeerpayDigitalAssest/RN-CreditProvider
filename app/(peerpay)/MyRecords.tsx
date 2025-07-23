
import { GapColumn } from "@/components/common/Gap";
import RecordTile from "@/components/ui/RecordTile";
import { View, ScrollView, Text } from "react-native";

export default function MyRecordsTab() {
    return <ScrollView style={{ flex: 1, width: '100%', paddingHorizontal: 20 }}>
        <GapColumn space={20} />
        <RecordTile
            bankName={"NuelBank"}
            accountName={"Blessing Alozie"}
            accountNumber={"5006334999"}
            amount={"20,000.00"}
            dateTime={"Jan  10th, 2025  -  10:25am"}
        />
        <GapColumn space={20} />
        <RecordTile
            bankName={"NuelBank"}
            accountName={"Blessing Alozie"}
            accountNumber={"5006334999"}
            amount={"20,000.00"}
            dateTime={"Jan  10th, 2025  -  10:25am"}
        />
        <GapColumn space={20} />
        <RecordTile
            bankName={"NuelBank"}
            accountName={"Blessing Alozie"}
            accountNumber={"5006334999"}
            amount={"20,000.00"}
            dateTime={"Jan  10th, 2025  -  10:25am"}
        />
    </ScrollView>
}
