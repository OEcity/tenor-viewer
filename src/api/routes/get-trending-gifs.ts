import axios from "axios";
import ApiUtils from "@/api/ApiUtils";

export default function (position?: string) {
  const url = ApiUtils.baseUrlAssembly() + "featured";
  return axios.get(url, {
    params: {
      ...ApiUtils.baseParams,
      pos: position,
      limit: 50,
      media_filter: ["gif", "gifpreview"].toString(),
    },
  });
}
