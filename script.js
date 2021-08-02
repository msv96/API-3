async function getData() {
    const user = await fetch(
        `https://ipgeolocation.abstractapi.com/v1/?api_key=9a2dbe4826a540e48aff15bb17f86e30`);
    const data = await user.json();

    document.getElementById('div').innerHTML =
        `
        <div class="ip">
            <div>Your IP</div>
            <div>${data.ip_address}</div>
            <div>ISP Provider</div>
            <div>${data.connection.isp_name}</div>
            <div>Connection Type</div>
            <div>${data.connection.connection_type}</div>
            <div>Time</div>
            <div>
            ${data.timezone.current_time}
            ${data.timezone.abbreviation}
            ${data.timezone.name}
            </div>
        </div>
        <div class="address">
            <div>Lat & Long</div>
            <a href="geo:${data.latitude} , ${data.longitude}" target="_blank">
            ${data.latitude} , ${data.longitude}
            </a>
            <div>City</div>
            <div>${data.city}</div>
            <div>Region</div>
            <div>${data.region}</div>
            <div>Country</div>
            <div>${data.country}</div>
        </div>
        `;
}
getData();
