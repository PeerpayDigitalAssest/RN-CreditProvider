import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface NotificationContextType {
    notificationIndex: number;
    goToNotificationDetails: () => void;
    goBack: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function useNotification() {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
}

function useNotificationHook() {
    const [notificationIndex, setNotificationIndex] = useState(0);

    useEffect(() => {
        // Resets the view to the list when the component mounts
        setNotificationIndex(0);
    }, []);

    const goToNotificationDetails = () => {
        setNotificationIndex(1);
    };

    const goBack = () => {
        setNotificationIndex(0);
    };

    return { notificationIndex, goToNotificationDetails, goBack };
}

export function NotificationProvider({ children }: { children: ReactNode }) {
    const value = useNotificationHook();
    return (
        // Provide the notification context to children components
        <NotificationContext.Provider value={value}>
            {children}
        </NotificationContext.Provider>
    );
}
