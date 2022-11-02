import React from 'react';
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

export const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employess" />
      <GridComponent
        dataSource={employeesData}
        toolbar={['Search']}
        width="auto"
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};
