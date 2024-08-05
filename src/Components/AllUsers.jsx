import {useEffect, useState} from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, styled, Button} from '@mui/material';
import { getUsers, deleteUser } from '../service/api';

import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width:90%;
    margin: 50px auto 0 auto;
`

const THead = styled(TableRow)`
    background : yellow;
    color: black;
    & > th {
        color: Black;
        font-size: 24px;
    }
`

const TBody = styled(TableBody)`
    & > th{
        color:pink;
        font-size: 35px;
    }
`

const AllUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsersDetails();
    }, []);

    const getUsersDetails = async (data)=>{
        let response = await getUsers(data);
        console.log(response);
        setUsers(response.data);
    }

    const deleteUserData = async (id) =>{
        await deleteUser(id);
        getUsersDetails();
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>UserName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TBody>
                {
                    users.map((user) =>(
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight : 10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                                <Button variant="contained" onClick={() => deleteUserData(user.id)} color="secondary">Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TBody>    
        </StyledTable>            
    )
}

export default AllUsers;