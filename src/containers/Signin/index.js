import React from 'react';
import Layout from '../../layouts/Session';
import Typography from '@material-ui/core/Typography';
import Card from '../../components/Signin/Card';
import cardProps from './card-props';
import SigninForm from '../../components/Signin/SigninForm/SigninForm';
import { withStyles } from '../../../node_modules/@material-ui/core';
import { styles } from './styles';
import { Link } from 'react-router-dom';

const Signin = ({ classes }) => {
    const renderCards = () => 
        cardProps.map( ( card, index ) =>  <Card key={index} {...card} /> );

    return (
        <Layout>
            <Typography style={{ textAlign: 'center' }} variant="display1">
                Registrate
            </Typography>
            <div className={classes.container}>
                <div>
                    {renderCards()}
                </div>
                <SigninForm />
            </div>
            <Typography variant="caption" style={{ fontSize: '1em' }}>
                Ya soy miembro. <Link to="/login">Iniciar sesión</Link>
            </Typography>
        </Layout>
    );
};

export default withStyles( styles )( Signin );