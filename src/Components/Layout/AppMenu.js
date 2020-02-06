import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Badge,
    IconButton,
    makeStyles
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        cursor: 'pointer'
    },
}));

function AppMenu(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography onClick={() => props.history.push('/')} variant="h6" className={classes.title}>
                        Shopping Cart
                    </Typography>
                    <IconButton
                        aria-label="show 4 cart items"
                        color="inherit"
                        onClick={() => props.history.push('/cart')}>
                        <Badge badgeContent={props.cartItems.length} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
const mapStateToProps = state => ({
    cartItems: state.cartItems
})
export default withRouter(connect(mapStateToProps)(AppMenu));