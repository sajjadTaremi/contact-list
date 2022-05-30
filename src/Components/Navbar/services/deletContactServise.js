import http from "./httpService";

export default function deletOneContact(id) {
  return http.delete(`/contacts/${id}`);
}
