import Handmade_craft_1 from "../assets/Product_Image_and_Ref/Handmade_craft_1.jpeg"
import Handmade_craft_2 from "../assets/Product_Image_and_Ref/Handmade_craft_2.jpeg"
import Handmade_craft_3 from "../assets/Product_Image_and_Ref/Handmade_craft_3.jpeg"
import Handmade_craft_4 from "../assets/Product_Image_and_Ref/Handmade_craft_4.jpeg"
import Handmade_craft_5 from "../assets/Product_Image_and_Ref/Handmade_craft_5.jpeg"
import Handmade_craft_6 from "../assets/Product_Image_and_Ref/Handmade_craft_6.jpeg"

import SeasonalFruits_1 from "../assets/Product_Image_and_Ref/Pahadi_Malta.jpg"
import SeasonalFruits_2 from "../assets/Product_Image_and_Ref/Pahadi_Nimbu.webp"

const productData = [
    {
        "category": "handmadeCrafts",
        "items": [
            {
                "id": 1,
                "name": "basket",
                "detail": "Lorem ipsum dolor consectetur adipisicing elit, psum.",
                "price": "Rs:203",
                "image": Handmade_craft_1,
                "slug": "handmade_craft_1"
            },
            {
                "id": 2,
                "name": "big basket",
                "detail": "Lorem ipsum dolor consectetur adipisicing elit, psum.",
                "price": "Rs:213",
                "image": Handmade_craft_2,
                "slug": "handmade_craft_2"
            },
            {
                "id": 3,
                "name": "peacock",
                "detail": "Lorem ipsum dolor consectetur adipisicing elit, psum.",
                "price": "Rs:233",
                "image": Handmade_craft_3,
                "slug": "handmade_craft_3"
            },
            {
                "id": 4,
                "name": "basket",
                "detail": "Lorem ipsum dolor consectetur adipisicing elit, psum.",
                "price": "Rs:2432",
                "image":Handmade_craft_4,
                "slug": "handmade_craft_4",
            },
            {
                "id": 5,
                "name": "temple",
                "detail": "Lorem ipsum dolor consectetur adipisicing elit, psum.",
                "price": "Rs:432",
                "image":Handmade_craft_5,
                "slug": "handmade_craft_5",
            },
            {
                "id": 6,
                "name": "more basket",
                "detail": "Lorem ipsum dolor consectetur adipisicing elit, psum.",
                "price": "Rs:332",
                "image":Handmade_craft_6,
                "slug": "handmade_craft_6",
            },
        ]
    },
    {
        "category":"seasonalFruits",
        "items":[
            {
                "id": 1,
                "name": "pahadi malta",
                "detail": "Lorem ipsum dolor consectetur adipisicing elit, psum.",
                "price": "Rs:132",
                "image":SeasonalFruits_1,
                "slug": "seasonalFruits_1",
            },
            {
                "id": 2,
                "name": "pahadi nimbu",
                "detail": "Lorem ipsum dolor consectetur adipisicing elit, psum.",
                "price": "Rs:332",
                "image":SeasonalFruits_2,
                "slug": "seasonalFruits_1",
            }
        ]
    },{
        "category":"pahadiMilletes",
        "items":[
            {},{}
        ]
    }
]


export default productData