import React, { Component } from 'react'
import { CheckBox, ListItem, Text, Left, Body, Right, Input } from 'native-base'
import { TouchableOpacity, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    complete: {
        color: "#999",
        textDecorationLine: "line-through",
    },
    uncomplete: {

    },
});

export default class Note extends Component {
    state = {
        editnote: "",
    }
    _handlingEdit = (id) => {
        const { _onEdit, note } = this.props
        this.setState({
            editnote: note,
        })
        _onEdit(id)
    }
    _handlingEditChange = (text) => {
        this.setState({
            editnote: text,
        })
    }
    _handlingEditSubmit = () => {
        const { id, _onEditSubmit } = this.props
        _onEditSubmit(id, this.state.editnote)
    }
    render() {
        const { id, iscompleted, isedited, note, _onDelete, _onComplete } = this.props
        return (
            <View>
                <ListItem icon>
                    {
                        isedited ?
                            (
                                <React.Fragment>
                                    <Left>
                                    </Left>
                                    <Body>
                                        <Input
                                            onChangeText={this._handlingEditChange}
                                            onSubmitEditing={this._handlingEditSubmit}
                                            returnKeyType={"done"}
                                        >{this.state.editnote}</Input>
                                    </Body>
                                    <Right>
                                    </Right>
                                </React.Fragment>
                            )
                            :
                            (
                                <React.Fragment>
                                    <Left>
                                        <CheckBox
                                            checked={iscompleted}
                                            onPressOut={() => _onComplete(id)}
                                        />
                                    </Left>
                                    <Body>
                                        <Text style={iscompleted ? styles.complete : styles.uncomplete}>
                                            {note}
                                        </Text>
                                    </Body>
                                    <Right>
                                        <TouchableOpacity onPressOut={() => this._handlingEdit(id)}>
                                            <Text>
                                                ✏
                                            </Text>
                                        </TouchableOpacity>
                                    </Right>
                                    <Right>
                                        <TouchableOpacity onPressOut={() => _onDelete(id)}>
                                            <Text>
                                                ❌
                                            </Text>
                                        </TouchableOpacity>
                                    </Right>
                                </React.Fragment>
                            )
                    }
                </ListItem>
            </View >
        )
    }
}
