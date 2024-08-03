import { render, screen, fireEvent } from '@testing-library/react';
import SignIn from '../../components/SignIn';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

test('renders Sign In page', () => {
  render(
    <Provider store={store}>
      <SignIn />
    </Provider>
  );

  expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  expect(screen.getByText(/sign in/i)).toBeInTheDocument();
});
