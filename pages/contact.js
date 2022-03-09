const ContactPage = () => {
    console.log("load ContactPage");
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
    return (<>
        <div style={{ marginTop: '150px'}}>
            <div>
                <h2>Business Hour</h2>
                <p>Monday - Sunday</p>
                <p>8AM - 5PM</p>
            </div>
            <div>
                <h2>Phone Number</h2>
                416-111-1111
            </div>
            <div>
                <h2>Instagram  <img style={{width : "5%", height: "5%"}} src="/instagram.png" /></h2>
                ico-bakery
            </div>
            <div>
                <h2>Wechat  <img style={{width : "5%", height: "5%"}} src="/wechat.png" /></h2>
                <img style={{width : "80%", height: "80%"}} src="https://res.cloudinary.com/dcsd2ehxw/image/upload/v1646197012/Ico-Bakery/qrcode_zilam4.jpg"></img>
            </div>
        </div>
    </>);
};
export default ContactPage;
