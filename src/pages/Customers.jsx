import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { customersGrid, customersData } from '../data/dummy';
import { Header } from '../components';

export const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Pages" title="Customers" />
      <GridComponent
        dataSource={customersData}
        toolbar={['Delete']}
        width="auto"
        editSettings={{ allowDeleting: true, allowEditing: true }}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Edit, Sort, Filter, Toolbar]} />
      </GridComponent>
    </div>
  );
};
