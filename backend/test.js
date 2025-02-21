const a = {
  data: {
    cards: [
      { card: {} },
      {
        card: {
          card: {
            '@type': 'type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget',
            header: {
              title: 'Top restaurant chains in Gurgaon',
              action: {},
              headerStyling: {
                padding: {
                  left: 16,
                  top: 28,
                  bottom: 18,
                },
              },
            },
            layout: {
              rows: 1,
              columns: 20,
              horizontalScrollEnabled: true,
              itemSpacing: 32,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 16,
                  right: 12,
                  bottom: 12,
                },
              },
              scrollBar: {
                scrollThumbColor: '#E46D47',
                scrollTrackColor: '#02060C',
                width: 54,
                height: 4,
                scrollStyling: {
                  padding: {
                    top: 6,
                    bottom: 24,
                  },
                },
              },
              widgetTheme: {
                defaultMode: {
                  backgroundColour: '#1B3028',
                  theme: 'THEME_TYPE_DARK',
                },
                darkMode: {
                  backgroundColour: '#1B3028',
                  theme: 'THEME_TYPE_DARK',
                },
              },
            },
            id: 'top_brands_for_you',
            gridElements: {
              infoWithStyle: {
                '@type':
                  'type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle',
                restaurants: [
                  {
                    info: {
                      id: '347900',
                      name: 'Subway',
                      cloudinaryImageId:
                        'RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/4afb3c1e-f1fc-415b-af94-61ef49a26c0b_347900.JPG',
                      locality: 'Airia Mall',
                      areaName: 'Sector 68',
                      costForTwo: '₹250 for two',
                      cuisines: ['sandwich', 'Salads', 'wrap', 'Healthy Food'],
                      avgRating: 4.2,
                      parentId: '2',
                      avgRatingString: '4.2',
                      totalRatingsString: '327',
                      sla: {
                        deliveryTime: 65,
                        lastMileTravel: 8.6,
                        serviceability: 'SERVICEABLE',
                        slaString: '60-65 mins',
                        lastMileTravelString: '8.6 km',
                        iconType: 'ICON_TYPE_EMPTY',
                      },
                      availability: {
                        nextCloseTime: '2025-02-20 21:30:00',
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: 'guiltfree/GF_Logo_android_3x',
                            shortDescription: 'options available',
                            fontColor: '#7E808C',
                          },
                        ],
                      },
                      isOpen: true,
                      type: 'F',
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: '',
                                  fontColor: '#7E808C',
                                  iconId: 'guiltfree/GF_Logo_android_3x',
                                  shortDescription: 'options available',
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: 'ITEMS',
                        subHeader: 'AT ₹119',
                      },
                      differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: '--',
                        },
                      },
                      ratingsDisplayPreference:
                        'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                    },
                    analytics: {
                      context: 'seo-data-7037935e-3771-4cc9-8ccd-2b3ddd63653e',
                    },
                    cta: {
                      link: 'https://www.swiggy.com/city/gurgaon/subway-airia-mall-sector-68-rest347900',
                      type: 'WEBLINK',
                    },
                  },
                  {
                    info: {
                      id: '453774',
                      name: "McDonald's",
                      cloudinaryImageId:
                        'RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/018d4fbf-9eda-45c1-a141-6749a5658067_453774.JPG',
                      locality: 'Reach 3 Road',
                      areaName: 'Sector 69',
                      costForTwo: '₹400 for two',
                      cuisines: ['American'],
                      avgRating: 4.4,
                      parentId: '630',
                      avgRatingString: '4.4',
                      totalRatingsString: '3.7K+',
                      sla: {
                        deliveryTime: 49,
                        lastMileTravel: 10.6,
                        serviceability: 'SERVICEABLE',
                        slaString: '45-50 mins',
                        lastMileTravelString: '10.6 km',
                        iconType: 'ICON_TYPE_EMPTY',
                      },
                      availability: {
                        nextCloseTime: '2025-02-21 01:30:00',
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: 'Rxawards/_CATEGORY-Burger.png',
                            description: 'Delivery!',
                          },
                        ],
                      },
                      isOpen: true,
                      type: 'F',
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: 'Delivery!',
                                  imageId: 'Rxawards/_CATEGORY-Burger.png',
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: 'ITEMS',
                        subHeader: 'AT ₹49',
                      },
                      differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: '--',
                        },
                      },
                      ratingsDisplayPreference:
                        'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                    },
                    analytics: {
                      context: 'seo-data-7037935e-3771-4cc9-8ccd-2b3ddd63653e',
                    },
                    cta: {
                      link: 'https://www.swiggy.com/city/gurgaon/mcdonalds-reach-3-road-sector-69-rest453774',
                      type: 'WEBLINK',
                    },
                  },
                  {
                    info: {
                      id: '597962',
                      name: 'Chinese Wok',
                      cloudinaryImageId: 'e0839ff574213e6f35b3899ebf1fc597',
                      locality: 'Sohna Road',
                      areaName: 'Golf Course Extension',
                      costForTwo: '₹250 for two',
                      cuisines: ['Chinese', 'Asian', 'Tibetan', 'Desserts'],
                      avgRating: 4.1,
                      parentId: '61955',
                      avgRatingString: '4.1',
                      totalRatingsString: '901',
                      sla: {
                        deliveryTime: 54,
                        lastMileTravel: 9.7,
                        serviceability: 'SERVICEABLE',
                        slaString: '50-55 mins',
                        lastMileTravelString: '9.7 km',
                        iconType: 'ICON_TYPE_EMPTY',
                      },
                      availability: {
                        nextCloseTime: '2025-02-21 02:00:00',
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: 'F',
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: 'ITEMS',
                        subHeader: 'AT ₹129',
                      },
                      differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: '--',
                        },
                      },
                      ratingsDisplayPreference:
                        'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                    },
                    analytics: {
                      context: 'seo-data-7037935e-3771-4cc9-8ccd-2b3ddd63653e',
                    },
                    cta: {
                      link: 'https://www.swiggy.com/city/gurgaon/chinese-wok-sohna-road-golf-course-extension-rest597962',
                      type: 'WEBLINK',
                    },
                  },
                  {
                    info: {
                      id: '222038',
                      name: 'Chaayos Chai+Snacks=Relax',
                      cloudinaryImageId:
                        'RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/2ce18342-6c04-4ebc-9725-788819ddaa56_222038.JPG',
                      locality: 'AIPL Joy Street',
                      areaName: 'Sector 69',
                      costForTwo: '₹250 for two',
                      cuisines: [
                        'Beverages',
                        'Chaat',
                        'Snacks',
                        'Bakery',
                        'Street Food',
                        'healthy',
                        'Home Food',
                        'Maharashtrian',
                        'Italian',
                        'Desserts',
                      ],
                      avgRating: 4.6,
                      parentId: '281782',
                      avgRatingString: '4.6',
                      totalRatingsString: '2.0K+',
                      sla: {
                        deliveryTime: 45,
                        lastMileTravel: 9.4,
                        serviceability: 'SERVICEABLE',
                        slaString: '45-50 mins',
                        lastMileTravelString: '9.4 km',
                        iconType: 'ICON_TYPE_EMPTY',
                      },
                      availability: {
                        nextCloseTime: '2025-02-21 00:00:00',
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: 'Rxawards/_CATEGORY-Cafe%20&%20Chai.png',
                            description: 'Delivery!',
                          },
                        ],
                      },
                      isOpen: true,
                      type: 'F',
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: 'Delivery!',
                                  imageId:
                                    'Rxawards/_CATEGORY-Cafe%20&%20Chai.png',
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: 'ITEMS',
                        subHeader: 'AT ₹199',
                      },
                      differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: '--',
                        },
                      },
                      ratingsDisplayPreference:
                        'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                    },
                    analytics: {
                      context: 'seo-data-7037935e-3771-4cc9-8ccd-2b3ddd63653e',
                    },
                    cta: {
                      link: 'https://www.swiggy.com/city/gurgaon/chaayos-chai-snacks-relax-aipl-joy-street-sector-69-rest222038',
                      type: 'WEBLINK',
                    },
                  },
                  {
                    info: {
                      id: '767549',
                      name: 'Theobroma',
                      cloudinaryImageId:
                        'RX_THUMBNAIL/IMAGES/VENDOR/2025/2/12/a684fd5c-b32d-4f14-853e-991024217271_767549.jpg',
                      locality: 'SECTOR-67',
                      areaName: 'sohna road',
                      costForTwo: '₹400 for two',
                      cuisines: ['Bakery', 'Desserts'],
                      avgRating: 4.5,
                      parentId: '1040',
                      avgRatingString: '4.5',
                      totalRatingsString: '989',
                      sla: {
                        deliveryTime: 46,
                        lastMileTravel: 9.7,
                        serviceability: 'SERVICEABLE',
                        slaString: '45-50 mins',
                        lastMileTravelString: '9.7 km',
                        iconType: 'ICON_TYPE_EMPTY',
                      },
                      availability: {
                        nextCloseTime: '2025-02-21 02:00:00',
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: 'Rxawards/_CATEGORY-Desserts.png',
                            description: 'Delivery!',
                          },
                        ],
                      },
                      isOpen: true,
                      type: 'F',
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: 'Delivery!',
                                  imageId: 'Rxawards/_CATEGORY-Desserts.png',
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: '15% OFF',
                        discountTag: 'FLAT DEAL',
                      },
                      differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: '--',
                        },
                      },
                      ratingsDisplayPreference:
                        'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                    },
                    analytics: {
                      context: 'seo-data-7037935e-3771-4cc9-8ccd-2b3ddd63653e',
                    },
                    cta: {
                      link: 'https://www.swiggy.com/city/gurgaon/theobroma-sector-67-sohna-road-rest767549',
                      type: 'WEBLINK',
                    },
                  },
                  {
                    info: {
                      id: '578450',
                      name: 'Blue Tokai Coffee Roasters',
                      cloudinaryImageId: '1a0521375f07155eda2f1ed263206831',
                      locality: 'AIPL Joy Street',
                      areaName: 'AIPL Joy Street',
                      costForTwo: '₹600 for two',
                      cuisines: ['Cafe', 'Coffee', 'Beverages'],
                      avgRating: 4.7,
                      parentId: '2682',
                      avgRatingString: '4.7',
                      totalRatingsString: '428',
                      sla: {
                        deliveryTime: 46,
                        lastMileTravel: 9.1,
                        serviceability: 'SERVICEABLE',
                        slaString: '45-50 mins',
                        lastMileTravelString: '9.1 km',
                        iconType: 'ICON_TYPE_EMPTY',
                      },
                      availability: {
                        nextCloseTime: '2025-02-20 22:30:00',
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId:
                              'Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png',
                            description: 'Delivery!',
                          },
                          {
                            imageId: 'Rxawards/_CATEGORY-Cafe%20&%20Chai.png',
                            description: 'Delivery!',
                          },
                        ],
                      },
                      isOpen: true,
                      type: 'F',
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: 'Delivery!',
                                  imageId:
                                    'Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png',
                                },
                              },
                              {
                                attributes: {
                                  description: 'Delivery!',
                                  imageId:
                                    'Rxawards/_CATEGORY-Cafe%20&%20Chai.png',
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: '15% OFF',
                        discountTag: 'FLAT DEAL',
                      },
                      differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: '--',
                        },
                      },
                      ratingsDisplayPreference:
                        'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                    },
                    analytics: {
                      context: 'seo-data-7037935e-3771-4cc9-8ccd-2b3ddd63653e',
                    },
                    cta: {
                      link: 'https://www.swiggy.com/city/gurgaon/blue-tokai-coffee-roasters-aipl-joy-street-rest578450',
                      type: 'WEBLINK',
                    },
                  },
                  {
                    info: {
                      id: '787495',
                      name: 'FreshMenu',
                      cloudinaryImageId:
                        'RX_THUMBNAIL/IMAGES/VENDOR/2025/2/13/ca3273f6-4553-40a1-b589-705aa4b60273_787495.jpg',
                      locality: 'Darbaripur Road',
                      areaName: 'Sector 69',
                      costForTwo: '₹250 for two',
                      cuisines: [
                        'Continental',
                        'Chinese',
                        'Oriental',
                        'Asian',
                        'Healthy Food',
                        'Fast Food',
                        'Indian',
                        'Desserts',
                      ],
                      avgRating: 4.2,
                      parentId: '398',
                      avgRatingString: '4.2',
                      totalRatingsString: '2.3K+',
                      sla: {
                        deliveryTime: 59,
                        lastMileTravel: 10.2,
                        serviceability: 'SERVICEABLE',
                        slaString: '55-60 mins',
                        lastMileTravelString: '10.2 km',
                        iconType: 'ICON_TYPE_EMPTY',
                      },
                      availability: {
                        nextCloseTime: '2025-02-20 23:59:00',
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: 'F',
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: 'ITEMS',
                        subHeader: 'AT ₹59',
                      },
                      differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: '--',
                        },
                      },
                      ratingsDisplayPreference:
                        'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                    },
                    analytics: {
                      context: 'seo-data-7037935e-3771-4cc9-8ccd-2b3ddd63653e',
                    },
                    cta: {
                      link: 'https://www.swiggy.com/city/gurgaon/freshmenu-darbaripur-road-sector-69-rest787495',
                      type: 'WEBLINK',
                    },
                  },
                  {
                    info: {
                      id: '167748',
                      name: 'KFC',
                      cloudinaryImageId:
                        'RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/7b3867db-1cab-4047-99cf-34c9daf73d18_167748.JPG',
                      locality: 'M3M Urbana',
                      areaName: 'sohna road',
                      costForTwo: '₹400 for two',
                      cuisines: ['Burgers', 'Fast Food', 'Rolls & Wraps'],
                      avgRating: 4.1,
                      parentId: '547',
                      avgRatingString: '4.1',
                      totalRatingsString: '6.0K+',
                      sla: {
                        deliveryTime: 47,
                        lastMileTravel: 9.7,
                        serviceability: 'SERVICEABLE',
                        slaString: '45-50 mins',
                        lastMileTravelString: '9.7 km',
                        iconType: 'ICON_TYPE_EMPTY',
                      },
                      availability: {
                        nextCloseTime: '2025-02-21 01:00:00',
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: 'F',
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: 'ITEMS',
                        subHeader: 'AT ₹59',
                      },
                      differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: '--',
                        },
                      },
                      ratingsDisplayPreference:
                        'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                    },
                    analytics: {
                      context: 'seo-data-7037935e-3771-4cc9-8ccd-2b3ddd63653e',
                    },
                    cta: {
                      link: 'https://www.swiggy.com/city/gurgaon/kfc-m3m-urbana-sohna-road-rest167748',
                      type: 'WEBLINK',
                    },
                  },
                  {
                    info: {
                      id: '29924',
                      name: 'Naivedyam',
                      cloudinaryImageId: 'mcyq31epsmqg6803i619',
                      locality: 'Sohna Road',
                      areaName: 'New Sohna Road',
                      costForTwo: '₹300 for two',
                      cuisines: ['South Indian'],
                      avgRating: 4.6,
                      parentId: '2540',
                      avgRatingString: '4.6',
                      totalRatingsString: '17K+',
                      sla: {
                        deliveryTime: 53,
                        lastMileTravel: 10.6,
                        serviceability: 'SERVICEABLE',
                        slaString: '50-55 mins',
                        lastMileTravelString: '10.6 km',
                        iconType: 'ICON_TYPE_EMPTY',
                      },
                      availability: {
                        nextCloseTime: '2025-02-20 22:30:00',
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: 'Rxawards/_CATEGORY-South%20Indian.png',
                            description: 'Delivery!',
                          },
                        ],
                      },
                      isOpen: true,
                      type: 'F',
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: 'Delivery!',
                                  imageId:
                                    'Rxawards/_CATEGORY-South%20Indian.png',
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: '10% OFF',
                        subHeader: 'ABOVE ₹900',
                        discountTag: 'FLAT DEAL',
                      },
                      differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: '4.3',
                          ratingCount: '6.6K+',
                        },
                        source: 'GOOGLE',
                        sourceIconImageId:
                          'v1704440323/google_ratings/rating_google_tag',
                      },
                      ratingsDisplayPreference:
                        'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                    },
                    analytics: {
                      context: 'seo-data-7037935e-3771-4cc9-8ccd-2b3ddd63653e',
                    },
                    cta: {
                      link: 'https://www.swiggy.com/city/gurgaon/naivedyam-sohna-road-new-sohna-road-rest29924',
                      type: 'WEBLINK',
                    },
                  },
                  {
                    info: {
                      id: '787498',
                      name: 'Edesia by Freshmenu',
                      cloudinaryImageId: '334f94f17a371e3e525f714008c851ec',
                      locality: 'Sector 69',
                      areaName: 'Sector 69',
                      costForTwo: '₹150 for two',
                      cuisines: ['Desserts', 'Bakery', 'Fast Food'],
                      avgRating: 4,
                      parentId: '11246',
                      avgRatingString: '4.0',
                      totalRatingsString: '41',
                      sla: {
                        deliveryTime: 60,
                        lastMileTravel: 10.2,
                        serviceability: 'SERVICEABLE',
                        slaString: '60-65 mins',
                        lastMileTravelString: '10.2 km',
                        iconType: 'ICON_TYPE_EMPTY',
                      },
                      availability: {
                        nextCloseTime: '2025-02-20 23:59:00',
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: 'guiltfree/GF_Logo_android_3x',
                            shortDescription: 'brand',
                            fontColor: '#7E808C',
                          },
                        ],
                      },
                      isOpen: true,
                      type: 'F',
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: '',
                                  fontColor: '#7E808C',
                                  iconId: 'guiltfree/GF_Logo_android_3x',
                                  shortDescription: 'brand',
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: '₹125 OFF',
                        subHeader: 'ABOVE ₹249',
                        discountTag: 'FLAT DEAL',
                      },
                      differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: '5.0',
                          ratingCount: '<3',
                        },
                        source: 'GOOGLE',
                        sourceIconImageId:
                          'v1704440323/google_ratings/rating_google_tag',
                      },
                      ratingsDisplayPreference:
                        'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                    },
                    analytics: {
                      context: 'seo-data-7037935e-3771-4cc9-8ccd-2b3ddd63653e',
                    },
                    cta: {
                      link: 'https://www.swiggy.com/city/gurgaon/edesia-by-freshmenu-sector-69-rest787498',
                      type: 'WEBLINK',
                    },
                  },
                  {
                    info: {
                      id: '328911',
                      name: "Nirula's",
                      cloudinaryImageId: 'iwwvggo7atgvlp09n5uh',
                      locality: 'Airia Mall',
                      areaName: 'New Sohna Road',
                      costForTwo: '₹500 for two',
                      cuisines: ['Ice Cream', 'Desserts', 'Beverages'],
                      avgRating: 4.6,
                      veg: true,
                      parentId: '1738',
                      avgRatingString: '4.6',
                      totalRatingsString: '42',
                      sla: {
                        deliveryTime: 53,
                        lastMileTravel: 8.8,
                        serviceability: 'SERVICEABLE',
                        slaString: '50-55 mins',
                        lastMileTravelString: '8.8 km',
                        iconType: 'ICON_TYPE_EMPTY',
                      },
                      availability: {
                        nextCloseTime: '2025-02-20 22:00:00',
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: 'guiltfree/GF_Logo_android_3x',
                            shortDescription: 'options available',
                            fontColor: '#7E808C',
                          },
                        ],
                      },
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: 'F',
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: '',
                                  fontColor: '#7E808C',
                                  iconId: 'guiltfree/GF_Logo_android_3x',
                                  shortDescription: 'options available',
                                },
                              },
                            ],
                          },
                        },
                      },
                      differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: '--',
                        },
                      },
                      ratingsDisplayPreference:
                        'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                    },
                    analytics: {
                      context: 'seo-data-7037935e-3771-4cc9-8ccd-2b3ddd63653e',
                    },
                    cta: {
                      link: 'https://www.swiggy.com/city/gurgaon/nirulas-airia-mall-new-sohna-road-rest328911',
                      type: 'WEBLINK',
                    },
                  },
                  {
                    info: {
                      id: '607898',
                      name: 'Goila Butter Chicken',
                      cloudinaryImageId: '6d8128cc313fcafce468b9c25f83cf82',
                      locality: 'Sohna Road',
                      areaName: 'Sector 69',
                      costForTwo: '₹600 for two',
                      cuisines: [
                        'North Indian',
                        'Biryani',
                        'Kebabs',
                        'Desserts',
                      ],
                      avgRating: 4.4,
                      parentId: '322587',
                      avgRatingString: '4.4',
                      totalRatingsString: '1.5K+',
                      sla: {
                        deliveryTime: 57,
                        lastMileTravel: 11.1,
                        serviceability: 'SERVICEABLE',
                        slaString: '55-60 mins',
                        lastMileTravelString: '11.1 km',
                        iconType: 'ICON_TYPE_EMPTY',
                      },
                      availability: {
                        nextCloseTime: '2025-02-21 02:00:00',
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: 'newg.png',
                            description: 'Gourmet',
                          },
                        ],
                      },
                      isOpen: true,
                      type: 'F',
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: 'Gourmet',
                                  imageId: 'newg.png',
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: '₹125 OFF',
                        subHeader: 'ABOVE ₹249',
                        discountTag: 'FLAT DEAL',
                      },
                      differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: '--',
                        },
                      },
                      ratingsDisplayPreference:
                        'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                    },
                    analytics: {
                      context: 'seo-data-7037935e-3771-4cc9-8ccd-2b3ddd63653e',
                    },
                    cta: {
                      link: 'https://www.swiggy.com/city/gurgaon/goila-butter-chicken-sohna-road-sector-69-rest607898',
                      type: 'WEBLINK',
                    },
                  },
                  {
                    info: {
                      id: '75898',
                      name: 'Salad Days',
                      cloudinaryImageId: 'cfa1123ebf17413dc7d0a80c7361fab3',
                      locality: 'M3M TEE POINT',
                      areaName: 'Sector 66',
                      costForTwo: '₹500 for two',
                      cuisines: ['Salads'],
                      avgRating: 4.6,
                      parentId: '796',
                      avgRatingString: '4.6',
                      totalRatingsString: '7.5K+',
                      sla: {
                        deliveryTime: 44,
                        lastMileTravel: 9.9,
                        serviceability: 'SERVICEABLE',
                        slaString: '40-45 mins',
                        lastMileTravelString: '9.9 km',
                        iconType: 'ICON_TYPE_EMPTY',
                      },
                      availability: {
                        nextCloseTime: '2025-02-20 23:59:00',
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: 'newg.png',
                            description: 'Gourmet',
                          },
                        ],
                      },
                      isOpen: true,
                      type: 'F',
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: 'Gourmet',
                                  imageId: 'newg.png',
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: '40% OFF',
                        subHeader: 'UPTO ₹80',
                      },
                      differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: '--',
                        },
                      },
                      ratingsDisplayPreference:
                        'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                    },
                    analytics: {
                      context: 'seo-data-7037935e-3771-4cc9-8ccd-2b3ddd63653e',
                    },
                    cta: {
                      link: 'https://www.swiggy.com/city/gurgaon/salad-days-m3m-tee-point-sector-66-rest75898',
                      type: 'WEBLINK',
                    },
                  },
                  {
                    info: {
                      id: '578393',
                      name: "Suchali's Artisan Bakehouse",
                      cloudinaryImageId: 'f9f262d0c80a41de4c1a890eb36d1085',
                      locality: 'Joy Street',
                      areaName: 'Joy Street',
                      costForTwo: '₹600 for two',
                      cuisines: ['Bakery', 'Desserts', 'Beverages'],
                      avgRating: 4.6,
                      parentId: '196351',
                      avgRatingString: '4.6',
                      totalRatingsString: '260',
                      sla: {
                        deliveryTime: 47,
                        lastMileTravel: 9.1,
                        serviceability: 'SERVICEABLE',
                        slaString: '45-50 mins',
                        lastMileTravelString: '9.1 km',
                        iconType: 'ICON_TYPE_EMPTY',
                      },
                      availability: {
                        nextCloseTime: '2025-02-20 22:30:00',
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: 'newg.png',
                            description: 'Gourmet',
                          },
                        ],
                      },
                      isOpen: true,
                      type: 'F',
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: 'Gourmet',
                                  imageId: 'newg.png',
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: '15% OFF',
                        discountTag: 'FLAT DEAL',
                      },
                      differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: '--',
                        },
                      },
                      ratingsDisplayPreference:
                        'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                    },
                    analytics: {
                      context: 'seo-data-7037935e-3771-4cc9-8ccd-2b3ddd63653e',
                    },
                    cta: {
                      link: 'https://www.swiggy.com/city/gurgaon/suchalis-artisan-bakehouse-joy-street-rest578393',
                      type: 'WEBLINK',
                    },
                  },
                  {
                    info: {
                      id: '598002',
                      name: 'Big Bowl',
                      cloudinaryImageId:
                        'RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_598002.JPG',
                      locality: 'Sohna Road',
                      areaName: 'Golf Course Extension',
                      costForTwo: '₹250 for two',
                      cuisines: ['Chinese', 'Tibetan', 'Desserts'],
                      avgRating: 4.2,
                      parentId: '434792',
                      avgRatingString: '4.2',
                      totalRatingsString: '612',
                      sla: {
                        deliveryTime: 52,
                        lastMileTravel: 9.7,
                        serviceability: 'SERVICEABLE',
                        slaString: '50-55 mins',
                        lastMileTravelString: '9.7 km',
                        iconType: 'ICON_TYPE_EMPTY',
                      },
                      availability: {
                        nextCloseTime: '2025-02-21 02:00:00',
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: 'F',
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: 'ITEMS',
                        subHeader: 'AT ₹129',
                      },
                      differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: '--',
                        },
                      },
                      ratingsDisplayPreference:
                        'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                    },
                    analytics: {
                      context: 'seo-data-7037935e-3771-4cc9-8ccd-2b3ddd63653e',
                    },
                    cta: {
                      link: 'https://www.swiggy.com/city/gurgaon/big-bowl-sohna-road-golf-course-extension-rest598002',
                      type: 'WEBLINK',
                    },
                  },
                  {
                    info: {
                      id: '577459',
                      name: 'Krispy Kreme - Doughnuts & Coffee',
                      cloudinaryImageId:
                        'RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/86b4c7e5-51f7-4ecd-a0b6-5208056a7e14_577459.JPG',
                      locality: 'Sector 65',
                      areaName: 'Sector 65',
                      costForTwo: '₹400 for two',
                      cuisines: ['Desserts'],
                      avgRating: 4.3,
                      parentId: '570',
                      avgRatingString: '4.3',
                      totalRatingsString: '253',
                      sla: {
                        deliveryTime: 54,
                        lastMileTravel: 10.3,
                        serviceability: 'SERVICEABLE',
                        slaString: '50-55 mins',
                        lastMileTravelString: '10.3 km',
                        iconType: 'ICON_TYPE_EMPTY',
                      },
                      availability: {
                        nextCloseTime: '2025-02-20 23:00:00',
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: 'F',
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: '₹100 OFF',
                        subHeader: 'ABOVE ₹299',
                        discountTag: 'FLAT DEAL',
                      },
                      differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: '4.0',
                          ratingCount: '17',
                        },
                        source: 'GOOGLE',
                        sourceIconImageId:
                          'v1704440323/google_ratings/rating_google_tag',
                      },
                      ratingsDisplayPreference:
                        'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                    },
                    analytics: {
                      context: 'seo-data-7037935e-3771-4cc9-8ccd-2b3ddd63653e',
                    },
                    cta: {
                      link: 'https://www.swiggy.com/city/gurgaon/krispy-kreme-doughnuts-and-coffee-sector-65-rest577459',
                      type: 'WEBLINK',
                    },
                  },
                  {
                    info: {
                      id: '744033',
                      name: 'Barista Coffee',
                      cloudinaryImageId: 'b64bf721e12e7b3df82c832898999c51',
                      locality: 'Sector 67',
                      areaName: 'M3M Urbana',
                      costForTwo: '₹350 for two',
                      cuisines: ['Beverages', 'Snacks'],
                      avgRating: 3.8,
                      parentId: '416281',
                      avgRatingString: '3.8',
                      totalRatingsString: '36',
                      sla: {
                        deliveryTime: 50,
                        lastMileTravel: 9.7,
                        serviceability: 'SERVICEABLE',
                        slaString: '45-50 mins',
                        lastMileTravelString: '9.7 km',
                        iconType: 'ICON_TYPE_EMPTY',
                      },
                      availability: {
                        nextCloseTime: '2025-02-20 23:00:00',
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: 'F',
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: '--',
                        },
                      },
                      ratingsDisplayPreference:
                        'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                    },
                    analytics: {
                      context: 'seo-data-7037935e-3771-4cc9-8ccd-2b3ddd63653e',
                    },
                    cta: {
                      link: 'https://www.swiggy.com/city/gurgaon/barista-coffee-sector-67-m3m-urbana-rest744033',
                      type: 'WEBLINK',
                    },
                  },
                  {
                    info: {
                      id: '296838',
                      name: 'Thalairaj Biryani',
                      cloudinaryImageId: 'dspgvwisdm6cqo7bv7xd',
                      locality: 'Sector 49',
                      areaName: 'New Sohna Road',
                      costForTwo: '₹300 for two',
                      cuisines: [
                        'Andhra',
                        'Biryani',
                        'Hyderabadi',
                        'South Indian',
                        'Indian',
                        'Kebabs',
                        'Snacks',
                        'Beverages',
                      ],
                      avgRating: 4.5,
                      parentId: '433875',
                      avgRatingString: '4.5',
                      totalRatingsString: '5.2K+',
                      sla: {
                        deliveryTime: 53,
                        lastMileTravel: 10.5,
                        serviceability: 'SERVICEABLE',
                        slaString: '50-55 mins',
                        lastMileTravelString: '10.5 km',
                        iconType: 'ICON_TYPE_EMPTY',
                      },
                      availability: {
                        nextCloseTime: '2025-02-21 01:00:00',
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: 'F',
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: '20% OFF',
                        subHeader: 'ABOVE ₹1000',
                        discountTag: 'FLAT DEAL',
                      },
                      differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: '--',
                        },
                      },
                      ratingsDisplayPreference:
                        'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                    },
                    analytics: {
                      context: 'seo-data-7037935e-3771-4cc9-8ccd-2b3ddd63653e',
                    },
                    cta: {
                      link: 'https://www.swiggy.com/city/gurgaon/thalairaj-biryani-sector-49-new-sohna-road-rest296838',
                      type: 'WEBLINK',
                    },
                  },
                  {
                    info: {
                      id: '787496',
                      name: 'Green Cravings',
                      cloudinaryImageId:
                        'RX_THUMBNAIL/IMAGES/VENDOR/2024/8/12/fcb822ef-56ee-42ec-8d11-eda84b5d2773_787496.JPG',
                      locality: 'Darbaripur Road',
                      areaName: 'Sector 69',
                      costForTwo: '₹350 for two',
                      cuisines: ['Healthy Food', 'Grill'],
                      avgRating: 4,
                      parentId: '8660',
                      avgRatingString: '4.0',
                      totalRatingsString: '126',
                      sla: {
                        deliveryTime: 59,
                        lastMileTravel: 10.1,
                        serviceability: 'SERVICEABLE',
                        slaString: '55-60 mins',
                        lastMileTravelString: '10.1 km',
                        iconType: 'ICON_TYPE_EMPTY',
                      },
                      availability: {
                        nextCloseTime: '2025-02-20 23:59:00',
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: 'guiltfree/GF_Logo_android_3x',
                            shortDescription: 'brand',
                            fontColor: '#7E808C',
                          },
                        ],
                      },
                      isOpen: true,
                      type: 'F',
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: '',
                                  fontColor: '#7E808C',
                                  iconId: 'guiltfree/GF_Logo_android_3x',
                                  shortDescription: 'brand',
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: 'ITEMS',
                        subHeader: 'AT ₹124',
                      },
                      differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: '--',
                        },
                      },
                      ratingsDisplayPreference:
                        'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                    },
                    analytics: {
                      context: 'seo-data-7037935e-3771-4cc9-8ccd-2b3ddd63653e',
                    },
                    cta: {
                      link: 'https://www.swiggy.com/city/gurgaon/green-cravings-darbaripur-road-sector-69-rest787496',
                      type: 'WEBLINK',
                    },
                  },
                  {
                    info: {
                      id: '831288',
                      name: 'Pastas By Pizza Hut',
                      cloudinaryImageId: '80ca62f0de020f8cbe39fd034d3325d5',
                      locality: 'M3M Urbana',
                      areaName: 'Golf Course Extension',
                      costForTwo: '₹400 for two',
                      cuisines: ['Pastas'],
                      avgRating: 3.7,
                      parentId: '306806',
                      avgRatingString: '3.7',
                      totalRatingsString: '18',
                      sla: {
                        deliveryTime: 55,
                        lastMileTravel: 9.7,
                        serviceability: 'SERVICEABLE',
                        slaString: '55-60 mins',
                        lastMileTravelString: '9.7 km',
                        iconType: 'ICON_TYPE_EMPTY',
                      },
                      availability: {
                        nextCloseTime: '2025-02-21 01:00:00',
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: 'guiltfree/GF_Logo_android_3x',
                            shortDescription: 'options available',
                            fontColor: '#7E808C',
                          },
                        ],
                      },
                      isOpen: true,
                      type: 'F',
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: '',
                                  fontColor: '#7E808C',
                                  iconId: 'guiltfree/GF_Logo_android_3x',
                                  shortDescription: 'options available',
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: '40% OFF',
                        subHeader: 'UPTO ₹80',
                      },
                      differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: '--',
                        },
                      },
                      ratingsDisplayPreference:
                        'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                    },
                    analytics: {
                      context: 'seo-data-7037935e-3771-4cc9-8ccd-2b3ddd63653e',
                    },
                    cta: {
                      link: 'https://www.swiggy.com/city/gurgaon/pastas-by-pizza-hut-m3m-urbana-golf-course-extension-rest831288',
                      type: 'WEBLINK',
                    },
                  },
                ],
                theme: 'Restaurant_Group_WebView_SEO_PB_Theme',
                widgetType: 'WIDGET_TYPE_POPULAR_BRANDS',
                style: {
                  width: {
                    type: 'TYPE_RELATIVE',
                    value: 0.41111112,
                    reference: 'RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH',
                  },
                  height: {
                    type: 'TYPE_RELATIVE',
                    value: 0.7027027,
                    reference: 'RELATIVE_DIMENSION_REFERENCE_WIDTH',
                  },
                  layoutAlignment: 'LAYOUT_ALIGNMENT_LEFT',
                },
                collectionId: '84124',
              },
            },
          },
        },
      },
    ],
  },
};

const listData =
  a.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

listData.forEach((dataComponent) => {
  const {
    id,
    name,
    locality,
    areaName,
    costForTwo,
    cuisines,
    avgRating,
    sla,
    restaurantOfferPresentationInfo,
    aggregatedDiscountInfoV3,
    isOpen,
  } = dataComponent.info;

  const data = {
    id: id,
    name: name,
    locality: locality,
    areaName: areaName,
    cost: costForTwo,
    cuisines: cuisines,
    rating: avgRating,
    time: sla,
    restaurantOffer: restaurantOfferPresentationInfo,
    discount: aggregatedDiscountInfoV3,
    open: isOpen,
  };

  console.log(data);
});
