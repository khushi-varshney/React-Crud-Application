import axios from 'axios';

const URL = 'http://localhost:3002/users';

export const addUser = async (data)=>{
    try{
       return await axios.post(URL, data);
    }catch (error){
        console.log('Error while calling add User Api is : ', error);
    }
}

export const getUsers = async ()=>{
    try{
       return await axios.get(URL);
    }catch (error){
        console.log('Error while calling getUsers Api is : ', error);
    }
}

export const getUser = async (data)=>{
    try{
       return await axios.get(`${URL}/${data}`);
    }catch (error){
        console.log('Error while calling getUser Api is : ', error);
    }
}

export const editUser = async (data, id)=>{
    try{
       return await axios.put(`${URL}/${id}`, data);
    }catch (error){
        console.log('Error while calling editUser Api is : ', error.message);
    }
}

export const deleteUser = async (id)=>{
    try{
       return await axios.delete(`${URL}/${id}`);
    }catch (error){
        console.log('Error while calling deleteUser Api is : ', error.message);
    }
}