import { Dropdown, IDropdownOption, IDropdownStyles } from '@fluentui/react';
import React from 'react';

const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 400 },
};

const options: IDropdownOption[] = [
    { key: 'apple', text: 'Apple' },
    { key: 'banana', text: 'Banana' },
    { key: 'orange', text: 'Orange' },
    { key: 'grape', text: 'Grape' },
    { key: 'broccoli', text: 'Broccoli' },
    { key: 'carrot', text: 'Carrot' },
    { key: 'lettuce', text: 'Lettuce' },
  ];

export const MultipleSelectionDropdown: React.FC = () => {
    return(
        <>
        <Dropdown
            placeholder="Select options"
            multiSelect
            options={options}
            styles={dropdownStyles}
        />
        </>
    )
}