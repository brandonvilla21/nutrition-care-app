import React, { Component } from 'react';
import { withStyles, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography, Divider } from '@material-ui/core';
import styles from './styles';
import AddButton from '../../../components/AddButton';
import { getFoods } from '../food.service';

class Foods extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            food: []
        };
    }
    componentDidMount() {
        getFoods()
            .then( food => this.setState({ food }) )
            .catch( err => err );
    }

    render() {
        const { classes } = this.props;
        const { food } = this.state;
        return (
            <React.Fragment>
                <AddButton to="/dashboard/food/create"/>
                <Typography className={classes.title} variant="headline">Alimentos</Typography>
                <Divider/>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell numeric>Calories</TableCell>
                                <TableCell numeric>Fat (g)</TableCell>
                                <TableCell numeric>Carbs (g)</TableCell>
                                <TableCell numeric>Protein (g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                food.map( f => 
                                    <TableRow key={f.id}>
                                        <TableCell component="th" scope="row">
                                            {f.description}
                                        </TableCell>
                                        <TableCell numeric>{f.calories}</TableCell>
                                        <TableCell numeric>{f.fats}</TableCell>
                                        <TableCell numeric>{f.carbohydrates}</TableCell>
                                        <TableCell numeric>{f.proteins}</TableCell>
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

export default  withStyles( styles, { withTheme: true })( Foods );