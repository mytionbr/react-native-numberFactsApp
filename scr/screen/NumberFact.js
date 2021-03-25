import React,{useState,useEffect} from 'react'
import { StyleSheet,  View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text,Input,Item,Body,Title,Left,Right } from 'native-base';

const NumberFact = () => {
    
    const initialFact = {
        text: ''
    }
    
    const [fact,setFact] = useState(initialFact)

    const handleInput = (value)=>{
        value = value.replace(/\s/g, '')
        handleFact(value)
    }

    const handleFact = (number)=>{
        if (number != '') {
            fetch(`http://numbersapi.com/${number}`)
                .then(response => response.text())
                .then( data =>{   
                   
                    
                    setFact({text:data})
                })
                .catch(err => console.log(err))
        }else{
            setFact({text:''})
        }
    }

   

    
  return (
    <Container style={{backgroundColor:'#76D7C4'}}>
    <Header style={{backgroundColor:'#0E6655'}}>
    <Left style={{flex:1}}/>
          <Body style={{flex:3  }}>
            <Title style={{alignSelf:'center'}}>Number Facts</Title>
          </Body>
          <Right style={{flex:1}} />
    </Header>
    <Content>
      <Card >
        <CardItem header style={{backgroundColor:'#1ABC9C'}}>
          <Text style={{color:'#fff',textAlign:'center',fontSize:20}}>Enter a number and get a random fact</Text>
        </CardItem>
        <CardItem style={{backgroundColor:'#1ABC9C'}}>
          <Body>
          <Item regular style={{backgroundColor:'#fff'}}>
          <Input 
                keyboardType='numeric' 
                placeholder='Ex: 2000' 
                onChangeText={(value)=> handleInput(value)} />
          </Item>
          </Body>
        </CardItem>
        <CardItem footer style={{backgroundColor:'#1ABC9C'}}>
          <Text style={{color:'#fff',textAlign:'center',fontSize:20}}>{fact.text}</Text>
        </CardItem>
     </Card>
    </Content>
  </Container>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer:{

  },
  curiosity:{

  },
  descContainer:{

  }
});

export default NumberFact