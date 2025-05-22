import Header from "../components/Header";
import MyStacks from "../components/MyStacks";
import MyProject from "../components/MyProject"
import '@fontsource/poppins/400.css'; //Normal
import '@fontsource/poppins/700.css'; //Bold



function Home() {
    return (
        <div className="space-y-9 px-4 lg:px-32">
            <Header />
            <MyStacks />
            <MyProject />
        </div>
    )
}

export default Home;