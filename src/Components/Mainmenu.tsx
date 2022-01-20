import { Stack, Text, IStackTokens } from '@fluentui/react';
import React from 'react';

const stackGap: IStackTokens = {childrenGap: 1400}

export const Mainmenu: React.FC = () => {
    return(
        <Stack horizontal tokens={stackGap} className='mainmenu'>

            <Text className='menuitem'>DEMO LIMITED</Text>

            <Stack horizontal>
                
            </Stack>

        </Stack>
    )
}