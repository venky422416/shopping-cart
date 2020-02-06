import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItems, addMoreItemsCount, reduceItemsCount } from '../Store/Actions/ShoppingActions';
import {
    Container,
    Grid,
    Breadcrumbs,
    Link,
    Typography,
    Card,
    CardContent,
    Divider,
    IconButton,
    Button, List, ListItem, ListItemIcon, ListItemText
} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import DevicesIcon from '@material-ui/icons/Devices';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import MemoryIcon from '@material-ui/icons/Memory';

class Cart extends Component {
    redirect = e => {
        e.preventDefault();
        this.props.history.push("/");
    }

    removeFromCart = id => {
        if (id) {
            this.props.removeItems(id);
        }
    }

    addMore = id => {
        if (id) {
            this.props.addMoreItemsCount(id)
        }
    }
    reduceCount = id => {
        if (id) {
            this.props.reduceItemsCount(id)
        }
    }

    render() {
        const { cartItems } = this.props;
        const TotalPrice = cartItems.reduce((acc, val) => {
            acc += +val.price.replace(/,/gi, '') * val.count
            return acc;
        }, 0);
        return (
            <Container maxWidth="lg" className="mt-6">
                <Breadcrumbs aria-label="breadcrumb" className="brad-align">
                    <Link color="inherit" href="/" onClick={this.redirect} >
                        Dashboard
                        </Link>
                    <Typography color="textPrimary">Cart</Typography>
                </Breadcrumbs>
                <Typography variant="h4" color='textPrimary' className="mt-4 mb-2" >
                    Cart Details
                </Typography>
                <Grid container spacing={4}>
                    <Grid item lg={8}>
                        <Card elevation={3}>
                            <CardContent>
                                <Typography variant='h6' className="mb-1">
                                    My Cart ({cartItems.length})
                                </Typography>
                                <Divider />
                                {
                                    cartItems && cartItems.map(item => (
                                        <React.Fragment key={item.id}>
                                            <Grid container spacing={2} className="mt-1">
                                                <Grid item lg={4} className="device-align" >
                                                    <img src={item.image} height="150" alt="logo" />
                                                    <div>
                                                        <IconButton color='primary' disabled={item.count <= 1} onClick={() => this.reduceCount(item.id)}>
                                                            <IndeterminateCheckBoxIcon />
                                                        </IconButton>
                                                        <Button color='default' disableTouchRipple variant='outlined'>{item.count}</Button>
                                                        <IconButton color='primary' disabled={item.count >= 5} onClick={() => this.addMore(item.id)}>
                                                            <AddBoxIcon />
                                                        </IconButton>
                                                    </div>
                                                </Grid>
                                                <Grid item lg={8} >
                                                    <List dense={true}>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <DevicesIcon color='primary' />
                                                            </ListItemIcon>
                                                            <ListItemText
                                                                primary={item.name}
                                                            />
                                                        </ListItem>
                                                    </List>
                                                    <List dense={true}>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <MemoryIcon color='primary' />
                                                            </ListItemIcon>
                                                            <ListItemText
                                                                primary={item.internal}
                                                            />
                                                        </ListItem>
                                                    </List>
                                                    <List dense={true}>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <AccountBalanceWalletIcon color='primary' />
                                                            </ListItemIcon>
                                                            <ListItemText
                                                                primary={item.price}
                                                            />
                                                        </ListItem>
                                                    </List>
                                                    <Button variant="text" color='secondary' onClick={() => this.removeFromCart(item.id)} >
                                                        REMOVE
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                            <Divider />
                                        </React.Fragment>
                                    ))
                                }
                                {
                                    cartItems.length === 0 ?
                                        <Typography className="mt-1" variant="h5" color='secondary' align='center'>
                                            No items in cart
                                    </Typography>
                                        :
                                        <div style={{ textAlign: 'right', marginTop: '15px' }}>
                                            <Button color="primary" variant='contained' size='large' disabled>
                                                PLACE ORDER
                                        </Button>
                                        </div>
                                }

                            </CardContent>
                        </Card>
                    </Grid>
                    {cartItems.length > 0 && (
                        <Grid item lg={4}>
                            <Card elevation={3}>
                                <CardContent>
                                    <Typography variant='h6' className="mb-1">
                                        Price Details
                                </Typography>
                                    <Divider />
                                    <Typography className='mt-1' variant='subtitle1'>
                                        Price ({cartItems.length} Items) &nbsp; : {TotalPrice} /-
                                    </Typography>
                                    <Typography className='mt-1' variant='subtitle1'>
                                        Delivery Fee &nbsp; : 45 RS
                                    </Typography>
                                    <Divider className='mt-1' />
                                    <Typography className='mt-1' variant='subtitle1'>
                                        Total Payable &nbsp; : {TotalPrice + 45} /-
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )}
                </Grid>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    cartItems: state.cartItems
})

export default connect(mapStateToProps, { removeItems, reduceItemsCount, addMoreItemsCount })(Cart);