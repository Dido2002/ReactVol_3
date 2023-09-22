// 4. useRef и текстови полета
// Създайте два бутона и две текстови полета. При натискане на бутон едно текстово
// поле едно се фокусира. При натискане на бутон две – текстово поле две се фокусира.



// import React, {useRef} from 'react';

// export default function App04(){
    
//     const firstRef = useRef(null);
//     const secondRef = useRef(null);

//     return(
//         <div>
//             <div>
//                 <input type="textarea" ref={firstRef}></input>
//                 <button onClick={() => firstRef.current.focus()}>Press 1</button>
//             </div>
//             <div>
//                 <input type="textarea" ref={secondRef}></input>
//                 <button onClick={() => secondRef.current.focus()}>Press 2</button>
//             </div>
//         </div>
//     )
// }


import React,{useRef} from 'react';

export default function App04(){
    
    const firstRef = useRef(null);
    const secondRef = useRef(null);

    return(
        <>
            <div>
                <input type="textarea" ref={firstRef}/>
                <button onClick={() => firstRef.current.focus()}>Press 1</button>
            </div>
            <div>
                <input type="textarea" ref={secondRef}/>
                <button onClick={() => secondRef.current.focus()}>Press 2</button>
            </div>
        </>
    )
}