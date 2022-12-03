import React from 'react'
import { Input } from 'antd';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import { TimePicker } from 'antd';
import {
    SearchOutlined,
  } from '@ant-design/icons';

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
                    <div className='turo-filter'>
                    <div className='row'>
                        <div className='col-md-5'>
                        <div className='search-filter'>
                            <label>Where</label>
                            <Input placeholder="City, Airport, Address and Hotel" /> 
                        </div>
                        </div>
                        <div className='col-md-3'>
                        <div className='search-filter'>
                        <label>From</label>
                        <div className='from-date-pick'>
                                <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
                                <TimePicker onChange={onChange} defaultValue={dayjs('0:00:00', 'HH:mm:ss')} />
                            </div> 
                        </div>    
                        </div>
                        <div className='col-md-3'>
                        <label>Until</label>
                        <div className='until-date-pick'>
                                <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
                                <TimePicker onChange={onChange} defaultValue={dayjs('10:00:00', 'HH:mm:ss')} />
                            </div> 
                        </div>
                        <div className='col-md-1'>
                            <Space className='designer-icon'>
                                <SearchOutlined />
                            </Space>
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
