import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default class DriverHoursItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            start: new Date("2020-08-14T09:47:10.842Z"),
            startVisible: false,
            end: new Date("2020-08-14T10:47:10.842Z"),
            endVisible: false,
            startSecond: new Date("2020-08-14T09:47:10.842Z"),
            startSecondVisible: false,
            endSecond: new Date("2020-08-14T10:47:10.842Z"),
            endSecondVisible: false,
            secondShift: this.props.second
        }
    }

    parseTime = time => {
        let zone;
        let hours = time.getHours();
        let minutes = time.getMinutes();

        if (time.getHours() > 11) {
            zone = "PM";
            hours = hours - 12
        }
        else
            zone = "AM";
        return hours + ":" + minutes + " " + zone;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.boldText}>{this.props.day}</Text>
                <View style={styles.rowContainer}>
                    <View >
                        <Text style={styles.greyText}>Start</Text>
                        <TouchableOpacity
                            onPress={() => this.setState({ startVisible: true })}
                            style={[styles.timeContainer, { marginRight: 8 }]}>
                            <Text style={[styles.greyText, { fontSize: 14 }]}>{this.parseTime(this.state.start)}</Text>
                            <Entypo name="chevron-thin-down" size={11} color={"#9B9B9B"} />
                        </TouchableOpacity>
                    </View>
                    <View >
                        <Text style={styles.greyText}>End</Text>
                        <TouchableOpacity
                            onPress={() => this.setState({ endVisible: true })}
                            style={styles.timeContainer}>
                            <Text style={[styles.greyText, { fontSize: 14 }]}>{this.parseTime(this.state.end)}</Text>
                            <Entypo name="chevron-thin-down" size={11} color={"#9B9B9B"} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.secondShiftButton}
                    onPress={() => this.setState({ secondShift: !this.state.secondShift })}>
                    <View style={[styles.checkBox, { backgroundColor: this.state.secondShift ? "#1A2D5A" : "#F9F9F9", borderWidth: this.state.secondShift ? 0 : 1 }]}>
                        {this.state.secondShift ?
                            <MaterialIcons name="done" size={17} color={"white"} /> : null}
                    </View>
                    <Text style={[styles.greyText, { marginLeft: 10 }]}>Second Shift</Text>
                </TouchableOpacity>
                {this.state.secondShift ?
                    <View style={styles.rowContainer}>
                        <View >
                            <Text style={styles.greyText}>Start</Text>
                            <TouchableOpacity
                                onPress={() => this.setState({ startSecondVisible: true })}
                                style={[styles.timeContainer, { marginRight: 8 }]}>
                                <Text style={[styles.greyText, { fontSize: 14 }]}>{this.parseTime(this.state.startSecond)}</Text>
                                <Entypo name="chevron-thin-down" size={11} color={"#9B9B9B"} />
                            </TouchableOpacity>
                        </View>
                        <View >
                            <Text style={styles.greyText}>End</Text>
                            <TouchableOpacity
                                onPress={() => this.setState({ endSecondVisible: true })}
                                style={styles.timeContainer}>
                                <Text style={[styles.greyText, { fontSize: 14 }]}>{this.parseTime(this.state.endSecond)}</Text>
                                <Entypo name="chevron-thin-down" size={11} color={"#9B9B9B"} />
                            </TouchableOpacity>
                        </View>
                    </View> : null}
                <DateTimePickerModal
                    date={this.state.start}
                    isVisible={this.state.startVisible}
                    mode="time"
                    onConfirm={start => this.setState({ start: start, startVisible: false })}
                    onCancel={() => this.setState({ startVisible: false })}
                />
                <DateTimePickerModal
                    date={this.state.end}
                    isVisible={this.state.endVisible}
                    mode="time"
                    onConfirm={end => this.setState({ end: end, endVisible: false })}
                    onCancel={() => this.setState({ endVisible: false })}
                />
                <DateTimePickerModal
                    date={this.state.startSecond}
                    isVisible={this.state.startSecondVisible}
                    mode="time"
                    onConfirm={startSecond => this.setState({ startSecond: startSecond, startSecondVisible: false })}
                    onCancel={() => this.setState({ startSecondVisible: false })}
                />
                <DateTimePickerModal
                    date={this.state.endSecond}
                    isVisible={this.state.endSecondVisible}
                    mode="time"
                    onConfirm={endSecond => this.setState({ endSecond: endSecond, endSecondVisible: false })}
                    onCancel={() => this.setState({ endSecondVisible: false })}
                />
            </View>
        );
    }
}