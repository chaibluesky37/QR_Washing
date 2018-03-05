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
        userId = Firebase.auth().currentUser.uid;
        this.name = Firebase.database().ref().child('Customer/'+userId+'/Name');
        this.email = Firebase.database().ref().child('Customer/'+userId+'/Email');
        this.tel = Firebase.database().ref().child('Customer/'+userId+'/Tel');
        this.state = {
            email : '',
            name : '',
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
                name : snap.val()
                
            });
            // console.log(this.state.name);
        });
        this.email.on('value',snap =>{
            this.setState({
                email : snap.val()
                
            });
        });
        this.tel.on('value',snap =>{
            this.setState({
                tel : snap.val()
                
            });
        });
    }
    render() {
        return(
            <View>
                <Text>
                    name : {this.state.name}
                </Text>
                
                <Text>
                    Email : {this.state.email}
                </Text>
                <Text>
                    Tel : {this.state.tel}
                </Text>
            </View>
        );
    }
}export default ProfileForm