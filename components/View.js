import React, { Component } from 'react'
import { Container, Grid, Row } from 'native-base'
import Form from './Form'
import Note from './Note'
import { ScrollView } from 'react-native';
import { AsyncStorage } from 'react-native';


export default class View extends Component {
    state = {
        content: "",
        notes: this.props.Notes,
    }
    _handlingChange = (text) => {
        this.setState({
            content: text,
        })
    }
    _handlingSubmit = () => {
        const content = this.state.content
        const ID = Date.now()
        const newNote = {
            id: ID,
            note: content,
            editnote: "",
            iscompleted: false,
            isedited: false,
        }
        const NewNotes = this.state.notes
        NewNotes[ID] = newNote
        this.setState({
            notes: NewNotes,
            content: "",
        })
        this._saveNotes()
    }
    _handlingDelete = (id) => {
        const Notes = this.state.notes
        delete Notes[id]
        this.setState({
            notes: Notes,
        })
        this._saveNotes()

    }
    _handlingComplete = (id) => {
        var Notes = this.state.notes
        Notes[id].iscompleted = !Notes[id].iscompleted
        this.setState({
            notes: Notes,
        })
        this._saveNotes()
    }
    _handlingEdit = (id) => {
        var Notes = this.state.notes
        Notes[id].isedited = true
        this.setState({
            notes: Notes,
        })
    }
    _handlingEditSubmit = (id, text) => {
        var Notes = this.state.notes
        Notes[id].note = text
        Notes[id].isedited = false
        this.setState({
            notes: Notes,
        })
        this._saveNotes()
    }
    _saveNotes = () => {
        const Notes = this.state.notes
        AsyncStorage.setItem("Notes", JSON.stringify(Notes))
    }

    render() {
        return (
            <Container>
                <Grid>
                    <Row size={5}>
                        <Form
                            content={this.state.content}
                            _onChange={this._handlingChange}
                            _onSubmit={this._handlingSubmit}
                        />
                    </Row>
                    <Row size={95}>
                        <ScrollView>
                            {
                                Object.values(this.state.notes).reverse().map(note =>
                                    <Note
                                        key={note.id}
                                        note={note.note}
                                        id={note.id}
                                        iscompleted={note.iscompleted}
                                        isedited={note.isedited}
                                        _onDelete={this._handlingDelete}
                                        _onComplete={this._handlingComplete}
                                        _onEdit={this._handlingEdit}
                                        _onEditSubmit={this._handlingEditSubmit}
                                    />
                                )
                            }
                        </ScrollView>
                    </Row>
                </Grid>
            </Container>
        )
    }
}
