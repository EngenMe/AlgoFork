import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

interface Props {
  username: string;
  avatar: string;
}

const UserAvatar = ({ username, avatar }: Props) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const bucketUrl =
      process.env.NEXT_PUBLIC_S3_BUCKET_URL ||
      "https://my-bucket.s3.amazonaws.com";

    const fetchImage = async () => {
      try {
        const response = await fetch(`${bucketUrl}/avatars/${avatar}.webp`);
        if (response.ok) {
          setImageUrl(`${bucketUrl}/avatars/${avatar}.webp`);
        } else {
          setImageUrl(null);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setImageUrl(null);
      }
    };

    fetchImage();
  }, [avatar]);

  return (
    <div className="flex justify-center items-center gap-4">
      <Avatar>
        <AvatarImage
          src={imageUrl || undefined}
          alt="User avatar"
          className="cursor-pointer hover:opacity-75 shadow-lg transition-opacity duration-200"
        />
        <AvatarFallback className="font-semibold">
          {username.substring(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default UserAvatar;
