import React from 'react';
import {withRouter} from "react-router-dom";
import {Button, Typography} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from "./theme";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    podoStyle: {
        fontStyle: 'oblique',
        color : 'red',
        fontSize : "30px"
    },
    buttonStyles : {
        color : "green",
        border : 0
    }
});

function NavBar(){
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div>
                <Typography
                    className={classes.podoStyle} variant="h1" color="secondary">PODO
                </Typography>
                <ul>
                    <li>
                        <a href="#">hello</a>
                    </li>
                    <li>
                        <a href="#">world</a>
                    </li>
                    <li>
                        <a href="#">This is</a>
                    </li>
                    <li>
                        <a href="#">PODO</a>
                    </li>
                </ul>
                <Button className={classes.buttonStyles} color={"primary"} variant={"outlined"}>This is Button</Button>
                <Button variant="contained">Default</Button>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button variant="contained" disabled>
                    Disabled
                </Button>
                <Button variant="contained" color="primary" href="#contained-buttons">
                    Link
                </Button>
            </div>
        </ThemeProvider>
    )
}

export default withRouter(NavBar);
