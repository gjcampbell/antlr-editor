import React from 'react';
import Home from '../components/Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

let theme = {
    palette: {
        primary1Color: '#5E2580',
        primary2Color: '#7727A6',
        accent1Color: '#1F7C67',
        pickerHeaderColor: '#5E2580'
    },
    appBar: {
        color: '#fff',
        textColor: '#5E2580',
        height: 48
    },
    toolbar: {
        height: 32,
        backgroundColor: '#fff',
        titleFontSize: 12,
        iconColor: '#1F7C67'
    },
    flatButton: {
        fontSize: 12
    },
    floatingActionButton: {
        buttonSize: 24,
        miniSize: 16
    },
    menuItem: {
        dataHeight: 24,
        height: 32
    },
    button: {
        height: 24,
        iconButtonSize: 16
    },
    spacing: {
        iconSize: 18
    }
};

export default function Root() {
    return <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <Home />
    </MuiThemeProvider>;
}
