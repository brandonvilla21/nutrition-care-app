import React, { Component } from 'react';
import days from './days';
import { selectedDays, clearRemovedDay } from '../../../../../containers/Routine/store/actions/actions';
import { connect } from 'react-redux';
import { FormControl, Select, MenuItem, InputLabel, withStyles } from '@material-ui/core';
import { styles } from './styles';

class SelectDay extends Component {
    state = {
        value: 0,
        days: [...days],
    };

    componentDidUpdate() {
        const { removedDay } = this.props;
        if ( removedDay )
            this.updateSelectedDays();
    }

    updateSelectedDays = () => {
        const { removedDay } = this.props;
        const { days } = this.state;

        // Get the new day to add to <SelectField />
        const addDayToSelect = days.filter( day => day.id === removedDay.id );
        // Get the days that are currently in <SelectField />
        const restOfDays = days.filter( day => day.id !== removedDay.id );

        // Change the selected property to false, because now this day has not been selected
        addDayToSelect[0].selected = false;

        // Merge both elements
        const sortedDays = [...restOfDays, addDayToSelect[0]];
        // Sorts the elements by its id
        sortedDays.sort( ( a, b ) => a.id - b.id );
        
        // Update the state with the new days
        this.setState({ days: [...sortedDays] });

        this.props.clearRemovedDay();
    }

    handleChange = event => {
        const value = event.target.value;
        this.setState({ value }, () => {
            const index = this.state.days.indexOf( value );
            days[index].selected = true;
            this.props.selectedDays( this.state.days.filter( day => day.selected ));
        });
    }

    menuItems = () => (
        this.state.days.map( day => (
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

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <FormControl className={classes.formControl}>
                    <InputLabel>Seleccione un día</InputLabel>
                    <Select
                        value=""
                        onChange={this.handleChange}
                    >
                        {this.menuItems()}                        
                    </Select>
                </FormControl>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    removedDay: state.removedDay,
});

const mapDispatchToProps = dispatch => ({
    selectedDays: days => dispatch( selectedDays( days ) ),
    clearRemovedDay: () => dispatch( clearRemovedDay() ),
});

export default withStyles( styles )( connect( mapStateToProps, mapDispatchToProps )( SelectDay ) );
