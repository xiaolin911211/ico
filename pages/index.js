import React from "react";
import Image from "react-bootstrap/Image";
import axios from "axios";

const Index = () => {

    return (
        <div>
            <Image src="https://res.cloudinary.com/dcsd2ehxw/image/upload/v1646195812/Ico-Bakery/banner_lqjhd5.jpg"
                style={
                    {
                        height: "auto",
                        width: '100%',
                        marginTop: '150px'
                    }
                }/>
            <p>
                Since 1968, Caldense Bakery has been a leading supplier of the finest European Pastries and Breads to the GTA and surrounding areas. Caldense Bakery continues the tradition of the Portuguese Custard Tart (Pastel de Nata). History tells us this recipe started in the “Jeronimos” Convent in Lisbon, Portugal circa 1830. We are committed to following the same century old methods in the preparation of our Portuguese Custards. Our firm dedication to quality and tradition has earned us the hallmark of being the ” Home of Portuguese Custard”. We never compromise, from the ingredients we select, to the packaging we use, to our community support. Visit any of our locations and experience for yourself the ambiance found only at Caldense Bakery.
            </p>
        </div>
    );
};

// export const getStaticProps = async () => {
//     const { data } = await axios.get(`http://localhost:3000/icobakery/getproducts`);
//     return {
//         props: {
//             data
//         }
//     };
// };
export default Index;
