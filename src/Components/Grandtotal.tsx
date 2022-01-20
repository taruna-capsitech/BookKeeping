import { Stack, Text, IStackTokens } from '@fluentui/react';
import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
import React from  'react';

export const Grandtotal: React.FC<{label1: string, text: Boolean, label2: String, label3: String, width: string,}> 
= ({label1, label2, label3, text, width}) => {

    const styleToken: IStackTokens = {childrenGap: 15}

    return(
        <Stack horizontal tokens={styleToken}>
            <Text className='fieldLable'>{label1}</Text>

            <Stack horizontal>
                {text && <Text className='fieldLable2'>{label2}</Text>}
                <TextField styles={{fieldGroup: {width: width}}}/>
            </Stack>

            <Stack horizontal>
                {text && <Text className='fieldLable2'>{label3}</Text>}
                <TextField styles={{fieldGroup: {width: width}}}/>
            </Stack>

        </Stack>
    )
}