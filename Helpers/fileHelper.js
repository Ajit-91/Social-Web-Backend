const multer = require("multer")
const path = require('path')

const upload = multer({
  storage : multer.diskStorage({}),
  fileFilter : (req, file, cb) =>{
    let extnsn = path.extname(file.originalname)
    if(extnsn !== '.jpg' && extnsn !== '.jpeg' && extnsn !== '.png'){
      cb(new Error('file type not supported', false))
      return
    }
    cb(null, true)
  }
})

// const storage = multer.diskStorage({
//     destination : (req, file, cb)=> {
//       cb(null, `Uploads/${file.fieldname}s`)
//     },
//     filename : (req, file, cb)=> {
//       const uniqueSuffix =  file.fieldname + '-' + Date.now() + '-' + file.originalname
//       cb(null, uniqueSuffix)
//     }
//   })
  
// const upload = multer({ storage: storage })

module.exports = {upload}