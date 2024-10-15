class BreakpointUpload {
  file: File
  fileSize: number
  uploadedSize: number
  isPaused: boolean
  reader: FileReader

  protected onChange(event: any) {
    this.file = event.target.files[0]
    this.fileSize = this.file.size
    this.uploadedSize = 0
    this.isPaused = false
  }

  protected startUpload() {
    if (!this.file) {
      throw new Error('请选择文件')
    }
    this.uploadedSize = 0
    this.isPaused = false
    this.reader = new FileReader()
    this.uploadNextChunk()
  }

  protected uploadNextChunk() {
    if (this.isPaused) {
      return
    }
    const chunkSize = 1024 * 1024
    const chunk = this.file.slice(this.uploadedSize, this.uploadedSize + chunkSize)
    this.reader.onload = (event) => {
      const data = event.target.result
      if (data) {
        // upload chunk
      }
    }
    this.reader.readAsArrayBuffer(chunk)
  }
}

export default BreakpointUpload
