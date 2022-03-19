import * as React from 'react';
import { Image, ImageBackground, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from "react-native-vector-icons/Entypo";
import { SpotifyApiContext } from 'react-spotify-api';
// import { Buffer } from "buffer";

const Stack = createNativeStackNavigator();
// Basic reusable components

const GalleryCardContainer = (props) => (
  <View style={styles.tourCardContainer}>
    <ScrollView showsHorizontalScrollIndicator={false} >
      <View style={{height: 20}}></View> 
      <View style={styles.musicCard}>
        <View style={styles.musicCardInner}>
          <Image source={require('./assets/f_1.jpeg')} />
          <Image source={require('./assets/f_2.jpeg')} />
          <Image source={require('./assets/f_3.jpeg')} />
          <Image source={require('./assets/f_4.jpeg')} />
        </View>
        </View>
    </ScrollView>
  </View>
);

const AboutCardContainer = (props) => (
  <View style={styles.tourCardContainer}>
    <ScrollView showsHorizontalScrollIndicator={false} >
      <View style={{height: 20}}></View> 
    </ScrollView>
  </View>
);

const MusicCardContainer = (props) => (
  <View style={styles.tourCardContainer}>
    <ScrollView showsHorizontalScrollIndicator={false} >
      <View style={{height: 20}}></View> 
    </ScrollView>
  </View>
);

const TourCardContainer = (props) => (
  <View style={styles.tourCardContainer}>
    <ScrollView showsHorizontalScrollIndicator={false} >
      <View style={{height: 20}}></View> 
      
        {data.Tour.map((tour, idx) => (
            <TourCard
            key={idx}
              date={tour.date}
              facility={tour.facility}
              location={tour.location}
              link={tour.link}
            />
          ))}
    </ScrollView>
  </View>
);
const TourCard = (props) => (
  <Pressable onPress={()=>{Linking.openURL(props.link);}} style={styles.tourCard}>
    <View style={styles.tourCard}>
      <View style={styles.tourCardInner}>
        <Text style={styles.textTour}>{props.date}</Text>
        <Text style={styles.textTour}>{props.facility}</Text>
        <Text style={styles.textTour}>{props.location}</Text>
      </View>
    </View>
  </Pressable>
);
// const TourCard = (props) => (
//   <Pressable onPress={()=>{Linking.openURL('https://bandsintown.com/e/103265758');}} style={styles.tourCard}>
//       <View style={styles.textCard}>
//         <Text style={styles.textTour}>Yoo</Text>
//         <Text style={styles.textTour}>Bink</Text>
//         <Text style={styles.textTour}>yo</Text>
//       </View>
//   </Pressable>
// );

const styles = StyleSheet.create({
  home: {
    flex: 1, 
    backgroundColor: '#FAF9FA',
  },
  tour: {
    flex: 1,
    backgroundColor: '#FAF9FA',
  },
  tourCard: {
    width: 360,
    height: 100, 
    borderRadius: 25,
    backgroundColor: '#FAF9FA',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  tourCardInner: {
    // backgroundColor: 'blue',
    width: 320,
    alignItems: 'flex-start',
  },
  musicCardInner: {
    // backgroundColor: 'blue',
    width: 320,
    resizeMode: 'contain',
  },
  tourCardContainer: {
    height: 800,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
  textTour: {
    color: "black",
    fontSize: 13,
    lineHeight: 25,
    fontFamily: "Cochin",
    fontWeight: "bold",
    textAlign: "center",
    
  },
  about: {
    flex: 1, 
    backgroundColor: '#FAF9FA',
  },
  music: {
    flex: 1, 
    backgroundColor: '#FAF9FA',
  },
  gallery: {
    flex: 1, 
    backgroundColor: '#FAF9FA',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontFamily: "Cochin",
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    
  },
  text_headings: {
    color: "white",
    fontSize: 42,
    fontFamily: "Cochin",
    fontWeight: "bold",
    textAlign: "center",
    
  },
  container_icon: {
    width: 40,
    height: 45
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginLeft: 15,
    marginTop: -5
  }
});

// The screen rendering everything
const HomeScreen = ({navigation}) => (
  <View style={styles.home}>
    <ImageBackground source={require('./assets/background_1.png')} resizeMode="cover" style={styles.image}>
      <Pressable onPress={() => navigation.navigate('About')}>
        <Text style={styles.text}>About</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Tour')}>
        <Text style={styles.text}>Tour</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Music')}>
        <Text style={styles.text}>Music</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Gallery')}>
        <Text style={styles.text}>Gallery</Text>
      </Pressable>
    </ImageBackground>
  </View>

);

const About = ({navigation}) => (
  <View style={styles.about}>
    <ImageBackground source={require('./assets/background_2.jpeg')} resizeMode="cover" style={styles.image}>
      <View style={{height: 70, width: 10}}></View>
      <Text style={styles.text}>About</Text> 
      <Pressable onPress={() => navigation.navigate('HomeScreen')}> 
        <View style={styles.container_icon}>
          <Icon name="chevron-thin-left" style={styles.icon1}></Icon>
        </View>
      </Pressable>
      <AboutCardContainer />
    </ImageBackground>
  </View>

);

const Tour = ({navigation}) => (
  <View style={styles.tour}>
    <ImageBackground source={require('./assets/background_2.jpeg')} resizeMode="cover" style={styles.image}>
      <View style={{height: 70, width: 10}}></View>
      
      
      <Text style={styles.text}>Tour Dates</Text> 
      <Pressable onPress={() => navigation.navigate('HomeScreen')}> 
        <View style={styles.container_icon}>
          <Icon name="chevron-thin-left" style={styles.icon1}></Icon>
        </View>
      </Pressable>
      <TourCardContainer />
        
        
    </ImageBackground>
  </View>

);

const Music = ({navigation}) => (
  <View style={styles.music}>
    <ImageBackground source={require('./assets/background_2.jpeg')} resizeMode="cover" style={styles.image}>
      <View style={{height: 70, width: 10}}></View>
      <Text style={styles.text}>Music</Text> 
      <Pressable onPress={() => navigation.navigate('HomeScreen')}> 
        <View style={styles.container_icon}>
          <Icon name="chevron-thin-left" style={styles.icon1}></Icon>
        </View>
      </Pressable>
      <MusicCardContainer />
    </ImageBackground>
  </View>

);

const Gallery = ({navigation}) => (
  <View style={styles.gallery}>
    <ImageBackground source={require('./assets/background_2.jpeg')} resizeMode="cover" style={styles.image}>
      <View style={{height: 70, width: 10}}></View>

      <Text style={styles.text}>Gallery</Text> 
      <Pressable onPress={() => navigation.navigate('HomeScreen')}> 
        <View style={styles.container_icon}>
          <Icon name="chevron-thin-left" style={styles.icon1}></Icon>
        </View>
      </Pressable>
      <GalleryCardContainer />
    </ImageBackground>
  </View>

);

const App = () => (
  // <SafeAreaView style={{ flex: 1, backgroundColor: '#FAF9FA' }}>
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen name="About" component={About} gestureDirection={'horizontal-inverted'}/>
        <Stack.Screen name="Tour" component={Tour} gestureDirection={'horizontal-inverted'}/>
        <Stack.Screen name="Music" component={Music} gestureDirection={'horizontal-inverted'}/>
        <Stack.Screen name="Gallery" component={Gallery} gestureDirection={'horizontal-inverted'}/>
      </Stack.Navigator>
    {/* <HomeScreen /> */}
  </NavigationContainer>
  // </SafeAreaView>
);


export default App;








// "Fake" API data to use in your app
const data = {
  Tour: [
    {
      date: 'MAR 31 THU', 
      facility: 'Park Theatre (Supporting SYML) @ 8:00pm', 
      location: 'Winnipeg, MB, Canada',
      link: 'https://bandsintown.com/e/103265758',
      
    },
    {
      date: 'APR 1 FRI', 
      facility: 'Bella Concert Hall (Supporting SYML) @ 8:00pm', 
      location: 'Calgary, AB, Canada',
      link: 'https://bandsintown.com/e/103265765',
      
    },
    {
      date: 'APR 2 SAT', 
      facility: 'Festival Place (Supporting SYML) @ 8:00pm', 
      location: 'Sherwood Park, AB, Canada',
      link: 'https://bandsintown.com/e/103265773',
      
    },
    {
      date: 'APR 7 THU', 
      facility: 'Hollywood Theatre (Supporting SYML) @ 7:00pm', 
      location: 'Vancouver, BC, Canada',
      link: 'https://bandsintown.com/e/103265781',
      
    },
    {
      date: 'APR 8 FRI', 
      facility: 'Alix Goolden Hall (Supporting SYML) @ 8:00pm', 
      location: 'Victoria, BC, Canada',
      link: 'https://bandsintown.com/e/103265786',
      
    },
    {
      date: 'JUN 2 THU', 
      facility: 'Danforth Music Hall (Support for Wild Rivers) @ 7:00pm', 
      location: 'Toronto, ON, Canada',
      link: 'https://bandsintown.com/e/103112706',
      
    },
    {
      date: 'JUN 3 FRI', 
      facility: 'Club SAW (Support for Wild Rivers) @ 8:00pm', 
      location: 'Ottawa, ON, Canada',
      link: 'https://bandsintown.com/e/103193445',
      
    },
    {
      date: 'JUN 4 SAT', 
      facility: 'Club SAW (Support for Wild Rivers) @ 8:30pm', 
      location: 'Ottawa, ON, Canada',
      link: 'https://bandsintown.com/e/103112716',
      
    },
    {
      date: 'JUN 5 SUN', 
      facility: 'Petit Campus (Support for Wild Rivers) @ 8:00pm', 
      location: 'Montreal, QC, Canada',
      link: 'https://bandsintown.com/e/103112718',
      
    },
    {
      date: 'JUN 7 TUE', 
      facility: 'Higher Ground (Support for Wild Rivers) @ 8:00pm', 
      location: 'South Burlington, VT, United States',
      link: 'https://bandsintown.com/e/1024464787',
      
    },
    {
      date: 'JUN 8 WED', 
      facility: 'Buffalo Iron Works (Support for Wild Rivers) @ 7:00pm', 
      location: 'Buffalo, NY, United States',
      link: 'https://bandsintown.com/e/103262728',
      
    },
  ]
};

