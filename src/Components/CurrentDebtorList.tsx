import { DetailsList, DetailsListLayoutMode } from '@fluentui/react';
import React, { useState } from 'react';

interface IData {
    DebtorName: string,
    DueBalance: String,
}

export const CurrentDebtorList: React.FC = () => {

    const[items, setItems] = useState<Array<IData>>([])

    const columns= [
        {
            key: 'column1', 
            name: 'DebtorName', 
            fieldName: 'DebtorName', 
            minWidth: 100, 
            maxWidth: 200, 
            isResizable: true 
        },
        {
            key: 'column2', 
            name: 'DueBalance', 
            fieldName: 'DueBalance', 
            minWidth: 100, 
            maxWidth: 200, 
            isResizable: true 
        },
    ];

    for(let i=0; i<2; i++){
        items.push({
            DebtorName: "Arihant Mehta",
            DueBalance: "£39,950.00",
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