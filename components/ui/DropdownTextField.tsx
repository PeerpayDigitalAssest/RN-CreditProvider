
import { useState } from "react";
import { TouchableOpacity, View, Modal, FlatList, TextProps, Text, StyleProp, ViewStyle } from "react-native";
import { IconSymbol } from "./IconSymbol";
import { appStyles } from "@/constants/styles";
import Column from "../common/Column";
import { GapColumn } from "../common/Gap";
import { Colors } from "@/constants/Colors";

type DropdownProps = {
    title: string;
    textStyle?: TextProps['style'];
    containerStyle?: StyleProp<ViewStyle>;
    placeholder: string;
    options: string[];
    onSelect: (value: string) => void;
};

export default function DropdownTextField({ title, placeholder, options, onSelect, textStyle, containerStyle }: DropdownProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const handleSelect = (value: string) => {
        setSelectedValue(value);
        onSelect(value);
        setModalVisible(false);
    };

    return (
        <Column>
            <Text style={[appStyles.text12, textStyle, {
                fontWeight: '400', alignSelf: 'flex-start'
            }]}>{title}</Text>
            <GapColumn space={10} />
            <TouchableOpacity onPress={() => setModalVisible(true)} style={[appStyles.input, {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }, containerStyle]}>
                <Text style={{ color: selectedValue ? 'white' : 'grey' }}>
                    {selectedValue || placeholder}
                </Text>
                <IconSymbol name="chevron.down" color="white" size={15} />
            </TouchableOpacity>

            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableOpacity
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}
                    onPress={() => setModalVisible(false)}
                >
                    <View style={{ backgroundColor: Colors.grey, borderRadius: 10, width: '80%', maxHeight: '50%' }}>
                        <FlatList
                            data={options}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }}
                                    onPress={() => handleSelect(item)}
                                >
                                    <Text style={{ color: 'white' }}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </Column>
    );
}
