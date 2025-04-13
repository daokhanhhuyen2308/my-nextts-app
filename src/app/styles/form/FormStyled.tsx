import styled from "@emotion/styled";
import { FaTimes } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const FormStyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  min-height: 100vh;
  background-color: #f4f6f8;
  margin: 0 auto;
  position: relative;
`;

const FormStyledTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
`;

const FormStyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const FormStyledButton = styled.button`
  padding: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 0.8rem;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const FormStyledNavigate = styled.span`
  margin-top: 1.5rem;
  text-align: center;
  cursor: pointer;
  color: #007bff;
  font-size: 0.9rem;
  transition: color 0.3s ease, text-decoration 0.3s ease;
  &:hover {
    color: rgb(8, 68, 131);
  }
  &:active {
    color: #003d80;
  }
`;

const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
  color: #333;
  &:hover {
    color: #007bff;
  }
`;

export {
  FormStyledContainer,
  FormStyledTitle,
  FormStyledForm,
  FormStyledButton,
  FormStyledNavigate,
  CloseButton
};

const InputCommonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;
`;

const InputCommonLabel = styled.label`
  margin-bottom: 0.5rem;
  display: block;
  font-weight: bold;
  color: #555;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const InputCommonInput = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  padding-right: 30px; /* Adjusted for icon space */
  box-sizing: border-box;
  transition: border-color 0.3s ease;
  &:hover {
    border-color: #007bff;
  }
  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const InputCommonError = styled.span`
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  font-weight: 400;
  &:hover {
    color: rgb(243, 15, 37);
  }
`;

const PasswordVisibilityToggle = styled.span`
  position: absolute;
  top: 23%;
  right: 10px;
  cursor: pointer;
  font-size: 1.25rem;
  color: rgb(54, 61, 68);
  &:hover {
    color: rgb(32, 86, 139);
  }
`;

export {
  InputCommonContainer,
  InputCommonLabel,
  InputWrapper,
  InputCommonInput,
  InputCommonError,
  PasswordVisibilityToggle,
};



export const LoginPhoneInput = styled(PhoneInput)`
  .form-control {
    width: 100%;
    height: 40px;
    font-size: 1rem;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    padding-left: 2.5rem;
    &:focus {
      border-color: #888;
      outline: none;
    }
  }

  .flag-dropdown {
    border-radius: 8px 0 0 8px;
    border: 1px solid #ccc;
    border-right: none;
  }

  .country-list {
    font-size: 0.9rem;
  }
`;
