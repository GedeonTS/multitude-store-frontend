import axios from "axios";
function UploadFile() {
  const preset_key = "";
  const cloud_name = "";
  const [image, setImage] = useState();

  function handleFile(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    axios
      .post("https://api.cloudinary.com/v1_1/${}/image/upload", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="">
        <input type="file" onChange={handleFile} />
      </div>
    </div>
  );
}

export default UploadFile;
