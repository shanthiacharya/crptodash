import React from 'react';
import {AppContext} from '../App/AppProvider';
import {Tile} from '../Shared/Tile';
import highchartsConfig from './HighchartsConfig';
import ReactHighCharts from 'react-highcharts'
import HighchartsTheme from './HighchartsTheme';
ReactHighCharts.Highcharts.setOptions(HighchartsTheme);

export default function() {
    return (
        <AppContext.Consumer>
            {({}) =>
                <Tile>
                    <ReactHighCharts config={highchartsConfig()}/>
                </Tile>
            }
        </AppContext.Consumer>
    )

}