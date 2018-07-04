import React from 'react';
import PageBase from '../../../components/PageBase';
import FoodForm from '../../../components/Food/FoodForm';

const CreateFood = () => {
    return(
        <div>
            <PageBase title="Registrar un alimento">
                <FoodForm />
            </PageBase>    
        </div>
    )
}

export default CreateFood;