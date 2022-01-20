import React from "react";
import { Stack, Text } from "@fluentui/react";
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { CurrentDebtorList } from "./CurrentDebtorList";
import { RecentSalesList } from "./RecentSalesList";
import { SalesBarChart } from "./SalesBarChart";
import { LineChartStyledExample } from "./LineChart";

export const SalesDashboard: React.FC = () => {
    return(
        <Stack verticalFill>

            <Stack horizontal>

                <Stack className="dashboardcontainer">
                    <Text className="dashboardtitle">Sales Summary</Text>
                    <Stack horizontal className="salescontent">

                        <Stack verticalFill className="leftcontent">
                            <Text className="currancy">£85,700.00</Text>
                            <Text>Sales this month</Text>
                        </Stack>
                        
                        <Stack verticalFill className="rightcontent">
                            <Text className="currancy">£00.00</Text>
                            <Text>Sales last month</Text>
                        </Stack>

                    </Stack>

                    <Stack verticalFill className="buttoncontainer">

                        <Stack horizontal>
                            <PrimaryButton text="+ Sales" className="salesdashboardbutons"/>
                            <PrimaryButton text="+ Customer" className="salesdashboardbutons"/>
                            <PrimaryButton text="+ Quote" className="salesdashboardbutons"/>
                        </Stack>

                        <Stack horizontal>
                            <Text className="salesdashboardtablelinks">All Sales</Text>
                            <Text className="salesdashboardtablelinks">All Customer</Text>
                            <Text className="salesdashboardtablelinks noborderright">All Quote</Text>
                        </Stack>

                    </Stack>
                </Stack>

                <Stack className="dashboardcontainer">
                    <Text className="dashboardtitle">Sales Chart</Text>
                    <SalesBarChart />
                </Stack>

                <Stack className="dashboardcontainer">
                    <Text className="dashboardtitle">Debtors Chart</Text>   
                    <LineChartStyledExample />
                </Stack>

            </Stack>

            <Stack horizontal>
                
                <Stack className="dashboardcontainer">
                    <Text className="dashboardtitle">Current Debtors List</Text>
                    <CurrentDebtorList />
                </Stack>

                <Stack className="dashboardcontainer1">
                    <Text className="dashboardtitle1">Recent Sales List</Text>
                    <RecentSalesList />
                </Stack>

            </Stack>

        </Stack>
    )
}