import React, { useState, useEffect } from 'react'
import axios from "axios";
import "../UploadPhotos/UploadPhotos.css"
import Logo from '../Logo/Logo';
import ShowImg from './ShowImg/ShowImg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UploadPhotos() {
    const [image, setImage] = useState()
    const [allImages, setallImages] = useState(["image"])

    useEffect(() => {
        axios.get('http://154.41.253.161:4001/get-image')
            .then(res => {
                setallImages(res.data.data)
            })
            .catch(err => console.log(err))
    }, []);

    const submitImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let index = 0; index < image.length; index++) {
            formData.append("image", image[index]);
        }
        await axios.post('http://154.41.253.161:4001/upload-image',
            formData,
            {
                headers: { "Content-Type": "multipart/form-data" }
            },
            {
                onUploadProgress: (data) => {
                    console.log("Okay", data.loaded)
                }
            }

        ).then((response) => {
            const timeWait = setTimeout(window.location.reload(),7000)
            toast.success(response.data, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            
        })


    };
    const onInputChange = (e) => {
        console.log(e.target.files)
        setImage(e.target.files)
    }
    return (
        <div className='PhotoUpload'>
            <Logo></Logo>
            <div className="uploadImg">
                <h2>Add Photos</h2>
                <form className="uploadForm" onSubmit={submitImage}>
                    <input type="file" multiple accept='image/*' name="image" id="" onChange={onInputChange} className='custom-file-input' />
                    <br></br>
                    <button type="submit">Upload</button>
                </form>
            </div>
            <div className="showing">
                <p>Number of images: {allImages.length}</p>
                <ShowImg images={allImages}></ShowImg>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    )
}

export default UploadPhotos;