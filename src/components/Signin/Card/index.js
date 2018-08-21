import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

const Card = ({ classes, Icon, iconColor, title, body }) => {
    return(
        <div className={classes.container}>
            <div>
                <Icon style={{ fontSize: 36, color: iconColor }}/>
            </div>
            <div className={classes.textContent}>
                <div className={classes.title}>
                    <Typography variant="headline">
                        {title}
                    </Typography>
                </div>
                <div>
                    <Typography className={classes.textBody} variant="caption">
                        {body}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    classes: PropTypes.object,
    Icon: PropTypes.func,
    iconColor: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
};

export default withStyles( styles )( Card );