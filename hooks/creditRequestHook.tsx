import { createContext, ReactNode, useContext, useState } from 'react';

// Define the shape of the context data.
// This interface describes what values and functions will be available
// to any component that uses our `useCreditRequest` hook.
interface CreditRequestContextType {
    // A boolean to control the visibility of the "Approved" dialog.
    // `true` means the dialog is visible, `false` means it's hidden.
    isApprovedVisible: boolean;
    // A boolean to control the visibility of the "Declined" dialog.
    isDeclinedVisible: boolean;
    // A function to show the "Approved" dialog. It takes no arguments and returns nothing.
    showApprovedDialog: () => void;
    // A function to hide the "Approved" dialog.
    hideApprovedDialog: () => void;
    // A function to show the "Declined" dialog.
    showDeclinedDialog: () => void;
    // A function to hide the "Declined" dialog.
    hideDeclinedDialog: () => void;
}

// Create a React Context for the credit request state.
// We initialize it with `undefined` because its value will be provided
// by the `CreditRequestProvider` component higher up in the component tree.
// The generic `<CreditRequestContextType | undefined>` tells TypeScript what kind of value to expect.
const CreditRequestContext = createContext<CreditRequestContextType | undefined>(undefined);

// Create a custom hook `useCreditRequest` for easy consumption of the context.
// This is the main export that other components will use to interact with our state.
export function useCreditRequest() {
    // `useContext` is a React hook that subscribes to a context and gets its current value.
    const context = useContext(CreditRequestContext);
    // This is a crucial safety check. If a component tries to use this hook
    // but it's not wrapped in a `CreditRequestProvider`, the context will be `undefined`.
    // We throw an error to let the developer know they've made a mistake.
    if (!context) {
        throw new Error('useCreditRequest must be used within a CreditRequestProvider');
    }
    // If the context exists (i.e., we are inside a provider), return it.
    // The component will now have access to `isApprovedVisible`, `showApprovedDialog`, etc.
    return context;
}

// This is the internal logic of our hook, encapsulated in its own function.
// It's responsible for creating and managing the state and the functions that modify it.
function useCreditRequestHook() {
    // `useState` declares a state variable. We get back the current state and a function to update it.
    // Here, we manage the visibility for the "Approved" dialog. It starts as `false` (hidden).
    const [isApprovedVisible, setApprovedVisible] = useState(false);
    // And here, we manage the visibility for the "Declined" dialog. It also starts as hidden.
    const [isDeclinedVisible, setDeclinedVisible] = useState(false);

    // This function will be called to show the "Approved" dialog.
    // It simply updates the `isApprovedVisible` state to `true`.
    const showApprovedDialog = () => {
        setApprovedVisible(true);
    };

    // This function hides the "Approved" dialog by setting its state to `false`.
    const hideApprovedDialog = () => {
        setApprovedVisible(false);
    };

    // This function shows the "Declined" dialog by setting its state to `true`.
    const showDeclinedDialog = () => {
        setDeclinedVisible(true);
    };

    // This function hides the "Declined" dialog by setting its state to `false`.
    const hideDeclinedDialog = () => {
        setDeclinedVisible(false);
    };

    // We return an object containing all the state values and functions.
    // This object will become the `value` of our context provider.
    return {
        isApprovedVisible,
        isDeclinedVisible,
        showApprovedDialog,
        hideApprovedDialog,
        showDeclinedDialog,
        hideDeclinedDialog,
    };
}

// Create the Provider component. This is a standard React component.
// Its purpose is to wrap parts of your application that need access to this specific context.
// It accepts `children`, which will be the components it wraps.
export function CreditRequestProvider({ children }: { children: ReactNode }) {
    // We call our internal hook logic to get the state and functions.
    const value = useCreditRequestHook();
    return (
        // The `.Provider` component is part of the Context API.
        // It takes a `value` prop, which is the data we want to make available.
        // Any component rendered inside this provider (as `children`) can now access this `value`
        // by using the `useCreditRequest` hook.
        <CreditRequestContext.Provider value={value}>
            {children}
        </CreditRequestContext.Provider>
    );
}
