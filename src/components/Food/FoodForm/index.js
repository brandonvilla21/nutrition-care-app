import React, { Component } from 'react/';
import TextField from '@material-ui/core/TextField';
import fieldDescription from './fieldDescription';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class FoodForm extends Component {
    state = {
        form: {
            description: '',
            carbohydrates: '',
            proteins: '',
            fats: '',
            calories: '',
        }
    }
    
    handleInput = event => {
        const { name, value } = event.target;
        this.setState( state => ({
            form: {
                ...state.form,
                [name]: value,
            }
        }));
    }

    handleClick = () => {
        console.log('Submit new food');
    }

    renderTextFields = () => (
        Object.keys(this.state.form).map(( el, index ) =>
            <TextField
                key={index}
                name={el}
                label={fieldDescription[el].title}
                placeholder={fieldDescription[el].placeholder}
                margin="normal"
                fullWidth
                value={this.state.form[el]}
                onChange={this.handleInput}
                type={fieldDescription[el].type}
            />
        )
    )

    render() {
        const { classes } = this.props;
        return (
            <div>
                { this.renderTextFields() }
                <div className={classes.buttonContainer}>
                    <Button
                        className={classes.button}
                        color="primary"
                        variant="contained"
                        onClick={this.handleClick}
                    >
                        Registrar Alimento
                    </Button>
                </div>
            </div>
        )
    }
};

export default withStyles(styles, { withTheme: true })(FoodForm);