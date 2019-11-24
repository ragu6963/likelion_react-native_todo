import React, { Component } from 'react'
import { Container, Text, Grid, Row } from 'native-base'
import Form from './Form'
import Index from './Index'
export default class View extends Component {
    render() {
        return (
            <Container>
                <Grid>
                    <Row size={5}>
                        <Form />
                    </Row>
                    <Row size={95}>
                        <Index />
                    </Row>
                </Grid>
            </Container>
        )
    }
}
