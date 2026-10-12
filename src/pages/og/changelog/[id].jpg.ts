// One social card per lab entry: /og/changelog/<id>.jpg (static, built once).
import { CHANGELOG, entryId, type Entry } from "../../../data/changelog";
import { entryCard } from "../../../og/cards";

export function getStaticPaths() {
  return CHANGELOG.map((entry) => ({ params: { id: entryId(entry) }, props: { entry } }));
}

export const GET = ({ props }: { props: { entry: Entry } }) => entryCard(props.entry);
