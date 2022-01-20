import { Stack, Text } from '@fluentui/react';
import React from 'react';

export const SalesGrandTotal: React.FC = () => {
    return(
        <Stack>
            <Text className='grandtotalheading'>Grand Total (Including VAT)</Text>
            <Stack horizontal className='grandtotalcontent'>
                <Text>Total Amount</Text>
                <Text>£91,475.00</Text>
            </Stack>
            <Stack horizontal className='grandtotalcontent grandtotalmarginbottom'>
                <Text>Total Due</Text>
                <Text>£39,950.00</Text>
            </Stack>
        </Stack>
    )
}