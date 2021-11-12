import useSWR from "swr";
import fetcher from "../utils/fetcher";
import { useRouter } from "next/router";

export default function useContent() {
  const { query, isReady } = useRouter();

  // Setting up default values
  if (isReady) {
    if (!query.tag) {
      query.tag = "";
    }

    if (!query.badge) {
      query.badge = "";
    }
  }

  let { data } = useSWR(
    isReady &&
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/content/${query.vertical}/${query.type}?status=active&tags=${query.tag}&specialTags=${query.badge}`,
    fetcher
  );

  // If I have contentId in the path we need to open the
  // modal for a specific content
  let selectedContent = false;
  if (query.contentId && data) {
    for (let i = 0; i < data.length; i++) {
      // If ID doesn't match next
      if (query.contentId !== data[i].SK) continue;

      // Save content and stop loop
      selectedContent = data[i];
      break;
    }
  }

  return {
    isLoading: !data,
    data,
    type: query.type,
    selectedContent,
  };
}
