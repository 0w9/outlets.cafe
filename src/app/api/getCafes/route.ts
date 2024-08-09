interface Cafe {
    id: String,
    createdTime: String,
    fields: {
        "Added": string;
        "Location Code": string;
        "Name": string;
        "Address": string;
        "Website": string;
        "Wifi": boolean;
        "Location Name Full": string
    }
}

export async function GET(request: Request) {
    const url = new URL(request.url);
    const location = url.searchParams.get('location');
    
    if(location) {
        const airtableRequest = await fetch("https://api.airtable.com/v0/app09PBhx0uSKHZlf/Cafes", {
            headers: {
                "Authorization": `Bearer ${process.env.AIRTABLE_API_KEY}`
            }
        })

        const airtableResponse = await airtableRequest.json()
        const locationCafes = airtableResponse.records.filter((cafe: Cafe) => {
            if(cafe.fields["Location Code"] === location) {
                return true; // Changed to return true for filtering
            }
        }).map((cafe: Cafe) => ({ // Added mapping to transform the filtered cafes
            "added": cafe.fields.Added,
            "name": cafe.fields.Name,
            "address": cafe.fields.Address,
            "website": cafe.fields.Website,
            "wifi": cafe.fields.Wifi,
            "outlet": true
        }));

        return new Response(JSON.stringify(locationCafes), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}