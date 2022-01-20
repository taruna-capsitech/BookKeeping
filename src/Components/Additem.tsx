import React, {useState} from 'react';
import { BasicDropdown } from './BasicDropdown';
import { BasicTextfield } from './BasicTextfield';
import { Stack, Checkbox, Text, IStackTokens } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';

export const Additem: React.FC = () => {

    const[additem1, setAdditemform1] = useState("additemform1")

    const styleToken: IStackTokens = {childrenGap: 15}

    const showItemForm = () => {
        if(additem1 == "additemform1"){
            setAdditemform1("additemform2");
        }
        else{
            setAdditemform1("additemform1");
        }
    }

    return(
        <>
        <PrimaryButton text="ADD ITEM" onClick={showItemForm}/>
        <form className={additem1}>
            <Stack tokens={styleToken}>
                <BasicTextfield text={true} label="Item Name" width="590px"/>
                <BasicTextfield text={true} label="Code" width="629px" />
                <BasicDropdown text={true} label="VAT Code" width="600px" />
                <BasicTextfield text={true} label="Description" width="585px" />
                <BasicTextfield text={true} label="Price" width="629px" />
                <BasicTextfield text={true} label="Opening Balance Quantity" width="492px" />
                <BasicTextfield text={true} label="Opening Balance Price" width="515px" />
                <BasicTextfield text={true} label="Amount" width="605px" />
                <Checkbox label="Batch Invoice" />
                <PrimaryButton text="ADD ITEM" />
            </Stack>
        </form>
        </>            
    )
}