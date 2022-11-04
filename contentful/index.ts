import * as contentful from "contentful";

const client = contentful.createClient({
	space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || '5ern7dz6mdq9',
	accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || 'XWnKNfIOPJuqeeHluKqry8pg1MN8ECCvEDlow8E7OrY',
	environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENV || 'dev',
});

export default client
