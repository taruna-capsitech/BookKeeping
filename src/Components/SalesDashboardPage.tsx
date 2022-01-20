import { IStackTokens, Nav, Stack } from "@fluentui/react";
import React from "react";
import { Mainmenu } from "./Mainmenu";
import { Menu } from "./Menu";
import { SalesDashboard } from "./SalesDashboard";

export const SalesDashboardPage: React.FC = () => {

    const stackGap: IStackTokens = {childrenGap: 15}

    return(
    <Stack>
        <Mainmenu />

        <Stack horizontal tokens={stackGap}>
            <Menu />
            <SalesDashboard />
        </Stack>
    </Stack>
    )
}