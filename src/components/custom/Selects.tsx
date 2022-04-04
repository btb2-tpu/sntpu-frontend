import {styled} from '@mui/system'
import {InputLabel, Select, Input, FormControl} from '@mui/material'
import React from 'react'

export const CustomSelect = styled(Select, {})({
    width: 150,
    marginLeft: 10,
    ".MuiInputBase-root": {

    }
})

export const CustomInputLabel = styled(InputLabel, {})({
    fontSize: 14,
    marginLeft: 10,
})

export const CustomInput = styled('input')({
    display: 'none',
});

export const CustomFormControl = styled(FormControl) ({
    width: 150
})
