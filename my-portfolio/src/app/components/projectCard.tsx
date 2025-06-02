// // components/ProjectCard.tsx
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import Link from "next/link";

// export function ProjectCard({ title,techStack,repo, description,githubLink }: {
//   title: string;
//   description: string;
//   techStack: string;
//   repo?: string;
//   githubLink?: string;
// }) {
//   return (
//     <Card className="w-full sm:w-[350px] shadow-xl transition hover:scale-[1.02]">
//       <CardHeader>
//         <CardTitle>{title}</CardTitle>
//         <CardDescription>{techStack}</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <p>{description}</p>
//       </CardContent>
//       <CardFooter className="flex justify-between">
//         {repo && (
//           <Link href={repo} target="_blank" className="text-sm text-gray-700 underline hover:text-black">
//             GitHub
//           </Link>
//         )}
//         {githubLink && (
//           <Link href={githubLink} target="_blank" className="text-sm text-gray-700 underline hover:text-black">
//             GitHub
//           </Link>
//         )}
//       </CardFooter>
//     </Card>
//   );
// }
