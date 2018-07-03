import red from '@material-ui/core/colors/red';

export const styles = theme => ({
    card: {
      // maxWidth: 400,
      margin: 5
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      marginLeft: 'auto',
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
    button: {
      margin: theme.spacing.unit,
    },
    buttonContainer: {
      textAlign: 'center'
    }
});
  