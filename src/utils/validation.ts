export interface Validation {
  message: string;
  error: boolean;
}

export const validateEmail = (email: string): Validation => {
  let message = '';
  let error = false;
  let isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValidEmail) {
    error = true;
    message = 'Format email tidak valid';
  }

  return {message, error};
};
export const validatePassword = (
  password: string,
  label: string = 'Password',
): Validation => {
  let message = '';
  let error = false;
  let hasLowercase = /[a-z]/.test(password);
  let hasUppercase = /[A-Z]/.test(password);
  let hasSymbol = /[^a-zA-Z\d\s]/.test(password);
  let noWhitespace = password?.includes(' ');
  let minLength = 8;

  if (noWhitespace) {
    error = true;
    message = `${label} tidak boleh mengandung spasi`;
  } else if (password.length < minLength) {
    error = true;
    message = `${label} terlalu pendek, minimal 8 karakter`;
  } else if (!hasLowercase || !hasUppercase || !hasSymbol) {
    error = true;
    message = `${label} harus mengandung setidaknya satu huruf kecil, satu huruf besar, dan satu simbol`;
  }

  return {message, error};
};

export const validateConfirmPassword = (
  prev_password: any,
  password: any = 'Konfirmasi Password',
  label?: string,
): Validation => {
  let message = '';
  let error = false;
  let hasLowercase = /[a-z]/.test(password);
  let hasUppercase = /[A-Z]/.test(password);
  let hasSymbol = /[^a-zA-Z\d\s]/.test(password);
  let noWhitespace = password?.includes(' ');
  let minLength = 8;

  if (noWhitespace) {
    error = true;
    message = `${label} tidak boleh mengandung spasi`;
  } else if (password.length < minLength) {
    error = true;
    message = `${label} terlalu pendek, minimal 8 karakter`;
  } else if (!hasLowercase || !hasUppercase || !hasSymbol) {
    error = true;
    message = `${label} harus mengandung setidaknya satu huruf kecil, satu huruf besar, dan satu simbol`;
  } else if (prev_password !== password) {
    error = true;
    message = `${label} tidak sesuai`;
  }

  return {message, error};
};

export const validateMinMaxChar = (
  label: any,
  text: any,
  min?: number,
  max?: number,
  type?: 'no-special-char',
): Validation => {
  let message = '';
  let error = false;

  if (min && text?.length < min) {
    error = true;
    message = `${label} terlalu pendek`;
  }
  if (max && text?.length >= max) {
    error = true;
    message = `${label} maksimal ${max} karakter`;
  }
  if (type === 'no-special-char') {
    let regexSpecialCharacter = /[^a-zA-Z0-9., ]/;
    if (regexSpecialCharacter.test(text)) {
      error = true;
      message = `${label} tidak boleh menggunakan spesial karakter`;
    }
  }

  return {message, error};
};
