import React, {useState} from 'react';
import { Stack, IStackTokens } from '@fluentui/react';
import { BasicDropdown } from './BasicDropdown';
import { BasicTextfield } from './BasicTextfield';
import { Grandtotal } from './Grandtotal';
import { Additem } from './Additem';
import { PrimaryButton } from '@fluentui/react/lib/Button';

export const Itemtable: React.FC = () => {

    const styleToken: IStackTokens = {childrenGap: 15}
    const spaceToken: IStackTokens = {childrenGap: 680}

    const[inputlist, setInputlist] = useState([
        {
            Item: "",
            Description: "",
            Qty: "",
            Price: "",
            Account: "",
            vatRate: "",
            vatAmount: "",
            netAmount: ""
        }
    ]);

    const handleAddInput = () => { 
        setInputlist([...inputlist, {
            Item: "",
            Description: "",
            Qty: "",
            Price: "",
            Account: "",
            vatRate: "",
            vatAmount: "",
            netAmount: ""
        }])
    }

    const handleDeleteInput = (index: any) => {
        const list = [...inputlist];
        if(list.length>1)
        {
            list.splice(index, 1);
            setInputlist(list);
        }
    }

    return(
        <>

        <table className='formproptable'>
            <thead>
                <th className='col-1 headerrow'>Item</th>
                <th className='col-2 headerrow'>Description</th>
                <th className='col-3 headerrow'>Qty</th>
                <th className='col-4 headerrow'>Price</th>
                <th className='col-5 headerrow'>Account</th>
                <th className='col-6 headerrow'>VAT Rate</th>
                <th className='col-7 headerrow'>VAT Amount</th>
                <th className='col-8 headerrow'>Net Amount</th>
                <th className='col-9 headerrow'>Remove</th>
            </thead>

            {inputlist.map((data, index) =>
                <tr key={index}>
                <td><BasicDropdown width="150px"/></td>
                <td><BasicTextfield width="250px"/></td>
                <td><BasicTextfield width="150px"/></td>
                <td><BasicTextfield width="150px"/></td>
                <td><BasicDropdown width="150px"/></td>
                <td><BasicDropdown width="150px"/></td>
                <td><BasicTextfield width="150px"/></td>
                <td><BasicTextfield width="150px"/></td>
                <td>
                    <button onClick={() => handleDeleteInput(index)} className='remove'>Remove</button>
                </td>
            </tr>
            )}
        </table>

        <Stack horizontal tokens={spaceToken} className='buttongroup'>

            <Stack horizontal tokens={styleToken}>
                <PrimaryButton text="ADD ROW" onClick={handleAddInput}/>
                <Additem />
            </Stack>

            <Grandtotal 
                label1="Grand Total"
                label2="£"
                label3="£"
                text={true}
                width="150px"
            />
        </Stack>

        </>
    )
}