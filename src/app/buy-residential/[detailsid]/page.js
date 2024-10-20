import Profile from "@/models/profile";
import DetailsPage from "@/template/DetailsPage";
import ConnectDB from "@/utils/connectDB";

async function DetailsId({ params: { detailsid } }) {
  await ConnectDB();
  const profiles = await Profile.findOne({ _id: detailsid });
  if (!profiles) return <h3>مشکلی در سرور رخ داده بعدا امتحان کنید</h3>;

  return <DetailsPage data={profiles} />;
}
export default DetailsId;
