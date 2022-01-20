import { IStackTokens, Stack } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import React from 'react';
import { BasicDatepicker } from './BasicDatepicker';
import { BasicDropdown } from './BasicDropdown';
import { BasicTextfield } from './BasicTextfield';
import { useNavigate } from 'react-router-dom';

export const Filter: React.FC = () => {
    
    const navigate=useNavigate()
    const stacktokens: IStackTokens = {childrenGap: 265};
    const rightstackTokens: IStackTokens = {childrenGap: 15}

    const addInvoice = () => {
        navigate('/invoiceform')
    }

    return(
        <Stack horizontal tokens={stacktokens} className='filters'>

            <Stack horizontal tokens={rightstackTokens}>
                <PrimaryButton text="+ New Invoice" onClick={addInvoice} />
                <PrimaryButton text="Import" />
            </Stack>

            <Stack horizontal tokens={rightstackTokens}>
                <BasicTextfield text={false} width="200px" label=""/>
                <BasicDatepicker width="100px" label="From" />
                <BasicDatepicker width="100px" label="To" />
                <BasicDropdown text={true} width="50px" label="Currency" />
                <BasicDropdown text={true} width="50px" label="Type" />
                <BasicDropdown text={true} width="50px" label="Status" />
                <PrimaryButton text="Export" />
            </Stack>

        </Stack>
    )           
}