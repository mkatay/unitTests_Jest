import {test,expect} from '@jest/globals'
import { checkPassword } from './checkPassword.js'

test('Check password length less than 6 characters', () => {
    const result = checkPassword('12345');
    expect(result).toBe(false);
  });
  
  test('Check empty password', () => {
    const result = checkPassword('');
    expect(result).toBe(false);
  });
  
  test('Check no password', () => {
    const result = checkPassword();
    expect(result).toBe(false);
  });

  test('Check password with valid length and all cases', () => {
     const result = checkPassword('Valid1Password');
    expect(result).toBe(true);
  });