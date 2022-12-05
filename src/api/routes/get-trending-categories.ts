import axios from "axios";
import ApiUtils from "@/api/ApiUtils";

export default function () {
  const url = ApiUtils.baseUrlAssembly() + "categories";
  return axios.get(url, {
    params: {
      ...ApiUtils.baseParams,
    },
  });
}
