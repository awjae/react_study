import React from 'react';
import queryString from 'query-string';
const About = ({location, match}) => {
    // return (
    //     <div>
    //         <h2>소개</h2>
    //         <p>
    //             안녕하세요, 저는 리액트 라우터 입니다.
    //         </p>
    //     </div>
    // )
    const query = queryString.parse(location.search)
    console.log(query)
}
export default About;