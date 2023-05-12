import React, { useState, useContext } from 'react'
import { UserContext } from '../shared/UserContext';
import { Alert, StyleSheet, View, Text } from 'react-native'
import { supabase} from '../shared/supabase'
import { Button, Input } from 'react-native-elements'
import { COLORS } from '../shared/COLORS';

export default function Auth() {

    const {data: userData, update: userUpdate }=useContext(UserContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)


  async function signOut() {
        const { error } = await supabase.auth.signOut()
        if (error){
            console.log(error)
        }else{
            Alert.alert("Signed out")
        }
        await userUpdate()
        }

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) {Alert.alert(error.message)}else{Alert.alert("Signed in")}
    setLoading(false)
    await userUpdate()
  }

  return (
    <View style={styles.container}>
        {!userData.set
        ? 
        <View>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <Input
                label="Email"
                leftIcon={{ type: 'feather', name: 'user' }}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="email@address.com"
                autoCapitalize={'none'}
                />
            </View>
            <View style={styles.verticallySpaced}>
                <Input
                label="Password"
                leftIcon={{ type: 'feather', name: 'lock' }}
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
                placeholder="Password"
                autoCapitalize={'none'}
                />
            </View>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <Button style={styles.button} title="Sign in" disabled={loading} onPress={() => signInWithEmail()} />
            </View>
        </View>
        : 
        <View>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <Button style={styles.button} title="Sign out" disabled={loading} onPress={() => signOut()} />
            </View>
        </View>   
        }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
})
