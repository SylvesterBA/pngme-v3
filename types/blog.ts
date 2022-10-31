export interface IBlogPost {
	author: string;
	body: any;
	category: string;
	extract: string;
	featuredImage: {
		fields: {
			description: string;
			file: {
				contentType: string;
				details: any;
				fileName: string;
				url: string;
			};
			title: string;
		};
	};
	postCreatedAt: string;
	readDuration: string;
	slug: string;
	title: string;
}
