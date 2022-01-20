import React from 'react';
import { Stack, Text, DatePicker, defaultDatePickerStrings } from '@fluentui/react';

export const BasicDatepicker: React.FC<{width?: string, label?: String}> = ({width, label}) => {
    return(
        <Stack horizontal>
            <Text className='fieldLable'>{label}</Text>
            <DatePicker
                placeholder="Select a date..."
                ariaLabel="Select a date"
                strings={defaultDatePickerStrings}
                styles={{root: {width: width}}}
            />
        </Stack>
    )
}