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
      marginLeft: 'auto',
      marginRight: 0
    }
});