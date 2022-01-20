import { IStackTokens, Stack } from '@fluentui/react';
import React from 'react';
import { FormProp } from './FormProp';
import { Mainmenu } from './Mainmenu';
import { Menu } from './Menu';

export const RecurringInvoice: React.FC = () => {

    const stackGap: IStackTokens = {childrenGap: 15}

    return(
        <Stack>
            <Mainmenu />
            <Stack horizontal tokens={stackGap}>
                <Menu />
                <FormProp 
                    formtitle='Recurring Invoice Details'
                    InvoiceType=""
                    type={false}
                    check={false} 
                    checklabel=""
                    CustomerName="Customer Name"
                    customer={true}
                    addcustomer={true}
                    invoiceno={false}
                    InvoiceNo=""
                    check1={true}
                    checklabel1='Amount Including VAT'
                    check2={false}
                    checklabel2=''
                    check3={false}
                    checklabel3=''
                    date={true}
                    Date="Date"
                    duedate={true}
                    DueDate="Due Date"
                    daydropdown={true}
                    Notes=""
                    notes={false}
                    itemtable={true}
                    receipt={false}
                    repeat={true}
                    Repeatlabel="Repeat After"
                    reference={true}
                    Reference="Reference"
                    enddate={true}
                    EndDate="End Date"
                />
            </Stack>
        </Stack>
    )
}