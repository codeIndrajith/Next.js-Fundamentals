import connectDB from "@/config/database";
import Property from "@/models/Property";
import { converToSerializableObject } from "@/utils/convertToObject";

const SearchResultPage = async ({searchParams: {location, propertyType}}) => {
    await connectDB();
    const locationPattern = new RegExp(location , 'i');

    let query = {
        $or: [
            {name: locationPattern},
            {description: locationPattern},
            {'location.stree': locationPattern},
            {'location.city': locationPattern},
            {'location.state': locationPattern},
            {'location.zipcode': locationPattern},
        ]
    }

    if(propertyType && propertyType !== "All") {
        const typePattern = new RegExp(propertyType, 'i');
        query.type = typePattern;
    }

    const propertiesQueryResults = await Property.find(query).lean();
    const properties = converToSerializableObject(propertiesQueryResults);

    console.log(properties)
    return (
        <div>search reslut page</div>
    )
}

export default SearchResultPage;