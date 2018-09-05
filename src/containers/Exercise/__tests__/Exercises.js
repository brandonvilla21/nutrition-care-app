'use strict';

import React from 'react';
import { render, waitForElement, fireEvent } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';

import mockAxios from 'axios';
import Exercises from '../Exercises/Exercises';

jest.mock( 'lodash.debounce', () => jest.fn( ( fn ) => fn ) );

const setup = () => {

  const exercises = [
    {
      'name': 'Pushups',
      'srcImage': 'https://clifford.com',
      'id': 1,
      'createdAt': '2018-09-05T18:05:55.000Z',
      'updatedAt': '2018-09-05T18:05:55.000Z'
    },
    {
      'name': 'Deadlift',
      'srcImage': 'http://marilie.net',
      'id': 2,
      'createdAt': '2018-09-05T18:05:55.000Z',
      'updatedAt': '2018-09-05T18:05:55.000Z'
    },
    {
      'name': 'Squat',
      'srcImage': 'https://squat.net',
      'id': 3,
      'createdAt': '2018-09-05T18:05:55.000Z',
      'updatedAt': '2018-09-05T18:05:55.000Z'
    },
  ];

  return {
    exercises 
  };

};

it( 'should render a table of exercises items', async () => {

  const { exercises } = setup();
  mockAxios.__mock.instance.get.mockImplementationOnce( () => Promise.resolve({ data: exercises }) );
  const { 
    getByText, 
  } = render( 
    <MemoryRouter>
      <Exercises match={{ url: '/dashboard/exercise' }}/>
    </MemoryRouter> 
  );

  //--------->Checks if the exercise rows were properly render into the DOM.
  //It will wait for the 'get.mockImplementationOnce' to be run on the 
  //Event Loop as much as possible.
  await waitForElement( () => getByText( 'Pushups' ) );
  expect( getByText( 'Pushups' ) ).toBeInTheDocument();
  expect( getByText( 'Deadlift' ) ).toBeInTheDocument();
  expect( getByText( 'Squat' ) ).toBeInTheDocument();

});

