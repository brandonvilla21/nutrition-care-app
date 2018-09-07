export default theme => ({
    buttonContainer: {
        textAlign: 'right'
    },
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
      marginLeft: theme.spacing.unit,
      opacity: 0.8
    },
    card: {
      marginTop: 20,
      marginBottom: 20,
      display: 'flex',
      maxWidth: '100%',
      height: 250,
      justifyContent: 'center',
    },
    [theme.breakpoints.up( 'lg' )]: {
      generalContainer: {
        boxShadow: '0 10px 6px -6px #e2e0e0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 15,
      },
    },
    
    media: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
      flexGrow: 2 
    },
    inputContainer: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
    },
    textFieldName: {
      flexGrow: 3,
      minWidth: 300,
    }
});