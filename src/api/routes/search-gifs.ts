import axios from "axios";
import ApiUtils from "@/api/ApiUtils";

export default function (searchString: string, position?: string) {
  const url = ApiUtils.baseUrlAssembly() + "search";
  return axios.get(url, {
    params: {
      ...ApiUtils.baseParams,
      q: searchString,
      pos: position,
      limit: 50,
    },
  });
}
