import React from 'react';
import './style.css';
import { Button, Input, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

function Third(props){
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="third">
            <h2 className="third__title">material</h2>
            <Input name="defaultValue" />
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            <div className={classes.root}>
                <Pagination count={10} variant="outlined" color="primary" />
            </div>
            <Button className="btn" variant="contained" color="primary">
                Hello World
            </Button>
        </div>
    )
}

export default Third