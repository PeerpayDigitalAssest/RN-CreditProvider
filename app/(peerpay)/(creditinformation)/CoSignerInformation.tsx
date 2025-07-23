import Column from '@/components/common/Column';
import { GapColumn } from '@/components/common/Gap';
import Row from '@/components/common/Row';
import MainButton from '@/components/credit_requests/MainButton';
import DropdownTextField from '@/components/ui/DropdownTextField';
import TextField from '@/components/ui/TextField';
import { Colors } from '@/constants/Colors';
import { appStyles } from '@/constants/styles';
import { GestureResponderEvent, ScrollView, Text, TouchableOpacity, View } from 'react-native'

type PressProps = {
    onBack: (event: GestureResponderEvent) => void;
    onNext: (event: GestureResponderEvent) => void;
}

export default function CoSignerInformation(props: PressProps) {
    return (
        <Column>
            <GapColumn space={30} />
            <Text style={[appStyles.text16, {
                fontSize: 14, fontWeight: '600', alignSelf: 'center'
            }]}>Co-signer's Information</Text>
            <GapColumn space={5} />
            <Text style={[appStyles.text12, {
                textAlign: 'center'
            }]}>Please provide information for all cosigners. A minimum of 2 cosigners is required.</Text>
            <GapColumn space={30} />
            {/* The Co-signer Information */}
            <View style={[appStyles.borderContainer, {
                width: '100%',
                height: 'auto',
                padding: 15
            }]}>
                <TextField title={"Account Number"}
                    placeholder="100,000.00"
                    keyboardType="numeric"
                    enterKeyHint='done' />
                <GapColumn space={20} />
                <DropdownTextField title={"Select Bank"}
                    placeholder="Aloz Bank"
                    options={["Aloz Bank", "Bank of America", "Chase"]}
                    onSelect={(value) => console.log(value)}
                />
                <GapColumn space={20} />
                <TextField title={"Residential Address"}
                    placeholder="123 Main St"
                    keyboardType="default"
                    enterKeyHint='done' />
                <GapColumn space={20} />
                <DropdownTextField title={"Relationship to Co-Signer"}
                    placeholder="Brother"
                    options={[
                        "Spouse",
                        "Parent",
                        "Sibling",
                        "Friend",
                        "Business Partner",
                        "Other"
                    ]}
                    onSelect={(value) => console.log(value)}
                />
                <GapColumn space={20} />
                <DropdownTextField title={"Occupation"}
                    placeholder="Government Worker"
                    options={[
                        "Software Engineer",
                        "Doctor",
                        "Government Worker",
                        "Teacher",
                        "Artist",
                        "Entrepreneur",
                        "Other"
                    ]}
                    onSelect={(value) => console.log(value)}
                />
                <GapColumn space={20} />
                <View style={[appStyles.borderContainer, {
                    width: '100%',
                    height: 'auto',
                    backgroundColor: Colors.grey,
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 10
                }]}>
                    <Text style={[appStyles.text12, {
                        textAlign: 'center'
                    }]}>Add Co-Signer  +</Text>
                </View>
            </View>


            <GapColumn space={50} />
            <Row>
                <MainButton title='Back' type='greyBorder' onPress={
                    props.onBack
                } />
                <MainButton title='Next' type='primary' onPress={
                    props.onNext
                } />
            </Row>
            <GapColumn space={25} />
        </Column>
    );
}
