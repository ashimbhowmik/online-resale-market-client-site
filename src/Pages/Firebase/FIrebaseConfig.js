const firebaseConfig = {
  // apiKey: "AIzaSyCGIdW4viLkGtWVma9EjD43vmLbZd6_dE4",
  // authDomain: "online-resele-market.firebaseapp.com",
  // projectId: "online-resele-market",
  // storageBucket: "online-resele-market.appspot.com",
  // messagingSenderId: "792277081437",
  // appId: "1:792277081437:web:7f20bfbc92d583331a5cb4",

  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

export default firebaseConfig;
