
  import { StyleSheet, View,TouchableOpacity } from 'react-native'
  import React from 'react';
  import {
    Avatar,
    Title,
    Caption,
    Drawer,
} from 'react-native-paper';

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon_Ant from 'react-native-vector-icons/AntDesign'
import Icon_Font from 'react-native-vector-icons/FontAwesome';
//import Icon from 'react-native-vector-icons/AntDesignI';
  
  const DrawerContents = (props) => {
    return (
      <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
<View style={styles.drawerContent}>
    <View style={styles.userInfoSection}>
        <View style={{flexDirection:'row',marginTop:18}}>
        <Avatar.Image source={require('../../assets/photo_2023-03-24_06-46-42.jpg')} size={70} />
            <View style={{marginLeft:22, flexDirection:'column'}}>
            <Title style={styles.title}>Jerry Koblah</Title>
            <TouchableOpacity onPress={() => {props.navigation.navigate('Personal')}}>
            <Caption style={styles.caption}>Edit Profile</Caption>
            </TouchableOpacity>
             </View>
        </View>
    </View>

    <Drawer.Section style={styles.drawerSection}>
    <DrawerItem icon={({color, size}) => (<Icon name="payment" color="black" size={size}/>)}label="Payment" 
    labelStyle={{fontSize:18,color:'black',fontWeight:'500'}}
     onPress={() => {props.navigation.navigate('Payment')}}/>
    <DrawerItem  icon={({color, size}) => (
     <Icon_Ant name="tago"  color="black" size={size} /> )} label="Promotion" 
     labelStyle={{
      fontSize:18,
      color:'black',
      fontWeight:'500'
    }}
     onPress={() => {props.navigation.navigate('Promotion')}}/>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon_Ant
                                name="clockcircleo" 
                                color="black"
                                size={size}
                                />
                            )}
                            label="Rides"
                            labelStyle={{
                              fontSize:18,
                              color:'black',
                              fontWeight:'500'
                            }}
                            onPress={() => {props.navigation.navigate('Rides')}}
                        />
                        
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon_Font name="suitcase" color="black" size={size}/>
                                )}
                            label="Work Rides"
                            labelStyle={{fontSize:18,color:'black',fontWeight:'500'}}
                            onPress={() => {props.navigation.navigate('Workrides')}}/>

<DrawerItem 
    icon={({color, size}) => (
                                <Icon 
                                name="comment" 
                                color="black"
                                size={size}
                                />
                            )}
                            label="Support"
                            labelStyle={{
                              fontSize:18,
                              color:'black',
                              fontWeight:'500'
                            }}
                            onPress={() => {props.navigation.navigate('Support')}}
                        />

<DrawerItem 
                            icon={({color, size}) => (
                                <Icon_Ant
                                name="exclamationcircleo" 
                                color="black"
                                size={size}
                                />
                            )}
                            label="About"
                            labelStyle={{
                              fontSize:18,
                              color:'black',
                              fontWeight:'500'
                            }}
                            onPress={() => {props.navigation.navigate('About')}}
                        />
                    </Drawer.Section>

</View>
        </DrawerContentScrollView>

        <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color="black"
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    labelStyle={{
                      fontSize:18,
                      color:'black',
                      fontWeight:'500'
                    }}
                    onPress={() => {}}/>
        </Drawer.Section>
        
      </View>
    )
  }
  
  export default DrawerContents;
  
  const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
      },
      userInfoSection: {
        paddingLeft: 20,
      },
      title: {
        fontSize: 18,
        marginTop: 4,
        fontWeight: '700',
      },
      caption: {
        fontSize: 14,
        fontWeight:'600',
        //fontFamily:'HurmeGeometricSans2-Reglar',
        lineHeight: 14,
      },
      row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
        fontSize:23
      },
      drawerSection: {
        paddingTop:45,
        marginTop:12,
        gap:10
      },
      bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
      },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
    });