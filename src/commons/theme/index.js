import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
    color: {
        primary: '#D32F2F',
        secondary: '#00BCD4',
        error: '#E64A19'
    },
    typography: {
        fontFamily: 'Roboto'
    },
    shape: {
        borderRadius: 4,
        backgound: '#7B1FA2',
        textColor: '#fffff',
        borderColor: '#cccccc'
    }
});

export default theme;