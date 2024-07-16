import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider';

export default function PlayPage() {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>Amazon Echo Dot</Text>
            </View>
            <Image
                source={{ uri: 'https://dhimanproductions.com/wp-content/uploads/2023/01/sheikh-karan-aujla-poster-design-dhiman-productions-albumart-rehaan-records-1-min.jpeg' }}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>Sheikh</Text>
                <Text style={styles.descText}>Karan Aujla</Text>
            </View>
            <View style={styles.bottomContainer}>
                <Slider
                    style={{ width: 400, height: 40 }}
                    minimumValue={0}
                    maximumValue={100}
                    value={50}
                    minimumTrackTintColor="#fff"
                    maximumTrackTintColor="#eee"
                    onSlidingStart={0}
                    onSlidingComplete={100}
                />
                <View style={styles.playContainer}>
                    <TouchableOpacity style={styles.playButtonContainer}>
                        <Image
                            source={{ uri: 'https://cdn3.iconfinder.com/data/icons/smashicons-essentials-md-solid-vol-3-1/24/254_-_Fast_Backward_interaction_communication_essential-512.png' }}
                            style={styles.iconImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.playButtonContainer}>
                        <Image
                            source={{ uri: 'https://th.bing.com/th/id/R.8cea67c1b67cf3f5900e5dbd30649fb3?rik=gEZvKlEtCztO3w&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon-bw%2fplay-button-icon-3.png&ehk=tJkzotGVCLiw6I4UWpSAPwqB6y1zF%2bWPMUbdXqMW3Jg%3d&risl=&pid=ImgRaw&r=0' }}
                            style={styles.iconImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.playButtonContainer}>
                        <Image
                            source={{ uri: 'https://cdn4.iconfinder.com/data/icons/ui-music-1/1875/Fast_Foward-512.png' }}
                            style={styles.iconImage}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#090c08',
        justifyContent: "space-evenly",
        alignItems: 'center'

    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    titleText: {
        fontSize: 30,
        fontWeight: '500'
    },
    descText: {
        fontSize: 13
    },
    image: {
        justifyContent: 'center',
        width: 250,
        height: 250,
        borderRadius: 250 / 2
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',


    },
    button: {
        backgroundColor: '#3d56f0',
        paddingHorizontal: 120,
        paddingVertical: 18,
        borderRadius: 50,
    },
    buttonText: {
        fontSize: 18,
    },
    iconImage: {
        width: 50,
        height: 50,
    },
    bottomContainer: {
        backgroundColor: '#262626',
        paddingVertical: 50,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        flex: 1
    },
    playContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center'
    },
    playButtonContainer: {}
})