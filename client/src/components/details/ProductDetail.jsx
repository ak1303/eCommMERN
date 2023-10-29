import { Typography,Box, Table, TableCell, styled, TableRow} from "@mui/material";
import LocalOffer from '@mui/icons-material/LocalOffer';

const date=new Date(new Date().getTime()+(5*24*60*60*1000))
const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';


const StyledBadge=styled(LocalOffer)`
    margin-right:10px;
    color:#00cc00;
    font-size:15px;
`;
const SmallText = styled(Box)`
    font-size:14px;
    vertical-align:baseline;
    &>p{
        font-size:14px;
        margin-top:10px;
    }
`;
const ColumnText=styled(TableRow)`
    font-size:14px;
    vertical-align:baseline;
    &>td{
        font-size:14px;
        margin-top:1px;
        border:none;
    }
`;

const ProductDetail = ({product}) => {
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  return (
    <>
        <Typography>{product.title.longTitle}</Typography>
        <Typography style={{marginTop:5,color:'#878787', fontsize:14}}>
            8 Ratings & 1 Reviews
            <Box component="span"><img src={fassured} alt="fassured" style={{width:77,marginLeft:20}}/></Box>
        </Typography>
        <Typography>
            <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style={{color:'#388E3C'}}>{product.price.discount}</Box>
        </Typography>
        <Typography>Available Offers</Typography>
        <SmallText>
            <Typography><StyledBadge/>Get extra 14% off (price inclusive of cashback/coupon)</Typography>
            <Typography><StyledBadge/>Purchase this product & win a surprise cashback coupon for The Big Billion Days Sale 2022 Know More</Typography>
            <Typography><StyledBadge/>Sign up for Flipkart Pay Later and get Flipkart Gift Card worth upto ₹500*</Typography>
            <Typography><StyledBadge/>No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999</Typography>
            <Typography><StyledBadge/>5% Cashback on Flipkart Axis Bank CardT&C</Typography>
            <Typography><StyledBadge/>5% Cashback on Flipkart Axis Bank Card T&C</Typography>
        </SmallText>
        <Table>
            <ColumnText>
                <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                <TableCell style={{fontWeight:600}}>Dedlivery by {date.toDateString()} | ₹40</TableCell>
            </ColumnText>
            <ColumnText>
                <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                <TableCell style={{fontWeight:600}}>No Warranty</TableCell>
            </ColumnText>
            <ColumnText>
                <TableCell style={{color:'#878787'}}>Seller</TableCell>
                <TableCell>
                    <Box component="span" style={{color:'#2874f0'}}>eCart</Box>
                    <Typography>GST invoice available</Typography>
                    <Typography>View more Sellers starting from ₹{product.price.cost}</Typography>
                </TableCell>
            </ColumnText>
            <ColumnText>
                <TableCell colSpan={2}>
                  <img src={adURL} style={{width:390}} alt="flipcartpoints"/>
                </TableCell>
             </ColumnText>
             <ColumnText>
                <TableCell style={{color:'#878787'}}>Description</TableCell>
                <TableCell>{product.description}</TableCell>
            </ColumnText>
        </Table>
    </>
  )
}

export default ProductDetail
