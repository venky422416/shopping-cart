import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMobiles, addMobileToCart } from '../Store/Actions/ShoppingActions';
import mobilesData from '../Data/Mobiles.json';
import MobileDialog from './Layout/MobileDialog';
import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardActions, Button, Breadcrumbs, Link
} from '@material-ui/core';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import VisibilityIcon from '@material-ui/icons/Visibility';


class Mobiles extends Component {
    state = {
        open: false,
        dilogContent: null
    }
    componentDidMount() {
        this.props.setMobiles(mobilesData);
    }
    handleOpen = (mobile) => this.setState({ open: true, dilogContent: mobile });
    handleClose = () => this.setState({ open: false, dilogContent: null });

    redirect = e => {
        e.preventDefault();
        this.props.history.push("/");
    }

    addToCart = (product, id) => {
        if (product) {
            this.props.addMobileToCart(product, id);
        }
    }

    render() {
        const { open, dilogContent } = this.state;
        return (
            <React.Fragment>
                <Container maxWidth="lg" className="mt-6">

                    <Breadcrumbs aria-label="breadcrumb" className="brad-align">
                        <Link color="inherit" href="/" onClick={this.redirect} >Dashboard</Link>
                        <Typography color="textPrimary">Mobiles</Typography>
                    </Breadcrumbs>

                    <Typography variant="h4" color='textPrimary' className="mt-4 mb-2" >
                        Mobiles
                    </Typography>
                    <Grid container spacing={2}>
                        {
                            this.props.mobiles && this.props.mobiles.map((mobile, index) => (
                                <Grid item xs={12} sm={6} lg={3} key={index}>
                                    <Card elevation={3} className="device-align">
                                        <CardContent>
                                            <img src={mobile.image} alt={mobile.name} height='200' />
                                            <Typography variant="h6">
                                                Rs.{mobile.price} /-
                                </Typography>
                                            <Typography variant="subtitle2" color='primary'>
                                                {mobile.name}
                                            </Typography>
                                            <CardActions className="justify-center">
                                                {mobile.addedToCart ?
                                                    <Button size="small" color='default' variant='outlined' onClick={() => this.props.history.push('/cart')}>
                                                        <AddShoppingCartIcon />&nbsp;  Go to cart
                                                        </Button>
                                                    :
                                                    <Button size="small" color="primary" variant='outlined' onClick={() => this.addToCart(mobile, mobile.id)}>
                                                        <AddShoppingCartIcon />&nbsp;  Add to cart
                                                         </Button>
                                                }
                                                <Button size="small" color="secondary" variant='outlined' onClick={() => this.handleOpen(mobile)}>
                                                    <VisibilityIcon />&nbsp; View
                                            </Button>
                                            </CardActions>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
                {
                    this.state.open && this.state.dilogContent !== null && (<MobileDialog
                        open={open}
                        dilogContent={dilogContent}
                        handleClose={this.handleClose}
                    />)
                }
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
    mobiles: state.mobiles
})
export default connect(mapStateToProps, { setMobiles, addMobileToCart })(Mobiles)