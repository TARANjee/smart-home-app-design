import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
export default function MainPage() {
  return (
      <View style={styles.container}>
          <View style={styles.textContainer}>
              <Text style={styles.titleText}>Amazon Echo Dot</Text>
              <Text style={styles.descText}>4th Gen Mini Speaker</Text>
          </View>
          <Image
              source={{ uri: 'https://pcgamingcases.co.uk/media/catalog/product/cache/b86786d5ad1cf9124d5ea32b5c7a55df/7/1/71q9d6n7xkl._ac_sl1000__1_.png' }}
              style={styles.image}
          />
          <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Connect</Text>
              </TouchableOpacity>
          </View>
      </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#090c08',
        justifyContent: 'space-evenly',

    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 30,
        fontWeight: '500'
    },
    descText: {
        fontSize: 13
    },
    image: {
        height: 400,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#3d56f0',
        paddingHorizontal: 120,
        paddingVertical: 18,
        borderRadius: 50,
    },
    buttonText: {
        fontSize: 18,
    }
})