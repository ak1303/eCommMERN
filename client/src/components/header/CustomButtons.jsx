import {Box,Button, Typography, styled, Badge} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { useState, useContext} from 'react';
import { DataContext } from '../../context/DataProvider';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

import LoginDialog from '../login/loginDialog';
import Profile from './Profile';

const Wrapper=styled(Box)(({theme})=>({
display:'flex',
margin:'0 3% 0 auto',
//wrapper will handle child component== button,p,div
'& > *' :{                    
    marginRight:'40px !important',
    fontSize:16,
    alignItems:'center'
},
[theme.breakpoints.down('md')]:{
    display:'block'
}
}));
const Container = styled(Link)(({theme})=>({
    textDecoration:'none',
    color:'inherit',
    display:'flex',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}));

const LoginButton= styled(Button)`
  color:#2874f0;
  background:#FFFFFF;
  text-transform:none;
  padding:5px 40px;
  border-radius:2px;
  box-shadow:none;
  font-weight:600;
  height:32px;

`;



const CustomButtons=()=>{
    const [open,setOpen]=useState(false);
    const {account,setAccount}=useContext(DataContext);
    const openDialog=()=>{
        setOpen(true);
    }
    const {cartItems}=useSelector(state=>state.cart);
    return(
        <Wrapper>
            {
           account?<Profile account={account} setAccount={setAccount}/>:
           <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton>
            }
            
            <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
            <Typography style={{marginTop:3}}>More</Typography>
            <Container to="/cart">
                <Badge badgeContent={cartItems?.length} color="primary" >
                <ShoppingCart/>
                </Badge>
                <Typography style={{marginLeft:10}}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
        
    )
}
export default CustomButtons;