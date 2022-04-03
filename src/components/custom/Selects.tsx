import {styled} from '@mui/system'
import {InputLabel, Select, Input} from '@mui/material'
import React from 'react'

export const CustomSelect = styled(Select, {})({
    width: 90,
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
