"use client"

import { useState, useRef, useEffect } from "react"
import { useSearchParams } from "next/navigation"



// const onOk = () => {
//     console.log("ok")
// }

// const onClose = () => {
//     console.log("close")
// }

const Dialog = ({ children, onClose, onOk }) => {
    const searchParams = useSearchParams()
    const dialogRef = useRef(null)
    const showDialog = searchParams.get('showDialog')

    useEffect(() => {
        if(showDialog === "y") {
            dialogRef.current?.showModal()
        } else {
            dialogRef.current?.close()
        }
    }, [showDialog])

    const closeDialog = () => {
        dialogRef.current?.close()
        onClose()
    }

    const clickOk = () => {
        onOk()
        closeDialog()
    }

const dialog = (showDialog === "y") ? 
    (
        <dialog className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10 rounded-xl 
        backdrop:bg-black/70  p-6" ref={dialogRef}>
            <div className="w-[500px] max-w-full bg-blue-200 flex flex-col" >
                <div className="flex flex-row justify-between mb-4 pt-2 bg-yellow-400" >
                    <h1 className="text-2xl ml-3">Example Modal</h1>
                    <button className="mb-2 mr-2 py-1 px-2 bg-red-500 rounded-md"  onClick={closeDialog}>Close</button>
                </div>
                <div className="px-5 pb-6" >
                    {children}
                </div>
                <div className="flex flex-row justify-end mb-2 py-1 px-2" >
                    <button className="bg-green-500 px-2 rounded-md"  onClick={clickOk}>Ok</button>
                </div>
            </div>
        </dialog>
    ) : null


    
    return dialog
    }   


    export default Dialog
