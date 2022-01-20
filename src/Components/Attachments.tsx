import React, {useState} from 'react';
import { Stack, IStackTokens } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';

export const Attachments: React.FC = () => {

    const styleToken: IStackTokens = {childrenGap: 15}

    const[attachmentlist, setAttachmentlist] = useState([
        {
            file: "",
            plus: ""
        }
    ])

    const addAttachment = () => {
        const list = [...attachmentlist]
        if(list.length<3)
        {
            setAttachmentlist([...attachmentlist, {
                file: "",
                plus: ""
            }])
        }
    }

    const removeAttachment = (index: any) => {
        const list = [...attachmentlist];
        if(list.length>1)
        {
            list.splice(index, 1);
            setAttachmentlist(list);
        }
    }

    return(
        <Stack tokens={styleToken}>
            
            <table className='receipttable'>

                <tr>
                    <td colSpan={2} className='tabletitle'>  
                        Attachments
                    </td>
                </tr>

                {attachmentlist.map((data, index) => 
                    <tr key={index}>
                        <td className='filecontainer'>
                            <input type="file" />
                        </td>
                        <td>
                            <button className='plus' onClick={() => removeAttachment(index)}>-</button>
                        </td>
                    </tr>
                )}

            </table>

            <PrimaryButton text="ADD ROW" className="addbutton" onClick={addAttachment}/>

        </Stack>
    )
}