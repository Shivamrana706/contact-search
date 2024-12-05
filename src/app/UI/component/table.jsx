import React from 'react'

function Table({ filteredData }) {




    return (
        <div>
            <table className='ml-5 border'>
                <thead>
                    <tr>
                        <th className='px-4'>
                            First name
                        </th>
                        <th className='px-4'>
                            Last name
                        </th>
                        <th className='px-4'>
                            DOB
                        </th>
                        <th className='px-4'>
                            Address
                        </th>
                        <th className='px-4'>
                            City
                        </th>
                        <th className='px-4'>
                            State
                        </th>
                        <th className='px-4'>
                            Zip
                        </th>
                        <th className='px-4'>
                            Email
                        </th>
                        <th className='px-4'>
                            Phone
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData?.map((item, key) =>
                        <tr key={key} className='border border-x-2'>
                            <td className='px-4  border-x-2'>
                                {item.firstName}
                            </td>
                            <td className='px-4  border-x-2'>
                                {item.lastName}
                            </td>
                            <td className='px-4 border-x-2'>
                                {item.dob}
                            </td>
                            <td className='px-4 border-x-2'>
                                {item.address}
                            </td>
                            <td className='px-4 border-x-2'>
                                {item.city}
                            </td>
                            <td className='px-4 border-x-2'>
                                {item.state}
                            </td>
                            <td className='px-4 border-x-2'>
                                {item.zipcode}
                            </td>
                            <td className='px-4 border-x-2'>
                                {item.email}
                            </td>
                            <td className='px-4 border-x-2'>
                                {item.phone}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table