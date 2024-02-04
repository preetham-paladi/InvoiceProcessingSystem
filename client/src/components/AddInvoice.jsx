import { useState } from 'react';
import { Box, TextField, Typography, Button, styled } from '@mui/material';
import { saveInvoice } from '../services/api';

const Component = styled(Box)({
    marginTop: 20,
    '& > p' : {
        fontSize: 26,
        marginBottom: 10
    },
    '& > div > div': {
        marginRight: 20,
        minWidth: 200
    }
})

const defaultObj = {
    vendor: '',
    product: '',
    amount: 0,
    date: '',
    action: 'pending'
}

const AddInvoice = ({ setAddInvoice }) => {
    const [invoice, setInvoice] = useState(defaultObj);

    const onChangeValue = (event) => {
        setInvoice({...invoice, [event.target.name]: event.target.value});
    }

    const addNewInvoice = async () => {
       await saveInvoice({...invoice, amount: Number(invoice['amount']) });

       setAddInvoice(false);
    }

    return (
        <Component>
            <Typography>Add Invoice</Typography>
            <Box>
                <TextField  
                    variant='standard'   
                    placeholder='Enter Vendor Name'
                    onChange={(event) => onChangeValue(event)}
                    name="vendor"
                    autoComplete='off'
                />
                <TextField  
                    variant='standard'   
                    placeholder='Enter Product Name'
                    onChange={(event) => onChangeValue(event)}
                    name="product"
                    autoComplete='off'
                />
                <TextField  
                    variant='standard'   
                    placeholder='Enter amount (in Rs)'
                    type='number'
                    onChange={(event) => onChangeValue(event)}
                    name="amount"
                    autoComplete='off'
                />
                <TextField  
                    variant='standard'   
                    placeholder='Enter date'
                    type='date'
                    onChange={(event) => onChangeValue(event)}
                    name="date"
                    autoComplete='off'
                />
                <Button 
                    variant="contained"
                    onClick={() => addNewInvoice()}
                >
                    Add Invoice
                </Button>
            </Box>
        </Component>
    )
}

export default AddInvoice;