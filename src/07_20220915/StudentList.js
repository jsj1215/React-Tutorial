import React from 'react';
import Student from './Student'

function StudentList(props) {
    const students=[
        {
            id:'s001',
            name:'홍길동',
            age:28,
            email:'abc@naver.com'
        },
        {
            id:'s002',
            name:'홍길동',
            age:28,
            email:'abc@naver.com'
        },
        {
            id:'s003',
            name:'홍길동',
            age:28,
            email:'abc@naver.com'
        },
        {
            id:'s004',
            name:'홍길동',
            age:28,
            email:'abc@naver.com'
        },
        {
            id:'s005',
            name:'홍길동',
            age:28,
            email:'abc@naver.com'
        },
        {
            id:'s006',
            name:'홍길동',
            age:28,
            email:'abc@naver.com'
        },
        {
            id:'s007',
            name:'홍길동',
            age:28,
            email:'abc@naver.com'
        },
        {
            id:'s008',
            name:'홍길동',
            age:28,
            email:'abc@naver.com'
        },
        {
            id:'s009',
            name:'홍길동',
            age:28,
            email:'abc@naver.com'
        },
        {
            id:'s010',
            name:'홍길동',
            age:28,
            email:'abc@naver.com'
        }
    
    ]
    return (
        <>
        <h2>배열 데이터 관리</h2>
        <p>var array = ['일','월','화']</p>
        <p>출력 : array 또는 array[0]</p>
        

        <p>세번째 : map()함수를 사용하여 배열데이터값 출력</p>
        <p>map()메소드는 Array객체의 메소드로 모든 배열 요소에 대해 함수를 호출한 결과로 새 배열을 만드는 메소드</p>
        <p>map함수 사용시 고유한 'key' 값을 설정해야 에러가 나지 않음.</p>
        {students.map((student,index)=>(
            // <Student student={student} key={student.id}/>
            <Student student={student} key={index}/>
        ))}


        <p>두번째 : 부모 컴포넌트를 만들어 배열데이터 출력</p>
        {/* <Student student={students[0]} />
        <Student student={students[1]} />
        <Student student={students[2]} />
        <Student student={students[3]} />
        <Student student={students[4]} />
        <Student student={students[5]} />
        <Student student={students[6]} />
        <Student student={students[7]} />
        <Student student={students[8]} />
        <Student student={students[9]} /> */}

        <p>첫번째 : 0번째부터 10번까지 배열 데이터 값을 출력하면 매번 같은 태그를 사용해야해서 비효율적이다.</p>
        {/* <ul>
            <li>이름 : {students[0].name} </li>
            <li>나이 : {students[0].age} 세</li>
            <li>이메일 : {students[0].email} </li>
        </ul>
        <hr/>
        <ul>
            <li>이름 : {students[1].name} </li>
            <li>나이 : {students[1].age} 세</li>
            <li>이메일 : {students[1].email} </li>
        </ul> */}
        
         
        </>
    );
}

export default StudentList;