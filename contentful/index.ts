import * as contentful from "contentful";

const client = contentful.createClient({
	space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || '',
	accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
	environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENV || '',
});

export default client
