import React from "react";

function MemberList(props) {

    const members = [
        {
            id: 1,
            name: 'wando111'
        },
        {
            id: 2,
            name: 'wando222'
        },
        {
            id: 3,
            name: 'wando333'
        }
    ]

    return (
        <ul>
            {members.map(member => {
                return <li key={member.id}>{member.name}</li>
            })}
        </ul>
    )
}

export default MemberList;