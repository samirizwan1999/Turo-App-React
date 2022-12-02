import React from 'react'
import banner from "./images/banner.jpg"
import { Input } from 'antd';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

const dateFormat = 'YYYY/MM/DD';
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
                            <div className='date-pick'>
                                <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
                            </div>  
                        </div>
                        </div>
                        <div className='col-md-4'></div>
                        <div className='col-md-4'></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Banner
