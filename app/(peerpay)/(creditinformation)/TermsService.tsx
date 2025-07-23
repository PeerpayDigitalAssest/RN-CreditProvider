import Column from '@/components/common/Column';
import { GapColumn } from '@/components/common/Gap';
import Row from '@/components/common/Row';
import MainButton from '@/components/credit_requests/MainButton';
import LowCreditScoreDialog from '@/components/dialog/LowCreditScore';
import { appStyles } from '@/constants/styles';
import { CheckBox } from '@rneui/base';
import React from 'react';
import { GestureResponderEvent, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type PressProps = {
    onBack: (event: GestureResponderEvent) => void;
    onSubmit: (event: GestureResponderEvent) => void;
}


export default function TermsOfService(props: PressProps) {
    const [lowCreditScoreVisible, setLowCreditScoreVisible] = React.useState(false);
    return (
        <View>
            <Column>
                <GapColumn space={30} />
                <Text style={[appStyles.text16, {
                    fontSize: 14, fontWeight: '600', alignSelf: 'center'
                }]}>Terms of Service</Text>
                <GapColumn space={10} />
                <Text style={appStyles.text12}>
                    {
                        `
1. Introduction

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
                <GapColumn space={20} />
                <Row style={{ justifyContent: 'space-between' }}>
                    <MainButton title='Back' type='greyBorder' onPress={
                        props.onBack
                    } />
                    <MainButton title='Submit Credit Request' type='primary' onPress={
                        () => {
                            props.onSubmit
                            setLowCreditScoreVisible(true);

                        }
                    } />
                </Row>
                <GapColumn space={25} />
            </Column>
            {/* The visibility and closing logic for these dialogs are now controlled by our custom hook. */}
            <LowCreditScoreDialog
                creditScore={50}
                visible={lowCreditScoreVisible}
                onDismiss={() => { setLowCreditScoreVisible(false) }}
                onAddCosigner={() => { setLowCreditScoreVisible(false) }}
                onContinue={() => { setLowCreditScoreVisible(false) }}
            />
        </View>
    );
}
