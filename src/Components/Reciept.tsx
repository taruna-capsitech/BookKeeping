import React from 'react';
import { BasicDropdown } from './BasicDropdown';
import { BasicTextfield } from './BasicTextfield';

export const Reciept: React.FC = () => {
    return(
        <table className='receipttable'>

            <tr>
                <td colSpan={3} className='tabletitle'>
                    Receipt
                </td>
            </tr>

            <tr>
                <td>
                    <BasicDropdown 
                        text={false}
                        width="230px"
                        label=""
                    />
                </td>
                <td>
                    <BasicTextfield 
                        text={false}
                        label=""
                        width="150px"
                    />
                </td>
                <td className='plus'>+</td>
            </tr>

            <tr>
                <td>
                    <BasicDropdown 
                        text={false}
                        width="230px"
                        label=""
                    />
                </td>
                <td>
                    <BasicTextfield 
                        text={false}
                        label=""
                        width="150px"
                    />
                </td>
                <td className='plus'>+</td>
            </tr>

        </table>
    )
}