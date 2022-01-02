// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore/lite";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { firebaseConfig } from "../../firebaseConfig";
import {
  Product,
  ProductCreate,
  ProductEdited,
} from "../../store/products/interface";
import { readMapper } from "./mapper";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// ***********************Initialize Firebase*****************
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage();

// ***********************login*****************

export async function createUser(email: string, password: string) {
  try {
    const response: any = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("response", response);
  } catch (error) {
    console.log("error", error);
  }
}

export async function login(email: string, password: string) {
  try {
    const response: any = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("response", response);
  } catch (error) {
    console.log("error", error);
  }
}

export async function logout() {
  try {
    const response: any = await signOut(auth);
    console.log("response", response);
  } catch (error) {
    console.log("error", error);
  }
}

export async function observerAuth() {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("fff user", user);
    } else {
      console.log("fff está deslogueado");
    }
  });
}

// ***********************Products*****************
const productsCol = collection(db, "products");

export async function readProducts() {
  const productSnapshot = await getDocs(productsCol);
  const productsList = productSnapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return readMapper(productsList);
}

export async function createProduct(product: ProductCreate) {
  const productSnapshot = await addDoc(productsCol, product);
  return { ...product, id: productSnapshot.id };
}

export async function editedProduct(product: ProductEdited) {
  const docu = doc(db, `products/${product.id}`);
  let newProduct: any = { ...product };
  delete newProduct.id;
  await updateDoc(docu, newProduct);
  return product;
}

export async function deleteProduct(id: string) {
  const docu = doc(db, `products/${id}`);
  try {
    deleteDoc(docu);
    return id;
  } catch (error) {
    throw error;
  }
}

// ***********************Storage*****************
export async function upDateImg(file: File, imgName: string) {
  const storageRef = ref(storage, `images/${imgName}`);
  try {
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    throw error;
  }
}
