import Column from "@/components/common/Column";
import { GapColumn, GapRow } from "@/components/common/Gap";
import Row from "@/components/common/Row";
import AppBar from "@/components/home/AppBar";
import NotificationDetailsCard from "@/components/notification/NotificationDetails";
import { appStyles } from "@/constants/styles";
import { CreditRequestProvider } from "@/hooks/creditRequestHook";
import { NotificationProvider, useNotification } from "@/hooks/notificationTabHook";
import { Tab, TabView } from '@rneui/themed';
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CreditRequest from "./(peerpay)/CreditRequest";
import MyRecordsTab from "./(peerpay)/MyRecords";
import NotificationsTab from "./(peerpay)/Notifications";

function PeerpayTab() {
    const notification = useNotification(); // State Hook
    const [index, setIndex] = React.useState(0);
    return (
        <View style={[styles.tabContainer, appStyles.container, {
            width: '95%',
            padding: 0,
            paddingTop: 20,
            alignSelf: 'center',
            backgroundColor: 'rgba(30, 30, 30, 1)'
        }]}>
            {notification.notificationIndex === 0 ? (
                <>
                    <Tab
                        value={index}
                        onChange={setIndex}
                        scrollable={true}
                        indicatorStyle={{
                            backgroundColor: 'white',
                        }}
                        style={{ backgroundColor: 'transparent' }}
                    >
                        <Tab.Item
                            title="Credit Requests"
                            titleStyle={(active) => ([
                                appStyles.text12,
                                { color: active ? 'white' : 'grey' }
                            ])}
                        />
                        <Tab.Item
                            title="My Records"
                            titleStyle={(active) => ([
                                appStyles.text12,
                                { color: active ? 'white' : 'grey', }
                            ])}
                        />
                        <Tab.Item
                            title="Notifications"
                            titleStyle={(active) => ([
                                appStyles.text12,
                                { color: active ? 'white' : 'grey' }
                            ])}
                        />
                    </Tab>
                    <TabView value={index} onChange={setIndex} animationType="timing" disableSwipe={true}>
                        <TabView.Item style={{ width: '100%', flex: 1, overflow: 'hidden'}}>
                            <CreditRequest />
                        </TabView.Item>
                        <TabView.Item style={{ width: '100%', flex: 1, overflow: 'hidden' }}>
                            <MyRecordsTab />
                        </TabView.Item>
                        <TabView.Item style={{ width: '100%', flex: 1, overflow: 'hidden' }}>
                            <NotificationsTab />
                        </TabView.Item>
                    </TabView>
                </>
            ) : (
                <NotificationDetailsCard />
            )}
        </View>
    );
}

function PeerpayContent() {
    return (
        <Column style={styles.contentContainer}>
            <GapColumn space={20} />
            <AppBar showBack={true} />
            <GapColumn space={20} />
            <Row style={{ paddingLeft: 20 }}>
                <Image
                    style={{
                        height: 25, width: 25, backgroundColor: 'white',
                        padding: 5
                    }}
                    source={require("@/assets/images/peerpay-logo.png")} />
                <GapRow space={10} />
                <Text style={[appStyles.text16, {
                    fontWeight: '500',
                    color: 'white'
                }]} >Peer-to-Peer Credit</Text>
            </Row>
            <GapColumn space={10} />
            <PeerpayTab />
        </Column>
    );
}

export default function PeerpayCredit() {
    const insets = useSafeAreaInsets();
    return (
        <CreditRequestProvider>
            <NotificationProvider>
                <View style={[appStyles.screen, { paddingTop: insets.top, backgroundColor: 'black' }]}>
                    <View style={{ backgroundColor: 'black', height: 225, width: '100%', position: 'absolute', top: 0 }} />
                    <PeerpayContent />
                </View>
            </NotificationProvider>
        </CreditRequestProvider>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        width: '100%',
    },
    tabContainer: {
        flex: 1,
        marginTop: 20,
    },
});
