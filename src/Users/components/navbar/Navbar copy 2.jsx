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
    <div>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: 'transparent' }}>
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" component="div" onClick={() => navigate('/')}>
              {/* Your Typography content */}
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
                <MenuItem onClick={() => handleNavItemClick('Our Services')}>Our Services</MenuItem>
                <MenuItem onClick={() => handleNavItemClick('Marketing Services')}>Marketing Services</MenuItem>
                <MenuItem onClick={() => handleNavItemClick('Consumer Services')}>Consumer Services</MenuItem>
                {/* Add more menu items as needed */}
              </Menu>
              <Button
                sx={{ color: '#fff', ml: 2, fontSize: '14px', '&:hover': { transform: 'scale(1.1)', transition: '1s' } }}
                onClick={() => handleNavItemClick('OtherNavItem')}
              >
                OtherNavItem
              </Button>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
        // Drawer settings
        >
          {/* Your Drawer content */}
        </Drawer>
      </nav>
      <Box component="main">
        <Toolbar />
        {/* Your main content goes here */}
        <Container>
          {/* Your main content */}
        </Container>
      </Box>
    </div>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};
