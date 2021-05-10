import React, { useState, useEffect, useContext } from 'react'
import { listAppsContext, listAppsContextDispatch } from '../../context/listAppsContext'
import { userContext } from '../../context/userContext';
import { IconClose, IconDots, IconTrash } from '../Icons/mainIcons';
import Button from '../ui/Button';

const Applications = () => {


    // lets use data available to all the components
    const listApps = useContext(listAppsContext);
    const setListApps = useContext(listAppsContextDispatch)

    // get the user 
    const user = useContext(userContext)

    const [isModalNewOpen, setIsModalNewOpen] = useState(false)


    const [newAppData, setNewAppData] = useState({
        id: new Date().getTime(),
        name: "",
        dateCreated: new Date().toLocaleDateString(),
        createdBy: user,
        url: "",
        domaines: [

        ]


    })

    const [message, setMessage] = useState("")

    const [counterDomains, setCounterDomains] = useState(0)



    return (
        <div className="flex flex-col xl:items-start items-center  w-full  h-screen  p-2 md:p-6">

            <div className="flex w-full  xl:justify-end justify-center p-3">


                <Button onClick={() => setIsModalNewOpen(!isModalNewOpen)} >
                    <span className="text-xl px-2  ">+</span>
                    Create new application
              </Button>
            </div>

            { isModalNewOpen &&

                <div className=" w-full">

                    <div className="fixed  z-10 top-0  right-0 left-0 bottom-0  bg-black opacity-40 "></div>

                    <div className=" absolute lg:top-20 top-10  w-auto  z-10  lg:left-1/4 left-5  lg:right-1/4  flex flex-col md:p-4 p-3 rounded-md right-4  bg-white">
                        <div className="Title flex border-b   justify-between py-2" >
                            <p className="text-lg font-medium">New Application</p>
                            <IconClose onClick={() => setIsModalNewOpen(false)} />
                        </div>

                        <form className="Body p-4  flex flex-col" onSubmit={(e) => {
                            e.preventDefault()


                            if (newAppData.url.trim().split(" ").length > 1) {
                                setMessage(<p className="text-red-500 text-sm  mt-2">WhiteSpace Not allowed! </p>)
                                return
                            }



                            if (listApps.some(item => item.url === newAppData.url)) {
                                setMessage(<p className="text-red-500 text-sm  mt-2">URL already in use, try another one! </p>)
                                return
                            }

                            newAppData.domaines.forEach(element => {
                                if (listApps.some(item => item.url === element.domain)) {
                                    setMessage(<p className="text-red-500 text-sm  mt-2">URL already in use, try another one! </p>)
                                    return
                                }

                            });
                            setListApps([...listApps, newAppData]);
                            setNewAppData({
                                id: new Date().getTime(),
                                name: "",
                                dateCreated: new Date().toLocaleDateString(),
                                createdBy: user,
                                url: "",
                                domaines: []

                            })
                            setMessage("")
                            setIsModalNewOpen(false)


                        }}>

                            <div className="w-full flex flex-col">
                                <label className=" text-gray-700"  >Name</label>
                                <input onChange={(e) => setNewAppData({ ...newAppData, name: e.target.value })}
                                    type="text" minLength="2" maxLength="100" required
                                    className="w-full  md:w-96 border rounded-md p-2" />
                            </div>
                            <div className="w-full flex flex-col pt-4">
                                <label className=" text-gray-700"  >Url address</label>

                                <div className="flex md:w-96 ">
                                    <input required
                                        onChange={(e) => setNewAppData({ ...newAppData, url: e.target.value + '.my.sweetcloud.se' })} type="text"
                                        className="w-full  border rounded-l-md p-2" />
                                    <span className="bg-gray-200 rounded-r-md  flex justify-center items-center text-sm px-2 ">
                                        .my.sweetcloud.se
                               </span>

                                </div>
                            </div>
                            <div className="w-full flex flex-col pt-4" >
                                <label className=" text-gray-700"  >Connect a domain you alreday own</label>
                                <input disabled={counterDomains > 0} onChange={(e) => setNewAppData({ ...newAppData, domaines: [...newAppData.domaines, { id: 1, domain: e.target.value }] })} type="text" className="w-full  md:w-96 border rounded-md p-2" />
                            </div>
                            {
                                counterDomains >= 1 &&
                                <div className="w-full flex flex-col pt-4" >
                                    <input disabled={counterDomains > 1} onChange={(e) => setNewAppData({ ...newAppData, domaines: [...newAppData.domaines, { id: 2, domain: e.target.value }] })} type="text" className="w-full  md:w-96 border rounded-md p-2" />
                                </div>
                            }

                            {
                                counterDomains >= 2 &&

                                <div className="w-full flex flex-col pt-4" >
                                    <input disabled={counterDomains > 2} onChange={(e) => setNewAppData({ ...newAppData, domaines: [...newAppData.domaines, { id: 3, domain: e.target.value }] })} type="text" className="w-full  md:w-96 border rounded-md p-2" />
                                </div>
                            }

                            <button className={` w-28 py-1 text-green-600  hover:text-green-800`}
                                disabled={counterDomains == 3} onClick={() => {
                                    if (newAppData.domaines.find(item => item.id == counterDomains + 1))
                                        setCounterDomains(counterDomains + 1)
                                }} type="button">
                                + Add more
                            </button>


                            <div className="Actions flex justify-end space-x-4 p-4  ">
                                {message}
                                <button className="bg-gray-100 px-2 rounded-md hover:bg-gray-200" onClick={() => { setIsModalNewOpen(false); setCounterDomains(0) }}>Cancel</button>
                                <Button type="submit"
                                >save</Button>
                            </div>

                        </form>



                    </div>


                </div>
            }






            <div className="Table    xl:w-full    md:w-[770px] sm:w-[600px] w-96    relative overflow-x-scroll  my-10   border-2 border-gray-300 ">

                <div className="Header  w-[1000px]   xl:w-full   flex  flex-nowrap  whitespace-nowrap   p-2   bg-gray-300 text-gray-500 font-medium ">
                    <span className="lg:flex-1 w-52 ">Name</span>
                    <span className="lg:flex-1 w-52 ">Date Created</span>
                    <span className="xl:flex-1 w-52">Created By</span>
                    <span className="lg:flex-auto w-72"> URL address</span>
                </div>


                {
                    listApps.map(item => (
                        <div className="Row  w-[1000px] xl:w-full  relative   flex  flex-nowrap p-2 border   bg-gray-100 text-gray-500 font-medium ">
                            <h5 className="lg:flex-1  w-52">{item.name}</h5>
                            <h5 className="lg:flex-1 w-52 ">{item.dateCreated}</h5>
                            <h5 className="lg:flex-1 w-52">{item.createdBy.firstName}  {item.createdBy.lastName}</h5>
                            <h5 className="lg:flex-auto w-72 text-green-500 cursor-pointer"> {item.url}</h5>
                            <div className="  absolute right-1 ">
                                <IconDots />

                            </div>

                        </div>))
                }

            </div>

        </div >
    )
}

export default Applications
