import React from 'react';
import { View, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, Alert } from 'react-native';

import styles from './styles';

import { connect } from 'react-redux';

import BackButton from '../../../../../components/backButton';
import Header from '../../../../../components/headerText';
import Button from '../../../../../components/button';
import HoursItem from '../../../../../components/hoursItem';
import AuthService from '../../../../../services/AuthServices';
import moment from 'moment';

class VendorHours extends React.Component {
    authService = new AuthService();

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            vendor_monday_start : '',
            vendor_monday_end : '',
            vendor_monday_second : false,
            vendor_monday_second_start : '',
            vendor_monday_second_end : '',
            
            vendor_tuesday_start : '',
            vendor_tuesday_end : '',
            vendor_tuesday_second : false,
            vendor_tuesday_second_start : '',
            vendor_tuesday_second_end : '',

            vendor_wednesday_start : '',
            vendor_wednesday_end : '',
            vendor_wednesday_second : false,
            vendor_wednesday_second_start : '',
            vendor_wednesday_second_end : '',

            vendor_thursday_start : '',
            vendor_thursday_end : '',
            vendor_thursday_second : false,
            vendor_thursday_second_start : '',
            vendor_thursday_second_end : '',

            vendor_friday_start : '',
            vendor_friday_end : '',
            vendor_friday_second : false,
            vendor_friday_second_start : '',
            vendor_friday_second_end : '',

            vendor_saturday_start : '',
            vendor_saturday_end : '',
            vendor_saturday_second : false,
            vendor_saturday_second_start : '',
            vendor_saturday_second_end : '',

