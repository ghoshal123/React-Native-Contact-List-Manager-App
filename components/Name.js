import { View, Text, StyleSheet, TouchableOpacity, AsyncStorage, } from 'react-native'
import React,{useState} from 'react'
import { TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 


const Name = ({ name,setMyData,myData }) => {

    const [edit, setEdit] = useState(false);
    const [editText, setEditText] = useState(name.text);

    
    

    const handleEdit=()=>{
        if(!edit){
            setEdit(!edit);
        }
        else{
            setEdit(!edit);
            setMyData(
                myData.map((elem)=>
                    elem.id===name.id ?{id:elem.id,text:editText}:elem
                )
            );
        }
        
    }
    const handleDelete=(id)=>{
        setMyData(myData.filter((elem)=>elem.id!==id));
    }
    return (
        <View style={styles.name}>
        <MaterialIcons name="local-phone" size={24} color="black" />
            {
                !edit ? (<Text style={styles.nametext}>
                    {name.text} </Text> ): (<TextInput style={styles.nameinput}  value={editText} onChangeText={(text)=>{setEditText(text)}} />
    )}
            <TouchableOpacity>
                <MaterialIcons style={styles.nameaction} name="edit" size={24}  onPress={handleEdit} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialIcons style={styles.nameaction} name="delete" size={24} color="black" onPress={()=>handleDelete(name.id)} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        flexDirection: "row",
        marginHorizontal: 10,
        shadowColor: "black",
        elevation: 5,
        shadowColor: "black",
        backgroundColor: "whitesmoke",
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 50,
        fontSize: 30
    },
    nameaction: {
        marginLeft: 15
    },
    nametext: {
        flex: 10,
        fontSize: 18,
        paddingVertical: 3,
        paddingHorizontal: 5
    },
    nameinput:{
        flex:1,
        fontSize:18,
        paddingHorizontal:5,
        borderRadius:5,
        borderColor:"grey",
        borderWidth:1
    }
})

export default Name