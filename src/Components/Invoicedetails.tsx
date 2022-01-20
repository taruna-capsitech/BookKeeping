import react from 'react';
import { Stack, IStackTokens } from '@fluentui/react';
import { Mainmenu } from './Mainmenu';
import { Menu } from './Menu';
import { FormProp } from './FormProp';

export const Invoicedetails: React.FC = () => {

    const stackGap: IStackTokens = {childrenGap: 15}

    return(
       <>
        <Stack>
            <Mainmenu />

            <Stack horizontal tokens={stackGap}>
                <Menu />
                <FormProp 
                    formtitle='Invoice Details'
                    InvoiceType="Invoice Type"
                    type={true}
                    check={true} 
                    checklabel="Batch Invoice"
                    CustomerName="Customer Name"
                    customer={true}
                    multivalue={false}
                    MultiValue="Customer Name"
                    addcustomer={true}
                    invoiceno={true}
                    InvoiceNo="Invoice No"
                    check1={true}
                    checklabel1='Amount Including VAT'
                    check2={true}
                    checklabel2='Discount in %'
                    check3={true}
                    checklabel3='Apply CIS VAT domestic reverse charge'
                    date={true}
                    Date="Date"
                    duedate={true}
                    DueDate="Due Date"
                    daydropdown={true}
                    Notes="Notes"
                    notes={true}
                    itemtable={true}
                    receipt={true}
                />
            </Stack>
        </Stack>
       </>
    )
}