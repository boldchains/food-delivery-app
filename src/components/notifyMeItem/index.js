import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import styles from './styles';

export default class NotifyMeItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showTime: false,
            time: new Date(15980517300000),
            showDate: false,
            date: "",
            isDateTimePickerVisible: false,
            mode: "time",
            show: false,
            date: new Date(15980517300000),
            time: ""
        }
    }

    showDateTimePicker = () => {
        this.setState({ show: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this.hideDateTimePicker();
    };

    onChange = (event, selectedDate) => {
        console.log("Promenuli smo vreme");
        const currentDate = selectedDate || date;
        //setShow(Platform.OS === 'ios');
        //setDate(currentDate);
    };

    parseTime = () => {
        return this.state.time.getMinutes;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.boldText}>Notify me when</Text>
                <Text style={[styles.boldText, { marginTop: 32 }]}>In the featured restaraunt</Text>
                <Text style={[styles.greyText, { marginTop: 15 }]}>Remind me at</Text>
                <View style={styles.rowContainer}>
                    <TouchableOpacity
                        onPress={() => this.setState({ showTime: true })}
                        style={[styles.timeContainer, { marginRight: 8 }]}>
                        <View>
                            <Text>{this.parseTime()}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.timeContainer}>
                    </View>
                </View>

                <DateTimePickerModal
                    isVisible={this.state.showTime}
                    mode="time"
                    onConfirm={time => this.setState({ time, showTime: false })}
                    onCancel={() => this.setState({ showTime: false })}
                />
                <DateTimePickerModal
                    isVisible={this.state.showDate}
                    mode="date"
                    onConfirm={date => console.log("Izabrali smo vreme:", date)}
                    onCancel={() => this.setState({ showDate: false })}
                />

            </View>
        );
    }
}