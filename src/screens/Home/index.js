import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from "react-native"

import PrimeLogo from "../../../assets/prime_video.png"

import amazon_logo from "../../../assets/amazon_logo.png"

import MovieTheWhell from '../../../assets/movies/the_wheel_of_time.png'
import { MOVIESWATCHING } from "../../utils/moviesWatching"
import { MovieCard } from "../../components/MovieCard"
import { MOVIESWATCH } from "../../utils/moviesWatch"
import { MOVIESCRIME } from "../../utils/moviesCrimes"

export const Home = () => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image style={styles.primeLogoImg} source={PrimeLogo}/>
                <Image style={styles.amazonLogoImg} source={amazon_logo}/>
            </View>

            

            <View style={styles.category}>
                <TouchableOpacity>
                    <Text style={styles.categoryText}> Home </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.categoryText}> Tv Shows </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.categoryText}> Movies </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.categoryText}> Kids </Text>
                </TouchableOpacity>

            </View>

            <ScrollView showsHorizontalScrollIndicator={false} style={styles.contentMovies} >

            <TouchableOpacity style={styles.movieThumb}>
                <Image source={MovieTheWhell} style={styles.movieImage}/>
            </TouchableOpacity>


            <Text style={styles.movieText}>Continue Watching</Text>
            <FlatList
            
            data={MOVIESWATCHING}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <MovieCard movieURL={item.moviesURL} />
            )}
            horizontal
            contentContainerStyle={styles.contentList}
            showsHorizontalScrollIndicator={false}
            
            />

<Text style={styles.movieText}>Crime Movies</Text>
            <FlatList
            
            data={MOVIESCRIME}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <MovieCard movieURL={item.moviesURL} />
            )}
            horizontal
            contentContainerStyle={styles.contentList}
            showsHorizontalScrollIndicator={false}
            
            />

<Text style={styles.movieText}>Watch in your language</Text>
            <FlatList
            
            data={MOVIESWATCH}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <MovieCard movieURL={item.moviesURL} />
            )}
            horizontal
            contentContainerStyle={styles.contentList}
            showsHorizontalScrollIndicator={false}
            
            />
            
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232F3E',
        alignItems: "flex-start"

    }, header: {
        width: '100%',
        paddingTop: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    amazonLogoImg:{
        marginTop: -40,
        marginLeft: 30

    },
    category:{
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
        marginBottom: 15,
    },
    movieText:{
        color : 'white',
        fontSize: 18,
        fontWeight : "700",
        padding: 15

    },

    categoryText:{
        color: 'white',
        fontSize: 14,
        fontWeight: '700',
    },

    movieThumb: {
        width: '100%',
        alignItems: 'center'
    },

    contentList:{
        paddingLeft: 18,
        paddingRight: 30,
    },
    contentMovies: {},

})