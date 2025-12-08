import React from "react";
import Header from "~/components/header";
import ProjectHolder from "~/components/classprojects/projectHolder";
import Footer from "~/components/footer";

export const metadata = {
    title: "Classes",
    description: "Classes page",
};

export default function ClassesPage() {
    return (
        <div className="bg-blue-200 min-h-screen">
            <Header/>
            <ProjectHolder/>
            <div className={"h-32"}></div>
            <Footer />
        </div>
    );
}
