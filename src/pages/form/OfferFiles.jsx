import { useState, useEffect, useRef } from 'react'
import {
  ref,
  uploadBytesResumable,
  listAll,
  getDownloadURL
} from 'firebase/storage'
import { storage } from '../../firebase/Api'

import {
  H4ClassName,
  BlueButton,
  OrangeButton
} from '../../components/ClassColors'
// Context
import { useMainContext } from '../../context/MainContext'
import { usersRolesList } from '../../components/Constants.js'

export default function OfferFiles({ values }) {
  const { userRole, selectedOffer } = useMainContext()
  const [files, setFiles] = useState([])
  const [progressPercentage, setProgressPercentage] = useState([])
  const [fileList, setFileList] = useState([])
  const fileInputRef = useRef(null)

  const filesListFolderRef = ref(
    storage,
    `${values.offerNumber}_${values.client}`
  )

  useEffect(() => {
    const fetchfileList = async () => {
      setFileList([])
      const response = await listAll(filesListFolderRef)
      const urls = await Promise.all(
        response.items.map(async (item) => {
          const url = await getDownloadURL(item)
          return url
        })
      )
      setFileList(urls)
    }
    fetchfileList()
  }, [])

  const handleFileChange = (e) => {
    const files = e.target.files
    const newfiles = Array.from(files)
    setFiles(newfiles)
  }

  const handleUpload = async (e) => {
    e.preventDefault()
    fileInputRef.current.value = null

    files.forEach((file, i) => {
      const storageRef = ref(
        storage,
        `${values.offerNumber}_${values.client}/${files[i].name}`
      )
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setProgressPercentage((prevProgress) => {
            const newProgress = [...prevProgress]
            newProgress[i] = progress.toFixed(0)
            return newProgress
          })
        },
        (error) => {
          throw new Error(error)
        }
      )
    })
  }

  return (
    <>
      <div className="mt-10">
        {fileList.length > 0 && (
          <h4 className={H4ClassName}>Archivos de la Oferta</h4>
        )}
        <div className="flex flex-wrap gap-1">
          {fileList.map((url, index) => {
            const storageRef = ref(storage, url)
            const item = storageRef.name
            return (
              <a
                key={index}
                className={OrangeButton}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item}
              </a>
            )
          })}
        </div>
      </div>

      {userRole === usersRolesList.admin && selectedOffer && (
        <div className="mt-5">
          <input
            className="rounded-md"
            ref={fileInputRef}
            multiple
            onChange={handleFileChange}
            type="file"
          />

          <button className={BlueButton} onClick={handleUpload}>
            Subir archivos
          </button>
        </div>
      )}

      {progressPercentage.map((progressPercentage, i) => (
        <>
          <h5 key={i} className="mt-1 text-base font-medium dark:text-white">
            {files[i].name}
          </h5>
          <div className="h-8 w-32">
            <div
              style={{ width: `${progressPercentage}%` }}
              className={`flex h-8 justify-center rounded p-2 ${
                progressPercentage < 100 ? 'bg-red-600' : 'bg-green-600'
              }`}
            >
              {progressPercentage}%
            </div>
          </div>
        </>
      ))}
    </>
  )
}
