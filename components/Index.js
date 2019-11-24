import React, { Component } from 'react'
import { Container } from 'native-base'
import { ScrollView } from 'react-native';
import Note from './Note'
export default class Index extends Component {
    state = {
        notes: ["test1", "test1", "test1", "test1", "test1", "test1",
            "test1", "test1", "test1", "test1", "test1", "test1", "test1",
            "test1", "test1", "test1", "test1", "test1", "test1", "test1",
            "test1", "test1", "test1", "test1", "test1", "test1", "test1", "test1",
            "test1", "test1", "test1", "test1", "test1", "test1", "test1", "test1",]
    }
    render() {
        return (
            <Container>
                <ScrollView>

                    {
                        this.state.notes.map((note, index) => {
                            return (
                                <Note key={index} note={note} />
                            )
                        })
                    }

                </ScrollView>
            </Container>
        )
    }
}
