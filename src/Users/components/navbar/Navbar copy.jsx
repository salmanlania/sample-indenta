import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const drawerWidth = 240;
const navItems = ['Home', 'About Us', 'Contact Us'];

export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownAnchorEl, setDropdownAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleDropdownClick = (event) => {
    setDropdownAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setDropdownAnchorEl(null);
  };

  const handleNavItemClick = (item) => {
    handleDropdownClose(); // Close the dropdown when an item is clicked
    switch (item) {
      case 'Home':
        navigate('/');
        break;
      case 'About Us':
        navigate('/aboutus');
        break;
      case 'Services':
        navigate('/services');
        break;
      case 'Marketing Services':
        navigate('/marketing-services');
        break;
      case 'Consumer Services':
        navigate('/consumer-services');
        break;
      case 'Corporate Services':
        navigate('/corporate-services');
        break;
      case 'Contact Us':
        navigate('/contactus');
        break;
      // case 'Careers':
      //   navigate('/careers');
      //   break;
      default:
        navigate('/');
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {/* Indenta */}
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleNavItemClick(item)}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const globalStyles = `
    body {
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }
  `;

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div style={{backgroundColor: 'transparent !important'}}>
      <CssBaseline />
      <style>{globalStyles}</style>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar sx={{
            backgroundColor: '#23568B !important',
            '& .MuiToolbar-root': {
              justifyContent: 'center',
            },
          }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{ justifyContent: 'flex-start' }} />
          </IconButton>
          <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' , backgroundColor: 'transparent !important'}}>
            <Typography variant="h6" component="div" onClick={() => navigate('/')} sx={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-evenly', gap: '8px' }}>
              <Typography variant="h6" component="div" sx={{ fontSize: '17px' }}>
                INDENTA
              </Typography>
              <Typography variant="h6" component="div" sx={{ fontSize: '17px', borderRight: '1px solid white' }}>
              </Typography>
              <Typography variant="h6" component="div" sx={{ maxWidth: '200px', fontSize: '17px' }}>
                Business Solutions Group
              </Typography>
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button
                sx={{ color: '#fff', ml: 2, fontSize: '14px', '&:hover': { transform: 'scale(1.1)', transition: '1s' } }}
                aria-haspopup="true"
                onClick={handleDropdownClick}
              >
                Services
              </Button>
              <Menu
                anchorEl={dropdownAnchorEl}
                open={Boolean(dropdownAnchorEl)}
                onClose={handleDropdownClose}
                MenuListProps={{
                  style: {
                    width: '200px', // Set the width as needed
                  },
                }}
              >
                <MenuItem onClick={() => handleNavItemClick('Services')}>Our Services</MenuItem>
                <MenuItem onClick={() => handleNavItemClick('Marketing Services')}>Marketing Services</MenuItem>
                <MenuItem onClick={() => handleNavItemClick('Consumer Services')}>Consumer Services</MenuItem>
                <MenuItem onClick={() => handleNavItemClick('Corporate Services')}>Corporate Services</MenuItem>
              </Menu>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff', ml: 2, fontSize: '14px', '&:hover': { transform: 'scale(1.1)', transition: '1s' } }} onClick={() => handleNavItemClick(item)}>
                  {item}
                </Button>
              ))}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '80%' },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main">
        <Toolbar />
        {/* Your main content goes here */}
        <Container>
          {props.children}
        </Container>
      </Box>
    </Box >
    </div>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};
