import { getUsers, editUser } from '../service/api';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

const EditUser = () => {

    const [user, setUser] = useState(initialValues);
    let navigate = useNavigate();
    const { name, username, email, phone} =user;
    const { id } =useParams();

    useEffect(()=>{
        getUserData();
    }, []);

    const getUserData = async() =>{
        let response = await getUsers();
        setUser(response.data);
    }

    const onValueChange = (e) =>{
        console.log(e.target.name, e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value});
        console.log(user)
    }

    const addUserDetails = async () =>{
        await editUser(user, id);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h3" >EDIT USER</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='name' value={name} id="my-input" aria-describedby='my-helper-text'/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">UserName</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='username' value={username} id="my-input" aria-describedby='my-helper-text' />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">E-Mail</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='email' value={email} id="my-input" aria-describedby='my-helper-text' />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='phone' value={phone} id="my-input" aria-describedby='my-helper-text'/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=> addUserDetails()} >Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;