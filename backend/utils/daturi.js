// import DataURIParser from "datauri/parser.js";
 
// import path from "path";

 

// // const getDataUri = (file)=>{
    
// // const parser = new  DataUriParser();
// // const extName = path.extname(file.originalname).toString();
// // return parser.format(extName.file.buffer).content;


// // };
// const getDataUri = (file) => {
//   const parser = new DataURIParser();
//   return parser.format(path.extname(file.originalname).toString(), file.buffer);
// };



// export default getDataUri;


import DataURIParser from "datauri/parser.js";
import path from "path";

const getDataUri = (file) => {
  const parser = new DataURIParser();
  const ext = path.extname(file.originalname).toString();
  const dataUri = parser.format(ext, file.buffer);
  return dataUri.content; // ✅ Only return the string
};

export default getDataUri;
