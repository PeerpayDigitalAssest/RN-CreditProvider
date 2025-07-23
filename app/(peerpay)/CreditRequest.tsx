import React from "react";
import CoSignerInformation from "./(creditinformation)/CoSignerInformation";
import CreditInformation from "./(creditinformation)/CreditInformation";
import TermsOfService from "./(creditinformation)/TermsService";
import Column from "@/components/common/Column";
import { ScrollView, View } from "react-native";
import { GapColumn, GapRow } from "@/components/common/Gap";
import Row from "@/components/common/Row";

export default function CreditRequest() {
    const [index, setIndex] = React.useState(0);

    function goForward() {
        console.log("Going forward...");
        setIndex(index + 1);
    }

    function goBack() {
        setIndex(index - 1)
    }

    return (
        <ScrollView style={{ flex: 1, paddingHorizontal: 10 }}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <GapColumn space={30} />
           <Row style={{
            justifyContent: 'center'
           }}>
                <View style={{
                    height: 10, width: 10, backgroundColor: index === 0 ? 'white' : 'grey', borderRadius: 50,
                    alignSelf: 'center',
                }}></View>
                <GapRow space={20} />
                <View style={{
                    height: 10, width: 10, backgroundColor: index === 1 ? 'white' : 'grey', borderRadius: 50,
                    alignSelf: 'center',
                }}></View>
                <GapRow space={20} />
                <View style={{
                    height: 10, width: 10, backgroundColor: index === 2 ? 'white' : 'grey', borderRadius: 50,
                    alignSelf: 'center',
                }}></View>
           </Row>
            {index === 0 ? (
                <CreditInformation onNext={goForward} />
            ) : index === 1 ? (
                <CoSignerInformation onBack={goBack} onNext={goForward} />
            ) : (
                <TermsOfService onBack={goBack} onSubmit={() => { }} />
            )}
        </ScrollView>
    );
}
