/**
 * Created by Administrator on 16/7/22.
 */

const USER_MODELS = {
    1:{name:'张三', age:23},
    2:{name:'李四', age:24},
    3:{name:'王五', age:25},
};

import React, {
    Component
} from 'react';

import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet
} from 'react-native';

class SecondView extends React.Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            id : null
        };
      }

    componentDidMount() {
        this.setState({
            id:this.props.id
        });
    }
    _onPress () {
        if (this.props.getUser){
            let user = USER_MODELS[this.props.id];
            this.props.getUser(user);
        }
        this.props.navigator.pop();
    }
    render(){
        return(
            <View>
                <Text style={styles.text}>获得的id={ this.state.id }</Text>
                <TouchableOpacity onPress={this._onPress.bind(this)}>
                    <Text style={styles.text}>我是第二页</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize:30,
        textAlign:'center',
        lineHeight:100
    },
});

export default SecondView;