import { IStackTokens, Stack } from '@fluentui/react';
import React from 'react';
import { FormProp } from './FormProp';
import { Mainmenu } from './Mainmenu';
import { Menu } from './Menu';

export const ReceiptForm: React.FC = () => {

    const stackGap: IStackTokens = {childrenGap: 15}

    return(
        <Stack>
            <Mainmenu />
            <Stack horizontal tokens={stackGap}>
                <Menu />
                <FormProp 
                    formtitle='Quotation Details'
                    InvoiceType=""
                    type={false}
                    check={false} 
                    checklabel=""
                    CustomerName="Customer Name"
                    customer={true}
                    addcustomer={true}
                    invoiceno={true}
                    InvoiceNo="Receipt No"
                    check1={false}
                    checklabel1=''
                    check2={false}
                    checklabel2=''             
                    check3={false}
                    checklabel3=''
                    date={true}
                    Date="Receipt Date"
                    duedate={false}
                    DueDate=""
                    daydropdown={true}
                    Notes="Reference"
                    notes={true}
                    itemtable={false}
                    receipt={false}
                    account={true}
                    Account="Account"
                    check5={true}
                    checklabel5="Make Advance Receipt"
                    amount={true}
                    Amount="Amount Received"
                />
            </Stack>
        </Stack>
    )
}