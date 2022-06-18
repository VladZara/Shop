import {Icon} from "@iconify/react/dist/iconify";

const FooterBottom = () => {
    return(
        <div className="footerBottom mx-0 w-100">
            <div className="d-flex justify-content-around align-content-center">
                <p className="list-font ma d-flex align-items-center m-0"> Copyright 2032 all rights reserved </p>
                <div className=" d-flex ">
                    <Icon icon="fa6-brands:stripe"  width="40" height="40" className="mx-1"/>
                    <Icon icon="fontisto:paypal"  width="40" height="40" className="mx-1"/>
                    <Icon icon="cib:visa"  width="40" height="40" className="mx-1"/>
                    <Icon icon="brandico:mastercard"  width="40" height="40" className="mx-1"/>
                    <Icon icon="simple-icons:discover"  width="40" height="40" className="mx-1"/>
                    <Icon icon="fontisto:american-express"  width="40" height="40" className="mx-1"/>
                </div>
                <p className="list-font ma d-flex align-items-center m-0 justify-content-end"> Designed by <b className="mx-1"> our people</b></p>
            </div>
        </div>
    )
}
export default FooterBottom
