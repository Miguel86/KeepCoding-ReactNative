import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import {connect} from 'react-redux'

class Characters extends Component {
    componentDidMount(){
        this.props.fetchHouseCharacters()
    }

    render() {
        /*console.log("characters house: ", this.props.house)*/
        return (
            <View style={styles.container}>
                
            </View>
        )
        //<Text style={{color: 'white', fontWeight: 'bold' }}>PERSONAJES</Text>
    }
}
//Declaración como constante
const mapStateToProps = (state) => {
    return {
        isFetching: state.characters.isFetching,
        /*house: state.houses.item,*/
    }
}

//Declaración como función
function mapDispatchToProps(dispatch, props) {
    return {
        fetchHouseCharacters: () => {
            /*console.log("fetchHouseCharacters mapDispatchToProps")*/
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters)