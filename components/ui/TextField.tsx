import { type TextProps, type TextInputProps, Text, TextInput, KeyboardTypeOptions, EnterKeyHintTypeOptions } from "react-native"
import Column from "../common/Column";
import { appStyles } from "@/constants/styles";
import { GapColumn } from "../common/Gap";

type TextFieldProps = {
    title: string
    textStyle?: TextProps
    textInputStyle?: TextInputProps
    placeholder: string
    keyboardType?: KeyboardTypeOptions
    enterKeyHint?: EnterKeyHintTypeOptions
}
export default function TextField({title, ...props}: TextFieldProps) {
    return (
        <Column>
            <Text style={[appStyles.text12, props.textStyle, {
                fontWeight: '400', alignSelf: 'flex-start'
            }]}>{title}</Text>
            <GapColumn space={10} />
            <TextInput style={[appStyles.input, props.textInputStyle]}
                placeholder={props.placeholder}
                placeholderTextColor={'grey'}
                keyboardType={props.keyboardType}
                enterKeyHint={props.enterKeyHint}
            />
        </Column>
    );
}
