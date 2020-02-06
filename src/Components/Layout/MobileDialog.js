import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import BluetoothConnectedIcon from '@material-ui/icons/BluetoothConnected';
import MemoryIcon from '@material-ui/icons/Memory';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

import {
    List, ListItem, ListItemIcon, ListItemText, Grid, Button, Typography,
    Dialog, DialogActions, DialogContent, DialogTitle

} from '@material-ui/core';

export default function MobileDialog(props) {
    const { open, dilogContent, handleClose } = props;
    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth='md'
                fullWidth={true}
            >
                <DialogTitle id="alert-dialog-title">{"Product Details"}</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item lg={5} className="device-align">
                            <img className="mb-2" height="300" src={dilogContent.image} alt="mobile" />
                            <Typography variant='h6' color='primary'>
                                {dilogContent.name}
                            </Typography>
                        </Grid>
                        <Grid item lg={7}>
                            <List dense={true}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PhoneIphoneIcon color='primary' />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={dilogContent.operatingSystem}
                                    />
                                </ListItem>
                            </List>
                            <List dense={true}>
                                <ListItem>
                                    <ListItemIcon>
                                        <MemoryIcon color='primary' />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={dilogContent.internal}
                                    />
                                </ListItem>
                            </List>
                            <List dense={true}>
                                <ListItem>
                                    <ListItemIcon>
                                        <BluetoothConnectedIcon color='primary' />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={dilogContent.bluetooth}
                                    />
                                </ListItem>
                            </List>
                            <List dense={true}>
                                <ListItem>
                                    <ListItemIcon>
                                        <AspectRatioIcon color='primary' />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={dilogContent.resolution}
                                    />
                                </ListItem>
                            </List>
                            <List dense={true}>
                                <ListItem>
                                    <ListItemIcon>
                                        <CameraAltIcon color='primary' />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={dilogContent.single}
                                    />
                                </ListItem>
                            </List>
                            <List dense={true}>
                                <ListItem>
                                    <ListItemIcon>
                                        <AccountBalanceWalletIcon color='primary' />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={dilogContent.price}
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" color="secondary" autoFocus>
                        <CloseIcon />&nbsp; Close
                    </Button>
                </DialogActions>
            </Dialog>

        </React.Fragment>
    )
}
