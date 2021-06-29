import React, { useState, Fragment } from 'react';
import clsx from 'clsx';
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";


import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import Home from "./pages/home";
import Aboutme from "./pages/aboutme";
import Contactme from "./pages/contactme";
import Projects from "./pages/projects";
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactsIcon from '@material-ui/icons/Contacts';
import WorkIcon from '@material-ui/icons/Work';


const drawerWidth = 240;
const history = createBrowserHistory();


const styles = theme => ({
    root: {
      flexGrow: 1,
      grow: 2,
    },
    flex: {
      flex: 1
    },
    drawerPaper: {
      position: "relative",
      width: drawerWidth
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
    toolbarMargin: theme.mixins.toolbar,
    aboveDrawer: {
      zIndex: theme.zIndex.drawer + 1
    }
  });


  const MyToolbar = withStyles(styles)(
    ({ classes, onMenuClick }) => (
      <Fragment>
        <AppBar id ="backnav" className={classes.aboveDrawer}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={onMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.flex}
            >
              
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.toolbarMargin} />
      </Fragment>
    )
  );

  const MyDrawer = withStyles(styles)(
    ({ classes, variant, open, onClose, onItemClick }) => (
      <Router history={history}>
      <Drawer variant={variant} open={open} onClose={onClose}
                  classes={{
                    paper: classes.drawerPaper
                  }}
      >
        <div
          className={clsx({
            [classes.toolbarMargin]: variant === 'persistent'
          })}
        />
        <List >
          <ListItem button component={Link} to="/Home" onClick={onItemClick('Home')}>
              <HomeIcon/>
            <ListItemText className="matnav">Home</ListItemText>
          </ListItem>
          <ListItem  button component={Link} to="/Aboutme" onClick={onItemClick('Aboutme')}>
              <InfoIcon/>
            <ListItemText className="matnav" >About Me</ListItemText>
          </ListItem>
          <ListItem  button component={Link} to="/Contactme" onClick={onItemClick('Contactme')}>
              <ContactsIcon/>
            <ListItemText className="matnav" >Contact Me</ListItemText>
          </ListItem>
          <ListItem  button component={Link} to="/Projects" onClick={onItemClick('Projects')}>
              <WorkIcon/>
            <ListItemText className="matnav">Projects</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
          <Route exact path="/Home" component={Home} />
          <Route path="/Aboutme" component={Aboutme} />
          <Route path="/Contactme" component={Contactme} />
          <Route path="/Projects" component={Projects} />
      </main>
      </Router>
    )
  );

  function AppBarInteraction({ classes, variant }) {
    const [drawer, setDrawer] = useState(false);
    const [title, setTitle] = useState('Home');
  
    const toggleDrawer = () => {
      setDrawer(!drawer);
    };
  
    const onItemClick = title => () => {
      setTitle(title);
      setDrawer(variant === 'temporary' ? false : drawer);
      setDrawer(!drawer);
    };
  
    return (
      <div className={classes.root}>
        <MyToolbar title={title} onMenuClick={toggleDrawer} />
        <MyDrawer
          open={drawer}
          onClose={toggleDrawer}
          onItemClick={onItemClick}
          variant={variant}
        />
      </div>
    );
  }
  

export default withStyles(styles)(AppBarInteraction);