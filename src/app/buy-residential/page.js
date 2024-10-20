import Profile from "@/models/profile";
import BuyResidentialsPage from "@/template/BuyResidentialsPage";
import ConnectDB from "@/utils/connectDB";

async function BuyResidential({ searchParams }) {
    try {
        await ConnectDB();
        const data = await Profile.find({ published: true }).select("-userId");

        return <BuyResidentialsPage data={data} searchParams={searchParams} />;
    } catch (error) {
        console.log(error);
    }
}
export default BuyResidential;
