import React from 'react';
import data from './Data';

function Table() {

    const th = ["Invoice ID", "Date", "Customer ", "Payable Amount", "Paid Amount", "Due"];

    /* console.log(data);
    console.log(Object.keys(data));
 */
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th> <input type="checkbox" name="" id="" /></th>
                    {th.map((heading) => <th className='header'><b> {heading}</b></th>)}
                </tr>
            </thead>
            <tbody>
                {Object.keys(data).map((e) => {
                    let res = data[e];
                    return (
                        <tr>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td style={{ color: 'blue' }}>{res.id}</td>
                            <td>{res.date}</td>
                            <td>{res.name}</td>
                            <td>&#8377;{res.amount1}</td>
                            <td>&#8377;{res.amount2}</td>
                            <td>&#8377;{res.amount3}</td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    )
}

export default Table