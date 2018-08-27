import React from 'react';
import { selectDay } from '../../../../../containers/Routine/store/actions/actions';
import { connect } from 'react-redux';
import { FormControl, Select, MenuItem, InputLabel, withStyles } from '@material-ui/core';
import { styles } from './styles';

const SelectDay = ({ classes, days, selectDay }) => {

    const rendeMenuItems = () => (
        days.map( day => (
            !day.selected
                ? <MenuItem
                    key={day.id}
                    value={day}
                    >
                        {day.name}
                    </MenuItem>
                : null
        ) )
    );

    return (
        <div className={classes.root}>
            <FormControl className={classes.formControl}>
                <InputLabel>Seleccione un día</InputLabel>
                <Select
                    value=""
                    onChange={selectDay}
                >
                    {rendeMenuItems()}                        
                </Select>
            </FormControl>
        </div>
    );
};

const mapStateToProps = ({ routine }) => ({
    days: routine.days,
    removedDay: routine.removedDay,
});

const mapDispatchToProps = {
    selectDay
};

export default withStyles( styles )( connect( mapStateToProps, mapDispatchToProps )( SelectDay ) );