            vendor_sunday_start : '',
            vendor_sunday_end : '',
            vendor_sunday_second : false,
            vendor_sunday_second_start : '',
            vendor_sunday_second_end : ''
        }
    }

    componentDidMount() {
        this.pre_process_hours()
    }

    pre_process_hours = () => {
        let sundayTime = this.props.route.params.sunday
        let mondayTime = this.props.route.params.monday
        let tuesdayTime = this.props.route.params.tuesday
        let wednesdayTime = this.props.route.params.wednesday
        let thursdayTime = this.props.route.params.thursday
        let fridayTime = this.props.route.params.friday
        let saturdayTime = this.props.route.params.saturday

        console.log(mondayTime)

        if(sundayTime != ''){
            sundayTime.replace(/\s+/g, "")
            if(sundayTime.indexOf(',') != -1){
                console.log(saturdayTime.splite(',')) 
                this.setState({vendor_sunday_second : true})
            }

        }

        if(mondayTime != ''){
            mondayTime.replace(/\s+/g, "")
            if(mondayTime.indexOf(',') != -1){
                // console.log(mondayTime.splite(',')) 
                this.setState({vendor_monday_second : true})
            }

        }
    }



    saveFunc = () => {
        let sunday = ''
        let monday = ''
        let tuesday = ''
        let wednesday = ''
        let thursday = ''
        let friday = ''
        let saturday = ''

        if(this.state.vendor_monday_start.length > 0 &&
            this.state.vendor_monday_end.length > 0 &&
            this.state.vendor_tuesday_start.length > 0 &&
            this.state.vendor_tuesday_end.length > 0 &&
            this.state.vendor_wednesday_start.length > 0 &&
            this.state.vendor_wednesday_end.length > 0 &&
            this.state.vendor_thursday_start.length > 0 &&
            this.state.vendor_tuesday_end.length > 0 &&
            this.state.vendor_friday_start.length > 0 &&
            this.state.vendor_friday_end.length > 0 &&
            this.state.vendor_saturday_start.length > 0 &&
            this.state.vendor_saturday_end.length > 0 &&
            this.state.vendor_sunday_start.length > 0 &&
            this.state.vendor_sunday_end.length > 0)
        {
            sunday = this.state.vendor_sunday_start + "-" + this.state.vendor_sunday_end
            monday = this.state.vendor_monday_start + "-" + this.state.vendor_monday_end
            tuesday = this.state.vendor_tuesday_start + "-" + this.state.vendor_tuesday_end
            wednesday = this.state.vendor_wednesday_start + "-" + this.state.vendor_wednesday_end
            thursday = this.state.vendor_thursday_start + "-" + this.state.vendor_thursday_end
            friday = this.state.vendor_friday_start + "-" + this.state.vendor_friday_end
            saturday = this.state.vendor_saturday_start + "-" + this.state.vendor_saturday_end

            if(this.state.vendor_monday_second)
            {
                if(this.state.vendor_monday_second_start.length == 0 ||
                    this.state.vendor_monday_second_end.length == 0)
                {
                    Alert.alert('Alert', "Please fill out all field")
                    return
                }
                else{
                    monday += "," + this.state.vendor_monday_second_start + '-' + this.state.vendor_monday_second_end
                }
            }
            if(this.state.vendor_tuesday_second)
            {
                if(this.state.vendor_tuesday_second_start.length == 0 ||
                    this.state.vendor_tuesday_second_end.length == 0)
                {
                    Alert.alert('Alert', "Please fill out all field")
                    return
                }
                else{
                    monday += "," + this.state.vendor_monday_second_start + '-' + this.state.vendor_monday_second_end
                }
            }
            if(this.state.vendor_wednesday_second)
            {
                if(this.state.vendor_wednesday_second_start.length == 0 ||
                    this.state.vendor_wednesday_second_end.length == 0)
                {
                    Alert.alert('Alert', "Please fill out all field")
                    return
                }
                else{
                    wednesday += "," + this.state.vendor_wednesday_second_start + '-' + this.state.vendor_wednesday_second_end
                }
            }   
            if(this.state.vendor_thursday_second)
            {
                if(this.state.vendor_thursday_second_start.length == 0 ||
                    this.state.vendor_thursday_second_end.length == 0)
                {
                    Alert.alert('Alert', "Please fill out all field")
                    return
                }
                else{
                    thursday += "," + this.state.vendor_thursday_second_start + '-' + this.state.vendor_thursday_second_end
                }
            }
            if(this.state.vendor_friday_second)
            {
                if(this.state.vendor_friday_second_start.length == 0 ||
                    this.state.vendor_friday_second_end.length == 0)
                {
                    Alert.alert('Alert', "Please fill out all field")
                    return
                }
                else{
                    friday += "," + this.state.vendor_friday_second_start + '-' + this.state.vendor_friday_second_end
                }
            }
            if(this.state.vendor_saturday_second)
            {
                if(this.state.vendor_saturday_second_start.length == 0 ||
                    this.state.vendor_saturday_second_end.length == 0)
                {
                    Alert.alert('Alert', "Please fill out all field")
                    return
                }
                else{
                    saturday += "," + this.state.vendor_saturday_second_start + '-' + this.state.vendor_saturday_second_end
                }
            }
            if(this.state.vendor_sunday_second)
            {
                if(this.state.vendor_sunday_second_start.length == 0 ||
                    this.state.vendor_sunday_second_end.length == 0)
                {
                    Alert.alert('Alert', "Please fill out all field")
                    return
                }
                else{
                    sunday += "," + this.state.vendor_sunday_second_start + '-' + this.state.vendor_sunday_second_end
                }
            }
            this.updateVendor(sunday.replace(/\s+/g, ""), monday.replace(/\s+/g, ""), tuesday.replace(/\s+/g, ""), wednesday.replace(/\s+/g, ""), thursday.replace(/\s+/g, ""), friday.replace(/\s+/g, ""), saturday.replace(/\s+/g, ""))
        }
    }

    updateVendor = (sunday, monday, tuesday, wednesday, thursday, friday, saturday) => {
        this.setState({ loading: true }, async () => {
            let formData = new FormData();
            formData.append('userID', this.props.auth.userID);
            formData.append('hours_sunday', sunday);
            formData.append('hours_monday', monday);
            formData.append('hours_tuesday', tuesday);
            formData.append('hours_wednesday', wednesday);
            formData.append('hours_thursday', thursday);
            formData.append('hours_friday', friday);
            formData.append('hours_saturday', saturday);

            this.authService.updateVendor(formData, async (res) => {
                this.setState({ loading: false }, () => {
                    this.props.navigation.goBack();
                })
            });
        });
    }

    updateState = (key, value) => {
        this.setState({
            [key]: value,
        });
    };

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                        <View style={styles.container}>
                            <BackButton navigation={this.props.navigation} />
                            <Header title="Vendor Name" />

                            <HoursItem
                                day="Monday"
                                updateFunc = {this.updateState}
                                start = "vendor_monday_start"
                                end = "vendor_monday_end"
                                startSecond = "vendor_monday_second_start"
                                endSecond = "vendor_monday_second_end"
                                second= "vendor_monday_second"/>
                            <HoursItem
                                day="Tuesday"
                                updateFunc = {this.updateState}
                                start = "vendor_tuesday_start"
                                end = "vendor_tuesday_end"
                                startSecond = "vendor_tuesday_second_start"
                                endSecond = "vendor_tuesday_second_end"
                                second= "vendor_tuesday_second" />
                            <HoursItem
                                day="Wednesday"
                                updateFunc = {this.updateState}
                                start = "vendor_wednesday_start"
                                end = "vendor_wednesday_end"
                                startSecond = "vendor_wednesday_second_start"
                                endSecond = "vendor_wednesday_second_end"
                                second= "vendor_wednesday_second" />
                            <HoursItem
                                day="Thursday"
                                updateFunc = {this.updateState}
                                start = "vendor_thursday_start"
                                end = "vendor_thursday_end"
                                startSecond = "vendor_thursday_second_start"
                                endSecond = "vendor_thursday_second_end"
                                second= "vendor_thursday_second" />
                            <HoursItem
                                day="Friday"
                                updateFunc = {this.updateState}
                                start = "vendor_friday_start"
                                end = "vendor_friday_end"
                                startSecond = "vendor_friday_second_start"
                                endSecond = "vendor_friday_second_end"
                                second= "vendor_friday_second" />
                            <HoursItem
                                day="Saturday"
                                updateFunc = {this.updateState}
                                start = "vendor_saturday_start"
                                end = "vendor_saturday_end"
                                startSecond = "vendor_saturday_second_start"
                                endSecond = "vendor_saturday_second_end"
                                second= "vendor_saturday_second" />
                            <HoursItem
                                day="Sunday"
                                updateFunc = {this.updateState}
                                start = "vendor_sunday_start"
                                end = "vendor_sunday_end"
                                startSecond = "vendor_sunday_second_start"
                                endSecond = "vendor_sunday_second_end"
                                second= "vendor_sunday_second" />

                            <View style={styles.buttonContainer}>
                                <Button 
                                    blue={true} 
                                    loading={this.state.loading}
                                    title="SAVE" 
                                    func={this.saveFunc} />
                            </View>

                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

export default connect(mapStateToProps, null)(VendorHours);