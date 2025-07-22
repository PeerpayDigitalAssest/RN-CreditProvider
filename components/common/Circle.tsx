import { View, type ViewProps } from "react-native";


type CircleProps = ViewProps & {
    radius: number,
}

const Circle = ({ radius, style, children }: CircleProps) => {

    return <View style={[style, {
        width: radius,
        height: radius,
        borderRadius: radius / 2,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }]}>
        {children}
    </View>;
};

export default Circle;
