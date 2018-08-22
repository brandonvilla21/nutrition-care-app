import React from 'react';
import Layout from '../../layouts/Session';
import LoginForm from '../../components/Login/LoginForm';
import Typography from '@material-ui/core/Typography';
import { setCredentials } from './admin-login.service';
import { Redirect } from 'react-router';
import DialogError from '../../components/DialogError';

class AdminLogin extends React.Component {
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
        setCredentials( email, password )
            .then( res => {
                if ( res. id )
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
                <DialogError
                    open={isError}
                    title="Error"
                    body="Ha ocurrido un problema al intenar iniciar sesión. Verifica tus credenciales."
                    handleClose={this.handleCloseDialog}
                />

                <Typography
                    style={{ textAlign: 'center' }}
                    variant="headline"
                    component="h2">
                    Inicia Sesión como administrador
                </Typography>
                <LoginForm
                    email={email}
                    password={password}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
            </Layout>
        );
    }

}

export default AdminLogin;