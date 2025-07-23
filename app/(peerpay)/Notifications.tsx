import { GapColumn } from "@/components/common/Gap";
import NotificationItem from "@/components/notification/NotificationItem";
import React from "react";
import { ScrollView } from "react-native";

export default function NotificationsTab() {
    return <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, width: '100%', paddingHorizontal: 20 }}>

        <GapColumn space={20} />
        <NotificationItem />
        <GapColumn space={20} />
        <NotificationItem />
        <GapColumn space={20} />
        <NotificationItem />
        <GapColumn space={20} />
        <NotificationItem />
        <GapColumn space={20} />
        <NotificationItem />
        <GapColumn space={20} />
        <NotificationItem />
        <GapColumn space={20} />
        <NotificationItem />
        <GapColumn space={20} />
        <NotificationItem />
        <GapColumn space={20} />
        <NotificationItem />
        <GapColumn space={40} />
    </ScrollView>
}
