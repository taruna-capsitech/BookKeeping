import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SalesDashboardPage } from './Components/SalesDashboardPage';
import { SalesInvoicePage } from './Components/SalesInvoicePage';
import { Invoicedetails } from './Components/Invoicedetails';
import { QuotationForm } from './Components/QuotationForm';
import { RecurringInvoice } from './Components/RecurringInvoice';
import { ReceiptForm } from './Components/ReceiptForm';
import { BatchSelection } from './Components/BatchSelection';

export const App: React.FunctionComponent = () => (
  <BrowserRouter>
        <Routes>
            <Route path="/" element={<SalesDashboardPage />} />
            <Route path="/invoice" element={<SalesInvoicePage />} />
            <Route path="/invoiceform" element={<Invoicedetails />} />
            <Route path="/quotation" element={<QuotationForm />} />
            <Route path="/recurringinvoice" element={<RecurringInvoice />} />
            <Route path="/receipt" element={<ReceiptForm />} />
        </Routes>
  </BrowserRouter>
);
