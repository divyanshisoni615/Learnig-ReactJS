// Multiple components...

import React from 'react'

function FreeCourse() {
    const name = "divyanshi"
    return (
        <>
            <div>{name}</div>
        </>
    )
}
function FreePaidCourse() {
    const name = "divya"
    return (
        <>
            <div>{name}</div>
        </>
    )
}
 

function Course() {
    return (
        <>
        <FreePaidCourse/>
        <div>Course!</div>
        <FreeCourse/>
        </>
    )
}

export default Course;