

export const PRODUCT_CATEGORY = [

    {
        label: 'UI Kits',
        value: 'ui_kits' as const,
        featured: [
          {
            name: 'Editor picks',
            href: '#',
            imageSrc: '/nav/ui-kits/mixed.jpg',
          },
          {
            name: 'New Arrivals',
            href: '#',
            imageSrc: '/nav/ui-kits/blue.jpg',
          },
          {
            name: 'Bestsellers',
            href: '#',
            imageSrc: '/nav/ui-kits/purple.jpg',
          },
        ],
      },
    {
        label: "Icons",
        value: "icons" as const,
        featured: [
            {
                name:"Icons",
                href:"#",
                imageSrc:"/nav/icons/picks.jpg"
            },
            {
                name:"New Arivals",
                href:"#",
                imageSrc:"/nav/icons/new.jpg"
            },
            {
                name:"Best Sellers",
                href:"#",
                imageSrc:"/nav/icons/bestsellers.jpg"
            },
        ]
    }
]