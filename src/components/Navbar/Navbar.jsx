import CartWidget from '../CartWiget/CartWidget';
import './Nabvar.css';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
    return (
    <AppBar>
        <Toolbar sx={{display: 'flex',justifyContent: 'space-around' }}>
            <Typography sx={{color:'black'}}>Pizzeria</Typography>
            <Button sx={{color:'white'}}>
                Home
            </Button>
            <Button sx={{color:'white'}}>
                Categorias
            </Button>
            <Button sx={{color:'white'}}>
                Productos
            </Button>
            <CartWidget/>
        </Toolbar>
    </AppBar>
    )
};

export default Navbar;