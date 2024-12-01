import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const ExcelUploade = ({closeUpload}) => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]); // Only allow one file
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ".xlsx, .xls", // Only allow Excel files
    multiple: false, // Allow only one file
  });

  const handleUpload = async () => {
    if (!file) {
      setUploadStatus("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://192.168.43.221:8000/api/v1/stock/save-excel-data/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMzMDIzMjg0LCJpYXQiOjE3MzMwMjAyODQsImp0aSI6Ijk5NTJiNzI5M2QzNjRmZDI5MGI1ZGIzMDgxMTcyMzVjIiwidXNlcl9pZCI6MX0.kS-yz7kD5Ivk24eF2IAj1pAQhbnBaxGBgYc82i8NGEg`

        },
      });
      setUploadStatus(response.data.message || "File uploaded successfully!");
    } catch (error) {
      setUploadStatus("File upload failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className={ `fixed inset-0 bg-opacity-50  flex justify-center z-30 backdrop-blur-[0.75px] items-center bg-slate-300 flex-col `}>
        <div className="bg-white p-12 rounded-sm relative animate ">
        <p className="absolute top-1 right-4 hover:font-semibold" role="button" onClick={() => {
            closeUpload(false)
        }}>X</p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Upload Excel File</h2>

{/* Drag-and-drop area */}
<div
  {...getRootProps()}
  className={`border-4 border-dashed rounded-lg py-12 px-10  text-center cursor-pointer transition-all duration-300 ${
    isDragActive
      ? "border-blue-500 bg-blue-50"
      : "border-gray-300 hover:border-blue-500 hover:bg-gray-50"
  }`}
>
  <input {...getInputProps()} />
  {isDragActive ? (
    <p className="text-lg text-blue-500">Drop the file here...</p>
  ) : (
    <p className="text-lg text-gray-600">
      Drag and drop an Excel file here, or click to select one.
    </p>
  )}
  {file && (
    <p className="mt-4 text-sm text-gray-700">
      <span className="font-medium">Selected file:</span> {file.name}
    </p>
  )}
</div>

{/* Upload Button */}
<div className="mt-6">
  <button
    onClick={handleUpload}
    className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
  >
    Upload
  </button>
</div>

{/* Status Message */}
{uploadStatus && (
  <p
    className={`mt-4 text-sm ${
      uploadStatus.includes("success") ? "text-green-600" : "text-red-600"
    }`}
  >
    {uploadStatus}
  </p>
)}
        </div>
      
    </div>
  );
};

export default ExcelUploade;
