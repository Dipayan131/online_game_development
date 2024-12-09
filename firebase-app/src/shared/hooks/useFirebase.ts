import {
  child,
  equalTo,
  get,
  // getDatabase,
  orderByChild,
  push,
  query,
  ref,
  set,
} from "firebase/database";
import {
  ref as StorageRef,
  uploadBytes,
  listAll,
  getDownloadURL,
} from "firebase/storage";
import { useEffect, useState } from "react";

import { setDataAtPath } from "../utils/functions";
import { database } from "../config/firebase";
import { storage } from "../config/firebase";
import { v4 as uuidv4 } from "uuid";

const useFirebaseData = (path: string) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(database);
      try {
        const snapshot = await get(child(dbRef, path));
        if (snapshot.exists()) {
          const fbData = snapshot.val();
          setData(fbData);
          setDataAtPath(path, { data: fbData, timestamp: new Date() });
          // localStorage.setItem('quizCraftData', JSON.stringify({ data: fbData, timestamp: new Date() }));
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    };

    const storedData = localStorage.getItem("quizCraftData");

    if (storedData) {
      const parsedData = JSON.parse(storedData);

      // const now = new Date();
      // const storedTime = new Date(parsedData.timestamp);
      // if (now.getTime() - storedTime.getTime() > 5 * 60 * 1000) {
      //   fetchData();
      // } else {
      setData(parsedData.data);
      // }
    } else {
      fetchData();
    }
    fetchData();
  }, [path]);

  return data;
};

const useFirebaseSaveAndReplace = (path: string) => {
  const saveData = async (data: any) => {
    const dbRef = ref(database, path);
    await set(dbRef, data);
  };

  return saveData;
};

const useFirebaseSave = (path: string) => { // /images/
  const saveData = async (data: any) => {
    const db = database;
    const dbRef = ref(db, path);

    // Check if data with the same templateId and topic exists
    // const existingDataQuery = query(dbRef, orderByChild('templateId'), equalTo(data.templateId));
    // const existingDataSnapshot = await get(existingDataQuery);

    // if (existingDataSnapshot.exists()) {
    //   const existingData = existingDataSnapshot.val();

    //   // Check if any existing data has the same topic
    //   const existingWithSameTopic = Object.values(existingData).find((item: any) => item.topic === data.topic);

    //   if (existingWithSameTopic) {
    //     console.log(
    //       'Data with the same templateId and topic already exists. Not saving new data.',
    //       existingWithSameTopic.id,
    //     );
    //     // setSavedDataId(existingWithSameTopic.id);
    //     return existingWithSameTopic.id;
    //   }
    // }

    const newDocRef = await push(dbRef);
    const newDocKey = newDocRef.key; // Get the auto-generated key
    const newDataWithId = { ...data, id: newDocKey }; // Add the ID to the data object
    await set(newDocRef, newDataWithId);

    // Set the ID of the saved data in the state variable
    return newDocKey;
  };

  return saveData;
};

const useFirebaseDataExist = (path: string) => {
  const dataExist = async (data) => {
    const db = database;
    const dbRef = ref(db, path);

    // Check if data with the same templateId and topic exists
    const existingDataQuery = query(
      dbRef,
      orderByChild("templateId"),
      equalTo(data.templateId)
    );
    const existingDataSnapshot = await get(existingDataQuery);

    if (existingDataSnapshot.exists()) {
      const existingData = existingDataSnapshot.val();

      // Check if any existing data has the same topic
      const existingWithSameTopic = Object.values(existingData).find(
        (item: any) => item.topic === data.topic
      );

      if (existingWithSameTopic) {
        // setSavedDataId(existingWithSameTopic.id);
        return true;
      }
    }

    return false;
  };

  return dataExist;
};

const useStorageDataLinks = (path: string) => {
  const [linkList, setLinkList] = useState([]);
  const listRef = StorageRef(storage, path);
  const [uploading, setUploading] = useState(false);
  useEffect(() => {
    setLinkList([]);
    listAll(listRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          const name = item.name.split("/")[1];
          setLinkList((prev) => [...prev, { name: name, url }]);
        });
      });
    });

    // console.log("storage from svg", StorageRef(storage));
  }, []);

  const uploadData = (file: any) => {
    if (file === null) return;
    setUploading(true);
    const fileId = uuidv4();
    const fileName = `${file.name}_${fileId}`;
    const fileRef = StorageRef(storage, `svgs/${fileName}`);
    uploadBytes(fileRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setLinkList((prev) => [...prev, { name: fileName, url }]);
        });
        setUploading(false);
      })
      .catch((error) => {
        console.error("Error uploading SVG:", error);
        setUploading(false);
      });
  };

  return { linkList, uploading, uploadData };
};

export {
  useFirebaseData,
  useFirebaseSave,
  useFirebaseDataExist,
  useFirebaseSaveAndReplace,
  useStorageDataLinks,
};
