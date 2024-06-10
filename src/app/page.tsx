import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Roles, Users } from "@kinde/management-api-js";
export default async function Home() {
  const { getPermission } = getKindeServerSession();
  const permission = await getPermission("create:post");

  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-4xl font-bold mb-5">welcome to my blog</h1>
      <p className="max-w-[750px] mx-auto leading-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate culpa sit veritatis
        nesciunt quidem, exercitationem necessitatibus quisquam aut! Adipisci dignissimos
        accusantium alias quidem hic vitae quibusdam rerum nesciunt iure quis.
      </p>
      {permission?.isGranted ? <h1>Admin</h1> : <h1>User</h1>}
    </main>
  );
}
