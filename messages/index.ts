import fs from "fs";
import path from "path";

export async function getMessages(locale: string) {
  const namespaces = [
    "nav",
    "hero",
    "partners",
    "about",
    "products",
    "programmingLanguages",
    "login",
  ];
  let mergedMessages: Record<string, string> = {};

  for (const ns of namespaces) {
    const filePath = path.resolve(
      process.cwd(),
      `messages/${locale}/${ns}.json`
    );
    if (fs.existsSync(filePath)) {
      const fileContents = await import(`./${locale}/${ns}.json`);
      const namespaceMessages = fileContents.default || fileContents;
      mergedMessages = { ...mergedMessages, ...namespaceMessages };
    }
  }

  return mergedMessages;
}
