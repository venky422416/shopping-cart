import React, { Component } from 'react';
import {
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    Button
} from '@material-ui/core';


export default class Dashboard extends Component {
    redirect = path => this.props.history.push(path);
    render() {
        return (
            <React.Fragment>
                <Container maxWidth="md" className="mt-6">
                    <Typography variant="h4" align="center" className="mt-4">
                        Hello welcome to Shopping cart
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item lg={6}>
                            <Card elevation={3} className="card-align">
                                <CardContent>
                                    <img alt="mobiles" src={require('../Assets/mobile.png')} height="300" />
                                    <Button onClick={() => this.redirect('/mobiles')} size="large" variant="contained" color="primary">
                                        Buy Mobiles
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={6}>
                            <Card elevation={3} className="card-align">
                                <CardContent>
                                    <img alt="laptops" src={require('../Assets/laptop.png')} height="300" width="100%" />
                                    <Button onClick={() => this.redirect('/laptops')} size="large" variant="contained" color="primary">
                                        Buy Laptops
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </React.Fragment>
        )
    }
}
