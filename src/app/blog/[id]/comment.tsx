'use client'
import React, { useState } from 'react'

interface DataType {
    id?: number;
    text: string;
    name: string;
}

const Comment = () => {
    const [remarks, setRemarks] = useState<DataType[]>([]);
    const [newRemarks, setNewRemarks] = useState("");
    const [readerName, setReaderName] = useState("");

    const readerFeedback = () => {
        if (newRemarks.trim() && readerName.trim()) {
            const readerData: DataType = {
                text: newRemarks,
                name: readerName,
            };
            setRemarks((commentValue) => [readerData, ...commentValue]);
            setNewRemarks("");
            setReaderName("");

        }
    };

    return (
        <>
            <div className="mt-12 mb-[50px] flex justify-center">
                <div className="w-[95%] sm:w-[600px] md:w-[700px] lg:w-[800px]">
                    <h2 className="text-2xl font-bold text-gray-800 text-center">Your Remarks</h2>
                    <div className="mt-4 flex space-x-4">
                        <div className="">
                            <input
                                type="text"
                                value={readerName}
                                onChange={(e) => setReaderName(e.target.value)}
                                className="w-[100%] sm:w-[590px] md:w-[690] lg:w-[790px] sm:text-lg  pl-3 py-2 border rounded-md mb-2"
                                placeholder="enter name"
                            />
                            <textarea
                                value={newRemarks}
                                onChange={(e) => setNewRemarks(e.target.value)}
                                className="w-[100%] sm:w-[590px] md:w-[690] lg:w-[790px] sm:text-lg pl-3 pb-3 border rounded-md mb-2"
                                placeholder="leave your comment"
                            />
                            <button
                                onClick={readerFeedback}
                                className="mt-2 bg-[#005073] text-white font-semibold sm:text-lg py-3 px-6 rounded-md"
                            >
                                Submit
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 space-y-4">
                        {remarks.map((value) => (
                            <div key={value.id} className="border rounded-md shadow-md">
                                <div className="flex justify-between mb-2 px-2">
                                    <div className="flex justify-between gap-2">
                                        <span className="font-bold">{value.name}</span>

                                    </div>
                                    <button
                                        onClick={() => {
                                            const newResponse = remarks.filter(
                                                (com) => com.id !== value.id
                                            );
                                            setRemarks(newResponse);
                                        }}
                                        className="text-red-500"
                                    >
                                        Delete
                                    </button>
                                </div>
                                <div className="pl-2">
                                    <h1 className=''>{value.text}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Comment
