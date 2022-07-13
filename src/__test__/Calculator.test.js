import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('renders component correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
