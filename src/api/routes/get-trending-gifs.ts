import axios from "axios";
import ApiUtils from "@/api/ApiUtils";

export default function () {
  const url = ApiUtils.baseUrlAssembly() + "featured";
  return axios.get(url, {
    params: {
      ...ApiUtils.baseParams,
      limit: 50,
      media_filter: ["gif", "gifpreview"],
    },
  });
}
