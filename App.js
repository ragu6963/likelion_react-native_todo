import React from 'react';
import { AppLoading } from 'expo';
import { Container, Header } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import View from './components/View'
import { AsyncStorage } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            Notes: {}
        };
    }
    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        const loadNotes = await AsyncStorage.getItem("Notes")
        const parseNote = JSON.parse(loadNotes)
        this.setState({
            Notes: parseNote,
            isReady: true,
        })
    }
    render() {
        if (!this.state.isReady) {
            return <AppLoading />;
        }
        return (
            <Container>
                <Header />
                <View Notes={this.state.Notes} />
            </Container>
        );
    }
}