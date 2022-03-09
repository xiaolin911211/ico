import ImageDisplay from "../components/ImageDisplay";
import React, {useEffect, useState} from "react";
const testdata = [{
    'name':'cake',
    'img':'cakeimg',
    'link': 'https://res.cloudinary.com/dcsd2ehxw/image/upload/v1645974719/Ico-Bakery/TIramisu_Lava_tjs0wr.jpg'
},
    {
        'name':'cake2',
        'img':'cakeimg2',
        'link': 'https://res.cloudinary.com/dcsd2ehxw/image/upload/v1645974719/Ico-Bakery/TIramisu_Lava_tjs0wr.jpg'
    }];
const CakePage = () => {
    console.log("load ContactPage");
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        // setProductList(data.filter((tag, index, array) => array.findIndex(t => t.name === tag.name) === index));
        setProductList(testdata);
    }, []);
    return (
        <ImageDisplay productList = {productList}/>
    );
};
export default CakePage;
