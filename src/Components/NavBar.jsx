
import {AppBar, Toolbar, styled} from '@mui/material';

import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
   background: pink;
   border: 2px solid green;
`
const Tabs = styled(NavLink)`
    font-size: 26px;
    margin-right : 38px;
    color: yellow;
    font-weight: 600;
    text-decoration: underline;
`

const NavBar = () => {
    return(
        <Header position="static">
            <Toolbar>
                <Tabs to="/">A-Crud-Application</Tabs>
                <Tabs to="/all">All Users</Tabs>
                <Tabs to="/add">Add Users</Tabs>
            </Toolbar>
        </Header>
    )
}
export default NavBar;