import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NavigationIcon from '@material-ui/icons/Navigation';
import fieldValues from './filedValues';
import { withStyles } from '@material-ui/core';
import styles from './syles';
import { createNewUser } from '../../../containers/Signin/signin.service';

class SigninForm extends React.Component {
    state = {
        form: {
            name: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        createNewUser( this.state.form )
            .then( res => console.log(res))
            .catch( err => console.log(err));
    }

    renderFileds = () => {
        const { form } = this.state;
        return Object.entries( form ).map( ( [key, value], index ) => 
            <TextField
                key={index}
                {...fieldValues[index]}
                value={this.state.form[key]}
                onChange={this.handleChange}
            />
        );
    }
        
    render() {
        const { classes } = this.props;
        return(
            <form onSubmit={this.handleSubmit}>
                {this.renderFileds()}
                <Button type="submit" className={classes.button} variant="extendedFab">
                    <NavigationIcon/>
                    Registrarme
                </Button>
            </form>
        );
    }

}

export default  withStyles( styles )( SigninForm );