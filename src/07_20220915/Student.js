import React from 'react';

function Student({student}) {
  return (
    <>
      <h3>이름 : {student.name}</h3>
      <h3>나이 : {student.age}세</h3>
      <h3>이메일 : {student.email}</h3>
    </>
  );
}

export default Student;