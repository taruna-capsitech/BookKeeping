import React from 'react';
import { Checkbox, IStackTokens, PrimaryButton, Stack, Text } from '@fluentui/react';
import { BasicDropdown } from './BasicDropdown';
import { BasicTextfield } from './BasicTextfield';
import { BasicDatepicker } from './BasicDatepicker';
import { Itemtable } from './Itemtable';
import { Reciept } from './Reciept';
import { Attachments } from './Attachments';
import { MultipleSelectionDropdown } from './MultipleSelectionDropdown';

export const FormProp: React.FC<{
    type?: boolean, 
    check?: boolean, 
    checklabel?: string, 
    customer?: boolean, 
    addcustomer?: boolean,
    InvoiceType?: String,
    CustomerName?: String,
    InvoiceNo?: String,
    invoiceno?: boolean,
    check1?: boolean,
    check2?: boolean,
    check3?: boolean,
    checklabel1?: string,
    checklabel2?: string,
    checklabel3?: string,
    date?: boolean,
    Date?: String,
    duedate?: boolean,
    DueDate?: String,
    daydropdown?: boolean,
    notes?: boolean,
    Notes?: String,
    formtitle?: string,
    itemtable?: boolean,
    receipt?: boolean,
    repeat?: boolean,
    Repeatlabel?: String,
    reference?: boolean,
    Reference?: String,
    enddate?: boolean,
    EndDate?: String,
    account?: boolean,
    Account?: String,
    check5?: boolean,
    checklabel5?: string,
    amount?: boolean,
    Amount?: String,
    multivalue?: boolean,
    MultiValue?: string,
}>
= ({type, check, checklabel, customer, addcustomer, InvoiceType, CustomerName, InvoiceNo, invoiceno, check1, check2, check3, checklabel1, checklabel2, 
    checklabel3, date, Date, duedate, DueDate, daydropdown, notes, Notes, formtitle, itemtable, receipt, repeat, Repeatlabel, reference, Reference,
    enddate, EndDate, account, Account, check5, checklabel5, amount, Amount, multivalue, MultiValue }) => {

        const styleToken: IStackTokens = {childrenGap: 5}
        const spaceToken: IStackTokens = {childrenGap: 300}
        const spaceToken2: IStackTokens = {childrenGap: 665}
        const spaceButtons: IStackTokens = {childrenGap: 1080}

        const [isChecked, setIsChecked] = React.useState(false);
        const onChange = React.useCallback(
                (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, checked?: boolean): void => {
                setIsChecked(!!checked);
                },
            [],
        );

    return(
        <Stack className='formContainer'>
            <Text className='formtitle'>{formtitle}</Text>
            <form className='formProp'>
                <Stack horizontal tokens={spaceToken}>

                    <Stack verticalFill>
                        <table>
                            
                            <tr>
                                <td className='formlabel'>{type && InvoiceType}</td>
                                <td>
                                    {type && <BasicDropdown width='170px'/>}
                                </td>
                                <td>
                                    {check && <Checkbox label={checklabel} checked={isChecked} onChange={onChange} />}
                                </td>
                            </tr>
                        
                            {isChecked? 
                                (<tr>
                                    <td>{MultiValue}</td>
                                    <td colSpan={2}>
                                        <MultipleSelectionDropdown />
                                    </td>
                                </tr>):
                                (<tr>
                                    <td className='formlabel'>{CustomerName}</td>
                                    <td colSpan={2}>
                                        <BasicTextfield width="400px"/>
                                    </td>
                                    <td>
                                        {addcustomer && <Text className='addCustomer'></Text>}
                                    </td>
                                </tr>)
                            }    
    
                            {
                                account && 
                                <tr>
                                    <td className='formlabel'>{Account}</td>
                                    <td colSpan={2}>
                                        <BasicDropdown width="400px"/>
                                    </td>
                                </tr>
                            }

                            {
                                repeat && 
                                <tr>
                                    <td>{Repeatlabel}</td>
                                    <td><BasicTextfield width="150px"/></td>
                                    <td><BasicDropdown width="240px"/></td>
                                </tr>
                            }

                            {
                                reference && 
                                <tr>
                                    <td>{Reference}</td>
                                    <td colSpan={2}><BasicTextfield width="400px"/></td>
                                </tr>
                            }

                            {
                                <tr>
                                    <td className='formlabel'>{invoiceno && InvoiceNo}</td>
                                    <td>
                                        {invoiceno && <BasicTextfield />}
                                    </td>
                                    <td>
                                        <Stack tokens={styleToken}>
                                            {check1 && <Checkbox label={checklabel1} />}
                                            {check2 && <Checkbox label={checklabel2} />}
                                            {check3 && <Checkbox label={checklabel3} />}
                                        </Stack>
                                    </td>
                                </tr>
                            }
                        </table>
                    </Stack>

                    <Stack verticalFill>
                        <table>

                            {
                                check5 &&
                                <tr>
                                    <td colSpan={2}>{check && <Checkbox label={checklabel5}/>}</td>
                                </tr>
                            }

                            {
                                amount && 
                                <tr>
                                    <td>{Amount}</td>
                                    <td>
                                        <BasicTextfield width="300px"/>
                                    </td>
                                </tr>
                            }

                            {date && 
                            <tr>
                                <td className='formlabel'>{Date}</td>
                                <td>
                                    <BasicDatepicker width="180px"/>
                                </td>
                            </tr>}

                            {duedate && 
                            <tr>
                                <td className='formlabel'>{DueDate}</td>
                                <td>
                                    <BasicDatepicker width="180px"/>
                                </td>
                                <td>
                                    {daydropdown && <BasicDropdown />}
                                </td>
                            </tr>}

                            {notes && 
                            <tr>
                                <td className='formlabel'>{Notes}</td>
                                <td colSpan={2}><BasicTextfield width="300px"/></td>
                            </tr>}

                            {enddate && 
                                <tr>
                                    <td>{EndDate}</td>
                                    <td colSpan={2}><BasicDatepicker width="300px"/></td>
                                </tr>
                            }

                        </table>
                    </Stack>

                </Stack>
            </form>

            {itemtable && <Itemtable />}

            {receipt && 
            <Stack horizontal tokens={spaceToken2}>
                <Reciept />
                <Attachments />
            </Stack>}
            
            <Stack horizontal tokens={spaceButtons} className='formButtonSection'>
                <PrimaryButton text="Cancel" />

                <Stack horizontal tokens={styleToken}>
                    <PrimaryButton text="Save/Close" />
                    <PrimaryButton text="Save/New" />
                </Stack>
            </Stack>

        </Stack>
    )
}