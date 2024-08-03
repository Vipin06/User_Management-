import { signIn } from '../../redux/userSlice';
import axios from 'axios';

jest.mock('axios');
describe('AuthService', () => {
  it('should login successfully', async () => {
    const credentials = { email: 'test@test.com', password: 'password' };
    const response = { data: { token: 'fake-token' } };

    (axios.post as jest.Mock).mockResolvedValue(response);

    const result = await signIn(credentials);

    expect(result).toEqual({ token: 'fake-token' });
  });

  it('should fail to login', async () => {
    const credentials = { email: 'test@test.com', password: 'wrong-password' };

    (axios.post as jest.Mock).mockRejectedValue(new Error('Invalid credentials'));

    await expect(signIn(credentials)).rejects.toThrow('Invalid credentials');
  });
});