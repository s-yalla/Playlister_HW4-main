import { useContext, useState } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AuthContext from '../auth'
import { Alert, Button } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUIErrorModal() {
    const { auth } = useContext(AuthContext);
    var empty= "";
    if (auth.error)
    {
        empty = auth.error;
    }
    function handleErrorModal() {
        auth.closeErrorModal();
    }

    return (
        <Modal open={auth.error != null}>
            <Alert sx={style} severity="error">
                <div className="modal-dialog">
                <header className="dialog-header">
                    {
                        empty
                    }
                </header>
                <div id="confirm-cancel-error">
                    <Button
                        id="button"
                        className="modal-button"
                        onClick={handleErrorModal}
                    >Cancel</Button>
                </div>
            </div>
            </Alert>
        </Modal>
    )
}