import BackButton from "@/components/common/BackButton";
import Column from "@/components/common/Column";
import { GapColumn, GapRow } from "@/components/common/Gap";
import Row from "@/components/common/Row";
import NotificationTextAndDescription from "@/components/notification/textAndDescription";
import { Colors } from "@/constants/Colors";
import { appStyles } from "@/constants/styles";
import { useCreditRequest } from "@/hooks/creditRequestHook";
import { useNotification } from "@/hooks/notificationTabHook";
import { Button, Divider } from '@rneui/themed';
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import CoSignerRequestApprovedDialog from "../dialog/CoSignerRequestApproved";
import CoSignerRequestDeclinedDialog from "../dialog/CoSignerRequestDeclined";
import CreditRequestDialog from "../dialog/CreditRequestDialog";

export default function NotificationDetailsCard() {

    const [creditRequestVisible, setCreditRequestVisible] = React.useState(false);

    const { isApprovedVisible, showApprovedDialog, hideApprovedDialog, isDeclinedVisible, showDeclinedDialog, hideDeclinedDialog } = useCreditRequest();

    const { goBack } = useNotification();
    return (
        <View>
            <GapColumn space={20} />
            <Row style={{
                alignItems: 'center'
            }}>
                <BackButton onPress={goBack} color={Colors.primary} />
                <GapRow space={15} />
                <Text style={[appStyles.text16, {
                    color: Colors.primary
                }]}>Notifications</Text>
            </Row>
            <GapColumn space={10} />
            <Divider color={Colors.primary} />
            <GapColumn space={30} />
            <View style={[appStyles.container, {
                boxShadow: [],
                backgroundColor: 'rgba(49, 49, 49, 1)',
                width: '100%',
                height: 'auto',
                padding: 20,
                borderRadius: 8,
                alignSelf: 'center'
            }]}>

                <ScrollView style={{
                    width: '100%',
                    height: 'auto',
                    paddingVertical: 5

                }}>
                    <Row>
                        <Column style={{ flex: 1 }}>
                            <Text style={[appStyles.text14, {
                                fontWeight: '500'
                            }]}>Blessing Ihechi Alozie</Text>
                            <GapColumn space={5} />
                            <Row style={{
                                alignItems: 'center'
                            }}>
                                <Image source={require("@/assets/images/nuel-initial.png")} />
                                <GapRow space={5} />
                                <Text style={[appStyles.text10, {
                                    fontWeight: '500'
                                }]}>Nuel Bank - 69284129485</Text>
                            </Row>
                            <GapColumn space={10} />
                        </Column>
                        <Column>
                            <Text style={[appStyles.text8, {
                                textAlign: 'right'
                            }]}>Jan 10th, 2025 - 10:25am</Text>
                            <GapColumn space={5} />
                            <Text style={[appStyles.text14, {
                                textAlign: 'right',
                                color: Colors.primary
                            }]}>NGN 400,000</Text>
                        </Column>
                    </Row>

                    {/* Credit ID, Duration, Interest and Credit Score */}
                    <Column>
                        <NotificationTextAndDescription
                            text="Credit ID"
                            description="918274120498172131231" />
                        <GapColumn space={7} />
                        <NotificationTextAndDescription
                            text="Duration" description="6 months" />
                        <GapColumn space={7} />
                        <NotificationTextAndDescription
                            text="Interest" description="10%" />
                        <GapColumn space={7} />
                        <NotificationTextAndDescription
                            text="Credit Score" description="40%" />
                    </Column>
                    <GapColumn space={10} />
                    <Divider color={'white'} />
                    <GapColumn space={20} />

                    {/* CoSigners */}
                    <Column>
                        <Text style={[appStyles.text16, {
                            fontWeight: '500'
                        }]}>Co-Signer 1</Text>
                        {/* Co-Signers */}
                        <Column>
                            <GapColumn space={7} />
                            <NotificationTextAndDescription
                                text="Name"
                                description="Blessing Ihechi Alozie" />
                            <GapColumn space={7} />
                            <NotificationTextAndDescription
                                text="Account Number" description="69284129485" />
                            <GapColumn space={7} />
                            <NotificationTextAndDescription
                                text="Bank Name" description="Nuel Bank" />
                            <GapColumn space={7} />
                            <NotificationTextAndDescription
                                text="Credit Score" description="40%" />
                        </Column>
                    </Column>
                    <GapColumn space={20} />

                    {/* Total Credit Score */}
                    <Row style={{
                        padding: 10,
                        backgroundColor: 'rgba(232, 255, 248, 1)',
                        borderRadius: 4,
                        alignItems: 'center'
                    }}>
                        <View style={[appStyles.container, {
                            boxShadow: [],
                            padding: 7,
                            height: 35, width: 35,
                            marginHorizontal: 0,
                            borderRadius: 5,
                            backgroundColor: 'white',
                            alignItems: 'center'
                        }]}>
                            <Image source={require("@/assets/icons/bank-icon.png")} height={10} width={10}></Image>
                        </View>
                        <GapRow space={20} />
                        <Column style={{ flex: 1 }}>
                            <Text style={[appStyles.text14, {
                                color: 'green',
                                fontWeight: '700'
                            }]}>Total Credit Score</Text>
                            <Text style={[appStyles.text12, {
                                color: 'black'
                            }]}>The borrower is qualified to get a loan approval.</Text>
                        </Column>
                        <GapRow space={20} />
                        <Text style={[appStyles.text16, {
                            color: 'green',
                            fontWeight: '900',
                            fontSize: 20
                        }]}>99.40%</Text>
                    </Row>
                    <GapColumn space={20} />
                    <Row style={{
                        width: '100%',
                        justifyContent: 'space-between',
                    }}>
                        <Button
                            buttonStyle={{ height: 40, width: 160 }}
                            type="solid" title="Decline" titleStyle={{ color: 'white' }} color="error" onPress={() => { goBack() }} />
                        <Button
                            buttonStyle={{ height: 40, width: 160 }}
                            type="solid" title="Approve" titleStyle={{ color: 'black' }} color="rgba(194, 255, 228, 1)" onPress={() => {
                                setCreditRequestVisible(true)
                            }} />
                    </Row>
                </ScrollView>
            </View>

            {/* The visibility and closing logic for these dialogs are now controlled by our custom hook. */}
            <CreditRequestDialog visible={creditRequestVisible} onClose={() => setCreditRequestVisible(false)} onConfirm={() => {
                setCreditRequestVisible(false);
            }} />
            <CoSignerRequestApprovedDialog visible={isApprovedVisible} onDismiss={hideApprovedDialog} />
            <CoSignerRequestDeclinedDialog visible={isDeclinedVisible} onDismiss={hideDeclinedDialog} />
        </View>
    );
}
