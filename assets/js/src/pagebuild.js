const fs = require('fs');
const team = require('./teambuild');

// let htmlDoc = `<!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
//         integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
//     <link rel="stylesheet" href="./assets/css/style.css">
//     <title>Document</title>
// </head>

// <body>
//     <div class="jumbotron jumbotron-fluid py-2">
//         <div class="container">
//             <h1 class="display-5 text-center">My Team</h1>
//         </div>
//     </div>
//     <div class="container">
//         <div class="row row-cols-1 row-cols-md-3">
//             <div class="col mb-4">
//                 <div class="card">
//                     <div class="card-header">
//                         Featured
//                       </div>
//                       <ul class="list-group list-group-flush">
//                         <li class="list-group-item">Cras justo odio</li>
//                         <li class="list-group-item">Dapibus ac facilisis in</li>
//                         <li class="list-group-item">Vestibulum at eros</li>
//                       </ul>
//                 </div>
//             </div>
//             <div class="col mb-4">
//                 <div class="card">
//                     <div class="card-header">
//                         Featured
//                       </div>
//                       <ul class="list-group list-group-flush">
//                         <li class="list-group-item">Cras justo odio</li>
//                         <li class="list-group-item">Dapibus ac facilisis in</li>
//                         <li class="list-group-item">Vestibulum at eros</li>
//                       </ul>
//                 </div>
//             </div>
//             <div class="col mb-4">
//                 <div class="card">
//                     <div class="card-header">
//                         Featured
//                       </div>
//                       <ul class="list-group list-group-flush">
//                         <li class="list-group-item">Cras justo odio</li>
//                         <li class="list-group-item">Dapibus ac facilisis in</li>
//                         <li class="list-group-item">Vestibulum at eros</li>
//                       </ul>
//                 </div>
//             </div>
//             <div class="col mb-4">
//                 <div class="card">
//                     <div class="card-header">
//                         Featured
//                       </div>
//                       <ul class="list-group list-group-flush">
//                         <li class="list-group-item">Cras justo odio</li>
//                         <li class="list-group-item">Dapibus ac facilisis in</li>
//                         <li class="list-group-item">Vestibulum at eros</li>
//                       </ul>
//                 </div>
//             </div>
//         </div>
//     </div>
// </body>
// <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
//     integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
//     crossorigin="anonymous"></script>
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
//     integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
//     crossorigin="anonymous"></script>
// <script src="./assets/js/index.js"></script>

// </html>`

//iterate over array with forEach
// const buildPage = () => {
//     console.log('This object is from the pagebuild.js' + team);
    // team.forEach(function(teamMember) {
    // let element = '';
    // element += `<div class="container">
    //     <div class="row row-cols-1 row-cols-md-3">
    //         <div class="col mb-4">
    //             <div class="card">
    //                 <div class="card-header">
    //                     ${teamMember.name} <br>
    //                     ${teamMember.role}
    //                 </div>
    //                     <ul class="list-group list-group-flush">
    //                     <li class="list-group-item">ID: ${teamMember.id}</li>
    //                     <li class="list-group-item">Email: ${teamMember.email}</li>
    //                     <li class="list-group-item">Vestibulum at eros</li>
    //                 </ul>
    //         </div>
    //     </div>`;
    // });
    // console.log(element);
    // fs.writeFile('./testpage.html', element, (err) => {
    //     if (err) throw err;
    //     console.log('The file has been saved!');
    //   });   
// }

const htmlAbove = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Document</title>
</head>

<body>
    <div class="jumbotron jumbotron-fluid py-2">
        <div class="container">
            <h1 class="display-5 text-center">My Team</h1>
        </div>
    </div>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-3">`;

const htmlBelow = `</div></div>
</div>
</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
crossorigin="anonymous"></script>
<script src="./assets/js/index.js"></script>

</html>`;

module.exports = {
    htmlAbove,
    htmlBelow
};