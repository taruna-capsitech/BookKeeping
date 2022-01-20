import { Stack } from '@fluentui/react';
import React from 'react';
import { Datalist } from './Datalist';
import { Mainmenu } from './Mainmenu';
import { Menu } from './Menu';

export const SalesInvoicePage: React.FC = () => {
    return(
        <Stack>
            <Mainmenu />

            <Stack horizontal>
                <Menu />
                <Datalist />
            </Stack>
        </Stack>
    )
}