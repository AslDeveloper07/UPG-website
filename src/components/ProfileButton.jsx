import { CgProfile } from "react-icons/cg";

const ProfileButton = () => {
  return (
    <div className="bg-gray-600 dark:bg-[#0EA5E9] w-[70px] h-[42px] flex justify-center items-center rounded-md">
      <CgProfile size={23} className="text-white" />
    </div>
  );
};

export default ProfileButton;
