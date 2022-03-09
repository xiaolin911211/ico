export const httpGetProducts = async () => {
    const httpRequestUrl = "http://localhost:3000/icobakery/getproducts";
    try {
        const response = await fetch(httpRequestUrl, {method: "GET"});
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
};
