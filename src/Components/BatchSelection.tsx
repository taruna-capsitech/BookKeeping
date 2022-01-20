import React, { useState } from 'react';

export const BatchSelection: React.FC = () => {

    const[tags, setTags] = useState(['create tag'])

    const addTags = (e: any) => {
        if(e.target.value!==""){
            setTags([...tags, e.target.value]);
            e.target.value="";
        }
    }

    const removeTags = (indexToRemove:any) => {
        setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    };

    return(
        <>
        <input 
            type="text" 
            placeholder='add tags'
            onKeyUp={(e:any)=>e.key===","? addTags(e) : null}
        />

        <ul>
            {tags.map((tags, index)=> 
                <li>{tags}
                    <span onClick={()=>removeTags(index)}>X</span>
                </li>
            )}
        </ul>
        </>
    )
}