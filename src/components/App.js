import React, { Component } from 'react'
import { View, Text } from 'react-native'
import {Router, Scene, Stack, Actions } from 'react-native-router-flux'
//import { Houses } from './sections/'
import Houses from './sections/houses/view'
export default class App extends Component {
    
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="houses" component={Houses} title="Houses"/>
                </Stack>
            </Router>
        )
    }
}