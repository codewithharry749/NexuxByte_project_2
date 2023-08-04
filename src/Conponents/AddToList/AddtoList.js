import React, { useState } from 'react'
import { addDoc, collection, deleteField, doc, getDocs, getFirestore, query, updateDoc, where } from 'firebase/firestore';
import { app } from '../../firebase';

const firestoreDB = getFirestore(app);
const AddtoList = () => {

    const [listedData, setListedData] = useState({
        name: '',
        bookName: '',
        date: '',
        college: '',
        year: '',
        author: '',
        isbn: '',
        rdate: '',
        roll: '',
        branch: ''

    });

    const handleInpute = (e) => {
        const { name, value } = e.target;
        setListedData({
            ...listedData, [name]: value
        })
    }

    const saveData = async () => {
        await addDoc(collection(firestoreDB, 'studentData'), {
            name: listedData.name,
            bookName: listedData.bookName,
            date: listedData.date,
            college: listedData.college,
            year: listedData.year,
            author: listedData.author,
            isbn: listedData.isbn,
            rdate: listedData.rdate,
            roll: listedData.roll,
            branch: listedData.branch
        });
    }

    // ============== read data from fire-store ===================
    const getData = async () => {
        const collectionRef = collection(firestoreDB, 'studentData');
        const get = query(collectionRef, where("year", "<", "5"));
        const snap = await getDocs(get);
        snap.forEach((ele) =>{
            // console.log(ele.data())
           
        });

    }

    // ============= Delete Data from fire-store ================

    const deleteData = async () => {
        const deleteRef = doc(firestoreDB, 'studentData', 'MjyEf2ZDYRs2lYji0D0N');
        await updateDoc(deleteRef, {
            year: deleteField()
        });
    }

    // =============  Update data inside firebase ===============

    const updateData = async () => {
        const updateRef = doc(firestoreDB, 'studentData', "MjyEf2ZDYRs2lYji0D0N");
        await updateDoc(updateRef, {
            name: listedData.name,
            bookName: listedData.bookName,
            date: listedData.date,
            college: listedData.college,
            year: listedData.year,
            author: listedData.author,
            isbn: listedData.isbn,
            rdate: listedData.rdate,
            roll: listedData.roll,
            branch: listedData.branch
        });
    }


    return (
        <div className='container-fluid'>
            <div className='row'>
                {/* <div className='col-10'>
                <div className="form-group" style={{ marginTop: '1rem' }}>
                        <label for="exampleInputPassword1">Collection Name</label>
                        <input type="text"
                            name='collection'
                            value={listedData.collection}
                            onChange={handleInpute}
                            required

                            className="form-control" id="exampleInputPassword1" placeholder="Enter Collection Name" />

                    </div>
                </div> */}
            </div>

            <div className='row'>
                <div className='col-sm-10 col-md-6'>
                    <div className="form-group" style={{ marginTop: '1rem' }}>
                        <label for="exampleInputPassword1">Student Name</label>
                        <input type="text"
                            name='name'
                            value={listedData.name}
                            onChange={handleInpute}
                            required

                            className="form-control" id="exampleInputPassword1" placeholder="Enter Student Name" />

                    </div>
                    <div className="form-group" style={{ marginTop: '1rem' }}>
                        <label for="exampleInputPassword1">Book Name</label>
                        <input type="text"
                            name='bookName'
                            value={listedData.bookName}
                            onChange={handleInpute}
                            required

                            className="form-control" id="exampleInputPassword1" placeholder="Enter Book Name" />
                    </div>
                    <div className="form-group" style={{ marginTop: '1rem' }}>
                        <label for="exampleInputPassword1">Issue Date</label>
                        <input type="date"
                            name='date'
                            value={listedData.date}
                            onChange={handleInpute}
                            required

                            className="form-control" id="exampleInputPassword1" placeholder="Enter Issue Date" />
                    </div>
                    <div className="form-group" style={{ marginTop: '1rem' }}>
                        <label for="exampleInputPassword1">College Name</label>
                        <input type="text"
                            name='college'
                            value={listedData.college}
                            onChange={handleInpute}
                            required

                            className="form-control" id="exampleInputPassword1" placeholder="Enter Your College Name" />
                    </div>
                    <div className="form-group" style={{ marginTop: '1rem' }}>
                        <label for="exampleInputPassword1">College Year</label>
                        <input type="number" max='4' min='1'
                            name='year'
                            value={listedData.year}
                            maxLength='2'
                            onChange={handleInpute}
                            required

                            className="form-control" id="exampleInputPassword1" placeholder="Enter Your College Name" />
                    </div>
                </div>

                <div className='col-sm-10 col-md-6'>
                    <div className="form-group" style={{ marginTop: '1rem' }}>
                        <label for="exampleInputPassword1">Author Name</label>
                        <input type="text"
                            name='author'
                            value={listedData.author}
                            onChange={handleInpute}
                            required

                            className="form-control" id="exampleInputPassword1" placeholder="Enter Author Name" />
                    </div>
                    <div className="form-group" style={{ marginTop: '1rem' }}>
                        <label for="exampleInputPassword1">Book ISBN Number</label>
                        <input type="number"
                            name='isbn'
                            value={listedData.isbn}
                            onChange={handleInpute}
                            required

                            className="form-control" id="exampleInputPassword1" placeholder="Enter Book Name" />
                    </div>
                    <div className="form-group" style={{ marginTop: '1rem' }}>
                        <label for="exampleInputPassword1">Book Return Date</label>
                        <input type="date"
                            name='rdate'
                            value={listedData.rdate}
                            onChange={handleInpute}
                            required

                            className="form-control" id="exampleInputPassword1" placeholder="Enter Issue Date" />
                    </div>
                    <div className="form-group" style={{ marginTop: '1rem' }}>
                        <label for="exampleInputPassword1">Roll Number</label>
                        <input type="number"
                            name='roll'
                            value={listedData.roll}
                            onChange={handleInpute}
                            required

                            className="form-control" id="exampleInputPassword1" placeholder="Enter Roll Number" />
                    </div>

                    <div className="form-group" style={{ marginTop: '1rem' }}>
                        <label for="exampleFormControlSelect1">Select Branch</label>
                        <input type="text"
                            name='branch'
                            value={listedData.branch}
                            onChange={handleInpute}
                            required

                            className="form-control" id="exampleInputPassword1" placeholder="Enter Your College Name" />
                    </div>

                </div>
            </div>
            <button className='btn btn-outline-success'
                title='save data'
                onClick={saveData}
            > <i class="fa fa-save" aria-hidden="true"></i></button>&nbsp;&nbsp;

            <button className='btn btn-outline-primary'
                title='get data'
                onClick={getData}
            > <i class="fa fa-get-pocket" aria-hidden="true"></i></button>&nbsp;&nbsp;&nbsp;

            <button className='btn btn-outline-danger'
                title='delete data'
                onClick={deleteData}
            > <i class="fa fa-trash-o" aria-hidden="true"></i></button>&nbsp;&nbsp;
            <button className='btn btn-outline-warning'
                title='update data'
                onClick={updateData}
            > <i class="fa fa-refresh" aria-hidden="true"></i></button>
            &nbsp;
        </div>



    )
}

export default AddtoList;