import location from '../images/location.png';

function showAbout(){
    let showCon = document.createElement('div'),
        address = document.createElement('p'),
        addrCOn = document.createTextNode('Address\xa0:\xa0Jardin Maria Clara, Pasonanca Road, Zamboanga City, Philippines'),
        contact = document.createElement('p'),
        number = document.createTextNode('Contact\xa0:\xa0+639236548095'),
        imgloc = document.createElement('img');

        imgloc.src = location;
        imgloc.alt = 'Address Location';

        address.appendChild(addrCOn);
        contact.appendChild(number);


        for (let index = 0; index < 2; index++) {
            let con = document.createElement('div');
            con.setAttribute('id',`showCon${index}`)
            if(index == 0 ){
                con.appendChild(contact);
                con.appendChild(address);
            }else{
                con.appendChild(imgloc);
            }
            showCon.appendChild(con);
        }
        showCon.setAttribute('id','showCon')
    return showCon;
}


export default showAbout;