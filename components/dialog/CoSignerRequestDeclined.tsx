import { appStyles } from "@/constants/styles";
import { Dialog } from "@rneui/base";
import { Text } from "react-native";

import { GapColumn, GapRow } from "../common/Gap";
import Row from "../common/Row";
import { Colors } from "@/constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Column from "../common/Column";

export default function CoSignerRequestDeclinedDialog({visible, onDismiss}: { visible: boolean, onDismiss: () => void }) {
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
                backgroundColor: 'rgba(255, 232, 239, 1)',
                width: '90%',
                height: 'auto',
                borderRadius: 10,
                position: "absolute",
                top: insets.top,
                padding: 20,
            }}
        >
           <Row style={{flex: 1}}>
                <Text style={{fontSize: 40}}>😔</Text>
            <GapRow space={10} />
            <Column style={{width: '80%'}}>
                    <Text style={[appStyles.text14, {
                        color: 'rgba(223, 50, 102, 1)'
                    }]}>
                        Credit Request Declined
                    </Text>
                    <Text style={[appStyles.text12, {
                        color: Colors.grey
                    }]}>
                        You have declined a loan request from Blessing Ihechi Alozie.
                    </Text>
                    </Column>
           </Row>
        </Dialog>
    );
}
