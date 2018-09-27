export const styles = theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    expansionPanelDetails: {
      display: 'flex',
      flexDirection: 'column'
    },
    expansionPanelDetailsC: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    button: {
      marginLeft: 'auto',
      marginRight: 0
    }
});