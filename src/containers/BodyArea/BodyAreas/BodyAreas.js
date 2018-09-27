import React from 'react';
import styles from './styles';
import {
    withStyles,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Typography,
    Divider
} from '@material-ui/core';
import AddButton from '../../../components/AddButton';
import { getBodyAreas } from '../body-area.service';

class BodyAreas extends React.Component {
    state = { bodyAreas: [] };
    componentDidMount() {
        getBodyAreas()
            .then( bodyAreas => this.setState({ bodyAreas }) )
            .catch( err => err );
    }
    render() {
        const { classes } = this.props;
        const { bodyAreas } = this.state;
        return (
            <React.Fragment>
                <AddButton to="/dashboard/body-area/create"/>
                <Typography className={classes.title} variant="headline">Áreas del cuerpo</Typography>
                <Divider/>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Descripción</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                bodyAreas.map( b => 
                                    <TableRow key={b.id}>
                                        <TableCell component="th" scope="row">
                                            {b.description}
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                </Paper>
            </React.Fragment>
        );
    }
}

export default withStyles( styles, { withTheme: true })( BodyAreas );