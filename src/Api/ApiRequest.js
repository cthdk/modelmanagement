export async function ApiRequest(url, method, data) {
    const baseUrl = `http://localhost:7181/api`;

    const options = {
        method: method,
        credentials: 'include',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
          'Content-Type': 'application/json'
        },
    };

    if (data) {
        options.body = JSON.stringify(data);
        console.log(options.body);
    }

    try {
        const response = await fetch(baseUrl + url, options);

        if (!response.ok) {
            alert(`HTTP error! Status: ${response.status}`);
        }

        if (method === 'DELETE') {
            return;
        }

        if (method === 'POST') {
            return;
        }

        return await response.json();
    } catch (error) {
        alert(`${method} operation failed: `, error)
    }
}

export default ApiRequest