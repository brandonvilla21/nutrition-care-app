export const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
    title: {
        paddingBottom: '10px',
    },
    divider: {
        marginBottom: '10px'
    }
});