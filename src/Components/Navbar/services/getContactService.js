import http from "./httpService";

export default function getContactServise() {
  return http.get("/contacts");
}
