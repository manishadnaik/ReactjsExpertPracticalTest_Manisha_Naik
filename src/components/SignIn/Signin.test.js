import { render, screen } from '@testing-library/react';
import { sum } from '../../utils/utils';

test('1, 4 is 5', () => {
  expect(sum(1, 4)).toBe(5);
});
