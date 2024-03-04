import * as React from 'react';
import { useState, useEffect } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);
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
    handleDropdownClose();
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
      default:
        navigate('/');
    }
  };

  const globalStyles = `
    body {
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }
  `;

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const scrollY = window.scrollY;
      const scrollThreshold = 100; // Adjust this threshold as needed

      setIsScrolled(scrollY > scrollThreshold);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const scrollY = window.scrollY;
        const scrollThreshold = 100; // Adjust this threshold as needed

        setIsScrolled(scrollY > scrollThreshold);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);


  const container = window !== undefined ? () => window().document.body : undefined;

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
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} onClick={handleDropdownClick}>
            <ListItemText primary="Services" onClick={() => handleNavItemClick('Services')} />
          </ListItemButton>
        </ListItem>
        <ListItem key="Marketing Services" disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleNavItemClick('Marketing Services')}>
            <ListItemText primary="Marketing Services" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Consumer Services" disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleNavItemClick('Consumer Services')}>
            <ListItemText primary="Consumer Services" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Corporate Services" disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleNavItemClick('Corporate Services')}>
            <ListItemText primary="Corporate Services" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const appBarStyle = {
    backgroundColor: 'transparent !important',
    boxShadow: isScrolled ? '0px 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
    '@media (min-width: 600px)': {
      backgroundColor: 'transparent !important',
    },
    '& .MuiToolbar-root': {
      justifyContent: 'center',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      background: 'inherit',
      zIndex: -1,
    },
  };

  return (
    <div style={{ backgroundColor: 'transparent !important' }}>
      <CssBaseline />
      <style>{globalStyles}</style>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" sx={appBarStyle}>
          <Toolbar sx={{ backgroundColor: 'transparent !important', '& .MuiToolbar-root': { justifyContent: 'center' } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon sx={{ justifyContent: 'flex-start' }} />
            </IconButton>
            <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent !important' }}>
              <Typography variant="h6" component="div" onClick={() => navigate('/')} sx={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-evenly', gap: '8px' }}>
                <Typography variant="h6" component="div" sx={{ fontSize: '17px', color: 'black', fontWeight: 'bold' }}>
                  INDENTA
                </Typography>
                <Typography variant="h6" component="div" sx={{ fontSize: '17px', borderRight: '1px solid white' }}>
                </Typography>
                <Typography variant="h6" component="div" sx={{ maxWidth: '200px', fontSize: '17px', color: 'black', fontWeight: 'bold' }}>
                  Business Solutions Group
                </Typography>
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: 'black', ml: 2, fontSize: '14px', '&:hover': { transform: 'scale(1.1)', transition: '1s' } }} onClick={() => handleNavItemClick(item)}>
                    {item}
                  </Button>
                ))}
                <Button
                  sx={{ color: 'black', ml: 2, fontSize: '14px', '&:hover': { transform: 'scale(1.1)', transition: '1s' } }}
                  aria-haspopup="true"
                  onClick={handleDropdownClick}
                >
                  Services
                </Button>
                <ListItem disablePadding></ListItem>
                <Menu
                  anchorEl={dropdownAnchorEl}
                  open={Boolean(dropdownAnchorEl)}
                  onClose={handleDropdownClose}
                  MenuListProps={{
                    style: {
                      width: '200px',
                      background: 'transparent',
                    },
                  }}
                >
                  <MenuItem onClick={() => handleNavItemClick('Services')}>Our Services</MenuItem>
                  <MenuItem onClick={() => handleNavItemClick('Marketing Services')}>Marketing Services</MenuItem>
                  <MenuItem onClick={() => handleNavItemClick('Consumer Services')}>Consumer Services</MenuItem>
                  <MenuItem onClick={() => handleNavItemClick('Corporate Services')}>Corporate Services</MenuItem>
                </Menu>
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
          <Container>
            {props.children}
          </Container>
        </Box>
      </Box>
    </div>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};
