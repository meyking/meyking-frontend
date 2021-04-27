// product.js

export default {
	title: "Product", // The human-readable label. Used in the studio.
	name: "product", // Required. The field name, and key in the data record.
	type: "document", // Required. The name of any valid schema type.
	// Input fields below, as many as you need.
	fields: [
		{
			title: "Product",
			name: "product", // An awesome bag
			type: "string",
            description : "The product name : (An awesome bag)"
		},
		{
			title: "Description",
			name: "description",
			type: "string",
            description : "A ~ 30 words description describing the product"
		},
        {
            title : "Thumbnail",
            name : "thumbnail",
            type : "image",
            options : {
                hotspot : true
            },
            description : "The image that will be shown when listing all products"
        },
		{
			title: "Images",
			name: "images",
			type: "array",
            description : "List of images to be included for the product",
			of: [
				{
					type: "image",
					options: {
						hotspot: true,
					},
				},
			],
		},
		{
			title: "Slug",
			name: "slug",
			type: "slug",
			options: {
				source: "product", // an-awesome-bag
				auto: true,
			},
            description : "The image that will be shown when listing all products"
		},
		{
			title: "Categories",
			name: "Categories",
			type: "array",
			of: [{ type: "reference", to: [{ type: "category" }] }],
            description : "The category that the product belongs to"
		},
	],
};
