import { useState } from "react";
import { upDateImg } from "../../../services/firebase";

const ProductsActionPage = () => {
  const [name, setName] = useState("");
  const [img, setImg] = useState<any>();

  return (
    <div>
      <h1>Crear producto</h1>
      <form>
        <div>
          <label htmlFor=""> nombre</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor=""> file</label>
          <input
            type="file"
            name="file"
            // value={img}
            onChange={onChangeInputFile}
          />
        </div>
        <button type="button" onClick={onUpdateImg}>
          subir imagen
        </button>
        <button type="submit">enviar</button>
      </form>
    </div>
  );

  function onChangeInputFile(e: any) {
    console.log("aquí fff");
    console.log("img fff", e.target.files[0]);
    setImg(e.target.files[0]);
  }

  function onUpdateImg() {
    upDateImg(img, "pizza.jpg");
  }

  function onSubmit() {
    //   upDateImg()
  }
};

export default ProductsActionPage;
