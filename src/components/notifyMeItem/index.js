import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';

export default class NotifyMeItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showTime: false,
            time: new Date("2020-08-14T09:47:10.842Z"),
            showDate: false,
            date: new Date("2020-08-14T09:47:10.842Z"),
        }
    }

    parseTime = () => {
        let zone;
        let hours = this.state.time.getHours();
        let minutes = this.state.time.getMinutes();

        if (this.state.time.getHours() > 11) {
            zone = "PM";
            hours = hours - 12
        }
        else
            zone = "AM";
        return hours + ":" + minutes + " " + zone;
    }

    parseDate = () => {
        let date = this.state.date.getDate();
        let month = this.state.date.getMonth() + 1;
        let year = this.state.date.getFullYear();
        return month + "-" + date + "-" + year;
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
                        <Text style={[styles.greyText, { fontSize: 14 }]}>{this.parseTime()}</Text>
                        <Entypo name="chevron-thin-down" size={11} color={"#9B9B9B"} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.setState({ showDate: true })}
                        style={styles.timeContainer}>
                        <Text style={[styles.greyText, { fontSize: 14 }]}>{this.parseDate()}</Text>
                        <Entypo name="chevron-thin-down" size={11} color={"#9B9B9B"} />
                    </TouchableOpacity>
                </View>

                <DateTimePickerModal
                    date={this.state.time}
                    isVisible={this.state.showTime}
                    mode="time"
                    onConfirm={time => this.setState({ time: time, showTime: false })}
                    onCancel={() => this.setState({ showTime: false })}
                />
                <DateTimePickerModal
                    date={this.state.date}
                    isVisible={this.state.showDate}
                    mode="date"
                    onConfirm={date => this.setState({ date: date, showDate: false })}
                    onCancel={() => this.setState({ showDate: false })}
                />

            </View>
        );
    }
}