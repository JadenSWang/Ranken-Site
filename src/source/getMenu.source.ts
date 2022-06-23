import { CLIENT_SECRET, CLIENT_ID } from "./secrets.source"

const payload = {
    "client_secret": CLIENT_SECRET,
    "client_id": CLIENT_ID,
    "grant_type": "client_credentials",
    "scope": "eats.store"
}

export async function authenticate() {
    return await fetch('https://login.uber.com/oauth/v2/token', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
}

export async function getMenu() {
    console.log("Fetching Menu")
    const credentials = await authenticate();
    console.log(credentials)

    //.const menu = fetch("https://api.uber.com/v2/eats/stores/{store_id}/menus")
    //console.log(menu)
}