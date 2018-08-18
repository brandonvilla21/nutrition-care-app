import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({
  card: {
    marginBottom: '10px',
    marginTop: '10px',
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create( 'transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up( 'sm' )]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class ExpandibleCard extends React.Component {
  
  state = { expanded: true };

  handleExpandClick = () => {
    this.setState( state => ({ expanded: !state.expanded }) );
  };

  render() {

    const show = true;

    const { classes, title, children } = this.props;

    const card = <Card className={classes.card}>
      <CardActions className={classes.actions}>
        {title}
        <IconButton
          className={classnames( classes.expand, {
            [classes.expandOpen]: this.state.expanded,
          })}
          onClick={this.handleExpandClick}
          aria-expanded={this.state.expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {children}
        </CardContent>
      </Collapse>
    </Card>; 


    return (
      <div>
        {show ? card : null}
      </div>
    );
  }
}

ExpandibleCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.element.isRequired,
};

export default withStyles( styles )( ExpandibleCard );