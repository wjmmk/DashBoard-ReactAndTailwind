/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ChartComponent, Inject, Legend, Category, StackingColumnSeries, Tooltip, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts';
import { /* stackedCustomSeries, */ stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
// eslint-disable-next-line arrow-body-style
export const Stacked = ({ width, height }) => {
  return (
    <ChartComponent
      width={width}
      heigth={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        { stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};
