import { GapColumn, GapRow } from '@/components/common/Gap';
import { Colors } from '@/constants/Colors';
import { appStyles } from '@/constants/styles';
import { Button, CheckBox, Dialog } from '@rneui/themed';
import React from 'react';
import { Text } from 'react-native';
import Row from '../common/Row';
import { useCreditRequest } from '@/hooks/creditRequestHook';

type CreditRequestDialogProps = {
    visible: boolean;
    onClose: () => void;
    onConfirm?: () => void;
};

export default function CreditRequestDialog({ visible, onClose, onConfirm }: CreditRequestDialogProps) {
     const {  showApprovedDialog, showDeclinedDialog, hideDeclinedDialog } = useCreditRequest();
    return <Dialog
        isVisible={visible}
        onBackdropPress={onClose}
        animationType='fade'
        backdropStyle={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }}
        overlayStyle={{
            backgroundColor: Colors.grey,
            borderRadius: 10,
            position: "relative",
            padding: 20,
        }}>

        <Text style={[appStyles.text16, {
            alignSelf: 'center'
        }]}>
            Terms Of Service
        </Text>
        <GapColumn space={20} />
        <Text style={[appStyles.text12, {}]}>
            {
                `1. Introduction

1.1 Overview: These end-user terms and condition (Terms) govern your access to and use of Peerpay Digital Asset Limited (RC‑1600947) ("PeerPay," "we," "us," or "our") Services, including our website (https://peerpaynetwork.com), APIs, Dashboard, and Widget (collectively, "Services").

1.2 Acceptance: By clicking "I agree," registering, or using any part of the Services, you confirm that you have read, understood, and agree to these Terms and our Privacy Policy (see Section 12). If you do not agree, you must not use the Services.`
            }
        </Text>
        <GapColumn space={20} />
        <CheckBox
            checked={false}
            containerStyle={{
                backgroundColor: Colors.lightGrey,
            }}
            title={"Accept Terms & Condition"}
            textStyle={appStyles.text10}
        />
        <GapColumn space={30} />
        <Row style={{
            width: '60%',
            alignSelf: 'center',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center'


        }}>
            <Button
                buttonStyle={{ height: 40, width: '100%' }}
                type="solid" title="Cancel Request" titleStyle={[appStyles.text12, {}]} color="error" onPress={onClose} />
            <GapRow space={10} />
            <Button
                buttonStyle={{ height: 40, width: '100%' }}
                type="solid" title="Confirm Request" titleStyle={[appStyles.text12, {}]} color="blue" onPress={() => {
                    onConfirm?.();
                    showApprovedDialog();
                }} />
        </Row>
    </Dialog>
}
