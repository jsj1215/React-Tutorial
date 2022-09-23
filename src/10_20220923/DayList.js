import React from 'react';
import {Link, useParams} from 'react-router-dom';
// json 파일 불러오기
import dummy from './db/data.json'

function DayList() {

    //console.log(dummy);

    return (
        <>
        <div >
            <h3 className='classList'>수업 목차</h3>
            <ul className='list_day'>
                {dummy.days.map(day=>(
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>
                            Day {day.day}
                        </Link>
                    </li>
                ))}
                
            </ul>
            
            </div>
        </>
    );
}

export default DayList;