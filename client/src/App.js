import {UseRef , useState , useEffect} from 'react';
import './App.css';
import { uploadFile } from './services/api';
const fileInputRef = {UseRef};

function App() {

const [file , setFile] = useState('');
const [result , setResult] = useState('');

const logo= 'https://c4.wallpaperflare.com/wallpaper/926/364/929/portrait-display-vertical-pattern-digital-art-wallpaper-preview.jpg'; 

useEffect(() => {
  const getImage = async() => {
     if(file){
      const data = new FormData();
      data.append("name",file.name);
      data.append("file",file);

      let response = await uploadFile(data);

      setResult(response.path);
     }
  }
  getImage();
}, [file])

const onUploadClick = () => {
  fileInputRef.current.click();
}
console.log(file);
  return (
    <div className='container'>
      <img src={logo} alt="banner" />
      <div className='wrapper'>
        <h1>Easy File Sharing</h1>
        <p>Upload and share the download link</p>
        <button onClick={() => onUploadClick()}>Upload</button>
        <input type="file" hidden 
        ref = {fileInputRef}
        onChange={(e) => setFile(e.target.files[0])}

        />

        <a href={result} target="_blank">{result}</a>
      </div>
    </div>
  );
}

export default App;
