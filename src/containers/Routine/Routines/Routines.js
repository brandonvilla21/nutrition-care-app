import React from 'react';
import AddButton from '../../../components/AddButton';
import {
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    withStyles,
    IconButton
} from '@material-ui/core';
import { fetchRoutines } from '../routine.service';
import Visibility from '@material-ui/icons/Visibility';
import Create from '@material-ui/icons/Create';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
});

class Routines extends React.Component {
    state = { routines: [], err: null };

    componentDidMount() {
        fetchRoutines()
            .then( res => this.setState({ routines: res.data }) )
            .catch( err => this.setState({ error: err }) );
    }

    render() {
        const { classes } = this.props;
        const { routines } = this.state;
        return (
            <React.Fragment>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Mis rutinas</TableCell>
                                <TableCell colSpan={2} />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            routines.map( routine => {
                                return (
                                    <TableRow key={routine.id}>
                                        <TableCell component="th" scope="routine">
                                            {routine.description}
                                        </TableCell>
                                        <TableCell>
                                            <IconButton aria-label="Visibility">
                                                    <Visibility />
                                            </IconButton>
                                            <IconButton aria-label="Create">
                                                    <Create />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                        }
                        </TableBody>
                    </Table>
                </Paper>
                <AddButton to="/dashboard/routine/create"/>
            </React.Fragment>
        );
    }
}

export default withStyles( styles )( Routines );
