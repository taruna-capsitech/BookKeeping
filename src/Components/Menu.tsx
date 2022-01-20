import * as React from 'react';
import { IStackTokens, Stack } from '@fluentui/react';
import { Nav, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';
import { Mainmenu } from './Mainmenu';
import { SalesDashboard } from './SalesDashboard';
import { Datalist } from './Datalist';
import { LineChart } from '@fluentui/react-charting';
import { LineChartStyledExample } from './LineChart';

const navStyles: Partial<INavStyles> = { 
    root: 
    { 
        width: 200,
        height: "95vh",
        boxShadow: "0 0 30px #ddd",
        background: "#fff",
    } 
};

const navLinkGroups: INavLinkGroup[] = [
  {
    name: 'Sales',
    expandAriaLabel: 'Expand Basic components section',
    collapseAriaLabel: 'Collapse Basic components section',
    links: [
      {
        key: 'Dashboard sales',
        name: 'Dashboard',
        url: '/',
      },
      {
        key: 'Invoices',
        name: 'Invoices',
        url: '/invoice',
      },
      {
        key: 'Quotations',
        name: 'Quotations',
        url: '/quotation',
      },
      {
        key: 'Recurring Invoices',
        name: 'Recurring Invoices',
        url: '/recurringinvoice',
      },
      {
        key: 'Receipts',
        name: 'Receipts',
        url: '/receipt',
      },
      {
        key: 'Items',
        name: 'Items',
        url: '/batch',
      },  
    ],
  },

  //Purchase menu
  {
    name: 'Purchases',
    expandAriaLabel: 'Expand Basic components section',
    collapseAriaLabel: 'Collapse Basic components section',
    links: [
      {
        key: 'Dashboard Purchase',
        name: 'Dashboard',
        url: '/dashboard',
      },
      {
        key: 'Purchases',
        name: 'Purchases',
        url: '/invoice',
      },
      {
        key: 'Recurring Purchases',
        name: 'Recurring Purchases',
        url: '/recurringpurchase',
      },
      {
        key: 'Payments',
        name: 'Payments',
        url: 'payment',
      }, 
    ],
  },
];

export const Menu: React.FunctionComponent = () => {

  const stackGap: IStackTokens = {childrenGap: 15}

  return (    
    <Nav styles={navStyles}  groups={navLinkGroups} />
  );
};
