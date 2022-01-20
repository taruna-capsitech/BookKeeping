import { DetailsList, DetailsListLayoutMode } from "@fluentui/react";
import React, { useState } from "react";

interface IData {
    InvoiceNo: string,
    Type: string,
    CustomerName: string,
    Date: string,
    DueDate: string,
    Amount: Number,
    Status: string,
    Action: string,
}

export const RecentSalesList: React.FC = () => {

    const [items, setItems] = useState<Array<IData>>([])
    const columns = [
        { 
            key: 'column1', 
            name: 'InvoiceNo', 
            fieldName: 'InvoiceNo', 
            minWidth: 100, 
            maxWidth: 200, 
            isResizable: true 
        },
        { 
            key: 'column2', 
            name: 'Type', 
            fieldName: 'Type', 
            minWidth: 100, 
            maxWidth: 200, 
            isResizable: true 
        },
        { 
            key: 'column3', 
            name: 'CustomerName', 
            fieldName: 'CustomerName', 
            minWidth: 100, 
            maxWidth: 200, 
            isResizable: true 
        },
        { 
            key: 'column4', 
            name: 'Date', 
            fieldName: 'Date', 
            minWidth: 100, 
            maxWidth: 200, 
            isResizable: true 
        },
        { 
            key: 'column5', 
            name: 'DueDate', 
            fieldName: 'DueDate', 
            minWidth: 100, 
            maxWidth: 200, 
            isResizable: true 
        },
        { 
            key: 'column6', 
            name: 'Amount', 
            fieldName: 'Amount', 
            minWidth: 100, 
            maxWidth: 200, 
            isResizable: true 
        },
        { 
            key: 'column7', 
            name: 'Status', 
            fieldName: 'Status', 
            minWidth: 100, 
            maxWidth: 200, 
            isResizable: true 
        },
        { 
            key: 'column8', 
            name: 'Action', 
            fieldName: 'Action', 
            minWidth: 100, 
            maxWidth: 200, 
            isResizable: true 
        },
      ];

    for (let i = 0; i < 3; i++) {
        items.push({
            InvoiceNo: 'INV-' + i,
            Type: 'Sales',
            CustomerName: 'Taruna Panwar',
            Date: '17/01/2022',
            DueDate: '17/01/2022',
            Amount: 5000,
            Status: 'Active',
            Action: 'Select Action',
        });
      }

    return(
        <DetailsList
            items={items}
            columns={columns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.justified}
            selectionPreservedOnEmptyClick={true}
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            checkButtonAriaLabel="select row"
        /> 
    )
}