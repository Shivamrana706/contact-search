"use client"
import { useState, useEffect } from 'react';
import { data } from '@/app/Data/data';
import Table from './table';
import React from 'react'




function Form() {
    const [firstName, setFirstname] = useState('');
    // console.log('firstName', firstName)
    let [lastName, setLastname] = useState('');
    // console.log('lastName', lastName)
    const [email, setEmail] = useState('');
    // console.log('email', email)

    const [filteredData, setFilteredData] = useState([])

    useEffect(() => (
        setFilteredData(data)
    ), [])


    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5
    const lastIndex = currentPage * recordsPerPage;
    const fastIndex = lastIndex - recordsPerPage;
    const records = filteredData.slice(fastIndex, lastIndex);
    const nPages = Math.ceil(filteredData.length / recordsPerPage);
    const numbers = [...Array(nPages + 1).keys()].slice(1)


    const handleNextButton = () => {
        // console.log(currentPage, "currnt page", nPages, "nPgae")
        if (currentPage < nPages) {
            setCurrentPage(currentPage + 1)
        }
    }
    const handlePrevButton = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleCurrentPage = (n) => {
        setCurrentPage(n)
    }

    const handleFilterdData = () => {
        let firstNameFilteredData, lastNameFilteredData, emailFilteredData
        console.log('firstName in hadle ', firstName)
        console.log('lastname in hadle ', lastName.length)
        console.log('email in hadle ', email)
        if (lastName.length == 0) {
            alert("Enter last name")
            return
        }

        if (firstName.length > 0) {
            // console.log('firstName in hadle if', firstName)
            firstNameFilteredData = data.filter((item) => item.firstName.toLowerCase().includes(firstName.toLowerCase()))
        } else {
            firstNameFilteredData = []
        }
        if (lastName.length > 0) {
            // console.log('lastneme in hadle if ', lastName)
            lastNameFilteredData = data.filter((item) => item.lastName.toLowerCase().includes(lastName.toLowerCase()))
        } else {
            lastNameFilteredData = []
        }
        if (email.length > 0) {

            emailFilteredData = data.filter((item) => item.email.toLowerCase().includes(email.toLowerCase()))
        } else {
            emailFilteredData = []
        }

        // console.log('firstNameFilteredData', firstNameFilteredData)
        // console.log('lastNameFilteredData', lastNameFilteredData)
        // console.log('emailFilteredData', emailFilteredData)      
        const uniqueFilteredData = lastNameFilteredData?.filter((item) =>

            (firstNameFilteredData && firstNameFilteredData.length > 0 ? firstNameFilteredData.includes(item) : [lastNameFilteredData]) &&
            (emailFilteredData && emailFilteredData.length > 0 ? emailFilteredData.includes(item) : [lastNameFilteredData])
        )
        setFilteredData(uniqueFilteredData)
    }
    const handleResetData = () => {
        setFilteredData(data)
    }


    return (<>
        <div className='m-5'>
            <h2 className='font-bold'>
                Search for a contact
            </h2>
            <div className='container  flex w-full '>
                <div className='leftDiv flex-col w-1/2'>
                    <div className='flex'>
                        <div className='flex flex-col'>
                            <label >First name</label>
                            <input type='text' className='border w-32' onChange={(e) => setFirstname(e.target.value)} />
                        </div>
                        <div className='flex flex-col ml-3'>
                            <label><span className='text-red-600'>*</span>Last name</label>
                            <input type='text' className='border w-32' onChange={(e) => setLastname(e.target.value)} required minLength={1} />
                        </div>
                        <div className='flex flex-col  ml-3'>
                            <label >Date of birth</label>
                            <input type='date' className='border ' />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className=' flex flex-col'>
                            <label >Email</label>
                            <input type='text' className='border w-32' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='flex flex-col  ml-3'>
                            <label >Phone number</label>
                            <input type='text' className='border w-32' />
                        </div>
                    </div>
                </div>
                <div className='rightDiv flex flex-col w-1/2'>

                    <div className='flex flex-col'>
                        <label >Street address</label>
                        <input type='text' className='border w-4/5' />
                    </div>

                    <div className='flex '>
                        <div className='flex  flex-col'>
                            <label >City</label>
                            <input type='text' className='border w-64' />
                        </div>
                        <div className='flex flex-col  ml-3'>
                            <label >State</label>
                            <select id="state" name="state" className='border w-32'>
                                <option value="Ontario">Ontrio</option>
                                <option value="British Columbia">British Columbia</option>
                                <option value="Quebec">Quebec</option>
                                <option value="Alberta">Alberta</option>
                                <option value="New Brunswick">New Brunswick	</option>
                                <option value="Yukon">Yukon</option>
                                <option value="Manitoba">Manitoba</option>
                                <option value="Saskatchewan	">Saskatchewan	</option>
                                <option value="Prince Edward Island">Prince Edward Island</option>
                                <option value="Newfoundland and Labrador">Newfoundland and Labrador	</option>
                            </select>

                        </div>
                        <div className='flex flex-col  ml-3'>
                            <label >Zip code</label>
                            <input type='text' className='border w-32' />
                        </div>
                    </div>

                </div>
            </div>
            <div className='mt-4'>
                <button onClick={handleFilterdData} className='border px-3 py-1 rounded-md text-blue-800 font-medium' > Search</button>
                <button onClick={handleResetData} className='border px-3 py-1 ml-20 rounded-md text-blue-800 font-medium' > Reset</button>
            </div>
        </div>
        <div className='flex items-center w-full'>
            <div className='flex m-5 text-center items-center w-1/2'>
                <div>
                    <a href='#' onClick={handlePrevButton} className='page-link'>Prev</a>
                </div>
                <div className='flex text-center'>
                    {
                        numbers.map((n, i) => (
                            <div key={i} >
                                <a className='border p-2 mx-1 ' href='#' onClick={() => handleCurrentPage(n)}>{n}</a>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <a href='#' className='page-link' onClick={handleNextButton}>next</a>
                </div>
            </div>
            <div className='flex m-5 pl-64 text-center items-center w-1/2'>
                <div>
                    Showing <span>{currentPage}</span> of <span>{nPages}</span>
                </div>
            </div>
        </div>

        <Table filteredData={records} />

    </>
    )
}

export default Form