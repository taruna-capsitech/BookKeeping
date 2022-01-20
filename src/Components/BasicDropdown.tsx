import React from 'react';
import { Stack, Text } from '@fluentui/react';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from '@fluentui/react/lib/Dropdown';

const dropdownControlledExampleOptions = [
    { key: 'Invoice', text: 'Invoice' },
    { key: 'Credit Note', text: 'Credit Note' },
    { key: "Inventory", text: "Inventory"},
  ];

export const BasicDropdown: React.FC<{text?: Boolean, width?: string, label?: string}> = ({text, width, label}) => {

    const [selectedItem, setSelectedItem] = React.useState<IDropdownOption>();

    const onChange = (event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption): void => {
      setSelectedItem(item);
    };
    
    return(     
        <Stack horizontal>
            {text && <Text className='fieldLable'>{label}</Text>}
            <Dropdown
                selectedKey={selectedItem ? selectedItem.key : undefined}
                onChange={onChange}
                placeholder="Select an option"
                options={dropdownControlledExampleOptions}
                styles={{dropdown: {width: width}}}
            />
        </Stack>
    )
}

