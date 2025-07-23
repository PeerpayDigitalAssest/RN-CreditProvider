import { appStyles } from "@/constants/styles";
import Row from "../common/Row";
import { Text } from 'react-native';

type TextDescriptionProps = {
    text: string,
    description: string,
}

export default function NotificationTextAndDescription(props: TextDescriptionProps) {
    return (
        <Row>
            <Text style={[appStyles.text12, {
                color: 'grey'
            }]}>{props.text} </Text>
            <Text style={[appStyles.text12]}> {props.description}</Text>
        </Row>
    );
}
