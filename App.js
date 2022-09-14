import { View, Text, StyleSheet, TextInput, TouchableOpacity,FlatList } from 'react-native'
import React, { useState } from 'react'
import Name from './components/Name';
import { MaterialIcons } from '@expo/vector-icons'; 

const App = () => {
    const [name, setName] = useState("");
    const [myData, setMyData] = useState([]);

    const handleGo = () => {
        if (!name) return;
        setMyData([...myData, { id: new Date().getTime(), text: name }]);
        setName("");
    }
 
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Contact List App</Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Enter Contact Name' style={styles.input} onChangeText={(text) => setName(text)} value={name} />
                <TouchableOpacity>
                    <MaterialIcons name="add-circle" size={24} color="black"  onPress={handleGo} />
                </TouchableOpacity>
            </View>
            <View style={{width:"100%",marginTop:10}}>
            <FlatList data={myData} renderItem={({item})=>(
              <Name name={item} myData={myData} setMyData={setMyData}/>
            )} keyExtractor={(item)=>item.id.toString()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "grey",
      
    },
    heading: {
        marginVertical: 10,
        fontSize: 30,
        fontWeight: "700",
        color:"white"
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical:20

    },
    input: {
        flex: 1,
        shadowColor: "black",
        elevation: 10,
        width:300,
        backgroundColor: "whitesmoke",
        marginRight: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 50
    },
})

export default App