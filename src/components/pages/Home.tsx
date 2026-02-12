import { GlobalLayout } from "../../components/common/GlobalLayout";
import Aside from "../aside/Aside";
import MainContent from "../main-content/MainContent";

const Home = () => {
  return (
    <GlobalLayout>
      <Aside />
      <MainContent />
    </GlobalLayout>
  );
};

export default Home;
