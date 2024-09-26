import type { Book } from "../book.model";

enum BookStatus {
  loading = "loading",
  pendings = "pending",
  error = "error",
  success = "success"
}

export interface BookState {
  books: Book[]
  error: string | null
  status: BookStatus
}