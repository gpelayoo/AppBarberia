import Database from "../database/database";

function openNav(){
    document.getElementById("mobile_menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile_menu").style.width = "0%";
}


let form = document.getElementById("t-form");
clientData =[];

form.addEventListener('submit', function(event){
    event.preventDefault();

    let document_type = document.getElementById("document_type").value;
    let document_number = document.getElementById("document_number").value;
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let cellphone = document.getElementById("cellphone").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("date_time").value;
    let barber = document.getElementById("barber").value;

    let data = {
        document_type,
        document_number,
        name,
        lastname,
        cellphone,
        email,
        date,
        time,
        barber
    }

    clientData.push(data);
    alert("Turno asignado correctamente")
    form.reset();

    const connectionDatabase = new Database();

    connectionDatabase.insertData('turnos', [data], function (err, result) {
        if (err) {
            console.error(err);
        } else {
            console.log("Turno insertado correctamente");
            connectionDatabase.end();
        }
    });
    
})



