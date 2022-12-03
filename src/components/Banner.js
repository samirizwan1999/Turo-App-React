import React from 'react'
import banner from "./images/banner.jpg"
import { Input } from 'antd';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TimePicker } from 'antd';

const dateFormat = 'YYYY/MM/DD';
const onChange = (time, timeString) => {
    console.log(time, timeString);
  };
const Banner = () => {
  return (
    <div>
        <section>
            <div className='banner'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                        <div className='search-filter'>
                            <Input placeholder="City, Airport, Address and Hotel" /> 
                        </div>
                        </div>
                        <div className='col-md-4'>
                        <div className='from-date-pick'>
                                <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
                                <TimePicker onChange={onChange} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
                            </div> 
                        </div>
                        <div className='col-md-4'>
                        <div className='until-date-pick'>
                                <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
                                <TimePicker onChange={onChange} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Banner
