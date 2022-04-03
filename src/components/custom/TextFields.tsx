import React from 'react'
import {TextField} from '@mui/material'
import { styled } from '@mui/system'

export const HeaderText = styled(TextField, {})({
    width: 'auto',
    ".MuiFormLabel-root": {
        color: '#7B809A',
        fontSize: 14
    },
    ".MuiInputBase-root": {
        color: '#7B809A',
        fontSize: 14,
        borderBottom: 0
    },
    ".MuiInputBase-root .before": {
        borderBottom: 0
    },
    borderBottom: 0
})

export const NewsText = styled(TextField, {})({
    marginTop: 7,
    ".MuiFormLabel-root": {
        color: '#7B809A',
        fontSize: 14
    },
})
