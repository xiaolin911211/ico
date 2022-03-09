import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { useRouter } from "next/router";
import {Menu, MenuItem, Typography} from "@mui/material";
import {useState} from "react";
const productsDropDown = [
    "cloth",
    "treat",
    "accessory",
    "cake",
    "toy"
];
const NavHeader = () => {
    const router = useRouter();
    const [anchorProducts, setAnchorProducts] = useState(null);
    const open = Boolean(anchorProducts);
    const productsHandler = (e) =>{
        setAnchorProducts(null);
        console.log(e);
    }
    const productsOpenHandler = (e) =>{
        setAnchorProducts(e.currentTarget);
    }
    const buttonClickHandler = (e) => {
        setAnchorProducts(null);
        router.push(e).then(r => console.log(e));

    };
    return (<AppBar position="fixed"
        style={
            {
                background: '#ffffff',
                minHeight: 100
            }
        }
        sx={
            { zIndex: 1300 }
        }>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Avatar sx={{ width: 150, height: 150 }} alt="Remy Sharp" src="/ICO-Bakery-logos_transparent.png" />
                <Box sx={
                    { flexGrow: 0 }
                }>
                    <Button key="home"
                        onClick={ () =>buttonClickHandler('/')}
                        sx={
                            {
                                my: 2,
                                color: "black",
                                display: "block"
                            }
                        }>
                        Home
                    </Button>
                </Box>
                <Box sx={
                    { flexGrow: 0 }
                }>
                    <Button key="products"
                        onClick={productsOpenHandler}
                        sx={
                            {
                                my: 2,
                                color: "black",
                                display: "block"
                            }
                        }>
                        Products
                    </Button>
                    <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorProducts}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    open={open}
                    onClose={productsHandler}
                >
                    {productsDropDown.map((item) => (
                        <MenuItem key={item} onClick={ () => buttonClickHandler(item)}>
                            <Typography textAlign="center">{item}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
                </Box>
                <Box sx={
                    { flexGrow: 0 }
                }>
                    <Button key="Contact"
                        onClick={() =>buttonClickHandler('contact')}
                        sx={
                            {
                                my: 2,
                                color: "black",
                                display: "block"
                            }
                        }>
                        Contact
                    </Button>
                </Box>
                <Box sx={
                    { flexGrow: 0 }
                }></Box>
            </Toolbar>
        </Container>
    </AppBar>);
};
export default NavHeader;
