import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { COLORS } from '../shared/COLORS';

export default function LetterPhotoInput({symbolItem, pressHandler}) {

    symbolIn=symbolItem.symbol
    setIn=symbolItem.set
    stepButtonText=(setIn ? "Apskatīt fotogrāfiju" : "Pievienot fotogrāfiju")

    return (
        <View style={styles.container}>
            <View style={styles.sideBox}>
                <View style={styles.symbolBox}>
                    <Text style={styles.symbol}>{symbolIn}</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.stepButtonBox} onPress={() => pressHandler(symbolItem.key)}>
                <Text style={styles.stepButton}>{stepButtonText}</Text>
            </TouchableOpacity>
            <View style={styles.sideBox}>
                {setIn
                    ? (<View style={styles.setPos}>
                        <Feather style={styles.center} name="camera" size={40} color="white" />
                    </View>)
                    : (<View style={styles.setNeg}>
                        <Feather style={styles.center} name="camera-off" size={40} color="white" />
                    </View>)
                }
            </View>
        </View>   
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.darkBlue,
      flexDirection: "row",
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "space-between",
    },
    sideBox:{
        flex: 0.8,
    },
    setNeg: {
        backgroundColor: COLORS.red,
        flex:1,
        alignContent:"center",
        justifyContent: "center",
    },
    setPos: {
        backgroundColor: COLORS.gold,
        flex:1,
        alignContent:"center",
        justifyContent: "center",
    },
    center:{
        textAlign:"center"
    },
    stepButton:{
        fontFamily:"IBM Plex Med",
        color:COLORS.white,
        fontSize:18,
        textAlign: "center",
        paddingHorizontal:10,
    },
    stepButtonBox:{
        overflow:"hidden",
        flex:2,
       
    },
    symbolBox:{
        backgroundColor:COLORS.lightBlue,
        flex:1,
        alignContent:"center",
        justifyContent: "center",
    },
    symbol:{
        textAlign:"center",
        color:COLORS.white,
        fontFamily:"Barriecito",
        fontSize:50

    }
  });