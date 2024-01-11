import "../../App.css";
import { useState } from "react";
import MultiStepProgressBar from "../../components/MultiStepProgressBar/MultiStepProgressBar";
import Logo from "../Logo/Logo";
import PageOne from "./PageOne/PageOne";
import PageTwo from "./PageTwo/PageTwo";
import PageThree from "./PageThree/PageThree";
import PageFour from "./PageFour/PageFour";
import '../../components/Containers/styles.css'

function MultiStepPage() {
    const [page, setPage] = useState("pageone");

    const nextPage = (page: string) => {
        setPage(page);
    };

    const goToPageNumber = (pageNumber: string) => {
        switch (pageNumber) {
            case "1":
                setPage("pageone");
                break;
            case "2":
                setPage("pagetwo");
                break;
            case "3":
                setPage("pagethree");
                break;
            case "4":
                alert("Ooops! Seems like you did not fill the form.");
                break;
            default:
                setPage("1");
        }
    };

    return (
        <div className="App solid-container">
            <Logo />
            <MultiStepProgressBar page={page} onPageNumberClick={goToPageNumber} />
            {
                {
                    pageone: <PageOne onButtonClick={() => { nextPage('pagetwo') }} />,
                    pagetwo: <PageTwo onButtonClick={() => { nextPage('pagethree') }} />,
                    pagethree: <PageThree onButtonClick={() => { nextPage('pagefour') }} />,
                    pagefour: <PageFour />,
                }[page]
            }
        </div>
    );
}

export default MultiStepPage;