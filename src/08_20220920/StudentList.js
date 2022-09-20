import React, { useRef, useState } from 'react';
import Student from './Student'
import CreateStudent  from './CreateStudent';

function StudentList(props) {

    const [students,setStudents]=useState([
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
    
    ]);

    // input에서 사용할 값을 state로 관리
    const[inputs,setInupts]=useState({
        name:"",
        age:"",
        email:""
    })

    // 비구조화 할당 : state값을 각각 변수에 담기
    const {name,age,email} = inputs;

    const nextId = useRef(11);

    // # 배열 뒤에 추가 
    const onCreate = () =>{

        const student = {
            id:'s010'+nextId.current,
            name,
            age,
            email
        };

        setStudents([...students,student]) //기존 배열 students에 변수 student값 추가


        nextId.current+= 1; //id 값 1씩 증가
    }

    // # 데이터 변경함수
    const onDataChange = (e)=>{
        const {name,value} = e.target; //name,value는 값이 변경되는 input 태그의 속성을 비구조화 할당으로 저장

        console.log("name : " + name);
        console.log("value : " + value);
    
        // state 값 변경
        setInupts({
            ...inputs, //변경되는 것 외에 나머지 속성값을 의미하는 패턴임.
            [name]: value //내부에서 밖의 변수를 속성명으로 사용.
        });
    
    
    }

    // # 데이터 삭제
    const onRemove = id =>{
        //student.id가 매개변수로 작성하지 않은 데이터들만 추출해서 새로운 배열 만듬.
        // =student.id가 id인것을 제거
        setStudents(students.filter(student=>student.id !== id));
        // id값과 같지 않은 것들만 새로운 배열로 처리해 state 값 변경

        //*filter 함수 : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환.

    }


    return (
        <>
        <CreateStudent name={name} age={age} email={email} onDataChange={onDataChange} onCreate={onCreate}/>
        {students.map((student,index)=>(
             <Student student={student} key={student.id} onRemove={onRemove}/>
            //<Student student={student} key={index}/>
        ))}
 
        </>
    );
}

export default StudentList;