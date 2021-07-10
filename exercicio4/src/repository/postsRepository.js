import api from '../services/api';

const getPosts = async () => {
    try{
        const postList = await api.get('posts', {responseType: 'text'})
        if(postList.status !== 200) throw new Error("Deu ruim")
        return postList.data;
    }catch(error) {
        console.log(error)
    }
}

export default getPosts;