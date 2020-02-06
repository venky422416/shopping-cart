import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLapTops, addLapTocart } from '../Store/Actions/ShoppingActions';
import laptopData from '../Data/Laptops.json';
import LaptopDialog from './Layout/LaptopDialog';
import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardActions, Button, Link, Breadcrumbs
} from '@material-ui/core';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import VisibilityIcon from '@material-ui/icons/Visibility';

class Laptops extends Component {
    state = {
        open: false,
        dilogContent: null
    }

    handleOpen = (laptop) => this.setState({ open: true, dilogContent: laptop });
    handleClose = () => this.setState({ open: false, dilogContent: null });
    componentDidMount() {
        this.props.setLapTops(laptopData);
    }
    redirect = e => {
        e.preventDefault();
        this.props.history.push("/");
    }

    addToCart = (product, id) => {
        if (product) {
            this.props.addLapTocart(product, id);
        }
    }
    render() {
        const { open, dilogContent } = this.state;
        return (
            <React.Fragment>
                <Container maxWidth="lg" className="mt-6">

                    <Breadcrumbs aria-label="breadcrumb" className="brad-align">
                        <Link color="inherit" href="/" onClick={this.redirect} >
                            Dashboard
                        </Link>
                        <Typography color="textPrimary">Laptops</Typography>
                    </Breadcrumbs>

                    <Typography variant="h4" color='textPrimary' className="mt-4 mb-2" >
                        Laptops
                    </Typography>
                    <Grid container spacing={2}>
                        {
                            this.props.laptops && this.props.laptops.map(laptop => (
                                <Grid item sm={6} xs={12} lg={4} key={laptop.id}>
                                    <Card elevation={3} className="device-align">
                                        <CardContent>
                                            <img src={laptop.image} alt={laptop.DeviceName} height='200' />
                                            <Typography variant="h6">
                                                Rs.{laptop.price} /-
                                </Typography>
                                            <Typography variant="subtitle2" color='primary'>
                                                {laptop.name}
                                            </Typography>
                                            <CardActions className="justify-center">
                                                {laptop.addedToCart ?
                                                    <Button size="small" color='default' variant='outlined' onClick={() => this.props.history.push('/cart')}>
                                                        <AddShoppingCartIcon />&nbsp;  Go to cart
                                                        </Button>
                                                    :
                                                    <Button size="small" color="primary" variant='outlined' onClick={() => this.addToCart(laptop, laptop.id)}>
                                                        <AddShoppingCartIcon />&nbsp;  Add to cart
                                                         </Button>
                                                }
                                                <Button size="small" color="secondary" variant='outlined' onClick={() => this.handleOpen(laptop)}>
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
                    this.state.open && this.state.dilogContent !== null && (<LaptopDialog
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
    laptops: state.laptops
})
export default connect(mapStateToProps, { setLapTops, addLapTocart })(Laptops)