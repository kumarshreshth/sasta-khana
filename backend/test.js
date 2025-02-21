const a = {
  statusCode: 0,
  data: {
    statusMessage: 'done successfully',
    cards: [
      {
        card: {
          card: {
            '@type': 'type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2',
            text: 'Pizza Hut',
            headerStyling: {
              textColor: 'text_Highest_Emphasis',
              textVariant: 'header_H3_Black',
            },
          },
        },
      },
      {
        card: {
          card: {
            '@type':
              'type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab',
            tabs: [
              {
                id: 'Order Online',
                title: 'Order Online',
              },
            ],
          },
        },
      },
      {
        card: {
          card: {
            '@type':
              'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
            info: {
              id: '595194',
              name: 'Pizza Hut',
              city: 'Gurgaon',
              slugs: {
                restaurant: 'pizza-hut-m3m-broadway-sohna-road',
                city: 'gurgaon',
              },
              uniqueId: 'e51e6528-4859-48c8-8fed-e84c17dc2d76',
              cloudinaryImageId: '2b4f62d606d1b2bfba9ba9e5386fabb7',
              locality: 'M3M Broadway',
              areaName: 'Sector 69',
              costForTwo: '35000',
              costForTwoMessage: '₹350 for two',
              cuisines: ['Pizzas'],
              avgRating: 4.1,
              feeDetails: {
                restaurantId: '595194',
                fees: [{}],
              },
              parentId: '721',
              avgRatingString: '4.1',
              totalRatingsString: '1.4K+ ratings',
              sla: {
                restaurantId: '595194',
                deliveryTime: 25,
                minDeliveryTime: 25,
                maxDeliveryTime: 30,
                lastMileTravel: 2,
                serviceability: 'SERVICEABLE',
                stressFactor: 1,
                rainMode: 'RAIN_MODE_NONE',
                longDistance: 'LONG_DISTANCE_NOT_LONG_DISTANCE',
                zoneId: 19,
                slaString: '25-30 MINS',
                lastMileTravelString: '2.0 km',
                iconType: 'ICON_TYPE_EMPTY',
              },
              availability: {
                nextOpenTimeMessage: 'Opens next at 11 am, today',
                nextOpenTime: '2025-02-22 11:00:00',
                visibility: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                header: 'Get items under 189',
                shortDescriptionList: [
                  {
                    meta: 'Get items under 189',
                    discountType: 'FinalPrice',
                    operationType: 'RESTAURANT',
                  },
                  {
                    discountType: 'Percentage',
                    operationType: 'RESTAURANT',
                  },
                ],
                descriptionList: [
                  {
                    meta: 'Get items under 189',
                    discountType: 'FinalPrice',
                    operationType: 'RESTAURANT',
                  },
                  {
                    meta: '10% off upto ₹150|Use HSBCFEST Above ₹499',
                    discountType: 'Percentage',
                    operationType: 'RESTAURANT',
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString: 'pizza-hut-m3m-broadway-sohna-road',
              multiOutlet: true,
              labels: [
                {
                  title: 'Timings',
                  message: 'null',
                },
                {
                  title: 'Address',
                  message:
                    'Pizza Hut at Ground Floor, M3M Broadway, Sector- 71, Gurgaon, Gurgaon, Gurugram, Haryana, 122018',
                },
                {
                  title: 'Cuisines',
                  message: 'Pizzas',
                },
              ],
              totalRatings: 1400,
              aggregatedDiscountInfoV2: {
                header: 'Get items under 189',
                shortDescriptionList: [
                  {
                    meta: 'Get items under 189',
                    discountType: 'FinalPrice',
                    operationType: 'RESTAURANT',
                  },
                  {
                    discountType: 'Percentage',
                    operationType: 'RESTAURANT',
                  },
                ],
                descriptionList: [
                  {
                    meta: 'Get items under 189',
                    discountType: 'FinalPrice',
                    operationType: 'RESTAURANT',
                  },
                  {
                    meta: '10% off upto ₹150|Use HSBCFEST Above ₹499',
                    discountType: 'Percentage',
                    operationType: 'RESTAURANT',
                  },
                ],
                couponDetailsCta: 'View coupon details',
              },
              type: 'F',
              nudgeBanners: [
                {
                  priority: 1,
                  discountInfo: {
                    discountType: 'FinalPrice',
                    value: 189,
                  },
                  unlockedMessage: 'Deal of the Day unlocked!',
                  minItemCount: 1,
                  maxItemCount: 1,
                  type: 'SILD',
                  nudgeTagInfo: {
                    title: 'Deal of the Day',
                    fontName: 'FONT_NAME_CONDENSED_BOLD',
                  },
                  logoCtx: {},
                },
              ],
              headerBanner: {
                url: 'swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/595194',
              },
              ratingSlab: 'RATING_SLAB_5',
              availabilityServiceabilityMessage:
                'Currently closed for delivery. Opens next at 11 am, today',
              orderabilityCommunication: {
                title: {
                  text: 'Currently',
                },
                subTitle: {
                  text: 'CLOSED',
                },
                message: {
                  text: 'Uh-oh! Outlet is not accepting orders at the moment. They should be back by 11:00 AM',
                  textColour: 'primary',
                },
                customIcon: {
                  bgGradientColorStart: '#EB8322',
                  bgGradientColorEnd: '#EE5803',
                },
                commsStyling: {},
              },
              hasBestsellerItems: true,
              nearestOutletNudge: {
                nearestOutletInfo: {
                  siblingOutlet: {
                    id: '53785',
                    city: '0',
                    slugs: {},
                    areaName: 'Sohna Road',
                    costForTwo: '0',
                    feeDetails: {},
                    sla: {
                      deliveryTime: 35,
                      lastMileTravel: 5.9,
                      slaString: '35 MINS',
                      lastMileTravelString: '5.9 km',
                      iconType: 'ICON_TYPE_EMPTY',
                    },
                    availability: {
                      restaurantClosedMeta: {},
                    },
                    aggregatedDiscountInfo: {
                      visible: true,
                    },
                    badges: {},
                    aggregatedDiscountInfoV2: {
                      visible: true,
                    },
                    availabilityServiceabilityMessage:
                      'Temporarily closed for delivery',
                    cartOrderabilityNudgeBanner: {
                      parameters: {},
                      presentation: {},
                    },
                    featuredSectionInfo: {},
                  },
                },
                nearestOutletComms: {
                  title: {
                    text: "Don't worry! Try our outlet that's delivering",
                  },
                  subTitle: {
                    text: 'Switch to the fastest alternate',
                  },
                },
              },
              cartOrderabilityNudgeBanner: {
                parameters: {},
                presentation: {},
              },
              latLong: '28.40169403,77.01944245',
              backgroundImageOverlayInfo: {},
              featuredSectionInfo: {},
            },
            analytics: {},
          },
          relevance: {
            type: 'RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD',
            sectionId: 'POP_UP_CROUTON_MENU',
          },
        },
      },
      {
        card: {
          card: {
            '@type': 'type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget',
            layout: {
              rows: 1,
              columns: 4,
              horizontalScrollEnabled: true,
              itemSpacing: 12,
              lineSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 10,
                  right: 10,
                  bottom: 16,
                },
              },
              scrollBar: {},
            },
            id: 'offerCollectionWidget_UX4',
            gridElements: {
              infoWithStyle: {
                '@type':
                  'type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle',
                offers: [
                  {
                    info: {
                      header: 'ITEMS AT ₹189',
                      offerTag: 'DEAL OF DAY',
                      offerTagColor: '#E46D47',
                      offerIds: ['61851be2-36e9-42a1-afbb-ddab3f3fb06f'],
                      expiryTime: '1970-01-01T02:47:04Z',
                      description: 'ON SELECT ITEMS |',
                      offerType: 'offers',
                      restId: '595194',
                      offerLogo: 'offers/deal-of-day',
                      descriptionTextColor: '#7302060C',
                      showExpiryTimer: true,
                    },
                    cta: {
                      type: 'OFFER_HALF_CARD',
                    },
                  },
                  {
                    info: {
                      header: '10% OFF UPTO ₹150',
                      offerTagColor: '#E46D47',
                      logoBottom:
                        'MARKETING_BANNERS/IMAGES/OFFERS/2025/1/31/c1779f43-0cfd-4cc3-ab65-323a857b3327_HSBC.png',
                      offerIds: ['48e163e2-2bb4-43a2-afde-a1fbb5e280c0'],
                      expiryTime: '1970-01-01T00:00:00Z',
                      couponCode: 'USE HSBCFEST',
                      description: 'ABOVE ₹499',
                      offerType: 'offers',
                      restId: '595194',
                      offerLogo:
                        'MARKETING_BANNERS/IMAGES/OFFERS/2025/1/31/c1779f43-0cfd-4cc3-ab65-323a857b3327_HSBC.png',
                      descriptionTextColor: '#7302060C',
                      primaryDescription: 'USE HSBCFEST',
                    },
                    cta: {
                      type: 'OFFER_HALF_CARD',
                    },
                  },
                  {
                    info: {
                      header: 'FLAT ₹50 OFF',
                      offerTagColor: '#E46D47',
                      logoBottom:
                        'MARKETING_BANNERS/IMAGES/OFFERS/2025/2/21/a58dfc3a-d8fe-435a-9805-5b610e33f01e_ICICIMenuLogo.png',
                      offerIds: ['be6e0653-72f9-4c4a-a296-cd065bf6c420'],
                      expiryTime: '1970-01-01T00:00:00Z',
                      couponCode: 'NO CODE REQUIRED',
                      description: 'ABOVE ₹599',
                      offerType: 'offers',
                      restId: '595194',
                      offerLogo:
                        'MARKETING_BANNERS/IMAGES/OFFERS/2025/2/21/a58dfc3a-d8fe-435a-9805-5b610e33f01e_ICICIMenuLogo.png',
                      descriptionTextColor: '#7302060C',
                      primaryDescription: 'NO CODE REQUIRED',
                    },
                    cta: {
                      type: 'OFFER_HALF_CARD',
                    },
                  },
                  {
                    info: {
                      header: 'FLAT ₹150 OFF',
                      offerTagColor: '#E46D47',
                      logoBottom:
                        'MARKETING_BANNERS/IMAGES/OFFERS/2025/1/31/e9a239fa-ca39-4f93-bb58-4194c630447c_AMEX.png',
                      offerIds: ['14855fc1-d8c8-45f4-aac9-1454887dc1fa'],
                      expiryTime: '1970-01-01T00:00:00Z',
                      couponCode: 'USE AMEX150',
                      description: 'ABOVE ₹600',
                      offerType: 'offers',
                      restId: '595194',
                      offerLogo:
                        'MARKETING_BANNERS/IMAGES/OFFERS/2025/1/31/e9a239fa-ca39-4f93-bb58-4194c630447c_AMEX.png',
                      descriptionTextColor: '#7302060C',
                      primaryDescription: 'USE AMEX150',
                    },
                    cta: {
                      type: 'OFFER_HALF_CARD',
                    },
                  },
                ],
                habitMilestoneInfo: {
                  callout: {},
                },
                loyaltyDiscoverPresentationInfo: {
                  logoCtx: {},
                },
              },
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge',
                      badges: {},
                      vegOnlyDetails: {
                        imageId: 'AutoVegOnly_qkjowj',
                        title: 'Showing only vegetarian options.',
                        description:
                          'Tap on the VEG ONLY button to turn off the setting',
                      },
                      topRatedFilter: {
                        attributes: {
                          displayText: 'Ratings 4.0+',
                        },
                      },
                      kidsCategoryFilter: {
                        attributes: {
                          displayText: 'Kids Favourites',
                          tooltip: {
                            enabled: true,
                            displayText:
                              'Kids Favourites Filter applied. Remove this filter to see the full Menu.',
                          },
                        },
                      },
                      vegFilter: {
                        attributes: {
                          displayText: 'VEG',
                        },
                      },
                      nonvegFilter: {
                        attributes: {
                          displayText: 'NONVEG',
                        },
                      },
                    },
                    relevance: {
                      type: 'RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED',
                      sectionId: 'MENU_FILTER_TOGGLE',
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Flat Menu @189',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '129790369',
                              name: 'Murg Malai Chicken - Personal',
                              category: 'Flat Menu @189',
                              description:
                                'Amazingly flavourful Chicken Malai Tikka, Herbed Onion & Green Capsicum, spicy Red Paprika with flavourful pan sauce and 100% mozzarella cheese. (PAN Per-269Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: 't1stinhga3alitdpr6yt',
                              price: 37900,
                              finalPrice: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093613',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093616',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093619',
                                  groupName: 'Add More Non-Veg Toppings',
                                  choices: [
                                    {
                                      id: '134229674',
                                      name: 'Chicken Pepperoni',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229686',
                                      name: 'Chicken Sausage',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229684',
                                      name: 'Chicken Tikka',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229678',
                                      name: 'Chicken Malai Tikka',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229690',
                                      name: 'Herbed Chicken',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229683',
                                      name: 'Schezwan Chicken Meatball',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229675',
                                      name: 'Chicken Keema Masala',
                                      price: 6000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093622',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '7 ratings',
                                  ratingCountV2: '7',
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '129790377',
                              name: 'Veggie Supreme - Personal',
                              category: 'Flat Menu @189',
                              description:
                                'A supreme combination of Black Olives, Green Capsicum, Mushroom, Onion, spicy Red Paprika & juicy Sweet Corn with flavourful pan sauce and 100% mozzarella cheese. (PAN Per-254Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: 'z0c4xpovma1qtmu4tlls',
                              isVeg: 1,
                              price: 37900,
                              finalPrice: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093785',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093787',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093790',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.9',
                                  ratingCount: '17 ratings',
                                  ratingCountV2: '17',
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '99706043',
                              name: 'Chicken Tikka - Personal',
                              category: 'Flat Menu @189',
                              description:
                                'Mouth-watering Chicken Tikka, crunchy Onion & Tomato with delicious Tandoori Sauce and 100% mozzarella cheese. (PAN Per-275Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: 'juplqft4tmub5hqocwxk',
                              price: 37900,
                              finalPrice: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093633',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093634',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093643',
                                  groupName: 'Add More Non-Veg Toppings',
                                  choices: [
                                    {
                                      id: '134229674',
                                      name: 'Chicken Pepperoni',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229686',
                                      name: 'Chicken Sausage',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229684',
                                      name: 'Chicken Tikka',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229678',
                                      name: 'Chicken Malai Tikka',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229690',
                                      name: 'Herbed Chicken',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229683',
                                      name: 'Schezwan Chicken Meatball',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229675',
                                      name: 'Chicken Keema Masala',
                                      price: 6000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093646',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.2',
                                  ratingCount: '7 ratings',
                                  ratingCountV2: '7',
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '129790371',
                              name: 'Ultimate Tandoori Veggie - Personal',
                              category: 'Flat Menu @189',
                              description:
                                'An ultimate combination of your favourite veggies- onion, green capsicum, mushroom, tomato, spicy jalapeno on tandoori sauce, topped with 100% mozzarella cheese & generous drizzle of mint mayo. (PAN Per-314Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: 'b7d1f56df6414f8b6e49001af95e259a',
                              isVeg: 1,
                              price: 37900,
                              finalPrice: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093696',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093699',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093702',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.3',
                                  ratingCount: '19 ratings',
                                  ratingCountV2: '19',
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '129790376',
                              name: 'Mexican Fiesta - Personal',
                              category: 'Flat Menu @189',
                              description:
                                'Serves 1 | Flavourful mix of red capsicum, green capsicum, jalapeno, onion, black olives, sweet corn and 100% mozzarella Cheese with a signature spice sprinkle & our flavourful pan sauce. (PAN Per-266Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: '0c4c12819d98a35144e3f08451ae64f3',
                              isVeg: 1,
                              price: 31900,
                              finalPrice: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093775',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093778',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 1',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.7',
                                  ratingCount: '16 ratings',
                                  ratingCountV2: '16',
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '129790373',
                              name: 'Mazedar Makhni Paneer - Personal',
                              category: 'Flat Menu @189',
                              description:
                                'A treat for all makhni lovers. Spiced paneer, onion, juicy red bell peppers with our new flavourful makhni sauce, topped with 100% mozzarella cheese and buttery spice sprinkle (PAN Per-288Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: 'bf62afee565475fb92a204206321a41c',
                              isVeg: 1,
                              price: 37900,
                              finalPrice: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093734',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093737',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093743',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.8',
                                  ratingCount: '12 ratings',
                                  ratingCountV2: '12',
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '129790374',
                              name: 'Sizzling Schezwan Chicken - Personal',
                              category: 'Flat Menu @189',
                              description:
                                'Loaded with our signature spicy schezwan sauce, juicy schezwan chicken meatballs & 100% mozzarella cheese (PAN Per-277Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: '4061af0525c00c89f0d1edbe7216765c',
                              price: 31900,
                              finalPrice: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093753',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093755',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093761',
                                  groupName: 'Add More Non-Veg Toppings',
                                  choices: [
                                    {
                                      id: '134229674',
                                      name: 'Chicken Pepperoni',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229686',
                                      name: 'Chicken Sausage',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229684',
                                      name: 'Chicken Tikka',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229678',
                                      name: 'Chicken Malai Tikka',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229690',
                                      name: 'Herbed Chicken',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229683',
                                      name: 'Schezwan Chicken Meatball',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229675',
                                      name: 'Chicken Keema Masala',
                                      price: 6000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093764',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.5',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3',
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '99706041',
                              name: 'Chicken Pepperoni - Personal',
                              category: 'Flat Menu @189',
                              description:
                                'Yummy Chicken Pepperoni & 100% mozzarella cheese with signature pan sauce. Its a classic! (PAN Per-301Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: 'gdz44c9hirco09bdafoq',
                              price: 37900,
                              finalPrice: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093656',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093659',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093663',
                                  groupName: 'Add More Non-Veg Toppings',
                                  choices: [
                                    {
                                      id: '134229674',
                                      name: 'Chicken Pepperoni',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229686',
                                      name: 'Chicken Sausage',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229684',
                                      name: 'Chicken Tikka',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229678',
                                      name: 'Chicken Malai Tikka',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229690',
                                      name: 'Herbed Chicken',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229683',
                                      name: 'Schezwan Chicken Meatball',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229675',
                                      name: 'Chicken Keema Masala',
                                      price: 6000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093665',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {
                                  rating: '5.0',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3',
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '129790372',
                              name: 'Awesome American Cheesy - Personal',
                              category: 'Flat Menu @189',
                              description:
                                'Our divine peruvian flavoured cheesy sauce, topped with sweet corn, green capsicum, red paprika and 100% mozzarella cheese, finished with a generous drizzle of texas garlic sauce. Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: '9bd233c76aaf2d2745c5c07332609a8c',
                              isVeg: 1,
                              price: 37900,
                              finalPrice: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093714',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093716',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093719',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.6',
                                  ratingCount: '5 ratings',
                                  ratingCountV2: '5',
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '99706036',
                              name: 'Country Feast - Personal',
                              category: 'Flat Menu @189',
                              description:
                                "Serves 1 | Loaded with Herbed Onion & Green capsicum, Sweet Corn & Tomato with signature pan sauce and 100% mozzarella cheese. It's a feast you can't refuse. (PAN Per-244Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                              imageId: 'c3832837392378cca98e484b89c313ba',
                              isVeg: 1,
                              price: 31900,
                              finalPrice: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093513',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093517',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093518',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 1',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.0',
                                  ratingCount: '6 ratings',
                                  ratingCountV2: '6',
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '99706034',
                              name: 'Tandoori Paneer - Personal',
                              category: 'Flat Menu @189',
                              description:
                                "Serves 1 | It's our signature. Spiced paneer, crunchy onions & green capsicum, spicy red paprika with delicious tandoori sauce and 100% mozzarella cheese! (PAN Per-335Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                              imageId: 's5ld93rsknx0fhj6xarn',
                              isVeg: 1,
                              price: 31900,
                              finalPrice: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093501',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093502',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093503',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 1',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.1',
                                  ratingCount: '35 ratings',
                                  ratingCountV2: '35',
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '129790366',
                              name: 'Sausage & Sweet Corn - Personal',
                              category: 'Flat Menu @189',
                              description:
                                'Serves 1 | Our classic chicken & cheese sausage, juicy sweet corn and 100% mozzarella cheese with flavourful pan sauce (PAN Per-277Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: '190c84ffc8773254c38b3b993e31ba73',
                              price: 28900,
                              finalPrice: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093589',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093592',
                                  groupName: 'Add More Non-Veg Toppings',
                                  choices: [
                                    {
                                      id: '134229674',
                                      name: 'Chicken Pepperoni',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229686',
                                      name: 'Chicken Sausage',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229684',
                                      name: 'Chicken Tikka',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229678',
                                      name: 'Chicken Malai Tikka',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229690',
                                      name: 'Herbed Chicken',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229683',
                                      name: 'Schezwan Chicken Meatball',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229675',
                                      name: 'Chicken Keema Masala',
                                      price: 6000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093594',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                                portionSize: 'Serves 1',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '129790370',
                              name: 'Dhabe Da Keema - Personal',
                              category: 'Flat Menu @189',
                              description:
                                'Dhaba style chicken keema masala, with green chiili, crunchy onion with flavourful pan sauce, 100 % mozzarella cheese & a generous drizzle of mint mayo (PAN Per-270Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: 'd9eddb1993da4e5dc65ef2ceaa8503f7',
                              price: 31900,
                              finalPrice: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093679',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093681',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093685',
                                  groupName: 'Add More Non-Veg Toppings',
                                  choices: [
                                    {
                                      id: '134229674',
                                      name: 'Chicken Pepperoni',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229686',
                                      name: 'Chicken Sausage',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229684',
                                      name: 'Chicken Tikka',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229678',
                                      name: 'Chicken Malai Tikka',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229690',
                                      name: 'Herbed Chicken',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229683',
                                      name: 'Schezwan Chicken Meatball',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229675',
                                      name: 'Chicken Keema Masala',
                                      price: 6000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093688',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '113679930',
                              name: 'Veggie Feast - Personal',
                              category: 'Flat Menu @189',
                              description:
                                'Serves 1 | Herbed onion and Green Capsicum, juicy Sweet Corn & 100% mozzarella cheese with flavourful pan sauce. (PAN Per-269Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: 'cbye9x7wxeopwqvenn7g',
                              isVeg: 1,
                              price: 25900,
                              finalPrice: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093524',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093526',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093529',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 1',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.2',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3',
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '99706031',
                              name: 'Spiced Paneer - Personal',
                              category: 'Flat Menu @189',
                              description:
                                'Serves 1 | Spiced Paneer, crunchy Onion, juicy Tomato & 100% mozzarella cheese, with our classic pan sauce. (PAN Per-276Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: 'a89yqx09ppwlecyqterp',
                              isVeg: 1,
                              price: 25900,
                              finalPrice: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093480',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093486',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093488',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 1',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '135774413',
                              name: 'Cosy Comfort White Sauce Pasta',
                              category: 'Flat Menu @189',
                              description:
                                'Serves 1 | Fusilli pasta baked in rich white sauce along with onion, green capsicum, red capsicum and sweet corn (206 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId:
                                'FOOD_CATALOG/IMAGES/CMS/2024/11/14/52e84e0a-91df-43ec-8e57-8345e7eae89c_f24d1454-e000-4a0b-afc0-3804c7d49313.jpg',
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093414',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 1',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.5',
                                  ratingCount: '8 ratings',
                                  ratingCountV2: '8',
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '99706027',
                              name: 'Corn & Cheese - Personal',
                              category: 'Flat Menu @189',
                              description:
                                'Serves 1 | A combination of juicy Sweet Corn & 100% mozzarella cheese with flavourful signature pan sauce. (PAN Per-320Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: 'ckbnw98n6tffy50wvuzm',
                              isVeg: 1,
                              price: 21900,
                              finalPrice: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093464',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093466',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093468',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 1',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.0',
                                  ratingCount: '6 ratings',
                                  ratingCountV2: '6',
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '113679931',
                              name: 'Chicken Sausage - Personal',
                              category: 'Flat Menu @189',
                              description:
                                'Serves 1 | Pizza topped with Chicken n Cheese Sausages & crunchy Onions, flavourful pan sauce and 100% mozzarella cheese. (PAN Per-310Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: 'aylqpxx08pltowbzxhd3',
                              price: 25900,
                              finalPrice: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093537',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093539',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093541',
                                  groupName: 'Add More Non-Veg Toppings',
                                  choices: [
                                    {
                                      id: '134229674',
                                      name: 'Chicken Pepperoni',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229686',
                                      name: 'Chicken Sausage',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229684',
                                      name: 'Chicken Tikka',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229678',
                                      name: 'Chicken Malai Tikka',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229690',
                                      name: 'Herbed Chicken',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229683',
                                      name: 'Schezwan Chicken Meatball',
                                      price: 6500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '134229675',
                                      name: 'Chicken Keema Masala',
                                      price: 6000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093543',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                                portionSize: 'Serves 1',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.9',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3',
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '129790368',
                              name: 'Schezwan Margherita - Personal',
                              category: 'Flat Menu @189',
                              description:
                                'Serves 1 | Your very own Margherita, now with a spicy twist! Loaded with our signature spicy schezwan sauce & 100% mozzarella cheese (PAN Per-300Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: '0e7df98b7cffdb0b88856464014ad2ff',
                              isVeg: 1,
                              price: 21900,
                              finalPrice: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093602',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093606',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 1',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '136549592',
                              name: 'Tandoori Paneer Pasta',
                              category: 'Flat Menu @189',
                              description:
                                'Serves 1 | Penne pasta baked in your favorite tandoori sauce along with flavorful soft paneer, green capsicum, onion and red capsicum (231 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId:
                                'FOOD_CATALOG/IMAGES/CMS/2024/11/14/f0e9fc2e-4243-42e2-a270-421d2895e1bb_01fb28f5-e8f1-4ca1-9b78-38ae7d54505d.jpg',
                              isVeg: 1,
                              price: 16900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093810',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 1',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.3',
                                  ratingCount: '5 ratings',
                                  ratingCountV2: '5',
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '99706023',
                              name: 'Margherita - Personal',
                              category: 'Flat Menu @189',
                              description:
                                'Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there! (PAN Per-292Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: 'dpventcrozvfni0lqb10',
                              isVeg: 1,
                              price: 16900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093579',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093581',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '205093583',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.6',
                                  ratingCount: '9 ratings',
                                  ratingCountV2: '9',
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '135774414',
                              name: 'Cosy Comfort White Sauce Chicken Pasta',
                              category: 'Flat Menu @189',
                              description:
                                'Serves 1 | Fusilli pasta baked in rich white sauce along with chicken sausage, onion, green capsicum and red capsicum (266 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId:
                                'FOOD_CATALOG/IMAGES/CMS/2024/11/14/8cd24f1b-8249-4b2b-b401-0a5fdfcca0a3_62678092-5611-4c8c-8b43-ae9f72d86615.jpg',
                              price: 20900,
                              finalPrice: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093426',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                                portionSize: 'Serves 1',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '135774415',
                              name: 'Classic Mushroom Pasta',
                              category: 'Flat Menu @189',
                              description:
                                'Serves 1 | Fusilli pasta baked in classic mushroom sauce (230 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId:
                                'FOOD_CATALOG/IMAGES/CMS/2024/11/14/4a5b52dd-fa17-4fc9-90d4-efd0bce5fd89_ecbfdac7-d6a0-4912-99c0-7ecc147d3539.jpg',
                              isVeg: 1,
                              price: 20900,
                              finalPrice: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093453',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 1',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {
                                  rating: '2.4',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3',
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '136549595',
                              name: 'Penne McN Cheese & Chicken Pasta',
                              category: 'Flat Menu @189',
                              description:
                                'Serves 1 | Penne Pasta baked in classic jalapeno sauce along with herbed chicken, green capsicum, onion and red capsicum topped with 100% mozzarella cheese (224 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId:
                                'FOOD_CATALOG/IMAGES/CMS/2024/11/14/0ce3c90d-f550-4b1a-9a01-b429d1889136_c3b681e8-366a-4897-8051-af9558509b9f.jpg',
                              price: 22900,
                              finalPrice: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093836',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                                portionSize: 'Serves 1',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '136549587',
                              name: 'Tomato Twist Red Sauce Pasta',
                              category: 'Flat Menu @189',
                              description:
                                'Serves 1 | Fusilli pasta baked in tangy flavorful tomato sauce infused with heavenly herbs & spices, along with green capsicum, onion and red capsicum (175 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId:
                                'FOOD_CATALOG/IMAGES/CMS/2024/12/4/75a7e479-c650-4bf9-9568-3d59a175c91d_e5480747-954e-4034-9965-2af88e0b3f7c.jpg',
                              isVeg: 1,
                              price: 16900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093438',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 1',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.9',
                                  ratingCount: '7 ratings',
                                  ratingCountV2: '7',
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '135654842',
                              name: 'Classic Breadstix + Pepsi Pet',
                              category: 'Flat Menu @189',
                              description:
                                'Enjoy Classic Breadstix & Pepsi. Freshly baked Classic BreadStix + gooey sauce = an unbeatable combo! Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: '911cf4771b2fe4361b8bf59b748db610',
                              isVeg: 1,
                              price: 22900,
                              finalPrice: 18900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '114804285',
                              name: 'Masala Keema Garlic Bread',
                              category: 'Flat Menu @189',
                              description:
                                "Serves 1 | Hut's signature Garlic Bread topped with chicken keema masala, onion and green chilli & a flavourful dressing.A must try! (442 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                              imageId: 'a8288101773dde9baf1e1b2d3228dbf8',
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '194562060',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                                portionSize: 'Serves 1',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {
                                  rating: '2.2',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3',
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '114804303',
                              name: 'Spicy Schezwan Pasta Chicken',
                              category: 'Flat Menu @189',
                              description:
                                'Serves 1 | Fusilli pasta baked in spicy schezwan sauce along with schezwan chicken meatballs, green capsicum, onion, red capsicum and red paprika (178 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId:
                                'FOOD_CATALOG/IMAGES/CMS/2024/11/14/2583a3a0-8d06-467f-af93-4faa4f39a5a5_e340017d-cd28-4bfb-9b1b-a017b162ba13.jpg',
                              price: 19900,
                              finalPrice: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093573',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                                portionSize: 'Serves 1',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '136549591',
                              name: 'Tandoori Murg Pasta',
                              category: 'Flat Menu @189',
                              description:
                                'Serves 1 | Penne pasta baked in your favorite tandoori sauce along with with chicken tikka, green capsicum, onion and red capsicum (214 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId:
                                'FOOD_CATALOG/IMAGES/CMS/2024/11/14/6c5a9d88-0b51-477e-aaa8-2d3722f5a4b1_e49ed4b1-1b3f-4b0b-8678-0adee9ae4a58.jpg',
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093800',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                                portionSize: 'Serves 1',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '136549588',
                              name: 'Spicy Red Schezwan Pasta',
                              category: 'Flat Menu @189',
                              description:
                                'Serves 1 | Fusilli pasta baked in spicy schezwan sauce, along with green capsicum, onion, red capsicum and paprika for an added zing (190 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId:
                                'FOOD_CATALOG/IMAGES/CMS/2024/11/14/be774830-9639-477a-8bf3-edd168b511cd_45b59504-e5f2-4a16-8e44-27b053e17318.jpg',
                              isVeg: 1,
                              price: 17900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093564',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 1',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.1',
                                  ratingCount: '5 ratings',
                                  ratingCountV2: '5',
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '136549593',
                              name: 'Penne McN Cheese Pasta',
                              category: 'Flat Menu @189',
                              description:
                                'Serves 1 | Penne Pasta baked in classic jalapeno sauce along with green capsicum, onion and red capsicum topped with 100% mozzarella cheese (227 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId:
                                'FOOD_CATALOG/IMAGES/CMS/2024/11/14/46ffee9e-c54c-4404-b34d-52efb388b361_2f6dc8c9-f1b6-4417-a121-04700ea13ad4.jpg',
                              isVeg: 1,
                              price: 20900,
                              finalPrice: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '205093822',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 1',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              offerTags: [
                                {
                                  matchText: 'SILD',
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: 'FinalPrice',
                              ratings: {
                                aggregatedRating: {
                                  rating: '2.9',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4',
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                '61851be2-36e9-42a1-afbb-ddab3f3fb06f',
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image: 't1stinhga3alitdpr6yt',
                      categoryId: '59052378',
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Veg Pizza',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '114719526',
                              name: 'Veggie Supreme',
                              category: 'Veg Pizza',
                              description:
                                'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with flavourful pan sauce and 100% mozzarella cheese. (PAN Per/Med-254 Kcal/100g | TnC-258 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: 'z0c4xpovma1qtmu4tlls',
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '43014699',
                                    name: 'Choose your Crust',
                                    variations: [
                                      {
                                        name: 'Pan',
                                        default: 1,
                                        id: '137187142',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '43014700',
                                          variationId: '137187145',
                                        },
                                      },
                                      {
                                        name: 'Stuffed Crust - Maxx',
                                        id: '137187143',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '43014700',
                                          variationId: '137187146',
                                        },
                                      },
                                      {
                                        name: 'Thin n Crispy',
                                        id: '137187144',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '43014700',
                                          variationId: '137187147',
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: '43014700',
                                    name: 'Choose Size',
                                    variations: [
                                      {
                                        name: 'Personal',
                                        price: 379,
                                        default: 1,
                                        id: '137187145',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Personal',
                                        price: 454,
                                        id: '137187146',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Large.',
                                        price: 849,
                                        id: '137187147',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium',
                                        price: 639,
                                        id: '137187148',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium',
                                        price: 478,
                                        id: '137187149',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '43014699',
                                        variationId: '137187142',
                                      },
                                      {
                                        groupId: '43014700',
                                        variationId: '137187145',
                                      },
                                    ],
                                    price: 37900,
                                    addonCombinations: [
                                      {
                                        groupId: '114312663',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312663',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312663',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312663',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312663',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312663',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '156002783',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '156002783',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '156002783',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '156002783',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '156002783',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '156002783',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '156002783',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '156002783',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '156002783',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '156002783',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '151860223',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '43014699',
                                        variationId: '137187142',
                                      },
                                      {
                                        groupId: '43014700',
                                        variationId: '137187148',
                                      },
                                    ],
                                    price: 63900,
                                    addonCombinations: [
                                      {
                                        groupId: '114312663',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312663',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312663',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312663',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312663',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312663',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151860224',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '114312669',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '114312669',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '114312669',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '114312669',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '114312669',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '114312669',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '114312669',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '114312669',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '114312669',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '114312669',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '114312669',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '43014699',
                                        variationId: '137187143',
                                      },
                                      {
                                        groupId: '43014700',
                                        variationId: '137187146',
                                      },
                                    ],
                                    price: 45400,
                                    addonCombinations: [
                                      {
                                        groupId: '114312663',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312663',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312663',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312663',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312663',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312663',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '156002783',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '156002783',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '156002783',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '156002783',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '156002783',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '156002783',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '156002783',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '156002783',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '156002783',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '156002783',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '151860223',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '43014699',
                                        variationId: '137187143',
                                      },
                                      {
                                        groupId: '43014700',
                                        variationId: '137187149',
                                      },
                                    ],
                                    price: 47800,
                                    addonCombinations: [
                                      {
                                        groupId: '114312663',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312663',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312663',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312663',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312663',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312663',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151860224',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '114312669',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '114312669',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '114312669',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '114312669',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '114312669',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '114312669',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '114312669',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '114312669',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '114312669',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '114312669',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '114312669',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '43014699',
                                        variationId: '137187144',
                                      },
                                      {
                                        groupId: '43014700',
                                        variationId: '137187147',
                                      },
                                    ],
                                    price: 84900,
                                    addonCombinations: [
                                      {
                                        groupId: '114312663',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312663',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312663',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312663',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312663',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312663',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151860226',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140435074',
                                        addonId: '114779798',
                                      },
                                      {
                                        groupId: '140435074',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140435074',
                                        addonId: '114779800',
                                      },
                                      {
                                        groupId: '140435074',
                                        addonId: '114779801',
                                      },
                                      {
                                        groupId: '140435074',
                                        addonId: '114779797',
                                      },
                                      {
                                        groupId: '140435074',
                                        addonId: '114779812',
                                      },
                                      {
                                        groupId: '140435074',
                                        addonId: '114779813',
                                      },
                                      {
                                        groupId: '140435074',
                                        addonId: '114779808',
                                      },
                                      {
                                        groupId: '140435074',
                                        addonId: '114779809',
                                      },
                                      {
                                        groupId: '140435074',
                                        addonId: '114779810',
                                      },
                                      {
                                        groupId: '140435074',
                                        addonId: '114779811',
                                      },
                                      {
                                        groupId: '140435074',
                                        addonId: '114779804',
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: '151860223',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '151860226',
                                  groupName: 'Extra-Cheese Topping',
                                  choices: [
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '140435074',
                                  groupName: 'Add More Veg Toppings,',
                                  choices: [
                                    {
                                      id: '114779798',
                                      name: 'Black Olives',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779800',
                                      name: 'Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779801',
                                      name: 'Herbed Veggies',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779797',
                                      name: 'Jalapeno',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779812',
                                      name: 'Paneer',
                                      price: 8500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779813',
                                      name: 'Mushroom',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779808',
                                      name: 'Onion',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779809',
                                      name: 'Red Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779810',
                                      name: 'Red Paprika',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779811',
                                      name: 'Sweet Corn',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779804',
                                      name: 'Tomato',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '156002783',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '114312663',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '114312669',
                                  groupName: 'Add. More Veg Toppings..',
                                  choices: [
                                    {
                                      id: '101250807',
                                      name: 'Black Olives',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250809',
                                      name: 'Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250810',
                                      name: 'Herbed Veggies',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250811',
                                      name: 'Jalapeno',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250812',
                                      name: 'Mushroom',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250813',
                                      name: 'Onion',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250814',
                                      name: 'Paneer',
                                      price: 7500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250815',
                                      name: 'Red Paprika',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250816',
                                      name: 'Red Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250817',
                                      name: 'Sweet Corn',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250818',
                                      name: 'Tomato',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 1',
                              },
                              defaultPrice: 37900,
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.2',
                                  ratingCount: '41 ratings',
                                  ratingCountV2: '41',
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '99013775',
                              name: 'Tandoori Paneer',
                              category: 'Veg Pizza',
                              description:
                                "Serves 1 | It's our signature. Spiced paneer, crunchy onions & green capsicum, spicy red paprika with delicious tandoori sauce and 100% mozzarella cheese! (PAN Per/Med-335 Kcal/100g | TnC-326 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                              imageId: 's5ld93rsknx0fhj6xarn',
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '42704859',
                                    name: 'Choose your Crust',
                                    variations: [
                                      {
                                        name: 'Pan',
                                        default: 1,
                                        id: '136395222',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42704860',
                                          variationId: '136395225',
                                        },
                                      },
                                      {
                                        name: 'Stuffed Crust - Maxx',
                                        id: '136395223',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42704860',
                                          variationId: '136395226',
                                        },
                                      },
                                      {
                                        name: 'Thin n Crispy',
                                        id: '136395224',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42704860',
                                          variationId: '136395227',
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: '42704860',
                                    name: 'Choose Size',
                                    variations: [
                                      {
                                        name: 'Personal',
                                        price: 319,
                                        default: 1,
                                        id: '136395225',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Personal',
                                        price: 394,
                                        id: '136395226',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Large.',
                                        price: 749,
                                        id: '136395227',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium',
                                        price: 569,
                                        id: '136395228',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium',
                                        price: 668,
                                        id: '136395229',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '42704859',
                                        variationId: '136395222',
                                      },
                                      {
                                        groupId: '42704860',
                                        variationId: '136395225',
                                      },
                                    ],
                                    price: 31900,
                                    addonCombinations: [
                                      {
                                        groupId: '114312766',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312766',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312766',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312766',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312766',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312766',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '154484768',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '154484768',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '154484768',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '154484768',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '154484768',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '154484768',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '154484768',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '154484768',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '154484768',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '154484768',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '151860339',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42704859',
                                        variationId: '136395222',
                                      },
                                      {
                                        groupId: '42704860',
                                        variationId: '136395228',
                                      },
                                    ],
                                    price: 56900,
                                    addonCombinations: [
                                      {
                                        groupId: '114312766',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312766',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312766',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312766',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312766',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312766',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151860343',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '114312770',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '114312770',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '114312770',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '114312770',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '114312770',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '114312770',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '114312770',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '114312770',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '114312770',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '114312770',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '114312770',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42704859',
                                        variationId: '136395223',
                                      },
                                      {
                                        groupId: '42704860',
                                        variationId: '136395226',
                                      },
                                    ],
                                    price: 39400,
                                    addonCombinations: [
                                      {
                                        groupId: '114312766',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312766',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312766',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312766',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312766',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312766',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '154484768',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '154484768',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '154484768',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '154484768',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '154484768',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '154484768',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '154484768',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '154484768',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '154484768',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '154484768',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '151860339',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42704859',
                                        variationId: '136395223',
                                      },
                                      {
                                        groupId: '42704860',
                                        variationId: '136395229',
                                      },
                                    ],
                                    price: 66800,
                                    addonCombinations: [
                                      {
                                        groupId: '114312766',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312766',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312766',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312766',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312766',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312766',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151860343',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '114312770',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '114312770',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '114312770',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '114312770',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '114312770',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '114312770',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '114312770',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '114312770',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '114312770',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '114312770',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '114312770',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42704859',
                                        variationId: '136395224',
                                      },
                                      {
                                        groupId: '42704860',
                                        variationId: '136395227',
                                      },
                                    ],
                                    price: 74900,
                                    addonCombinations: [
                                      {
                                        groupId: '114312766',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312766',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312766',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312766',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312766',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312766',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151860346',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140435158',
                                        addonId: '114779798',
                                      },
                                      {
                                        groupId: '140435158',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140435158',
                                        addonId: '114779800',
                                      },
                                      {
                                        groupId: '140435158',
                                        addonId: '114779801',
                                      },
                                      {
                                        groupId: '140435158',
                                        addonId: '114779797',
                                      },
                                      {
                                        groupId: '140435158',
                                        addonId: '114779812',
                                      },
                                      {
                                        groupId: '140435158',
                                        addonId: '114779813',
                                      },
                                      {
                                        groupId: '140435158',
                                        addonId: '114779808',
                                      },
                                      {
                                        groupId: '140435158',
                                        addonId: '114779809',
                                      },
                                      {
                                        groupId: '140435158',
                                        addonId: '114779810',
                                      },
                                      {
                                        groupId: '140435158',
                                        addonId: '114779811',
                                      },
                                      {
                                        groupId: '140435158',
                                        addonId: '114779804',
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: '151860339',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '151860346',
                                  groupName: 'Extra-Cheese Topping',
                                  choices: [
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '140435158',
                                  groupName: 'Add More Veg Toppings,',
                                  choices: [
                                    {
                                      id: '114779798',
                                      name: 'Black Olives',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779800',
                                      name: 'Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779801',
                                      name: 'Herbed Veggies',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779797',
                                      name: 'Jalapeno',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779812',
                                      name: 'Paneer',
                                      price: 8500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779813',
                                      name: 'Mushroom',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779808',
                                      name: 'Onion',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779809',
                                      name: 'Red Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779810',
                                      name: 'Red Paprika',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779811',
                                      name: 'Sweet Corn',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779804',
                                      name: 'Tomato',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '154484768',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '114312766',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '114312770',
                                  groupName: 'Add. More Veg Toppings..',
                                  choices: [
                                    {
                                      id: '101250807',
                                      name: 'Black Olives',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250809',
                                      name: 'Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250810',
                                      name: 'Herbed Veggies',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250811',
                                      name: 'Jalapeno',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250812',
                                      name: 'Mushroom',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250813',
                                      name: 'Onion',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250814',
                                      name: 'Paneer',
                                      price: 7500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250815',
                                      name: 'Red Paprika',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250816',
                                      name: 'Red Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250817',
                                      name: 'Sweet Corn',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250818',
                                      name: 'Tomato',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 1',
                              },
                              defaultPrice: 31900,
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.7',
                                  ratingCount: '30 ratings',
                                  ratingCountV2: '30',
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '116290637',
                              name: 'Mazedar Makhni Paneer',
                              category: 'Veg Pizza',
                              description:
                                'Serves 1 | A treat for all makhni lovers. Spiced paneer, onion, juicy red bell peppers with our new flavourful makhni sauce, topped with 100% mozzarella cheese and buttery spice sprinkle (PAN Per/Med-288 Kcal/100g | TnC-290 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: 'bf62afee565475fb92a204206321a41c',
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '43014671',
                                    name: 'Choose your Crust',
                                    variations: [
                                      {
                                        name: 'Pan',
                                        default: 1,
                                        id: '137187009',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '43014672',
                                          variationId: '137187012',
                                        },
                                      },
                                      {
                                        name: 'Stuffed Crust - Maxx',
                                        id: '137187010',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '43014672',
                                          variationId: '137187013',
                                        },
                                      },
                                      {
                                        name: 'Thin n Crispy',
                                        id: '137187011',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '43014672',
                                          variationId: '137187014',
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: '43014672',
                                    name: 'Choose Size',
                                    variations: [
                                      {
                                        name: 'Personal',
                                        price: 379,
                                        default: 1,
                                        id: '137187012',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Personal',
                                        price: 454,
                                        id: '137187013',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Large.',
                                        price: 849,
                                        id: '137187014',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium',
                                        price: 639,
                                        id: '137187015',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium',
                                        price: 738,
                                        id: '137187016',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '43014671',
                                        variationId: '137187009',
                                      },
                                      {
                                        groupId: '43014672',
                                        variationId: '137187012',
                                      },
                                    ],
                                    price: 37900,
                                    addonCombinations: [
                                      {
                                        groupId: '114314301',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114314301',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114314301',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114314301',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114314301',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114314301',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '156002728',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '156002728',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '156002728',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '156002728',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '156002728',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '156002728',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '156002728',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '156002728',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '156002728',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '156002728',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '151860508',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '43014671',
                                        variationId: '137187009',
                                      },
                                      {
                                        groupId: '43014672',
                                        variationId: '137187015',
                                      },
                                    ],
                                    price: 63900,
                                    addonCombinations: [
                                      {
                                        groupId: '114314301',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114314301',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114314301',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114314301',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114314301',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114314301',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151860515',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '114314312',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '114314312',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '114314312',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '114314312',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '114314312',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '114314312',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '114314312',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '114314312',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '114314312',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '114314312',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '114314312',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '43014671',
                                        variationId: '137187010',
                                      },
                                      {
                                        groupId: '43014672',
                                        variationId: '137187013',
                                      },
                                    ],
                                    price: 45400,
                                    addonCombinations: [
                                      {
                                        groupId: '114314301',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114314301',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114314301',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114314301',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114314301',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114314301',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '156002728',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '156002728',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '156002728',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '156002728',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '156002728',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '156002728',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '156002728',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '156002728',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '156002728',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '156002728',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '151860508',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '43014671',
                                        variationId: '137187010',
                                      },
                                      {
                                        groupId: '43014672',
                                        variationId: '137187016',
                                      },
                                    ],
                                    price: 73800,
                                    addonCombinations: [
                                      {
                                        groupId: '114314301',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114314301',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114314301',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114314301',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114314301',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114314301',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151860515',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '114314312',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '114314312',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '114314312',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '114314312',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '114314312',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '114314312',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '114314312',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '114314312',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '114314312',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '114314312',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '114314312',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '43014671',
                                        variationId: '137187011',
                                      },
                                      {
                                        groupId: '43014672',
                                        variationId: '137187014',
                                      },
                                    ],
                                    price: 84900,
                                    addonCombinations: [
                                      {
                                        groupId: '114314301',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114314301',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114314301',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114314301',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114314301',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114314301',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151860521',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140435071',
                                        addonId: '114779798',
                                      },
                                      {
                                        groupId: '140435071',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140435071',
                                        addonId: '114779800',
                                      },
                                      {
                                        groupId: '140435071',
                                        addonId: '114779801',
                                      },
                                      {
                                        groupId: '140435071',
                                        addonId: '114779797',
                                      },
                                      {
                                        groupId: '140435071',
                                        addonId: '114779812',
                                      },
                                      {
                                        groupId: '140435071',
                                        addonId: '114779813',
                                      },
                                      {
                                        groupId: '140435071',
                                        addonId: '114779808',
                                      },
                                      {
                                        groupId: '140435071',
                                        addonId: '114779809',
                                      },
                                      {
                                        groupId: '140435071',
                                        addonId: '114779810',
                                      },
                                      {
                                        groupId: '140435071',
                                        addonId: '114779811',
                                      },
                                      {
                                        groupId: '140435071',
                                        addonId: '114779804',
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: '151860508',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '151860521',
                                  groupName: 'Extra-Cheese Topping',
                                  choices: [
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '140435071',
                                  groupName: 'Add More Veg Toppings,',
                                  choices: [
                                    {
                                      id: '114779798',
                                      name: 'Black Olives',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779800',
                                      name: 'Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779801',
                                      name: 'Herbed Veggies',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779797',
                                      name: 'Jalapeno',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779812',
                                      name: 'Paneer',
                                      price: 8500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779813',
                                      name: 'Mushroom',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779808',
                                      name: 'Onion',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779809',
                                      name: 'Red Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779810',
                                      name: 'Red Paprika',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779811',
                                      name: 'Sweet Corn',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779804',
                                      name: 'Tomato',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '156002728',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '114314301',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '114314312',
                                  groupName: 'Add. More Veg Toppings..',
                                  choices: [
                                    {
                                      id: '101250807',
                                      name: 'Black Olives',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250809',
                                      name: 'Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250810',
                                      name: 'Herbed Veggies',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250811',
                                      name: 'Jalapeno',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250812',
                                      name: 'Mushroom',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250813',
                                      name: 'Onion',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250814',
                                      name: 'Paneer',
                                      price: 7500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250815',
                                      name: 'Red Paprika',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250816',
                                      name: 'Red Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250817',
                                      name: 'Sweet Corn',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250818',
                                      name: 'Tomato',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 1',
                              },
                              defaultPrice: 37900,
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '99013770',
                              name: 'Country Feast',
                              category: 'Veg Pizza',
                              description:
                                "Serves 1 | Loaded with herbed onion & green capsicum, sweet corn, tomato with signature pan sauce and 100% mozzarella cheese. It's a feast you can't refuse (PAN Per/Med-244 Kcal/100g | TnC-282 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                              imageId: 'c3832837392378cca98e484b89c313ba',
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '42853782',
                                    name: 'Choose your Crust',
                                    variations: [
                                      {
                                        name: 'Pan',
                                        default: 1,
                                        id: '136739195',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42853783',
                                          variationId: '136739198',
                                        },
                                      },
                                      {
                                        name: 'Stuffed Crust - Maxx',
                                        id: '136739196',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42853783',
                                          variationId: '136739199',
                                        },
                                      },
                                      {
                                        name: 'Thin n Crispy',
                                        id: '136739197',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42853783',
                                          variationId: '136739200',
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: '42853783',
                                    name: 'Choose Size',
                                    variations: [
                                      {
                                        name: 'Personal',
                                        price: 319,
                                        default: 1,
                                        id: '136739198',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Personal',
                                        price: 394,
                                        id: '136739199',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Large.',
                                        price: 749,
                                        id: '136739200',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium',
                                        price: 569,
                                        id: '136739201',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium',
                                        price: 668,
                                        id: '136739202',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '42853782',
                                        variationId: '136739195',
                                      },
                                      {
                                        groupId: '42853783',
                                        variationId: '136739198',
                                      },
                                    ],
                                    price: 31900,
                                    addonCombinations: [
                                      {
                                        groupId: '114312714',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312714',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312714',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312714',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312714',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312714',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '155261231',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '155261231',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '155261231',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '155261231',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '155261231',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '155261231',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '155261231',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '155261231',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '155261231',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '155261231',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '151860681',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42853782',
                                        variationId: '136739195',
                                      },
                                      {
                                        groupId: '42853783',
                                        variationId: '136739201',
                                      },
                                    ],
                                    price: 56900,
                                    addonCombinations: [
                                      {
                                        groupId: '114312714',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312714',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312714',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312714',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312714',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312714',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '155261230',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '114312718',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '114312718',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '114312718',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '114312718',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '114312718',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '114312718',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '114312718',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '114312718',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '114312718',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '114312718',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '114312718',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42853782',
                                        variationId: '136739196',
                                      },
                                      {
                                        groupId: '42853783',
                                        variationId: '136739199',
                                      },
                                    ],
                                    price: 39400,
                                    addonCombinations: [
                                      {
                                        groupId: '114312714',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312714',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312714',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312714',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312714',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312714',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '155261231',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '155261231',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '155261231',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '155261231',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '155261231',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '155261231',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '155261231',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '155261231',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '155261231',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '155261231',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '151860681',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42853782',
                                        variationId: '136739196',
                                      },
                                      {
                                        groupId: '42853783',
                                        variationId: '136739202',
                                      },
                                    ],
                                    price: 66800,
                                    addonCombinations: [
                                      {
                                        groupId: '114312714',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312714',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312714',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312714',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312714',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312714',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '155261230',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '114312718',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '114312718',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '114312718',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '114312718',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '114312718',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '114312718',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '114312718',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '114312718',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '114312718',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '114312718',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '114312718',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42853782',
                                        variationId: '136739197',
                                      },
                                      {
                                        groupId: '42853783',
                                        variationId: '136739200',
                                      },
                                    ],
                                    price: 74900,
                                    addonCombinations: [
                                      {
                                        groupId: '114312714',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312714',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312714',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312714',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312714',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312714',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151860680',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140435038',
                                        addonId: '114779798',
                                      },
                                      {
                                        groupId: '140435038',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140435038',
                                        addonId: '114779800',
                                      },
                                      {
                                        groupId: '140435038',
                                        addonId: '114779801',
                                      },
                                      {
                                        groupId: '140435038',
                                        addonId: '114779797',
                                      },
                                      {
                                        groupId: '140435038',
                                        addonId: '114779812',
                                      },
                                      {
                                        groupId: '140435038',
                                        addonId: '114779813',
                                      },
                                      {
                                        groupId: '140435038',
                                        addonId: '114779808',
                                      },
                                      {
                                        groupId: '140435038',
                                        addonId: '114779809',
                                      },
                                      {
                                        groupId: '140435038',
                                        addonId: '114779810',
                                      },
                                      {
                                        groupId: '140435038',
                                        addonId: '114779811',
                                      },
                                      {
                                        groupId: '140435038',
                                        addonId: '114779804',
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: '151860681',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '151860680',
                                  groupName: 'Extra-Cheese Topping',
                                  choices: [
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '140435038',
                                  groupName: 'Add More Veg Toppings,',
                                  choices: [
                                    {
                                      id: '114779798',
                                      name: 'Black Olives',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779800',
                                      name: 'Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779801',
                                      name: 'Herbed Veggies',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779797',
                                      name: 'Jalapeno',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779812',
                                      name: 'Paneer',
                                      price: 8500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779813',
                                      name: 'Mushroom',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779808',
                                      name: 'Onion',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779809',
                                      name: 'Red Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779810',
                                      name: 'Red Paprika',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779811',
                                      name: 'Sweet Corn',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779804',
                                      name: 'Tomato',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '155261231',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '114312714',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '114312718',
                                  groupName: 'Add. More Veg Toppings..',
                                  choices: [
                                    {
                                      id: '101250807',
                                      name: 'Black Olives',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250809',
                                      name: 'Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250810',
                                      name: 'Herbed Veggies',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250811',
                                      name: 'Jalapeno',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250812',
                                      name: 'Mushroom',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250813',
                                      name: 'Onion',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250814',
                                      name: 'Paneer',
                                      price: 7500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250815',
                                      name: 'Red Paprika',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250816',
                                      name: 'Red Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250817',
                                      name: 'Sweet Corn',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250818',
                                      name: 'Tomato',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 1',
                              },
                              defaultPrice: 31900,
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.6',
                                  ratingCount: '27 ratings',
                                  ratingCountV2: '27',
                                },
                              },
                              itemPriceStrikeOff: true,
                              imageBadges: [
                                {
                                  imageId: 'merch_bau/High%20Protein%201_1.png',
                                },
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '101627266',
                              name: 'Margherita Pizza',
                              category: 'Veg Pizza',
                              description:
                                'Serves 1 | Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there! (292 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: 'dpventcrozvfni0lqb10',
                              isVeg: 1,
                              price: 16900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 1',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.8',
                                  ratingCount: '166 ratings',
                                  ratingCountV2: '166',
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '116290629',
                              name: 'Mexican Fiesta',
                              category: 'Veg Pizza',
                              description:
                                'Serves 1 | Flavourful mix of red capsicum, green capsicum, jalapeno, onion, black olives, sweet corn and 100% mozzarella cheese with a signature spice sprinkle & our flavourful pan sauce (PAN Per/Med-266 Kcal/100g | TnC-258 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: '0c4c12819d98a35144e3f08451ae64f3',
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '42810014',
                                    name: 'Choose your Crust',
                                    variations: [
                                      {
                                        name: 'Pan',
                                        default: 1,
                                        id: '136640588',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42810016',
                                          variationId: '136640594',
                                        },
                                      },
                                      {
                                        name: 'Stuffed Crust - Maxx',
                                        id: '136640590',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42810016',
                                          variationId: '136640595',
                                        },
                                      },
                                      {
                                        name: 'Thin n Crispy',
                                        id: '136640592',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42810016',
                                          variationId: '136640596',
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: '42810016',
                                    name: 'Choose Size',
                                    variations: [
                                      {
                                        name: 'Personal',
                                        price: 319,
                                        default: 1,
                                        id: '136640594',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Personal',
                                        price: 394,
                                        id: '136640595',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Large.',
                                        price: 749,
                                        id: '136640596',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium',
                                        price: 569,
                                        id: '136640597',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium',
                                        price: 668,
                                        id: '136640598',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '42810014',
                                        variationId: '136640588',
                                      },
                                      {
                                        groupId: '42810016',
                                        variationId: '136640594',
                                      },
                                    ],
                                    price: 31900,
                                    addonCombinations: [
                                      {
                                        groupId: '114314174',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114314174',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114314174',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114314174',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114314174',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114314174',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '154990478',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '154990478',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '154990478',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '154990478',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '154990478',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '154990478',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '154990478',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '154990478',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '154990478',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '154990478',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '150924662',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42810014',
                                        variationId: '136640588',
                                      },
                                      {
                                        groupId: '42810016',
                                        variationId: '136640597',
                                      },
                                    ],
                                    price: 56900,
                                    addonCombinations: [
                                      {
                                        groupId: '114314174',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114314174',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114314174',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114314174',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114314174',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114314174',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '150924663',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '114314179',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '114314179',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '114314179',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '114314179',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '114314179',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '114314179',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '114314179',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '114314179',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '114314179',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '114314179',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '114314179',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42810014',
                                        variationId: '136640590',
                                      },
                                      {
                                        groupId: '42810016',
                                        variationId: '136640595',
                                      },
                                    ],
                                    price: 39400,
                                    addonCombinations: [
                                      {
                                        groupId: '114314174',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114314174',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114314174',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114314174',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114314174',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114314174',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '154990478',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '154990478',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '154990478',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '154990478',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '154990478',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '154990478',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '154990478',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '154990478',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '154990478',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '154990478',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '150924662',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42810014',
                                        variationId: '136640590',
                                      },
                                      {
                                        groupId: '42810016',
                                        variationId: '136640598',
                                      },
                                    ],
                                    price: 66800,
                                    addonCombinations: [
                                      {
                                        groupId: '114314174',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114314174',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114314174',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114314174',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114314174',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114314174',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '150924663',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '114314179',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '114314179',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '114314179',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '114314179',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '114314179',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '114314179',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '114314179',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '114314179',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '114314179',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '114314179',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '114314179',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42810014',
                                        variationId: '136640592',
                                      },
                                      {
                                        groupId: '42810016',
                                        variationId: '136640596',
                                      },
                                    ],
                                    price: 74900,
                                    addonCombinations: [
                                      {
                                        groupId: '114314174',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114314174',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114314174',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114314174',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114314174',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114314174',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '150924665',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140435180',
                                        addonId: '114779798',
                                      },
                                      {
                                        groupId: '140435180',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140435180',
                                        addonId: '114779800',
                                      },
                                      {
                                        groupId: '140435180',
                                        addonId: '114779801',
                                      },
                                      {
                                        groupId: '140435180',
                                        addonId: '114779797',
                                      },
                                      {
                                        groupId: '140435180',
                                        addonId: '114779812',
                                      },
                                      {
                                        groupId: '140435180',
                                        addonId: '114779813',
                                      },
                                      {
                                        groupId: '140435180',
                                        addonId: '114779808',
                                      },
                                      {
                                        groupId: '140435180',
                                        addonId: '114779809',
                                      },
                                      {
                                        groupId: '140435180',
                                        addonId: '114779810',
                                      },
                                      {
                                        groupId: '140435180',
                                        addonId: '114779811',
                                      },
                                      {
                                        groupId: '140435180',
                                        addonId: '114779804',
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: '150924662',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '150924665',
                                  groupName: 'Extra-Cheese Topping',
                                  choices: [
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '140435180',
                                  groupName: 'Add More Veg Toppings,',
                                  choices: [
                                    {
                                      id: '114779798',
                                      name: 'Black Olives',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779800',
                                      name: 'Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779801',
                                      name: 'Herbed Veggies',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779797',
                                      name: 'Jalapeno',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779812',
                                      name: 'Paneer',
                                      price: 8500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779813',
                                      name: 'Mushroom',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779808',
                                      name: 'Onion',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779809',
                                      name: 'Red Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779810',
                                      name: 'Red Paprika',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779811',
                                      name: 'Sweet Corn',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779804',
                                      name: 'Tomato',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '154990478',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '114314174',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '114314179',
                                  groupName: 'Add. More Veg Toppings..',
                                  choices: [
                                    {
                                      id: '101250807',
                                      name: 'Black Olives',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250809',
                                      name: 'Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250810',
                                      name: 'Herbed Veggies',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250811',
                                      name: 'Jalapeno',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250812',
                                      name: 'Mushroom',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250813',
                                      name: 'Onion',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250814',
                                      name: 'Paneer',
                                      price: 7500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250815',
                                      name: 'Red Paprika',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250816',
                                      name: 'Red Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250817',
                                      name: 'Sweet Corn',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250818',
                                      name: 'Tomato',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 1',
                              },
                              defaultPrice: 31900,
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '2.9',
                                  ratingCount: '8 ratings',
                                  ratingCountV2: '8',
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '116290635',
                              name: 'Ultimate Tandoori Veggie',
                              category: 'Veg Pizza',
                              description:
                                'Serves 1 | An ultimate combination of your favourite veggies-onion, green capsicum, mushroom, tomato, spicy jalapeno on tandoori sauce, topped with 100% mozzarella cheese & generous drizzle of mint mayo (PAN Per/Med-314 Kcal/100g | TnC-395 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: 'b7d1f56df6414f8b6e49001af95e259a',
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '42749361',
                                    name: 'Choose your Crust',
                                    variations: [
                                      {
                                        name: 'Pan',
                                        default: 1,
                                        id: '136507374',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42749362',
                                          variationId: '136507377',
                                        },
                                      },
                                      {
                                        name: 'Stuffed Crust - Maxx',
                                        id: '136507375',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42749362',
                                          variationId: '136507378',
                                        },
                                      },
                                      {
                                        name: 'Thin n Crispy',
                                        id: '136507376',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42749362',
                                          variationId: '136507379',
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: '42749362',
                                    name: 'Choose Size',
                                    variations: [
                                      {
                                        name: 'Personal',
                                        price: 379,
                                        default: 1,
                                        id: '136507377',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Personal',
                                        price: 454,
                                        id: '136507378',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Large.',
                                        price: 849,
                                        id: '136507379',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium',
                                        price: 639,
                                        id: '136507380',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium',
                                        price: 738,
                                        id: '136507381',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '42749361',
                                        variationId: '136507374',
                                      },
                                      {
                                        groupId: '42749362',
                                        variationId: '136507377',
                                      },
                                    ],
                                    price: 37900,
                                    addonCombinations: [
                                      {
                                        groupId: '114314259',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114314259',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114314259',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114314259',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114314259',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114314259',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '154723671',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '154723671',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '154723671',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '154723671',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '154723671',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '154723671',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '154723671',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '154723671',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '154723671',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '154723671',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '151859940',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42749361',
                                        variationId: '136507374',
                                      },
                                      {
                                        groupId: '42749362',
                                        variationId: '136507380',
                                      },
                                    ],
                                    price: 63900,
                                    addonCombinations: [
                                      {
                                        groupId: '114314259',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114314259',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114314259',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114314259',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114314259',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114314259',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151859942',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '114314270',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '114314270',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '114314270',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '114314270',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '114314270',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '114314270',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '114314270',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '114314270',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '114314270',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '114314270',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '114314270',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42749361',
                                        variationId: '136507375',
                                      },
                                      {
                                        groupId: '42749362',
                                        variationId: '136507378',
                                      },
                                    ],
                                    price: 45400,
                                    addonCombinations: [
                                      {
                                        groupId: '114314259',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114314259',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114314259',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114314259',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114314259',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114314259',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '154723671',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '154723671',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '154723671',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '154723671',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '154723671',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '154723671',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '154723671',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '154723671',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '154723671',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '154723671',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '151859940',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42749361',
                                        variationId: '136507375',
                                      },
                                      {
                                        groupId: '42749362',
                                        variationId: '136507381',
                                      },
                                    ],
                                    price: 73800,
                                    addonCombinations: [
                                      {
                                        groupId: '114314259',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114314259',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114314259',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114314259',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114314259',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114314259',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151859942',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '114314270',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '114314270',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '114314270',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '114314270',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '114314270',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '114314270',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '114314270',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '114314270',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '114314270',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '114314270',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '114314270',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42749361',
                                        variationId: '136507376',
                                      },
                                      {
                                        groupId: '42749362',
                                        variationId: '136507379',
                                      },
                                    ],
                                    price: 84900,
                                    addonCombinations: [
                                      {
                                        groupId: '114314259',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114314259',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114314259',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114314259',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114314259',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114314259',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151859943',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140435077',
                                        addonId: '114779798',
                                      },
                                      {
                                        groupId: '140435077',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140435077',
                                        addonId: '114779800',
                                      },
                                      {
                                        groupId: '140435077',
                                        addonId: '114779801',
                                      },
                                      {
                                        groupId: '140435077',
                                        addonId: '114779797',
                                      },
                                      {
                                        groupId: '140435077',
                                        addonId: '114779812',
                                      },
                                      {
                                        groupId: '140435077',
                                        addonId: '114779813',
                                      },
                                      {
                                        groupId: '140435077',
                                        addonId: '114779808',
                                      },
                                      {
                                        groupId: '140435077',
                                        addonId: '114779809',
                                      },
                                      {
                                        groupId: '140435077',
                                        addonId: '114779810',
                                      },
                                      {
                                        groupId: '140435077',
                                        addonId: '114779811',
                                      },
                                      {
                                        groupId: '140435077',
                                        addonId: '114779804',
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: '151859940',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '151859943',
                                  groupName: 'Extra-Cheese Topping',
                                  choices: [
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '140435077',
                                  groupName: 'Add More Veg Toppings,',
                                  choices: [
                                    {
                                      id: '114779798',
                                      name: 'Black Olives',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779800',
                                      name: 'Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779801',
                                      name: 'Herbed Veggies',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779797',
                                      name: 'Jalapeno',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779812',
                                      name: 'Paneer',
                                      price: 8500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779813',
                                      name: 'Mushroom',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779808',
                                      name: 'Onion',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779809',
                                      name: 'Red Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779810',
                                      name: 'Red Paprika',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779811',
                                      name: 'Sweet Corn',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779804',
                                      name: 'Tomato',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '154723671',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '114314259',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '114314270',
                                  groupName: 'Add. More Veg Toppings..',
                                  choices: [
                                    {
                                      id: '101250807',
                                      name: 'Black Olives',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250809',
                                      name: 'Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250810',
                                      name: 'Herbed Veggies',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250811',
                                      name: 'Jalapeno',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250812',
                                      name: 'Mushroom',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250813',
                                      name: 'Onion',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250814',
                                      name: 'Paneer',
                                      price: 7500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250815',
                                      name: 'Red Paprika',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250816',
                                      name: 'Red Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250817',
                                      name: 'Sweet Corn',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250818',
                                      name: 'Tomato',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 1',
                              },
                              defaultPrice: 37900,
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '2.3',
                                  ratingCount: '6 ratings',
                                  ratingCountV2: '6',
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '116290639',
                              name: 'Awesome American Cheesy',
                              category: 'Veg Pizza',
                              description:
                                'Serves 1 | Our divine peruvian flavoured cheesy sauce, topped with sweet corn, green capsicum, red paprika and 100% mozzarella cheese, finished with a generous drizzle of texas garlic sauce (PAN Per/Med-290 Kcal/100g | TnC-300 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: '9bd233c76aaf2d2745c5c07332609a8c',
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '43014605',
                                    name: 'Choose your Crust',
                                    variations: [
                                      {
                                        name: 'Pan',
                                        default: 1,
                                        id: '137186703',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '43014606',
                                          variationId: '137186706',
                                        },
                                      },
                                      {
                                        name: 'Stuffed Crust - Maxx',
                                        id: '137186704',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '43014606',
                                          variationId: '137186707',
                                        },
                                      },
                                      {
                                        name: 'Thin n Crispy',
                                        id: '137186705',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '43014606',
                                          variationId: '137186708',
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: '43014606',
                                    name: 'Choose Size',
                                    variations: [
                                      {
                                        name: 'Personal',
                                        price: 379,
                                        default: 1,
                                        id: '137186706',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Personal',
                                        price: 454,
                                        id: '137186707',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Large.',
                                        price: 849,
                                        id: '137186708',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium',
                                        price: 639,
                                        id: '137186709',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium',
                                        price: 738,
                                        id: '137186710',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '43014605',
                                        variationId: '137186703',
                                      },
                                      {
                                        groupId: '43014606',
                                        variationId: '137186706',
                                      },
                                    ],
                                    price: 37900,
                                    addonCombinations: [
                                      {
                                        groupId: '114314377',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114314377',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114314377',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114314377',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114314377',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114314377',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '156002635',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '156002635',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '156002635',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '156002635',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '156002635',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '156002635',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '156002635',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '156002635',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '156002635',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '156002635',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '151860619',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '43014605',
                                        variationId: '137186703',
                                      },
                                      {
                                        groupId: '43014606',
                                        variationId: '137186709',
                                      },
                                    ],
                                    price: 63900,
                                    addonCombinations: [
                                      {
                                        groupId: '114314377',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114314377',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114314377',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114314377',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114314377',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114314377',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151860622',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '114314389',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '114314389',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '114314389',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '114314389',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '114314389',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '114314389',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '114314389',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '114314389',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '114314389',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '114314389',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '114314389',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '43014605',
                                        variationId: '137186704',
                                      },
                                      {
                                        groupId: '43014606',
                                        variationId: '137186707',
                                      },
                                    ],
                                    price: 45400,
                                    addonCombinations: [
                                      {
                                        groupId: '114314377',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114314377',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114314377',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114314377',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114314377',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114314377',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '156002635',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '156002635',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '156002635',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '156002635',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '156002635',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '156002635',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '156002635',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '156002635',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '156002635',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '156002635',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '151860619',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '43014605',
                                        variationId: '137186704',
                                      },
                                      {
                                        groupId: '43014606',
                                        variationId: '137186710',
                                      },
                                    ],
                                    price: 73800,
                                    addonCombinations: [
                                      {
                                        groupId: '114314377',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114314377',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114314377',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114314377',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114314377',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114314377',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151860622',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '114314389',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '114314389',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '114314389',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '114314389',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '114314389',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '114314389',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '114314389',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '114314389',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '114314389',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '114314389',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '114314389',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '43014605',
                                        variationId: '137186705',
                                      },
                                      {
                                        groupId: '43014606',
                                        variationId: '137186708',
                                      },
                                    ],
                                    price: 84900,
                                    addonCombinations: [
                                      {
                                        groupId: '114314377',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114314377',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114314377',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114314377',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114314377',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114314377',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151860625',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140435249',
                                        addonId: '114779798',
                                      },
                                      {
                                        groupId: '140435249',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140435249',
                                        addonId: '114779800',
                                      },
                                      {
                                        groupId: '140435249',
                                        addonId: '114779801',
                                      },
                                      {
                                        groupId: '140435249',
                                        addonId: '114779797',
                                      },
                                      {
                                        groupId: '140435249',
                                        addonId: '114779812',
                                      },
                                      {
                                        groupId: '140435249',
                                        addonId: '114779813',
                                      },
                                      {
                                        groupId: '140435249',
                                        addonId: '114779808',
                                      },
                                      {
                                        groupId: '140435249',
                                        addonId: '114779809',
                                      },
                                      {
                                        groupId: '140435249',
                                        addonId: '114779810',
                                      },
                                      {
                                        groupId: '140435249',
                                        addonId: '114779811',
                                      },
                                      {
                                        groupId: '140435249',
                                        addonId: '114779804',
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: '151860619',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '151860625',
                                  groupName: 'Extra-Cheese Topping',
                                  choices: [
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '140435249',
                                  groupName: 'Add More Veg Toppings,',
                                  choices: [
                                    {
                                      id: '114779798',
                                      name: 'Black Olives',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779800',
                                      name: 'Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779801',
                                      name: 'Herbed Veggies',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779797',
                                      name: 'Jalapeno',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779812',
                                      name: 'Paneer',
                                      price: 8500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779813',
                                      name: 'Mushroom',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779808',
                                      name: 'Onion',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779809',
                                      name: 'Red Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779810',
                                      name: 'Red Paprika',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779811',
                                      name: 'Sweet Corn',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779804',
                                      name: 'Tomato',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '156002635',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '114314377',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '114314389',
                                  groupName: 'Add. More Veg Toppings..',
                                  choices: [
                                    {
                                      id: '101250807',
                                      name: 'Black Olives',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250809',
                                      name: 'Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250810',
                                      name: 'Herbed Veggies',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250811',
                                      name: 'Jalapeno',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250812',
                                      name: 'Mushroom',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250813',
                                      name: 'Onion',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250814',
                                      name: 'Paneer',
                                      price: 7500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250815',
                                      name: 'Red Paprika',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250816',
                                      name: 'Red Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250817',
                                      name: 'Sweet Corn',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250818',
                                      name: 'Tomato',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 1',
                              },
                              defaultPrice: 37900,
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '99013777',
                              name: 'Corn & Cheese',
                              category: 'Veg Pizza',
                              description:
                                'Serves 1 | A combination of juicy sweet corn & 100% mozzarella cheese with flavourful signature pan sauce (PAN Per/Med-320 Kcal/100g | TnC-304 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: 'ckbnw98n6tffy50wvuzm',
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '42507521',
                                    name: 'Choose your Crust',
                                    variations: [
                                      {
                                        name: 'Pan',
                                        default: 1,
                                        id: '135866424',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42507522',
                                          variationId: '135866427',
                                        },
                                      },
                                      {
                                        name: 'Stuffed Crust - Maxx',
                                        id: '135866425',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42507522',
                                          variationId: '135866428',
                                        },
                                      },
                                      {
                                        name: 'Thin n Crispy',
                                        id: '135866426',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42507522',
                                          variationId: '135866429',
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: '42507522',
                                    name: 'Choose Size',
                                    variations: [
                                      {
                                        name: 'Personal',
                                        price: 219,
                                        default: 1,
                                        id: '135866427',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Personal',
                                        price: 294,
                                        id: '135866428',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Large.',
                                        price: 575,
                                        id: '135866429',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium',
                                        price: 409,
                                        id: '135866430',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium',
                                        price: 508,
                                        id: '135866431',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '42507521',
                                        variationId: '135866424',
                                      },
                                      {
                                        groupId: '42507522',
                                        variationId: '135866427',
                                      },
                                    ],
                                    price: 21900,
                                    addonCombinations: [
                                      {
                                        groupId: '114312817',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312817',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312817',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312817',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312817',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312817',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '153658727',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '153658727',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '153658727',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '153658727',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '153658727',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '153658727',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '153658727',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '153658727',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '153658727',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '153658727',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '151859973',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42507521',
                                        variationId: '135866424',
                                      },
                                      {
                                        groupId: '42507522',
                                        variationId: '135866430',
                                      },
                                    ],
                                    price: 40900,
                                    addonCombinations: [
                                      {
                                        groupId: '114312817',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312817',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312817',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312817',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312817',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312817',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151859975',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '114312820',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '114312820',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '114312820',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '114312820',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '114312820',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '114312820',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '114312820',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '114312820',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '114312820',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '114312820',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '114312820',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42507521',
                                        variationId: '135866425',
                                      },
                                      {
                                        groupId: '42507522',
                                        variationId: '135866428',
                                      },
                                    ],
                                    price: 29400,
                                    addonCombinations: [
                                      {
                                        groupId: '114312817',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312817',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312817',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312817',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312817',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312817',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '153658727',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '153658727',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '153658727',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '153658727',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '153658727',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '153658727',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '153658727',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '153658727',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '153658727',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '153658727',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '151859973',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42507521',
                                        variationId: '135866425',
                                      },
                                      {
                                        groupId: '42507522',
                                        variationId: '135866431',
                                      },
                                    ],
                                    price: 50800,
                                    addonCombinations: [
                                      {
                                        groupId: '114312817',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312817',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312817',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312817',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312817',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312817',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151859975',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '114312820',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '114312820',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '114312820',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '114312820',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '114312820',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '114312820',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '114312820',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '114312820',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '114312820',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '114312820',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '114312820',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42507521',
                                        variationId: '135866426',
                                      },
                                      {
                                        groupId: '42507522',
                                        variationId: '135866429',
                                      },
                                    ],
                                    price: 57500,
                                    addonCombinations: [
                                      {
                                        groupId: '114312817',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312817',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312817',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312817',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312817',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312817',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151859976',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140435184',
                                        addonId: '114779798',
                                      },
                                      {
                                        groupId: '140435184',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140435184',
                                        addonId: '114779800',
                                      },
                                      {
                                        groupId: '140435184',
                                        addonId: '114779801',
                                      },
                                      {
                                        groupId: '140435184',
                                        addonId: '114779797',
                                      },
                                      {
                                        groupId: '140435184',
                                        addonId: '114779812',
                                      },
                                      {
                                        groupId: '140435184',
                                        addonId: '114779813',
                                      },
                                      {
                                        groupId: '140435184',
                                        addonId: '114779808',
                                      },
                                      {
                                        groupId: '140435184',
                                        addonId: '114779809',
                                      },
                                      {
                                        groupId: '140435184',
                                        addonId: '114779810',
                                      },
                                      {
                                        groupId: '140435184',
                                        addonId: '114779811',
                                      },
                                      {
                                        groupId: '140435184',
                                        addonId: '114779804',
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: '151859973',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '151859976',
                                  groupName: 'Extra-Cheese Topping',
                                  choices: [
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '140435184',
                                  groupName: 'Add More Veg Toppings,',
                                  choices: [
                                    {
                                      id: '114779798',
                                      name: 'Black Olives',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779800',
                                      name: 'Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779801',
                                      name: 'Herbed Veggies',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779797',
                                      name: 'Jalapeno',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779812',
                                      name: 'Paneer',
                                      price: 8500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779813',
                                      name: 'Mushroom',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779808',
                                      name: 'Onion',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779809',
                                      name: 'Red Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779810',
                                      name: 'Red Paprika',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779811',
                                      name: 'Sweet Corn',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779804',
                                      name: 'Tomato',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '153658727',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '114312817',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '114312820',
                                  groupName: 'Add. More Veg Toppings..',
                                  choices: [
                                    {
                                      id: '101250807',
                                      name: 'Black Olives',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250809',
                                      name: 'Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250810',
                                      name: 'Herbed Veggies',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250811',
                                      name: 'Jalapeno',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250812',
                                      name: 'Mushroom',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250813',
                                      name: 'Onion',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250814',
                                      name: 'Paneer',
                                      price: 7500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250815',
                                      name: 'Red Paprika',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250816',
                                      name: 'Red Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250817',
                                      name: 'Sweet Corn',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250818',
                                      name: 'Tomato',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 1',
                              },
                              defaultPrice: 21900,
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.3',
                                  ratingCount: '25 ratings',
                                  ratingCountV2: '25',
                                },
                              },
                              itemPriceStrikeOff: true,
                              imageBadges: [
                                {
                                  imageId: 'merch_bau/High%20Protein%201_1.png',
                                },
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '135324688',
                              name: 'Bold BBQ Veggies',
                              category: 'Veg Pizza',
                              description:
                                'Serves 1 | Our signature pan sauce, with BBQ Sauce drizzle, topped with mushroom, onion, green capsicum, & red paprika (PAN Per/Med-242 Kcal/100g | TnC-266 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: 'd4d697a58b3a97a46676fa8712e90ed7',
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '42853855',
                                    name: 'Choose your Crust',
                                    variations: [
                                      {
                                        name: 'Pan',
                                        default: 1,
                                        id: '136739474',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42853856',
                                          variationId: '136739477',
                                        },
                                      },
                                      {
                                        name: 'Stuffed Crust - Maxx',
                                        id: '136739475',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42853856',
                                          variationId: '136739478',
                                        },
                                      },
                                      {
                                        name: 'Thin n Crispy',
                                        id: '136739476',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42853856',
                                          variationId: '136739479',
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: '42853856',
                                    name: 'Choose Size',
                                    variations: [
                                      {
                                        name: 'Personal',
                                        price: 319,
                                        default: 1,
                                        id: '136739477',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Personal',
                                        price: 394,
                                        id: '136739478',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Large.',
                                        price: 749,
                                        id: '136739479',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium',
                                        price: 569,
                                        id: '136739480',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium',
                                        price: 668,
                                        id: '136739481',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '42853855',
                                        variationId: '136739474',
                                      },
                                      {
                                        groupId: '42853856',
                                        variationId: '136739477',
                                      },
                                    ],
                                    price: 31900,
                                    addonCombinations: [
                                      {
                                        groupId: '155261310',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '155261310',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '155261310',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '155261310',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '155261310',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '155261310',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '155261308',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '155261308',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '155261308',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '155261308',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '155261308',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '155261308',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '155261308',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '155261308',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '155261308',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '155261308',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '150924556',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42853855',
                                        variationId: '136739474',
                                      },
                                      {
                                        groupId: '42853856',
                                        variationId: '136739480',
                                      },
                                    ],
                                    price: 56900,
                                    addonCombinations: [
                                      {
                                        groupId: '155261310',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '155261310',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '155261310',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '155261310',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '155261310',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '155261310',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '150924557',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '150924559',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '150924559',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '150924559',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '150924559',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '150924559',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '150924559',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '150924559',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '150924559',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '150924559',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '150924559',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '150924559',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42853855',
                                        variationId: '136739475',
                                      },
                                      {
                                        groupId: '42853856',
                                        variationId: '136739478',
                                      },
                                    ],
                                    price: 39400,
                                    addonCombinations: [
                                      {
                                        groupId: '155261310',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '155261310',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '155261310',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '155261310',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '155261310',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '155261310',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '155261308',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '155261308',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '155261308',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '155261308',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '155261308',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '155261308',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '155261308',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '155261308',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '155261308',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '155261308',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '150924556',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42853855',
                                        variationId: '136739475',
                                      },
                                      {
                                        groupId: '42853856',
                                        variationId: '136739481',
                                      },
                                    ],
                                    price: 66800,
                                    addonCombinations: [
                                      {
                                        groupId: '155261310',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '155261310',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '155261310',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '155261310',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '155261310',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '155261310',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '150924557',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '150924559',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '150924559',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '150924559',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '150924559',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '150924559',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '150924559',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '150924559',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '150924559',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '150924559',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '150924559',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '150924559',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42853855',
                                        variationId: '136739476',
                                      },
                                      {
                                        groupId: '42853856',
                                        variationId: '136739479',
                                      },
                                    ],
                                    price: 74900,
                                    addonCombinations: [
                                      {
                                        groupId: '155261310',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '155261310',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '155261310',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '155261310',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '155261310',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '155261310',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '150924558',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140230000',
                                        addonId: '114779798',
                                      },
                                      {
                                        groupId: '140230000',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140230000',
                                        addonId: '114779800',
                                      },
                                      {
                                        groupId: '140230000',
                                        addonId: '114779801',
                                      },
                                      {
                                        groupId: '140230000',
                                        addonId: '114779797',
                                      },
                                      {
                                        groupId: '140230000',
                                        addonId: '114779812',
                                      },
                                      {
                                        groupId: '140230000',
                                        addonId: '114779813',
                                      },
                                      {
                                        groupId: '140230000',
                                        addonId: '114779808',
                                      },
                                      {
                                        groupId: '140230000',
                                        addonId: '114779809',
                                      },
                                      {
                                        groupId: '140230000',
                                        addonId: '114779810',
                                      },
                                      {
                                        groupId: '140230000',
                                        addonId: '114779811',
                                      },
                                      {
                                        groupId: '140230000',
                                        addonId: '114779804',
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: '150924556',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '150924558',
                                  groupName: 'Extra-Cheese Topping',
                                  choices: [
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '140230000',
                                  groupName: 'Add More Veg Toppings,',
                                  choices: [
                                    {
                                      id: '114779798',
                                      name: 'Black Olives',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779800',
                                      name: 'Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779801',
                                      name: 'Herbed Veggies',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779797',
                                      name: 'Jalapeno',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779812',
                                      name: 'Paneer',
                                      price: 8500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779813',
                                      name: 'Mushroom',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779808',
                                      name: 'Onion',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779809',
                                      name: 'Red Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779810',
                                      name: 'Red Paprika',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779811',
                                      name: 'Sweet Corn',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779804',
                                      name: 'Tomato',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '155261308',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '155261310',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '150924559',
                                  groupName: 'Add. More Veg Toppings..',
                                  choices: [
                                    {
                                      id: '101250807',
                                      name: 'Black Olives',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250809',
                                      name: 'Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250810',
                                      name: 'Herbed Veggies',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250811',
                                      name: 'Jalapeno',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250812',
                                      name: 'Mushroom',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250813',
                                      name: 'Onion',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250814',
                                      name: 'Paneer',
                                      price: 7500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250815',
                                      name: 'Red Paprika',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250816',
                                      name: 'Red Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250817',
                                      name: 'Sweet Corn',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250818',
                                      name: 'Tomato',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 1',
                              },
                              defaultPrice: 31900,
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '116290626',
                              name: 'Schezwan Margherita',
                              category: 'Veg Pizza',
                              description:
                                'Serves 2 | Your very own margherita, now with a spicy twist! Loaded with our signature spicy schezwan sauce & 100% mozzarella cheese (PAN Per/Med-300 Kcal/100g | TnC-309 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: '0e7df98b7cffdb0b88856464014ad2ff',
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '42810007',
                                    name: 'Choose your Crust',
                                    variations: [
                                      {
                                        name: 'Pan',
                                        default: 1,
                                        id: '136640553',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42810008',
                                          variationId: '136640556',
                                        },
                                      },
                                      {
                                        name: 'Stuffed Crust - Maxx',
                                        id: '136640554',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42810008',
                                          variationId: '136640557',
                                        },
                                      },
                                      {
                                        name: 'Thin n Crispy',
                                        id: '136640555',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42810008',
                                          variationId: '136640558',
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: '42810008',
                                    name: 'Choose Size (Pan)',
                                    variations: [
                                      {
                                        name: 'Personal,',
                                        price: 219,
                                        default: 1,
                                        id: '136640556',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Personal',
                                        price: 294,
                                        id: '136640557',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Large.',
                                        price: 575,
                                        id: '136640558',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium,',
                                        price: 409,
                                        id: '136640559',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium',
                                        price: 508,
                                        id: '136640560',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '42810007',
                                        variationId: '136640553',
                                      },
                                      {
                                        groupId: '42810008',
                                        variationId: '136640556',
                                      },
                                    ],
                                    price: 21900,
                                    addonCombinations: [
                                      {
                                        groupId: '114314136',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114314136',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114314136',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114314136',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114314136',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114314136',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '154990476',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '154990476',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '154990476',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '154990476',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '154990476',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '154990476',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '154990476',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '154990476',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '154990476',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '154990476',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '150924588',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42810007',
                                        variationId: '136640553',
                                      },
                                      {
                                        groupId: '42810008',
                                        variationId: '136640559',
                                      },
                                    ],
                                    price: 40900,
                                    addonCombinations: [
                                      {
                                        groupId: '114314136',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114314136',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114314136',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114314136',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114314136',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114314136',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '150924589',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '114314141',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '114314141',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '114314141',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '114314141',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '114314141',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '114314141',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '114314141',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '114314141',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '114314141',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '114314141',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '114314141',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42810007',
                                        variationId: '136640554',
                                      },
                                      {
                                        groupId: '42810008',
                                        variationId: '136640557',
                                      },
                                    ],
                                    price: 29400,
                                    addonCombinations: [
                                      {
                                        groupId: '114314136',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114314136',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114314136',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114314136',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114314136',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114314136',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '154990476',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '154990476',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '154990476',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '154990476',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '154990476',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '154990476',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '154990476',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '154990476',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '154990476',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '154990476',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '150924588',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42810007',
                                        variationId: '136640554',
                                      },
                                      {
                                        groupId: '42810008',
                                        variationId: '136640560',
                                      },
                                    ],
                                    price: 50800,
                                    addonCombinations: [
                                      {
                                        groupId: '114314136',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114314136',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114314136',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114314136',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114314136',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114314136',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '150924589',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '114314141',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '114314141',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '114314141',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '114314141',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '114314141',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '114314141',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '114314141',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '114314141',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '114314141',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '114314141',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '114314141',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42810007',
                                        variationId: '136640555',
                                      },
                                      {
                                        groupId: '42810008',
                                        variationId: '136640558',
                                      },
                                    ],
                                    price: 57500,
                                    addonCombinations: [
                                      {
                                        groupId: '114314136',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114314136',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114314136',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114314136',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114314136',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114314136',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '150924590',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140435055',
                                        addonId: '114779798',
                                      },
                                      {
                                        groupId: '140435055',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140435055',
                                        addonId: '114779800',
                                      },
                                      {
                                        groupId: '140435055',
                                        addonId: '114779801',
                                      },
                                      {
                                        groupId: '140435055',
                                        addonId: '114779797',
                                      },
                                      {
                                        groupId: '140435055',
                                        addonId: '114779812',
                                      },
                                      {
                                        groupId: '140435055',
                                        addonId: '114779813',
                                      },
                                      {
                                        groupId: '140435055',
                                        addonId: '114779808',
                                      },
                                      {
                                        groupId: '140435055',
                                        addonId: '114779809',
                                      },
                                      {
                                        groupId: '140435055',
                                        addonId: '114779810',
                                      },
                                      {
                                        groupId: '140435055',
                                        addonId: '114779811',
                                      },
                                      {
                                        groupId: '140435055',
                                        addonId: '114779804',
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: '150924588',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '150924590',
                                  groupName: 'Extra-Cheese Topping',
                                  choices: [
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '140435055',
                                  groupName: 'Add More Veg Toppings,',
                                  choices: [
                                    {
                                      id: '114779798',
                                      name: 'Black Olives',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779800',
                                      name: 'Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779801',
                                      name: 'Herbed Veggies',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779797',
                                      name: 'Jalapeno',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779812',
                                      name: 'Paneer',
                                      price: 8500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779813',
                                      name: 'Mushroom',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779808',
                                      name: 'Onion',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779809',
                                      name: 'Red Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779810',
                                      name: 'Red Paprika',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779811',
                                      name: 'Sweet Corn',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779804',
                                      name: 'Tomato',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '154990476',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '114314136',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '114314141',
                                  groupName: 'Add. More Veg Toppings..',
                                  choices: [
                                    {
                                      id: '101250807',
                                      name: 'Black Olives',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250809',
                                      name: 'Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250810',
                                      name: 'Herbed Veggies',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250811',
                                      name: 'Jalapeno',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250812',
                                      name: 'Mushroom',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250813',
                                      name: 'Onion',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250814',
                                      name: 'Paneer',
                                      price: 7500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250815',
                                      name: 'Red Paprika',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250816',
                                      name: 'Red Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250817',
                                      name: 'Sweet Corn',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250818',
                                      name: 'Tomato',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 2',
                              },
                              defaultPrice: 21900,
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.0',
                                  ratingCount: '6 ratings',
                                  ratingCountV2: '6',
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '99013785',
                              name: 'Veggie Feast',
                              category: 'Veg Pizza',
                              description:
                                'Serves 1 | Herbed onion and green capsicum, juicy sweet corn & 100% mozzarella cheese with flavourful pan sauce (PAN Per/Med-269 Kcal/100g | TnC-274 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: 'cbye9x7wxeopwqvenn7g',
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '42853811',
                                    name: 'Choose your Crust',
                                    variations: [
                                      {
                                        name: 'Pan',
                                        default: 1,
                                        id: '136739296',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42853812',
                                          variationId: '136739299',
                                        },
                                      },
                                      {
                                        name: 'Stuffed Crust - Maxx',
                                        id: '136739297',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42853812',
                                          variationId: '136739300',
                                        },
                                      },
                                      {
                                        name: 'Thin n Crispy',
                                        id: '136739298',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42853812',
                                          variationId: '136739301',
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: '42853812',
                                    name: 'Choose Size',
                                    variations: [
                                      {
                                        name: 'Personal',
                                        price: 259,
                                        default: 1,
                                        id: '136739299',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Personal',
                                        price: 334,
                                        id: '136739300',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Large.',
                                        price: 649,
                                        id: '136739301',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium',
                                        price: 489,
                                        id: '136739302',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium',
                                        price: 588,
                                        id: '136739303',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '42853811',
                                        variationId: '136739296',
                                      },
                                      {
                                        groupId: '42853812',
                                        variationId: '136739299',
                                      },
                                    ],
                                    price: 25900,
                                    addonCombinations: [
                                      {
                                        groupId: '114312921',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312921',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312921',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312921',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312921',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312921',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '155261269',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '155261269',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '155261269',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '155261269',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '155261269',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '155261269',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '155261269',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '155261269',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '155261269',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '155261269',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '151860026',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42853811',
                                        variationId: '136739296',
                                      },
                                      {
                                        groupId: '42853812',
                                        variationId: '136739302',
                                      },
                                    ],
                                    price: 48900,
                                    addonCombinations: [
                                      {
                                        groupId: '114312921',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312921',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312921',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312921',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312921',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312921',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151860027',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '114312924',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '114312924',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '114312924',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '114312924',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '114312924',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '114312924',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '114312924',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '114312924',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '114312924',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '114312924',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '114312924',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42853811',
                                        variationId: '136739297',
                                      },
                                      {
                                        groupId: '42853812',
                                        variationId: '136739300',
                                      },
                                    ],
                                    price: 33400,
                                    addonCombinations: [
                                      {
                                        groupId: '114312921',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312921',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312921',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312921',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312921',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312921',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '155261269',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '155261269',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '155261269',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '155261269',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '155261269',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '155261269',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '155261269',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '155261269',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '155261269',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '155261269',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '151860026',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42853811',
                                        variationId: '136739297',
                                      },
                                      {
                                        groupId: '42853812',
                                        variationId: '136739303',
                                      },
                                    ],
                                    price: 58800,
                                    addonCombinations: [
                                      {
                                        groupId: '114312921',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312921',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312921',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312921',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312921',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312921',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151860027',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '114312924',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '114312924',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '114312924',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '114312924',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '114312924',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '114312924',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '114312924',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '114312924',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '114312924',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '114312924',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '114312924',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42853811',
                                        variationId: '136739298',
                                      },
                                      {
                                        groupId: '42853812',
                                        variationId: '136739301',
                                      },
                                    ],
                                    price: 64900,
                                    addonCombinations: [
                                      {
                                        groupId: '114312921',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312921',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312921',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312921',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312921',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312921',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151860029',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140435042',
                                        addonId: '114779798',
                                      },
                                      {
                                        groupId: '140435042',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140435042',
                                        addonId: '114779800',
                                      },
                                      {
                                        groupId: '140435042',
                                        addonId: '114779801',
                                      },
                                      {
                                        groupId: '140435042',
                                        addonId: '114779797',
                                      },
                                      {
                                        groupId: '140435042',
                                        addonId: '114779812',
                                      },
                                      {
                                        groupId: '140435042',
                                        addonId: '114779813',
                                      },
                                      {
                                        groupId: '140435042',
                                        addonId: '114779808',
                                      },
                                      {
                                        groupId: '140435042',
                                        addonId: '114779809',
                                      },
                                      {
                                        groupId: '140435042',
                                        addonId: '114779810',
                                      },
                                      {
                                        groupId: '140435042',
                                        addonId: '114779811',
                                      },
                                      {
                                        groupId: '140435042',
                                        addonId: '114779804',
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: '151860026',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '151860029',
                                  groupName: 'Extra-Cheese Topping',
                                  choices: [
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '140435042',
                                  groupName: 'Add More Veg Toppings,',
                                  choices: [
                                    {
                                      id: '114779798',
                                      name: 'Black Olives',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779800',
                                      name: 'Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779801',
                                      name: 'Herbed Veggies',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779797',
                                      name: 'Jalapeno',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779812',
                                      name: 'Paneer',
                                      price: 8500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779813',
                                      name: 'Mushroom',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779808',
                                      name: 'Onion',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779809',
                                      name: 'Red Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779810',
                                      name: 'Red Paprika',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779811',
                                      name: 'Sweet Corn',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779804',
                                      name: 'Tomato',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '155261269',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '114312921',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '114312924',
                                  groupName: 'Add. More Veg Toppings..',
                                  choices: [
                                    {
                                      id: '101250807',
                                      name: 'Black Olives',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250809',
                                      name: 'Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250810',
                                      name: 'Herbed Veggies',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250811',
                                      name: 'Jalapeno',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250812',
                                      name: 'Mushroom',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250813',
                                      name: 'Onion',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250814',
                                      name: 'Paneer',
                                      price: 7500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250815',
                                      name: 'Red Paprika',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250816',
                                      name: 'Red Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250817',
                                      name: 'Sweet Corn',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250818',
                                      name: 'Tomato',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 1',
                              },
                              defaultPrice: 25900,
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.8',
                                  ratingCount: '38 ratings',
                                  ratingCountV2: '38',
                                },
                              },
                              itemPriceStrikeOff: true,
                              imageBadges: [
                                {
                                  imageId: 'merch_bau/High%20Protein%201_1.png',
                                },
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '114719530',
                              name: 'Margherita',
                              category: 'Veg Pizza',
                              description:
                                'Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there! (PAN Per/Med-292 Kcal/100g | TnC-293 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: 'dpventcrozvfni0lqb10',
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '42853791',
                                    name: 'Choose your Crust',
                                    variations: [
                                      {
                                        name: 'Pan',
                                        default: 1,
                                        id: '136739230',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42853793',
                                          variationId: '136739236',
                                        },
                                      },
                                      {
                                        name: 'Stuffed Crust - Maxx',
                                        id: '136739231',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42853793',
                                          variationId: '136739238',
                                        },
                                      },
                                      {
                                        name: 'Thin n Crispy',
                                        id: '136739233',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '42853793',
                                          variationId: '136739240',
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: '42853793',
                                    name: 'Choose Size',
                                    variations: [
                                      {
                                        name: 'Personal',
                                        price: 169,
                                        default: 1,
                                        id: '136739236',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Personal',
                                        price: 394,
                                        id: '136739238',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Large.',
                                        price: 479,
                                        id: '136739240',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium',
                                        price: 329,
                                        id: '136739241',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium',
                                        price: 668,
                                        id: '136739242',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '42853791',
                                        variationId: '136739230',
                                      },
                                      {
                                        groupId: '42853793',
                                        variationId: '136739236',
                                      },
                                    ],
                                    price: 16900,
                                    addonCombinations: [
                                      {
                                        groupId: '114312844',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312844',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312844',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312844',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312844',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312844',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '155261242',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '155261242',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '155261242',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '155261242',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '155261242',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '155261242',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '155261242',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '155261242',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '155261242',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '155261242',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '151860053',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42853791',
                                        variationId: '136739230',
                                      },
                                      {
                                        groupId: '42853793',
                                        variationId: '136739241',
                                      },
                                    ],
                                    price: 32900,
                                    addonCombinations: [
                                      {
                                        groupId: '114312844',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312844',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312844',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312844',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312844',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312844',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151860054',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '114312848',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '114312848',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '114312848',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '114312848',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '114312848',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '114312848',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '114312848',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '114312848',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '114312848',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '114312848',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '114312848',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42853791',
                                        variationId: '136739231',
                                      },
                                      {
                                        groupId: '42853793',
                                        variationId: '136739238',
                                      },
                                    ],
                                    price: 39400,
                                    addonCombinations: [
                                      {
                                        groupId: '114312844',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312844',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312844',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312844',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312844',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312844',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '155261242',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '155261242',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '155261242',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '155261242',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '155261242',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '155261242',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '155261242',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '155261242',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '155261242',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '155261242',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '151860053',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42853791',
                                        variationId: '136739231',
                                      },
                                      {
                                        groupId: '42853793',
                                        variationId: '136739242',
                                      },
                                    ],
                                    price: 66800,
                                    addonCombinations: [
                                      {
                                        groupId: '114312844',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312844',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312844',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312844',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312844',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312844',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151860054',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '114312848',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '114312848',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '114312848',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '114312848',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '114312848',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '114312848',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '114312848',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '114312848',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '114312848',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '114312848',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '114312848',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '42853791',
                                        variationId: '136739233',
                                      },
                                      {
                                        groupId: '42853793',
                                        variationId: '136739240',
                                      },
                                    ],
                                    price: 47900,
                                    addonCombinations: [
                                      {
                                        groupId: '114312844',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312844',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312844',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312844',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312844',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312844',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151860056',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140435035',
                                        addonId: '114779798',
                                      },
                                      {
                                        groupId: '140435035',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140435035',
                                        addonId: '114779800',
                                      },
                                      {
                                        groupId: '140435035',
                                        addonId: '114779801',
                                      },
                                      {
                                        groupId: '140435035',
                                        addonId: '114779797',
                                      },
                                      {
                                        groupId: '140435035',
                                        addonId: '114779812',
                                      },
                                      {
                                        groupId: '140435035',
                                        addonId: '114779813',
                                      },
                                      {
                                        groupId: '140435035',
                                        addonId: '114779808',
                                      },
                                      {
                                        groupId: '140435035',
                                        addonId: '114779809',
                                      },
                                      {
                                        groupId: '140435035',
                                        addonId: '114779810',
                                      },
                                      {
                                        groupId: '140435035',
                                        addonId: '114779811',
                                      },
                                      {
                                        groupId: '140435035',
                                        addonId: '114779804',
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: '151860053',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '151860056',
                                  groupName: 'Extra-Cheese Topping',
                                  choices: [
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '140435035',
                                  groupName: 'Add More Veg Toppings,',
                                  choices: [
                                    {
                                      id: '114779798',
                                      name: 'Black Olives',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779800',
                                      name: 'Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779801',
                                      name: 'Herbed Veggies',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779797',
                                      name: 'Jalapeno',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779812',
                                      name: 'Paneer',
                                      price: 8500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779813',
                                      name: 'Mushroom',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779808',
                                      name: 'Onion',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779809',
                                      name: 'Red Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779810',
                                      name: 'Red Paprika',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779811',
                                      name: 'Sweet Corn',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779804',
                                      name: 'Tomato',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '155261242',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '114312844',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '114312848',
                                  groupName: 'Add. More Veg Toppings..',
                                  choices: [
                                    {
                                      id: '101250807',
                                      name: 'Black Olives',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250809',
                                      name: 'Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250810',
                                      name: 'Herbed Veggies',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250811',
                                      name: 'Jalapeno',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250812',
                                      name: 'Mushroom',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250813',
                                      name: 'Onion',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250814',
                                      name: 'Paneer',
                                      price: 7500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250815',
                                      name: 'Red Paprika',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250816',
                                      name: 'Red Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250817',
                                      name: 'Sweet Corn',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250818',
                                      name: 'Tomato',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              defaultPrice: 16900,
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.1',
                                  ratingCount: '68 ratings',
                                  ratingCountV2: '68',
                                },
                              },
                              itemPriceStrikeOff: true,
                              imageBadges: [
                                {
                                  imageId: 'merch_bau/High%20Protein%201_1.png',
                                },
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '113808181',
                              name: 'Spiced Paneer',
                              category: 'Veg Pizza',
                              description:
                                'Serves 1 | Spiced paneer, crunchy onion, juicy tomato & 100% mozzarella cheese, with our classic pan sauce (PAN Per/Med-276 Kcal/100g | TnC-283 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.',
                              imageId: 'a89yqx09ppwlecyqterp',
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '43014645',
                                    name: 'Choose your Crust',
                                    variations: [
                                      {
                                        name: 'Pan',
                                        default: 1,
                                        id: '137186887',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '43014647',
                                          variationId: '137186890',
                                        },
                                      },
                                      {
                                        name: 'Stuffed Crust - Maxx',
                                        id: '137186888',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '43014647',
                                          variationId: '137186892',
                                        },
                                      },
                                      {
                                        name: 'Thin n Crispy',
                                        id: '137186889',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: '43014647',
                                          variationId: '137186894',
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: '43014647',
                                    name: 'Choose Size',
                                    variations: [
                                      {
                                        name: 'Personal',
                                        price: 259,
                                        default: 1,
                                        id: '137186890',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Personal',
                                        price: 334,
                                        id: '137186892',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Large.',
                                        price: 649,
                                        id: '137186894',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium',
                                        price: 489,
                                        id: '137186896',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: 'Medium',
                                        price: 588,
                                        id: '137186898',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '43014645',
                                        variationId: '137186887',
                                      },
                                      {
                                        groupId: '43014647',
                                        variationId: '137186890',
                                      },
                                    ],
                                    price: 25900,
                                    addonCombinations: [
                                      {
                                        groupId: '114312893',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312893',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312893',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312893',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312893',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312893',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '156002672',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '156002672',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '156002672',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '156002672',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '156002672',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '156002672',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '156002672',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '156002672',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '156002672',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '156002672',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '151860643',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '43014645',
                                        variationId: '137186887',
                                      },
                                      {
                                        groupId: '43014647',
                                        variationId: '137186896',
                                      },
                                    ],
                                    price: 48900,
                                    addonCombinations: [
                                      {
                                        groupId: '114312893',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312893',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312893',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312893',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312893',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312893',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151860645',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '114312898',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '114312898',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '114312898',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '114312898',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '114312898',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '114312898',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '114312898',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '114312898',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '114312898',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '114312898',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '114312898',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '43014645',
                                        variationId: '137186888',
                                      },
                                      {
                                        groupId: '43014647',
                                        variationId: '137186892',
                                      },
                                    ],
                                    price: 33400,
                                    addonCombinations: [
                                      {
                                        groupId: '114312893',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312893',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312893',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312893',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312893',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312893',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '156002672',
                                        addonId: '101250787',
                                      },
                                      {
                                        groupId: '156002672',
                                        addonId: '101250789',
                                      },
                                      {
                                        groupId: '156002672',
                                        addonId: '101250791',
                                      },
                                      {
                                        groupId: '156002672',
                                        addonId: '101250792',
                                      },
                                      {
                                        groupId: '156002672',
                                        addonId: '101250793',
                                      },
                                      {
                                        groupId: '156002672',
                                        addonId: '101250794',
                                      },
                                      {
                                        groupId: '156002672',
                                        addonId: '101250795',
                                      },
                                      {
                                        groupId: '156002672',
                                        addonId: '101250796',
                                      },
                                      {
                                        groupId: '156002672',
                                        addonId: '101250797',
                                      },
                                      {
                                        groupId: '156002672',
                                        addonId: '101250798',
                                      },
                                      {
                                        groupId: '151860643',
                                        addonId: '101250786',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '43014645',
                                        variationId: '137186888',
                                      },
                                      {
                                        groupId: '43014647',
                                        variationId: '137186898',
                                      },
                                    ],
                                    price: 58800,
                                    addonCombinations: [
                                      {
                                        groupId: '114312893',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312893',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312893',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312893',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312893',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312893',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151860645',
                                        addonId: '117361052',
                                      },
                                      {
                                        groupId: '114312898',
                                        addonId: '101250807',
                                      },
                                      {
                                        groupId: '114312898',
                                        addonId: '101250809',
                                      },
                                      {
                                        groupId: '114312898',
                                        addonId: '101250810',
                                      },
                                      {
                                        groupId: '114312898',
                                        addonId: '101250811',
                                      },
                                      {
                                        groupId: '114312898',
                                        addonId: '101250812',
                                      },
                                      {
                                        groupId: '114312898',
                                        addonId: '101250813',
                                      },
                                      {
                                        groupId: '114312898',
                                        addonId: '101250814',
                                      },
                                      {
                                        groupId: '114312898',
                                        addonId: '101250815',
                                      },
                                      {
                                        groupId: '114312898',
                                        addonId: '101250816',
                                      },
                                      {
                                        groupId: '114312898',
                                        addonId: '101250817',
                                      },
                                      {
                                        groupId: '114312898',
                                        addonId: '101250818',
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '43014645',
                                        variationId: '137186889',
                                      },
                                      {
                                        groupId: '43014647',
                                        variationId: '137186894',
                                      },
                                    ],
                                    price: 64900,
                                    addonCombinations: [
                                      {
                                        groupId: '114312893',
                                        addonId: '101250781',
                                      },
                                      {
                                        groupId: '114312893',
                                        addonId: '115289960',
                                      },
                                      {
                                        groupId: '114312893',
                                        addonId: '101250782',
                                      },
                                      {
                                        groupId: '114312893',
                                        addonId: '101250784',
                                      },
                                      {
                                        groupId: '114312893',
                                        addonId: '101250785',
                                      },
                                      {
                                        groupId: '114312893',
                                        addonId: '101250780',
                                      },
                                      {
                                        groupId: '151860647',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140435125',
                                        addonId: '114779798',
                                      },
                                      {
                                        groupId: '140435125',
                                        addonId: '114779799',
                                      },
                                      {
                                        groupId: '140435125',
                                        addonId: '114779800',
                                      },
                                      {
                                        groupId: '140435125',
                                        addonId: '114779801',
                                      },
                                      {
                                        groupId: '140435125',
                                        addonId: '114779797',
                                      },
                                      {
                                        groupId: '140435125',
                                        addonId: '114779812',
                                      },
                                      {
                                        groupId: '140435125',
                                        addonId: '114779813',
                                      },
                                      {
                                        groupId: '140435125',
                                        addonId: '114779808',
                                      },
                                      {
                                        groupId: '140435125',
                                        addonId: '114779809',
                                      },
                                      {
                                        groupId: '140435125',
                                        addonId: '114779810',
                                      },
                                      {
                                        groupId: '140435125',
                                        addonId: '114779811',
                                      },
                                      {
                                        groupId: '140435125',
                                        addonId: '114779804',
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: '151860643',
                                  groupName: 'Extra Cheese Topping',
                                  choices: [
                                    {
                                      id: '101250786',
                                      name: 'Cheese',
                                      price: 6500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '151860647',
                                  groupName: 'Extra-Cheese Topping',
                                  choices: [
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '140435125',
                                  groupName: 'Add More Veg Toppings,',
                                  choices: [
                                    {
                                      id: '114779798',
                                      name: 'Black Olives',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779799',
                                      name: 'Cheese',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779800',
                                      name: 'Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779801',
                                      name: 'Herbed Veggies',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779797',
                                      name: 'Jalapeno',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779812',
                                      name: 'Paneer',
                                      price: 8500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779813',
                                      name: 'Mushroom',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779808',
                                      name: 'Onion',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779809',
                                      name: 'Red Capsicum',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779810',
                                      name: 'Red Paprika',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779811',
                                      name: 'Sweet Corn',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '114779804',
                                      name: 'Tomato',
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '156002672',
                                  groupName: 'Add More Veg Toppings',
                                  choices: [
                                    {
                                      id: '101250787',
                                      name: 'Black Olives',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250789',
                                      name: 'Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250791',
                                      name: 'Jalapeno',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250792',
                                      name: 'Mushroom',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250793',
                                      name: 'Onion',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250794',
                                      name: 'Paneer',
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250795',
                                      name: 'Red Paprika',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250796',
                                      name: 'Red Capsicum',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250797',
                                      name: 'Sweet Corn',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250798',
                                      name: 'Tomato',
                                      price: 4500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '114312893',
                                  groupName: 'Make it a Meal',
                                  choices: [
                                    {
                                      id: '101250781',
                                      name: 'Classic BreadStix : Flat Rs 20 Off',
                                      price: 9900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '115289960',
                                      name: 'Loaded BreadStix : Flat Rs 20 Off',
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250782',
                                      name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250784',
                                      name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250785',
                                      name: 'Choco Volcano : Flat Rs 20 Off',
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250780',
                                      name: 'Pepsi Pet Bottle',
                                      price: 5700,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: '114312898',
                                  groupName: 'Add. More Veg Toppings..',
                                  choices: [
                                    {
                                      id: '101250807',
                                      name: 'Black Olives',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250809',
                                      name: 'Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250810',
                                      name: 'Herbed Veggies',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250811',
                                      name: 'Jalapeno',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250812',
                                      name: 'Mushroom',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250813',
                                      name: 'Onion',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250814',
                                      name: 'Paneer',
                                      price: 7500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250815',
                                      name: 'Red Paprika',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250816',
                                      name: 'Red Capsicum',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250817',
                                      name: 'Sweet Corn',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '101250818',
                                      name: 'Tomato',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                portionSize: 'Serves 1',
                              },
                              defaultPrice: 25900,
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '2.7',
                                  ratingCount: '12 ratings',
                                  ratingCountV2: '12',
                                },
                              },
                              itemPriceStrikeOff: true,
                              imageBadges: [
                                {
                                  imageId: 'merch_bau/High%20Protein%201_1.png',
                                },
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image: 'z0c4xpovma1qtmu4tlls',
                      categoryId: '40662983',
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo',
                      type: 'FSSAI',
                      imageId: 'fssai_final_edss9i',
                      text: ['License No. 10822005001276'],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress',
                      name: 'Pizza Hut',
                      area: 'Sector 69',
                      completeAddress:
                        'Pizza Hut at Ground Floor, M3M Broadway, Sector- 71, Gurgaon, Gurgaon, Gurugram, Haryana, 122018',
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    isQCLink: false,
  },
  tid: 'de4aadfa-72e3-4129-9a4c-44d2c87f1395',
  sid: 'j2pf7347-aad8-40f4-9107-0fabde2bba65',
  deviceId: 'e80e6df4-d588-0c07-e1c9-f2a0fe432555',
  csrfToken: 'LBwhdJLjAfFn-E9NTVq1l89DB-GgslqCRTOfetbw',
};

const collection = a.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;

// Ignore first and last two elements
collection.slice(1, -2).forEach((item) => {
  if ('categories' in item.card.card) {
    console.log('a');
    const x = item.card.card.categories.itemCards;
    x.forEach((menuItem) => {
      const { name, description } = menuItem.card.info;
      let price;
      if ('price' in menuItem.card.info) {
        price = menuItem.card.info.price;
      } else if ('defaultPrice' in menuItem.card.info) {
        price = menuItem.card.info.defaultPrice;
      } else {
        price = 'Price cannot be determined';
      }
      console.log(name, description, price);
    });
  } else if ('itemCards' in item.card.card) {
    // Fixed key from 'itemcards' to 'itemCards'
    console.log('b');
    const x = item.card.card.itemCards;
    x.forEach((menuItem) => {
      const { name, description } = menuItem.card.info;
      let price;
      if ('price' in menuItem.card.info) {
        price = menuItem.card.info.price;
      } else if ('defaultPrice' in menuItem.card.info) {
        price = menuItem.card.info.defaultPrice;
      } else {
        price = 'Price cannot be determined';
      }
      console.log(name, description, price);
    });
  }
});
