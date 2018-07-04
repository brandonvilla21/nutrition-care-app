import React from 'react';
import { withStyles, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography, Divider } from '@material-ui/core';
import styles from './styles';
import AddButton from '../../../components/AddButton';

const Foods = (props) => {
    
    let id = 0;
    function createData(name, calories, fat, carbs, protein) {
        id += 1;
        return { id, name, calories, fat, carbs, protein };
    }

    const data = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Pan con chocolate', 356, 16.0, 49, 3.9),
        createData('Huevitos', 356, 16.0, 49, 3.9),
        createData('Mantecadas bimbo', 356, 16.0, 49, 3.9),
        createData('Torta ahogada', 356, 16.0, 49, 3.9),
        createData('Tostadas pepe', 356, 16.0, 49, 3.9),
    ];

    const { classes } = props;
    
    return (
        <div>
            <Typography className={classes.title} variant="headline">Alimentos</Typography>
            <Divider/>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell numeric>Calories</TableCell>
                            <TableCell numeric>Fat (g)</TableCell>
                            <TableCell numeric>Carbs (g)</TableCell>
                            <TableCell numeric>Protein (g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(n => {
                            return (
                            <TableRow key={n.id}>
                                <TableCell component="th" scope="row">
                                {n.name}
                                </TableCell>
                                <TableCell numeric>{n.calories}</TableCell>
                                <TableCell numeric>{n.fat}</TableCell>
                                <TableCell numeric>{n.carbs}</TableCell>
                                <TableCell numeric>{n.protein}</TableCell>
                            </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
            <AddButton to="/dashboard/food/create"/>
        </div>
    );
}

export default  withStyles(styles, { withTheme: true })(Foods);