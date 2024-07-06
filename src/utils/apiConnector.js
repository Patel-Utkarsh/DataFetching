"use server"
export async function fetchData() {

    try {
        const req = await fetch(process.env.PRODUCTS_URL,{
            method : 'GET',
            cache  : 'force-cache'
        });
        return req.json();

        
    } catch (error) {
        console.log('Error occurred while fetching')
    }
}