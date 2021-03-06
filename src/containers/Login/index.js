import React from 'react';
import Layout from '../../layouts/Session';
import LoginForm from '../../components/Login/LoginForm';
import Typography from '@material-ui/core/Typography';
import { setCredentials } from './login.service';
import { Redirect } from 'react-router';
import DialogMessage from '../../components/DialogMessage';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    state = {
        form: {
            email: '',
            password: ''
        },
        isLogged: false,
        isError: false,
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
        const { email, password } = this.state.form;
        const { type } = this.props;
        setCredentials( email, password, type )
            .then( res => {
                if ( res.id )
                    this.setState({ isLogged: true });
            })
            .catch( err => this.setState({ isError: true }) );
    }
    
    handleCloseDialog = () => this.setState({ isError: false })

    render() {
        const { email, password } = this.state.form;
        const { isLogged, isError } = this.state;
        if ( isLogged )
            return <Redirect to="/dashboard" />;
        return (
            <Layout>
                <DialogMessage
                    open={isError}
                    title="Error"
                    body="Ha ocurrido un problema al intenar iniciar sesión. Verifica tus credenciales."
                    handleClose={this.handleCloseDialog}
                />

                <Typography
                    style={{ textAlign: 'center' }}
                    variant="headline"
                    component="h2">
                    {this.props.header}
                </Typography>
                <LoginForm
                    email={email}
                    password={password}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
                <Typography variant="caption" style={{ fontSize: '1em' }}>
                    ¿Aun no eres miembro? Registrate <Link to="/signin">aquí</Link>
                </Typography>
            </Layout>
        );
    }

}

export default Login;