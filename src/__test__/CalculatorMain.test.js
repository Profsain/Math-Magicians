import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorMain from '../components/CalculatorMain';

it('renders component correctly', () => {
  const tree = renderer.create(<CalculatorMain />).toJSON();
  expect(tree).toMatchSnapshot();
});
