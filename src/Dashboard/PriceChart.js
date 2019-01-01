import React from 'react';
import {AppContext} from '../App/AppProvider';
import {Tile} from '../Shared/Tile';
import highchartsConfig from './HighchartsConfig';
import ReactHighCharts from 'react-highcharts'
import HighchartsTheme from './HighchartsTheme';
import ChartSelect from './ChartSelect';


ReactHighCharts.Highcharts.setOptions(HighchartsTheme);

export default function() {
    return (
        <AppContext.Consumer>
            {({historical , changeChartSelect}) =>
                <Tile>
                    <ChartSelect defaultValue = "months" 
                        onChange = {e=> changeChartSelect(e.target.value)}>
                        <option value="days"> Days </option>
                        <option value="weeks"> Weeks </option>
                        <option value="months"> Months </option>
                    </ChartSelect>
                   {historical ? <ReactHighCharts config={highchartsConfig(historical)}/>
                   : <div> Loading historical Data</div>
                 }
                </Tile>
            }
        </AppContext.Consumer>
    )

}