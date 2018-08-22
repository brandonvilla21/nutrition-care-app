'use strict';

import React from 'react';
import { render, wait } from 'react-testing-library';

import mockAxios from 'axios';
import CreateDiet from '../CreateDiet/CreateDiet';

it( 'renders the selectable table with the given foods', async () => {

  const foods = [
    {
      description: 'Egg',
      proteins: 0.25,
      carbohydrates: 0.9,
      fats: 0.793,
      calories: 687.779,
      id: 1
    },
    {
      description: 'Cheese',
      proteins: 0.699,
      carbohydrates: 0.365,
      fats: 0.746,
      calories: 491.458,
      id: 2
    }
  ];

  expect.assertions( 1 );

  mockAxios.get.mockImplementationOnce( () => Promise.resolve({ data: foods }) );

  const isSubmitted = jest.fn();

  const {
    getByText
    // debug,
  } = render( <CreateDiet onSubmitted={isSubmitted} /> );

  await wait( () => getByText( 'Cheese' ) );

  expect( getByText( 'Cheese' ) ).toBeInTheDocument();
  
});
