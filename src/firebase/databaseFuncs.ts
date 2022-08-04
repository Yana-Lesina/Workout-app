import { getDatabase, ref, child, get } from "firebase/database";

export const getServerData = async (pathPart: string) => {
  // const dbRef = ref(getDatabase());
  // await get(child(dbRef, `${pathPart}`)) // 'data/'
  //   .then(async (snapshot) => {
  //     if (snapshot.exists()) {
  //       // const serverData = await snapshot.val();
  //       // console.log("serverData", serverData);
  //       return await snapshot.val();
  //     } else {
  //       console.log("No data available");
  //     }
  //   })
  //   .catch((error) => {
  //     reportError(error);
  //   });
};
// const dbRef = ref(getDatabase());
// get(child(dbRef, `data/`))
//   .then(async (snapshot) => {
//     if (snapshot.exists()) {
//       const serverData = await snapshot.val();
//       console.log("serverData", serverData);
//       return serverData;
//     } else {
//       console.log("No data available");
//     }
//   })
//   .catch((error) => {
//     reportError(error);
//   });
