import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native';
import Firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
class ProfileForm extends Component{
    constructor(props) {
        super(props);
        this.name = Firebase.database().ref().child('TotalUs');
        this.state = {
            email : '',
            name : 10,
            tel : '',
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        /*this.checkPasswordReg = this.checkPasswordReg.bind(this);
        this.checkRePasswordReg = this.checkRePasswordReg.bind(this);
        this.onSubmit = this.onSubmit.bind(this);*/

    }
    componentDidMount(){
        this.name.on('value',snap =>{
            this.setState({
                name : snap.val() + 1
            });
        });
    }
    render() {
        return(
            <View>
                <Text>
                    name {this.state.name}
                </Text>
                
                <Text>
                    Email
                </Text>
                <Text>
                    Tel
                </Text>
            </View>
        );
    }
}export default ProfileForm