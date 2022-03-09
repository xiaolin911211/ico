import {React} from "react";
import Header from "./NavHeader";
export default function Layout({children}) {

    return (<>
        <header>
            <Header/>
        </header>
        <main>
            <section> {children}</section>
        </main>
    </>);
}
