import React from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import styled from 'styled-components/native';
import {CATEGORIES} from '../db/data';
//import {Dimensions} from 'react-native';

const StyledInput = styled.TouchableOpacity`
width : 350px;
height : 120px;
margin : 3px 0;
padding : 15px 20px;
border-radius : 10px;
justify-content: space-around;
background-color : ${({theme}) => theme.itemBackground};
border : 2px solid #D9D9D9;
color : ${({theme}) => theme.text};
`;

//width : ${({width}) => width - 40}px;


/*const Show = () => {
    const width = Dimensions.get('window').width;
    return <StyledInput width = {width} />;
};*/

const Title = styled.Text`
font-size : 20px;
font-weight : bold;
color : black;
text-align : left;
align-items : center;
`

const styles = StyleSheet.create({
    body : {
        color : '#37474f',
        fontSize : 13,
        lineHeight : 21,
        textAlign : 'right',
      },
});

const Show = props => {
    //const width = Dimensions.get('window').width;
    return (
        <StyledInput>
            <Title>{props.title}</Title>
            <Image
            style={{height:'45%',width:'25%'}}
            source={{uri:'https://legacy.reactjs.org/logo-og.png'}}/>
            <Text style = {styles.body}>일기의 내용이 들어갈 자리...</Text>
        </StyledInput>
    );
};

export default Show;