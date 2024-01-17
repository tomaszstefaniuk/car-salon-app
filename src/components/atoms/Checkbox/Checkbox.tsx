import {
  Checkbox as MuiCheckbox,
  CheckboxProps,
  FormControlLabel,
} from '@mui/material';
import { ChangeEvent } from 'react';
import { checkboxSvg } from './checkboxSvg';

type Props = CheckboxProps & {
  label: string;
  isChecked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox = ({ label, onChange, isChecked, ...rest }: Props) => {
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          {...rest}
          disableRipple
          sx={{
            cursor: 'default',
            background: isChecked
              ? `url("data:image/svg+xml,${encodeURIComponent(
                  checkboxSvg
                )}") center/contain no-repeat`
              : '',
            backgroundSize: '60% 60%',
            backgroundColor: isChecked ? 'grey.main' : 'whiteDark.main',
            height: '22px',
            width: '22px',
            borderRadius: '0',
            border: '1px solid',
            borderColor: 'grey.main',
            marginRight: 1,
            '&:active': {
              borderColor: 'grey.400',
            },
            '& .MuiSvgIcon-root': {
              display: 'none', // Hide the default checkbox
            },
          }}
          onChange={onChange}
        />
      }
      label={label}
      sx={{
        cursor: 'default',
        color: 'black.main',
        '&.MuiFormControlLabel-root': {
          marginLeft: 0,
          marginRight: 0,
        },
        '& .MuiTypography-body1': {
          fontSize: '0.8125rem',
          lineHeight: '21px',
        },
        '& .MuiCheckbox-root': {
          alignSelf: 'flex-start',
        },
      }}
    />
  );
};
