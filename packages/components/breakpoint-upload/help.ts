const filesArray: Array<{}> = []

/**
 * 选择文件
 */
export function chooseFile(event: any) {
  const files = event.target.files
  const filesArr = Array.from(files)
  if (Array.isArray(filesArr) && filesArr.length > 0) {
    for (const file of filesArr) {
      const { name, size, type } = file
      const id = (`${file.lastModified}`).replace(/\W/g, '') + size + (type.replace(/\W/g, ''))
      if (size > 1024 * 1024 * 10) {
        throw new Error('文件大小不能超过10M')
      }

      filesArray.push(id)
      filesArray[id] = file
    }

    console.log(filesArray)
  }
  else {
    throw new Error('请选择文件')
  }
}
