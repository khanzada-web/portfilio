/** Length of the " | Mussawar Hayat" suffix added by the root title template. */
const TITLE_SUFFIX_LENGTH = ' | Mussawar Hayat'.length;

/** Roughly what Google shows before truncating, in characters. */
const TITLE_LIMIT = 60;
const DESCRIPTION_LIMIT = 160;

/**
 * Trims a meta description to fit search snippets, cutting at a word boundary and adding
 * an ellipsis. Short text is returned unchanged.
 */
export function clampDescription(text: string, max: number = DESCRIPTION_LIMIT): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > max * 0.6 ? lastSpace : cut.length).replace(/[\s,;:.—-]+$/, '')}…`;
}

/**
 * Page title for templated routes. When the title plus the site suffix would be truncated,
 * use it on its own (`absolute`) so the topic words stay visible in search results.
 */
export function pageTitle(title: string): string | { absolute: string } {
  return title.length + TITLE_SUFFIX_LENGTH > TITLE_LIMIT ? { absolute: title } : title;
}
