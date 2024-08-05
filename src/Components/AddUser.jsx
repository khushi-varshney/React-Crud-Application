import { addUser } from '../service/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from "@mui/material";

const Container=styled(FormGroup)`
        width:50%;
        margin: 5% auto 0 auto;
        & > div {
            margin-top:20px;
        }
        
`

const initialValues = {
    name : '',
    username : '',
    email: '',
    phone: ''
}

const AddUser = () => {

    const [user, setUser] = useState(initialValues);
    let navigate = useNavigate();
    const { name, username, email, phone } = user;

    const onValueChange = (e) =>{
        console.log(e.target.name, e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value});
        console.log(user)
    }

    const addUserDetails = async () =>{
        await addUser(user);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h3" >ADD USER</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input" >UserName</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">E-Mail</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='email' value={email} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=> addUserDetails()} >Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;