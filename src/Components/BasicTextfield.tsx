import React from "react";
import { Stack, Text } from "@fluentui/react";
import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';

export const BasicTextfield: React.FC<{text?: Boolean, width?: string, label?: String}> = ({text, width, label}) => {
    return(
        <Stack horizontal>
            {text && <Text className='fieldLable'>{label}</Text>}
            <TextField styles={{fieldGroup: {width: width}}}/>
        </Stack>
    )
}