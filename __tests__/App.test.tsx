import React from 'react';
import { render } from '@testing-library/react-native';
import { it, describe } from 'jest-circus';
import { test }  from 'jest-circus';

import App from '../App';



describe('<App />', () => {
    it('should render', () => {
        const { getByTestId } = render(<App />);
        const app = getByTestId('app');
        expect(app).toBeTruthy();
    });

    it('should match snapshot', () => {
        const { toJSON } = render(<App />);
        expect(toJSON()).toMatchSnapshot();
    });
}
);
