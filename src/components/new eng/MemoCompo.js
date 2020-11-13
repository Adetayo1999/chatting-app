import React from 'react'

function MemoCompo({name}) {
    console.log("Rendering Memo Component")
    return (
        <div className="memo">
            Hello {name}
        </div>
    )
}

export default React.memo(MemoCompo)
