export const styles = theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem( 15 ),
      fontWeight: theme.typography.fontWeightRegular,
    },
    expansionPanelDetails: {
      display: 'flex',
      flexDirection: 'column'
    },
    expansionPanelDetailsC: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    },
    button: {
     marginTop: '.5em' 
    },
    buttonContainer: {
      marginLeft: 'auto',
      marginRight: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
});