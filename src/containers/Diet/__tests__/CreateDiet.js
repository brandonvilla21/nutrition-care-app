'use strict';

import React from 'react';
import { render, waitForElement, wait, fireEvent, within, prettyDOM, queryAllByText } from 'react-testing-library';

import mockAxios from 'axios';
import CreateDiet from '../CreateDiet/CreateDiet';

import { roundNumber } from '../../../components/Diet/diet-utils';
jest.mock( 'lodash.debounce', () => jest.fn( ( fn ) => fn ) );



const setup = ( overrides ) => {

  const foods = [
    {
      description: 'Egg',
      proteins: 1,
      carbohydrates: 2,
      fats: 3,
      calories: 20.3,
      id: 1
    },
    {
      description: 'Cheese',
      proteins: 4,
      carbohydrates: 5,
      fats: 6,
      calories: 40.6,
      id: 2
    }
  ];

  return {
    foods 
  };

};

it( 'select foods on the selectable table and calculate all the items properly', async () => {

  const { foods } = setup();
  mockAxios.__mock.instance.get.mockImplementationOnce( () => Promise.resolve({ data: foods }) );
  const isSubmitted = jest.fn();
  const { getByLabelText, getByText, getByTestId, getAllByTestId } = render( <CreateDiet onSubmitted={isSubmitted} /> );



  //--------->Checks if the Cheese row was properly render into the DOM.
  await waitForElement( () => getByText( 'Cheese' ) );
  expect( getByText( 'Cheese' ) ).toBeInTheDocument();

  //Get the food checkbox DOM nodes from the selectable table.
  const checkboxFood1 = getByTestId( 'selectable-item-1' )
    .querySelector( 'input[type=\'checkbox\']' );

  const checkboxFood2 = getByTestId( 'selectable-item-2' )
    .querySelector( 'input[type=\'checkbox\']' );
  
  //Fires an event click on each of the checkbox.
  fireEvent.click( checkboxFood1 );
  fireEvent.click( checkboxFood2 );


  //Attempts to click on the 'Calcular nutriente' button, which would
  //have to be enabled right now.
  //If not, it would mean that something make the validation to fail.
  fireEvent.click( getByText( 'Calcular nutrientes' ) );



  //-----------------------------------------------------------------------------------
  //If the previous click was successful, there have to be a full 
  //rendered second tab, which contains a table with some inputs 
  //on it to calculate the proper calories and grams from the given foods.
  const [ eggGrams, cheeseGrams ] = getAllByTestId( 'input-grams' );
  const [ eggCalories, chesseCalories ] = getAllByTestId( 'input-calories' );

  //Get the food rows from the calculator table and the setup array.
  const eggRow = eggGrams.parentNode.parentNode;
  const cheeseRow = cheeseGrams.parentNode.parentNode;
  const [ egg, chesse ] = foods;
  
  //Fires an event change for the 'eggGrams' input to set a new value on it.
  //To make this happened synchronously, it is VERY IMPORTANT to mock the 
  //'lodash.debounce', because it is used on the DietForm component
  //which is a child CreateDiet's component.
  const fireEventEggValue = 555.55;
  fireEvent.change( eggGrams, { target: { value: `${fireEventEggValue}` } });

  const eggProteinCell = eggRow.childNodes[2];
  const eggCarbsCell = eggRow.childNodes[3];
  const eggFatsCell = eggRow.childNodes[4];

  //--------->Validates if the grams calculations are correct (based on the egg row).
  expect( parseFloat( eggProteinCell.textContent ) )
    .toBeCloseTo( roundNumber( egg.proteins * fireEventEggValue ) );

  expect( parseFloat( eggCarbsCell.textContent ) )
    .toBeCloseTo( roundNumber( egg.carbohydrates * fireEventEggValue ) );

  expect( parseFloat( eggFatsCell.textContent ) )
    .toBeCloseTo( roundNumber( egg.fats * fireEventEggValue ) );

  expect( parseFloat( eggCalories.value ) )
    .toBeCloseTo( roundNumber( egg.calories * fireEventEggValue ) );


  
  //Fires an event change for the 'chesseCalories' input.
  //Also VERY IMPORTANT to mock the lodash.debounce module.
  const fireEventChesseValue = 777.77;
  fireEvent.change( chesseCalories, { target: { value: `${fireEventChesseValue}` } });

  const cheeseProteinCell = cheeseRow.childNodes[2];
  const cheeseCarbsCell = cheeseRow.childNodes[3];
  const cheeseFatsCell = cheeseRow.childNodes[4];

  //--------->Validates if the calories calculations are correct (based on the cheese row).
  expect( parseFloat( cheeseProteinCell.textContent ) )
    .toBeCloseTo( roundNumber( chesse.proteins / chesse.calories * fireEventChesseValue ) );

  expect( parseFloat( cheeseCarbsCell.textContent ) )
    .toBeCloseTo( roundNumber( chesse.carbohydrates / chesse.calories * fireEventChesseValue ) );

  expect( parseFloat( cheeseFatsCell.textContent ) )
    .toBeCloseTo( roundNumber( chesse.fats / chesse.calories * fireEventChesseValue ) );

  expect( parseFloat( cheeseGrams.value ) )
    .toBeCloseTo( roundNumber( 1 / chesse.calories * fireEventChesseValue ) );

  
  //-----------------------------------------------------------------------------------
  //Collects all the values from the Calculator Table and calculates all the needed totals.
  const totals = { proteins: 0, carbs: 0, fats: 0, calories: 0 };
  [eggRow, cheeseRow].forEach( row => {

    row.childNodes.forEach( ( cell, index ) => {

      switch( index ) {
        case 2: 
        totals.proteins = roundNumber( totals.proteins + parseFloat( cell.textContent ) ); break;
        case 3: 
          totals.carbs = roundNumber( totals.carbs + parseFloat( cell.textContent ) ); break;
        case 4: 
          totals.fats = roundNumber( totals.fats + parseFloat( cell.textContent ) ); break;
        case 6: {
          const inputCaloriesCell = cell.childNodes[0];
          totals.calories = 
          roundNumber( totals.calories + parseFloat( inputCaloriesCell.value ) ); break;
        }
      }

    });

  });
  

  
  const cardTotalsCalculator = getByTestId( 'total-card-calculator' );

  const proteinsTotalInput = within( cardTotalsCalculator )
    .getByLabelText( 'Proteínas', { exact: false });

  const carbsTotalInput = within( cardTotalsCalculator )
  .getByLabelText( 'Carbohidratos', { exact: false });

  const fatsTotalInput = within( cardTotalsCalculator )
    .getByLabelText( 'Grasas', { exact: false });

  const caloriesTotalInput = within( cardTotalsCalculator )
    .getByLabelText( 'Calorías', { exact: false });

  const { proteins, carbs, fats, calories } = totals;

  //--------->Validates if the total inputs contain the correct calculated values.
  expect( proteins ).toBeCloseTo( parseFloat( proteinsTotalInput.value ) );
  expect( carbs ).toBeCloseTo( parseFloat( carbsTotalInput.value ) );
  expect( fats ).toBeCloseTo( parseFloat( fatsTotalInput.value ) );
  expect( calories ).toBeCloseTo( parseFloat( caloriesTotalInput.value ) );


  //-----------------------------------------------------------------------------------
  //Gets the description input that is related with the 'Agrega la descripción de tu dieta'
  //label. This relation is made throughout the 'htmlFor' attribute on the label and the
  //'id' attribute on the input element.
  const descriptionInput = getByLabelText( 
    'Agrega la descripción', 
    { selector: 'input', exact: false }
  );

  //Changes the description value
  fireEvent.change( descriptionInput, { target: { value: 'My super cool description' } });

  //Clicks on the 'Finalizar dieta' button.
  fireEvent.click( getByText( 'Finalizar dieta', { exact: false }) );



  //-----------------------------------------------------------------------------------
  // fireEvent.click( getByText( 'Guardar dieta', { exact: false }) );


});

