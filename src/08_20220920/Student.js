import React from 'react';

function Student({student, onRemove}) {
  return (
    <>
      <h3>이름 : {student.name}</h3>
      <h3>나이 : {student.age}세</h3>
      <h3>이메일 : {student.email}</h3>
      <button onClick={()=> onRemove(student.id)}>X</button>
      <hr/>
    </>
  );
}

export default Student;