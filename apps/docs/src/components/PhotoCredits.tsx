import { PHOTO_CREDITS, type PhotoCredit } from "../lib/photos";

export function PhotoCredits({
  files,
}: {
  files?: PhotoCredit["file"][];
}) {
  const credits = files
    ? PHOTO_CREDITS.filter((credit) => files.includes(credit.file))
    : PHOTO_CREDITS;

  return (
    <aside className="not-prose mt-10 border-t border-border pt-4">
      <p className="nvg-uppercase text-muted-foreground m-0 mb-2">Photography credits</p>
      <p className="m-0 mb-3 text-xs text-muted-foreground">
        License-safe stock from Unsplash and Pexels. Not scraped brand campaigns. Example data only.
      </p>
      <ul className="m-0 list-none space-y-1 p-0 text-xs text-muted-foreground">
        {credits.map((credit) => (
          <li key={credit.file}>
            {credit.description} —{" "}
            <a href={credit.href} className="text-primary underline-offset-2 hover:underline">
              {credit.source}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
