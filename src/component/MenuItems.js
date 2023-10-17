const MenuItems =
    [
        {
            id: "home",
            name: "Home",
            url: "/",
            cName: "Nav-links",
            type:"link"
        },

        {
            id: "plants&pots",
            name: "Plants & Pots",
            url: "/plants&pots",
            cName: "Nav-links",
            type:"link"
        },

        {
            id: "tools",
            name: "Tools",
            url: "/tools",
            type:"childLink",
            child: [
                {
                    name: "toolProduct1",
                    id: 'p1',
                    url:"/Product1",
                    cName: "Nav-links",
                },
                {
                    name: "toolProduct2",
                    id: 'p2',
                    url:"/Product2",
                    cName: "Nav-links",
                },
                {
                    name: "toolProduct3",
                    id: 'p3',
                    url:"/Product3",
                    cName: "Nav-links",
                },
                {
                    name: "toolProduct4",
                    id: 'p4',
                    url:"/Product4",
                    cName: "Nav-links",
                }
            ]
        },
        {
            id: "ourservices",
            name: "Our Services",
            url: "/ourservices",
            ourServiceChild: [
                {
                    name: "Product1",
                    id: 's1',
                    url:"/serviceProduct1",
                    cName: "Nav-links",
                },
                {
                    name: "Product2",
                    id: 's2',
                    url:"/serviceProduct2",
                    cName: "Nav-links",
                },
                {
                    name: "Product3",
                    id: 's3',
                    url:"/serviceProduct3",
                    cName: "Nav-links",
                },
                {
                    name: "Product4",
                    id: 's4',
                    url:"/serviceProduct4",
                    cName: "Nav-links",
                }

            ]
        },

        {
            id: "blog",
            name: "Blog",
            url: "/blog",
            cName: "Nav-links",
            type:"link"
        },

        {
            id: "ourstory",
            name: "Our Story",
            url: "/ourstory",
            cName: "Nav-links",
            type:"link"
        },

        {
            id: "faqs",
            name: "FAQs",
            url: "/faqs",
            cName: "Nav-links",
            type:"link"
        }


    ];

export default MenuItems;