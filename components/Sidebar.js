import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';

import PieChart from '@mui/icons-material/PieChart';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorder from '@mui/icons-material/StarBorder';
import Delete from '@mui/icons-material/Delete';
import ChatBuble from '@mui/icons-material/ChatBubble';
import CalendarToday from '@mui/icons-material/CalendarToday';

const Sidebar = ({ window, drawerWidth, mobileOpen, handleDrawerToggle }) => {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const drawer = (
        <div>
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    Dashboard UI
                </Typography>
            </Toolbar>
            <Divider />
            <List
                subheader={
                    <ListSubheader component='div' id='nested-list-subheader'>
                        MAIN
                    </ListSubheader>
                }
            >
                <ListItemButton selected>
                    <ListItemIcon>
                        <PieChart />
                    </ListItemIcon>
                    <ListItemText primary={'Dashboard'} />
                </ListItemButton>
            </List>
            <Divider />
            <List
                subheader={
                    <ListSubheader component='div' id='nested-list-subheader'>
                        WEB APPS
                    </ListSubheader>
                }
            >
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary='Email' />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={open} timeout='auto' unmountOnExit>
                    <List component='div' disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary='Starred' />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary='Inbox' />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Delete />
                            </ListItemIcon>
                            <ListItemText primary='Trash' />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton>
                    <ListItemIcon>
                        <ChatBuble />
                    </ListItemIcon>
                    <ListItemText primary='Chat' />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <CalendarToday />
                    </ListItemIcon>
                    <ListItemText primary='Calendar' />
                </ListItemButton>
            </List>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <React.Fragment>
            {/* Mobile Drawer */}
            <Drawer
                container={container}
                variant='temporary'
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                    },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant='permanent'
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                    },
                }}
                open
            >
                {drawer}
            </Drawer>
        </React.Fragment>
    );
};

export default Sidebar;
