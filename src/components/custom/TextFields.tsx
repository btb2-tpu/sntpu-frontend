import React from 'react'
import {TextField} from '@mui/material'
import { styled } from '@mui/system'

export const HeaderText = styled(TextField, {})({
    ".MuiFormLabel-root": {
        color: '#7B809A',
        fontSize: 14
    },
    ".MuiInputBase-root": {
        color: '#7B809A',
        fontSize: 14,
    },
})

export const NewsText = styled(TextField, {})({
    marginTop: 7,
    ".MuiFormLabel-root": {
        color: '#7B809A',
        fontSize: 14
    },
})

export const EditProfileText = styled(TextField, {})({
    marginLeft: 10,
    ".MuiFormLabel-root": {
        color: '#7B809A',
        fontSize: 14
    },
})
