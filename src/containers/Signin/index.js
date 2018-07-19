import React from 'react';
import Layout from '../../layouts/Session';
import Typography from '@material-ui/core/Typography';
import Card from '../../components/Signin/Card';
import Timeline from '@material-ui/icons/Timeline';
import red from '@material-ui/core/colors/red';
import Restaurant from '@material-ui/icons/Restaurant';
import FitnessCenter from '@material-ui/icons/FitnessCenter';

const Signin = () => {
    return (
        <Layout>
            <Typography style={{textAlign: 'center'}} variant="display1">
                Registrate
            </Typography>
            <Card
                Icon={FitnessCenter}
                iconColor={red[400]}
                title="Rutinas personalizadas"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque blanditiis dolore deleniti."
            />
            <Card
                Icon={Restaurant}
                iconColor={red[400]}
                title="Dietas a la medida"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque blanditiis dolore deleniti."
            />
            <Card
                Icon={Timeline}
                iconColor={red[400]}
                title="Seguimiento de tu progreso"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque blanditiis dolore deleniti."
            />
        </Layout>
    );
}

export default Signin;