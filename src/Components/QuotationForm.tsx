import { IStackTokens, Stack } from '@fluentui/react';
import React from 'react';
import { FormProp } from './FormProp';
import { Mainmenu } from './Mainmenu';
import { Menu } from './Menu';

export const QuotationForm: React.FC = () => {

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
                    check={true} 
                    checklabel="Batch Invoice"
                    CustomerName="Customer Name"
                    customer={true}
                    addcustomer={true}
                    invoiceno={true}
                    InvoiceNo="Quotation No"
                    check1={true}
                    checklabel1='Amount Including VAT'
                    check2={false}
                    checklabel2='Discount in %'             
                    check3={false}
                    checklabel3='Apply CIS VAT domestic reverse charge'
                    date={true}
                    Date="Date"
                    duedate={false}
                    DueDate="Due Date"
                    daydropdown={false}
                    Notes="Reference"
                    notes={true}
                    itemtable={true}
                    receipt={false}
                />
            </Stack>
        </Stack>
    )
}