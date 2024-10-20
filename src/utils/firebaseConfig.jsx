// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes,uploadString, getMetadata } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUjYVy43lGNnuiYvK0UkD2psLgyHrRwtY",
  authDomain: "dedebeauty-73385.firebaseapp.com",
  projectId: "dedebeauty-73385",
  storageBucket: "dedebeauty-73385.appspot.com",
  messagingSenderId: "381785076112",
  appId: "1:381785076112:web:239dfacf23d14f5164c315"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app)

export async function agregarProductoFirebase (data){
  const {marca,nombre,descripcion,foto,precio,totalDescuento,hayDescuento,stock,status,categorie,vendedor} = data
  try {
    const docRef = await addDoc(collection(db, "productos"), {
      marca:marca,
      nombre:nombre,
      descripcion:descripcion,
      foto:foto,
      precio:precio,
      hayDescuento:hayDescuento,
      totalDescuento:totalDescuento,
      stock:stock,
      status:status,
      categorie:categorie,
      vendedor:vendedor,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function modificarProductosFirebase (datosNuevos){
  const querySnapshot = await getDocs(collection(db, "productos"));
  querySnapshot.forEach((doc) => {
    if (doc.id==datosNuevos.id){
      doc.data().marca=datosNuevos.marca
      /*
      if (doc.data().marca!=datosNuevos.marca){doc.data().marca=datosNuevos.marca,console.log('Se modifico la marca ')}
      if (doc.data().nombre!=datosNuevos.nombre){doc.data().nombre=datosNuevos.nombre,console.log('Se modifico el nombre ')}
      if(doc.data().descripcion!=datosNuevos.descripcion){doc.data().descripcion=datosNuevos.descripcion,console.log('Se modifico la descripcion ')}
      if(doc.data().foto!=datosNuevos.foto){doc.data().foto=datosNuevos.foto,console.log('Se modifico la foto')}
      if(doc.data().precio!=datosNuevos.precio){doc.data().precio=datosNuevos.precio,console.log('Se modifico el precio')}
      if(doc.data().hayDescuento!=datosNuevos.hayDescuento){doc.data().hayDescuento=datosNuevos.hayDescuento,console.log('Se modifico el hayDescuento ')}
      if(doc.data().totalDescuento!=datosNuevos.totalDescuento){doc.data().totalDescuento=datosNuevos.totalDescuento,console.log('Se modifico el totalDescuento ')}
      if(doc.data().stock!=datosNuevos.stock){doc.data().stock=datosNuevos.stock,console.log('Se modifico el stock ')}
      if(doc.data().status!=datosNuevos.status){doc.data().status=datosNuevos.status,console.log('Se modifico el status ')}
      if(doc.data().categorie!=datosNuevos.categorie){doc.data().categorie=datosNuevos.categorie,console.log('Se modifico el categorie')}
      if(doc.data().vendedor!=datosNuevos.vendedor){doc.data().vendedor=datosNuevos.vendedor,console.log('Se modifico el vendedor ')}
      */
    }
  });

}

