import React, { useCallback } from 'react';
import { Box, Button } from '@mui/material';
import { FormContainer, TextFieldElement, PasswordElement } from 'react-hook-form-mui';

import './styles.scss';
import { VCenterCmpnt } from 'utils/enums';

interface IProps {
  setVCenterCmpnt: (_: VCenterCmpnt) => void;
}

interface IFormData {
  email: string;
  pwd: string;
}

export const SignInForm = (props: IProps) => {
  const { setVCenterCmpnt } = props;

  const onSubmit = useCallback((data: IFormData) => {
    console.log(data);
  }, [])

  return (
    <Box className="signInForm">
      <FormContainer onSuccess={onSubmit}>
        <div>
          <TextFieldElement
            required
            fullWidth
            className="inputField"
            label="Email"
            type="email"
            name='email'
            variant="standard"
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <PasswordElement
            required
            fullWidth
            className="inputField"
            label="Password"
            type="password"
            name='pwd'
            variant="standard"
            margin="normal"
            validation={{ required: "No password provided." }}
            InputLabelProps={{ shrink: true }}
          />
        </div>
        <div className="signInBtnGroup">
          <Button variant="contained" type="submit">
            Sign In
          </Button>
          <div className="forgotPassword" onClick={() => setVCenterCmpnt(VCenterCmpnt.PassRecov)}>
            Forgot password?
          </div>
        </div>
      </FormContainer>
    </Box>
  );
};
