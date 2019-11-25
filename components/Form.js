import React, { Component } from 'react'
import { Container, Content, Input } from 'native-base'
export default class Form extends Component {
    render() {
        const { content, _onChange, _onSubmit } = this.props
        return (
            <Container>
                <Content>
                    <Input
                        placeholder="please note input..."
                        value={content}
                        onChangeText={_onChange}
                        onSubmitEditing={_onSubmit}
                        returnKeyType={"done"}
                    />
                </Content>
            </Container>
        )
    }
}
