import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, FlatList, View, ActivityIndicator} from 'react-native';

import getPosts from '../../repository/postsRepository';

const Posts = () => {
    const [postList, setPostList] = useState([]);
    const [loading, setLoading] = useState(false);

    const carregaPosts = async () => {
        setLoading(true)
        const posts = await getPosts()
        setPostList(posts)
        setLoading(false)
    }

    const renderFooter = () => {
        if(!loading) return null
        return <ActivityIndicator size="large" color="#20C0DF" />
    }

    useEffect(() => {
        //if(loading) return
        carregaPosts()
    },[])

    return (
        <FlatList
            style={styles.container}
            data={postList}
            keyExtractor={item => item.id}
            ListFooterComponent={renderFooter}
            renderItem={({item}) => (
                <View style={{backgroundColor: 'lightgreen', margin: 5, padding: 20, borderRadius: 12}}>
                    <Text style={{fontSize: 16, textAlign: "center", }}>{item.title.toUpperCase()}</Text>
                </View>

            )}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
})

export default Posts;
