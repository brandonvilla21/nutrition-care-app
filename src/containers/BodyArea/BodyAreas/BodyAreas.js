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
        return (
            <div>
                <Typography className={classes.title} variant="headline">Áreas del cuerpo</Typography>
                <Divider/>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>Fecha de creación</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {
                                bodyAreas.map( b =>  */}
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Biceps
                                        </TableCell>
                                        <TableCell>2018-01-01</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Femoral
                                        </TableCell>
                                        <TableCell>2018-01-01</TableCell>
                                    </TableRow>
                                {/* )
                            } */}
                        </TableBody>
                    </Table>
                </Paper>
                <AddButton to="/dashboard/body-area/create"/>
            </div>
        );
    }
}

export default withStyles( styles, { withTheme: true })( BodyAreas );