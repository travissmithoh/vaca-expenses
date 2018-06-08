import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .on('value',
//     (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     }, (e) => {
//         console.log('Error with data fetching: ', e);
//     });


// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'First Expense',
//     amount: 10,
//     createdAt: 3213821380,
//     note: '1'
// });

//databases.ref('expenses').set(expenses)

// const onNameChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company} .`);
// }, (e) => {
//     console.log('Error with data fetching: ', e);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching: ', e);
// });

// setTimeout(() => {
//     database.ref('age').set(45);
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(31);
// }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('failed', e);
//     });

// database.ref().set({
//     name: 'Travis Smith',
//     age: 47,
//     isMarried: true,
//     location: {
//         city: 'Cleveland',
//         country: 'USA'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('failed', e);
// });

// // database.ref('age').set(46);
// // database.ref('location/city').set('Bay Village');

// database.ref('attributes').set({
//     height: '71 inches',
//     weight: '190 pounds'
// }).then(() => {
//     console.log('attributes are saved');
// }).catch((e) => {
//     console.log('attributes failed', e);
// });

// database.ref('isMarried').remove()
//     .then(() => {
//         console.log('data are removed')
//     }).catch((e) => {
//         console.log('data remove failed', e)
//     });

// database.ref().update({
//     name: 'Travis Smith',
//     age: 47,
//     job: { 
//         title:'Application Analyst',
//         company: 'Google'
//     },
//     stressLevel: 6,
// }).then(() => {
//     console.log('data updated')
// }).catch((e) => {
//     console.log('data updated failed', e)
// });

// database.ref().update({
//     'job/title': 'Programmer',
//     'job/company': 'Tucker Ellis',
//     'stressLevel': 3
// }).then(() => {
//     console.log('data updated')
// }).catch((e) => {
//     console.log('data updated failed', e)
// });