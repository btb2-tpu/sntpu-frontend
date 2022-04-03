import React from 'react'
import styled from 'styled-components'
import Dialog from '@mui/material/Dialog'
import travkabig from '../../img/travkaBig.png'


export interface IProps {
    isOpen: boolean;
    close: Function;
}

const Container = styled.div`
  width: 500px;
  height: 700px;
  background: white;
  box-sizing: border-box;
  padding: 30px 45px 80px 45px;
  border-radius: 12px;
`

const EditProfile: React.FC<IProps> = ({isOpen, close}) => {
    return (
        <Container>
            <Dialog open={isOpen}
                    maxWidth={false}
                    onClose={() => {
                        close()
                    }}
            >
                <Container>

                </Container>
            </Dialog>
        </Container>
    )
}

export default EditProfile
