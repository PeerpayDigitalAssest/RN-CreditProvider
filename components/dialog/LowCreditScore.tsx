import { appStyles } from "@/constants/styles";
import { Dialog } from "@rneui/base";
import { Text } from "react-native";

import { Colors } from "@/constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Column from "../common/Column";
import { GapColumn, GapRow } from "../common/Gap";
import Row from "../common/Row";
import MainButton from "../credit_requests/MainButton";

export default function LowCreditScoreDialog({ creditScore, visible, onDismiss, onAddCosigner, onContinue }: { visible: boolean, onDismiss: () => void, onAddCosigner: () => void, onContinue: () => void, creditScore: number }) {
    const insets = useSafeAreaInsets();
    return (
        <Dialog
            isVisible={visible}
            onBackdropPress={onDismiss}
            animationType='fade'
            backdropStyle={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}
            overlayStyle={{
                backgroundColor: '#E8FFF8',
                width: '90%',
                height: 'auto',
                borderRadius: 10,
                position: "absolute",
                top: insets.top,
                padding: 20,
            }}
        >
            <Column>

                <Row style={{ flex: 1 }}>
                    <Text style={{ fontSize: 40 }}>😔</Text>
                    <GapRow space={10} />
                    <Column style={{ width: '80%' }}>
                        <Text style={[appStyles.text14, {
                            color: 'rgba(223, 50, 102, 1)'
                        }]}>
                            Low Credit Score Detected
                        </Text>
                        <Text style={[appStyles.text12, {
                            color: Colors.grey
                        }]}>
                            {`
Your current credit score is below our recommended threshold of ${creditScore}%.

This may affect your credit approval or terms.You can add co-signers to strengthen your application.
`}
                        </Text>
                    </Column>
                </Row>
                <GapColumn space={20} />
                <Row style={{ justifyContent: 'space-between' }}>
                    <MainButton
                    title='Add Co-Signer'
                    type='greyBorder'
                    onPress={onAddCosigner} />
                    <MainButton
                    title='Continue Anyway'
                    type='primary'
                    onPress={onContinue} />
                </Row>
                <GapColumn space={5} />
            </Column>
        </Dialog>
    );
}
