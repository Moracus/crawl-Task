import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKENDURL,
});

export const addbook = async (data) => await API.post("/books", data);
export const getBooks = async () => await API.get("/books");
export const deleteBooks = async (id) =>
  await API.delete(`/books/delete/${id}`);
export const updateBooks = async (data, id) =>
  await API.put(`/books/update/${id}`, data);
