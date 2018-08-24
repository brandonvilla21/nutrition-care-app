import React, { Component } from 'react/';
import TextField from '@material-ui/core/TextField';
import fieldDescription from './fieldDescription';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { submitFood } from '../../../containers/Food/food.service';

const initialState = {
    description: '',
    carbohydrates: '',
    proteins: '',
    fats: '',
    calories: '',
};

class FoodForm extends Component {
    state = initialState;
    
    handleInput = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        submitFood( this.state )
            .then( food => {
                if ( food.id ) {
                    this.wasSubmitted( true );
                    this.setState({ ...initialState });
                } else {
                    this.wasSubmitted( false );
                }
            })
            .catch( err => this.wasSubmitted( false ) );
    }

    wasSubmitted = submitted => this.props.onSubmit( submitted )

    renderTextFields = () => (
        Object.keys( this.state ).map( ( el, index ) =>
            <TextField
                key={index}
                name={el}
                label={fieldDescription[el].title}
                placeholder={fieldDescription[el].placeholder}
                margin="normal"
                fullWidth
                value={this.state[el]}
                onChange={this.handleInput}
                type={fieldDescription[el].type}
            />
        )
    )

    render() {
        const { classes } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                { this.renderTextFields() }
                <div className={classes.buttonContainer}>
                    <Button
                        type="submit"
                        className={classes.button}
                        color="primary"
                        variant="contained"
                        onClick={this.handleClick}
                    >
                        Registrar Alimento
                    </Button>
                </div>
            </form>
        );
    }
}

export default withStyles( styles, { withTheme: true })( FoodForm );