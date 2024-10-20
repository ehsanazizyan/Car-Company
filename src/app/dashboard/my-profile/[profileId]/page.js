import Profile from "@/models/profile";
import AddProfilePage from "@/template/AddProfilePage";
import ConnectDB from "@/utils/connectDB";

async function ProfileEdit({ params }) {
  await ConnectDB();
  const _id = params.profileId;
  const profile = await Profile.findOne({ _id });

  return (
    <div>
      <AddProfilePage cardId={JSON.parse(JSON.stringify(profile))} />
    </div>
  );
}
export default ProfileEdit;
