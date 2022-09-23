import React from 'react';
import dummy from './db/data.json'
import {useParams} from 'react-router-dom';


function Day(props) {

    const {day} = useParams();
    const wordList = dummy.words.filter(word=>word.day===Number(day));

    return (
        <>
          <h2>{day}일 차 수업</h2>
          <table>
            <tbody>
                {wordList.map(word=>(
                    <tr key={word.id}>
                        <td>{word.eng}</td>
                        <td>{word.kor}</td>
                    </tr>
                ))}
            </tbody>
            </table>  
        </>
    );
}

export default Day;